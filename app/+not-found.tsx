import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { Link, Stack } from 'expo-router';
import { darkTheme, lightTheme } from './styles/theme';
import commonStyles from './styles/common';

export default function NotFoundScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={[commonStyles.container, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[commonStyles.title, theme.text]}>
          This screen doesn't exist.
        </Text>
        <Link href="/" style={commonStyles.link}>
          <Text style={[commonStyles.linkText, theme.text]}>
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}
