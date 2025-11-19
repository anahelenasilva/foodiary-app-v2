import { AuthTokensManager } from '@app/lib/AuthTokensManager';
import { AuthService } from '@app/services/AuthService';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { AuthContext } from '.';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  useLayoutEffect(() => {
    async function load() {
      const tokens = await AuthTokensManager.load();

      setSignedIn(!!tokens);
    }

    load();
  }, []);

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
