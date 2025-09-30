import { ChevronLeftIcon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { useOnboarding } from '../../context/useOnboarding';
import { styles } from './styles';

export function OnboardingHeader() {
  const { top } = useSafeAreaInsets();
  const { previousStep } = useOnboarding();

  return (
    <SafeAreaView>
      <View style={[styles.container, { marginTop: top }]}>
        <Button size='icon' variant='ghost' onPress={previousStep}>
          <ChevronLeftIcon size={20} color={theme.colors.black[700]} />
        </Button>

        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarForeground}>

          </View>
        </View>

        <View style={styles.rightActionPlaceholder} />
      </View>
    </SafeAreaView>
  );
}
