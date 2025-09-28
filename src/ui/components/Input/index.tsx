import { theme } from '@ui/styles/theme';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native';

import { VariantProps } from '@ui/styles/utils/createVariants';
import { useState } from 'react';
import { inputStyles } from './styles';

type BaseTextInputProps = Omit<React.ComponentProps<typeof TextInput>, 'readOnly'>;

export interface IInputProps extends BaseTextInputProps {
  error?: boolean;
  disabled?: boolean;
}

export function Input({
  style,
  error,
  disabled,
  onFocus,
  onBlur,
  ...props
}: IInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  function getInputStatus(): VariantProps<typeof inputStyles>['status'] {
    if (error) {
      return 'error';
    }

    if (isFocused) {
      return 'focus';
    }

    return 'default';
  }

  return (
    <TextInput
      style={[
        inputStyles({
          status: getInputStatus(),
          disabled: disabled ? 'true' : 'false',
        }),
        style,
      ]}
      placeholderTextColor={theme.colors.gray[700]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly={disabled}
      {...props}
    />
  );
}
