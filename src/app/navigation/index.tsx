import { useAuth } from '@app/contexts/AuthContext/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export function Navigation() {
  const { signedIn } = useAuth();

  return (
    <NavigationContainer>
      {!signedIn && <AuthStack />}
      {signedIn && <AppStack />}
    </NavigationContainer>
  );
}
