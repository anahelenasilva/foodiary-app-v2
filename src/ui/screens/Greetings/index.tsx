
import React from 'react';
import { ImageBackground } from 'react-native';

import greetingsBg from '@ui/assets/greetings-bg/image.jpg';

import { AppText } from '@ui/components/AppText';
import { styles } from './styles';

export function Greetings() {
  return (
    <ImageBackground
      source={greetingsBg}
      resizeMode='cover'
      style={styles.container}
    >
      <AppText>Hello</AppText>
    </ImageBackground>
  );
}
