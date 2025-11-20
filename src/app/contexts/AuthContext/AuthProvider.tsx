import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useAccount } from '@app/hooks/queries/useAccount';
import { AuthTokensManager } from '@app/lib/AuthTokensManager';
import { AuthService } from '@app/services/AuthService';
import { Service } from '@app/services/Service';
import { AuthContext } from '.';

SplashScreen.preventAutoHideAsync();

interface ISetupParams {
  accessToken: string;
  refreshToken: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { account, loadAccount } = useAccount({ enabled: false });
  const [isReady, setIsReady] = useState(false);

  const setupAuth = useCallback(async (tokens: ISetupParams) => {
    Service.setAuthToken(tokens.accessToken);
    await loadAccount();
    SplashScreen.hideAsync();
    setIsReady(true);
  }, []);

  useLayoutEffect(() => {
    async function load() {
      const tokens = await AuthTokensManager.load();

      if (!tokens) {
        setIsReady(true);
        SplashScreen.hideAsync();
        return;
      }

      await setupAuth(tokens);
    }

    load();
  }, [loadAccount]);

  const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
    const tokens = await AuthService.signIn(payload);
    await setupAuth(tokens);
    await AuthTokensManager.save(tokens);
  }, []);

  const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
    const tokens = await AuthService.signUp(payload);
    await setupAuth(tokens);
    await AuthTokensManager.save(tokens);
  }, []);

  const signOut = useCallback(async () => {
    await AuthTokensManager.clear();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ signedIn: !!account, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
