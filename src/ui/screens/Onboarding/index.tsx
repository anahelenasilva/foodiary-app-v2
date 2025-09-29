import { View } from 'react-native';

import { AppText } from '@ui/components/AppText';

export function Onboarding() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText size="3xl" weight="semiBold">Onboarding Screen</AppText>
    </View>
  );
}
