import { createContext, use } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { theme } from '@ui/styles/theme';

import { AppText } from '../AppText';
import { styles } from './styles';

interface IRadioGroupContextValue {
  value: string | null;
  setValue: (value: string) => void;
  isHorizontal: boolean;
  error: boolean;
}

const RadioGroupContext = createContext({} as IRadioGroupContextValue);

interface IRadioGroupProps {
  children: React.ReactNode;
  value: string | null;
  onChangeValue: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  error?: boolean;
}

export function RadioGroup({
  children,
  orientation = 'vertical',
  value,
  onChangeValue,
  error = false,
}: IRadioGroupProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <RadioGroupContext.Provider value={{ value, setValue: onChangeValue, isHorizontal, error }}>
      <View style={[styles.container, isHorizontal && styles.containerHorizontal]}>
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
}

interface IRadioGroupItemProps {
  children: React.ReactNode;
  value: string;
}

const RadioGroupItemContext = createContext({ isSelected: false });

export function RadioGroupItem({ children, value }: IRadioGroupItemProps) {
  const { value: selectedValue, setValue, isHorizontal, error } = use(RadioGroupContext);
  const isSelected = selectedValue === value;

  return (
    <RadioGroupItemContext.Provider value={{ isSelected }}>
      <TouchableOpacity
        style={[
          styles.item,
          isSelected && styles.selectedItem,
          isHorizontal && styles.horizontalItem,
          error && styles.errorItem,
        ]}
        onPress={() => setValue(value)}>
        {children}
      </TouchableOpacity>
    </RadioGroupItemContext.Provider>
  );
}

export function RadioGroupIcon({ children }: { children: string }) {
  const { isSelected } = use(RadioGroupItemContext);
  const { error } = use(RadioGroupContext);

  return (
    <View style={[
      styles.icon,
      (isSelected || error) && styles.whiteIconBg,
    ]}>
      <AppText>
        {children}
      </AppText>
    </View>
  );
}

export function RadioGroupItemInfo({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.itemInfo}>
      {children}
    </View>
  );
}

export function RadioGroupLabel({ children }: { children: string }) {
  const { isHorizontal } = use(RadioGroupContext);

  return (
    <AppText weight='semiBold' style={[styles.label, isHorizontal && styles.textCenter]}>
      {children}
    </AppText>
  );
}

export function RadioGroupDescription({ children }: { children: string }) {
  const { isHorizontal } = use(RadioGroupContext);

  return (
    <AppText size="sm" color={theme.colors.gray[700]} style={[styles.description, isHorizontal && styles.textCenter]}>
      {children}
    </AppText>
  );
}
