import { View } from 'react-native';

import { AppText } from '@ui/components/AppText';
import { OnboardingStack } from '@ui/screens/Onboarding/OnboardingStack';
import { OnboardingProvider } from './context/OnboardingProvider';

export function Onboarding() {
  return (
    <OnboardingProvider>
      <View style={{ flex: 1 }}>
        <AppText size="3xl" weight="semiBold">Onboarding Screen</AppText>
        <OnboardingStack />
      </View>
    </OnboardingProvider>
  );
}
