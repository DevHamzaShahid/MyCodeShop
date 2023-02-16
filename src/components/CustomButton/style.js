import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';

const styles = StyleSheet.create({
  defaultButtonTextStyle: {
    color: Theme.white,
    // fontFamily: POPPINS_MEDIUM,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22.5,
  },
  defaultContainerStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});

export default styles;
