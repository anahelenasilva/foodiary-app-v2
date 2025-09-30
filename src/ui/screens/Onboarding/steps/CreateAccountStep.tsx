import { View } from 'react-native';

import { AppText } from '@ui/components/AppText';

export function CreateAccountStep() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText size="3xl" weight="semiBold">CreateAccountStep</AppText>
    </View>
  );
}
