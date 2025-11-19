import { useAuth } from '@app/contexts/AuthContext/useAuth';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import React from 'react';
import { View } from 'react-native';

export function Home() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppText>Home</AppText>
      <Button onPress={signOut}>Sair</Button>
    </View>
  );
}
