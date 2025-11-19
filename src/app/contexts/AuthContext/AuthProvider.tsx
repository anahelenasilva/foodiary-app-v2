import { AuthService } from '@app/services/AuthService';
import React, { useCallback, useState } from 'react';
import { AuthContext } from '.';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = useCallback(async (payload: AuthService.SignInPayload) => {
    await AuthService.signIn(payload);
    setSignedIn(true);
  }, []);

  const signUp = useCallback(async (payload: AuthService.SignUpPayload) => {
    await AuthService.signUp(payload);
  }, []);

  const signOut = useCallback(async () => {
    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
