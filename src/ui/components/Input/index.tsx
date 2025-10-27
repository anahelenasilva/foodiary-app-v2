import { theme } from '@ui/styles/theme';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps } from 'react-native';

import { VariantProps } from '@ui/styles/utils/createVariants';
import { useState } from 'react';
import { inputStyles } from './styles';

type BaseTextInputProps = Omit<TextInputProps, 'readOnly'>;

export interface IInputProps extends BaseTextInputProps {
  error?: boolean;
  disabled?: boolean;
  InputComponent?: React.ComponentType<TextInputProps>;
  ref?: React.Ref<TextInput>;
  formatter?: (value: string) => string;
}

export function Input({
  style,
  error,
  disabled,
  InputComponent = TextInput,
  onFocus,
  onBlur,
  onChangeText,
  formatter,
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

  function handleChangeText(value: string) {
    const formattedValue = formatter ? formatter(value) : value;

    onChangeText?.(formattedValue);
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
    <InputComponent
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
      onChangeText={handleChangeText}
      {...props}
    />
  );
}
