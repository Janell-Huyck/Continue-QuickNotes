import { StyleSheet, Platform, ViewStyle, TextStyle } from 'react-native';

export interface CommonStyles {
  noteCard: ViewStyle;
  noteTitle: TextStyle;
  noteContent: TextStyle;
  container: ViewStyle;
  title: TextStyle;
  link: ViewStyle;
  linkText: TextStyle;
}

const commonStyles: CommonStyles = StyleSheet.create({
  noteCard: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteContent: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default commonStyles;
