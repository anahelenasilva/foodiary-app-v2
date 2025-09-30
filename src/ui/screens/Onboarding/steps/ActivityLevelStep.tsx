import { View } from 'react-native';

import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { useOnboarding } from '../context/useOnboarding';

export function ActivityLevelStep() {
  const { currentStepIndex, nextStep, previousStep } = useOnboarding();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText size="3xl" weight="semiBold">ActivityLevelStep</AppText>

      <View>
        <Button onPress={previousStep}>Voltar</Button>
        <AppText>{currentStepIndex}</AppText>
        <Button onPress={nextStep}>Avançar</Button>
      </View>
    </View>
  );
}
