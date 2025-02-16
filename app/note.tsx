import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'react-native'; 

export default function NoteScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { note } = useLocalSearchParams();
  const [text, setText] = useState(note ? JSON.parse(note).text : '');

  const saveNote = async () => {
    let notes = JSON.parse(await AsyncStorage.getItem('notes')) || [];
    notes.push({ text });
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: colorScheme === "dark" ? "#111" : "white" }}>
      {/* ✅ Ensure all raw text is inside <Text> */}
      <Text style={{ color: colorScheme === 'dark' ? "white" : "black", fontSize: 20 }}>📝 Edit Note</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Write a note..."
        placeholderTextColor={colorScheme === 'dark' ? "#bbb" : "#888"}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          color: colorScheme === 'dark' ? "white" : "black",
          backgroundColor: colorScheme === 'dark' ? "#333" : "white",
          borderColor: colorScheme === 'dark' ? "#555" : "#ccc",
        }}
        autoFocus={true}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
}
