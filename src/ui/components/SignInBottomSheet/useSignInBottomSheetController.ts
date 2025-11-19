import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useImperativeHandle, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuth } from '@app/contexts/AuthContext/useAuth';
import { ISignInBottomSheet } from './ISignInBottomSheet';
import { signInSchema } from './schema';

export function useSignInBottomSheetController(ref: React.Ref<ISignInBottomSheet>) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();
  const passwordInputRef = useRef<TextInput>(null);
  const { signIn } = useAuth();

  const form = useForm({
    resolver: zodResolver(signInSchema),
  });

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetModalRef.current?.present(),
  }), []);

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn(data);
    } catch {
      Alert.alert('Oops!', 'As credenciais informadas são inválidas');
    }
  });

  return {
    bottomSheetModalRef,
    bottom,
    passwordInputRef,
    form,
    handleSubmit,
  };
}
