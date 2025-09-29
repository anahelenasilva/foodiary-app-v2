import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Alert, TextInput } from 'react-native';
import { ISignInBottomSheet } from './ISignInBottomSheet';

export function useSignInBottomSheetController(ref: React.Ref<ISignInBottomSheet>) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { bottom } = useSafeAreaInsets();
  const passwordInputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetModalRef.current?.present(),
  }), []);

  function handleSubmit() {
    Alert.alert('Enviando dados do form');
  }

  return {
    bottomSheetModalRef,
    bottom,
    passwordInputRef,
    handleSubmit,
  };
}
