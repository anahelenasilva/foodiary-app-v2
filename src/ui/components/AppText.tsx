import { theme } from '@ui/styles/theme';
import React from 'react';
import { Text } from 'react-native';

interface IAppTextProps extends React.ComponentProps<typeof Text> {
  size?: keyof typeof theme.fontSize;
  fontFamily?: keyof typeof theme.fontFamily;
  weight?: keyof typeof theme.fontFamily.sans;
  color?: string;
}

export function AppText({
  size = 'base',
  fontFamily = 'sans',
  weight = 'regular',
  color = theme.colors.black[700],
  style,
  ...props
}: IAppTextProps) {
  return <Text
    style={[
      {
        fontFamily: theme.fontFamily[fontFamily][weight],
        fontSize: theme.fontSize[size],
        color,
      },
      style,
    ]}
    {...props}
  />;
}
