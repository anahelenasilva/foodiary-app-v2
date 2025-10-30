import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  containerHorizontal: {
    gap: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    borderStyle: 'solid',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  selectedItem: {
    borderColor: theme.colors.lime[700],
    backgroundColor: theme.colors.lime['700/10'],
  },
  errorItem: {
    borderColor: theme.colors.support.red,
    backgroundColor: theme.colors.support['red/10'],
  },
  horizontalItem: {
    flexDirection: 'column',
    paddingVertical: 32,
    flex: 1,
  },
  itemInfo: {
    gap: 2,
  },
  icon: {
    backgroundColor: theme.colors.gray[200],
    borderRadius: 12,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteIconBg: {
    backgroundColor: theme.colors['white/40'],
  },
  label: {
    letterSpacing: -0.32,
  },
  description: {
  },
  textCenter: {
    textAlign: 'center',
  },
});
