import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from './theme';

export function App() {
  const [areFontsLoaded] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
  });

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: theme.fontSize['3xl'], fontFamily: theme.fontFamily.sans.semiBold }}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lime[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
