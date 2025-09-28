
import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import greetingsBg from '@ui/assets/greetings-bg/image.jpg';
import { Button } from '@ui/components/Button';
import { Logo } from '@ui/components/Logo';

import { styles } from './styles';

export function Greetings() {
  return (
    <ImageBackground
      source={greetingsBg}
      resizeMode='cover'
      style={styles.container}
    >
      <SafeAreaView>
        <Logo />
        <Button>
          {/* <Button disabled size='icon' variant='secondary'></Button> */}
          Criar minha conta
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
}
