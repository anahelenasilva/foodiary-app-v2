import { ChevronLeftIcon } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';

import { useOnboarding } from '../../context/useOnboarding';
import { TOTAL_STEPS } from '../../steps';
import { styles } from './styles';

export function OnboardingHeader() {
  const { top } = useSafeAreaInsets();
  const { previousStep, currentStepIndex } = useOnboarding();

  const widthAnimationRef = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(widthAnimationRef.current, {
      toValue: (currentStepIndex + 1) * 100 / TOTAL_STEPS,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentStepIndex]);

  return (
    <SafeAreaView>
      <View style={[styles.container, { marginTop: top }]}>
        <Button size='icon' variant='ghost' onPress={previousStep}>
          <ChevronLeftIcon size={20} color={theme.colors.black[700]} />
        </Button>

        <View style={styles.progressBarBackground}>
          <Animated.View style={[
            styles.progressBarForeground,
            {
              width: widthAnimationRef.current.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}>

          </Animated.View>
        </View>

        <View style={styles.rightActionPlaceholder} />
      </View>
    </SafeAreaView>
  );
}
