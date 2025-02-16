import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useFocusEffect } from 'expo-router';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen() {
  const [notes, setNotes] = useState([]);
  const router = useRouter();
  const { colors } = useTheme();

  const loadNotes = async () => {
    const savedNotes = await AsyncStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    } else {
      setNotes([]);
    }
  };

  // Reload notes every time the screen comes into focus.
  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [])
  );

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: colors.background }}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: 'note',
                params: { note: JSON.stringify(item) },
              })
            }
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text style={{ fontSize: 16, color: colors.text }}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Add Note"
        onPress={() => router.push('note')}
        color={colors.primary}
      />
    </View>
  );
}
