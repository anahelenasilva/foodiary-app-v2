import { AppText } from '@ui/components/AppText';
import React from 'react';
import { View } from 'react-native';

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppText>Home</AppText>
    </View>
  );
}
