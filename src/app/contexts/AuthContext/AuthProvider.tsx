import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useAccount } from '@app/hooks/queries/useAccount';
import { AuthTokensManager } from '@app/lib/AuthTokensManager';
import { AuthService } from '@app/services/AuthService';
import { Service } from '@app/services/Service';
import { AuthContext } from '.';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const { account, loadAccount } = useAccount({ enabled: false });

  console.log({ account });

  useLayoutEffect(() => {
    async function load() {
      const tokens = await AuthTokensManager.load();

      if (!tokens) {
        setSignedIn(false);
        return;
      }

      Service.setAuthToken(tokens.accessToken);
      await loadAccount();
      setSignedIn(true);
    }

    load();
  }, [loadAccount]);

  const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
    const tokens = await AuthService.signIn(payload);

    await AuthTokensManager.save(tokens);

    setSignedIn(true);
  }, []);

  const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
    const tokens = await AuthService.signUp(payload);

    await AuthTokensManager.save(tokens);
  }, []);

  const signOut = useCallback(async () => {
    setSignedIn(false);
    await AuthTokensManager.clear();
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
