import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Theme.white,
    paddingBottom: 8,
  },
  contentContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  row: { padding: 6 },
  row_text: { fontWeight: '800', paddingStart: 8 },
  logoutView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  versionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  versionText: {
    fontSize: 16,
    lineHeight: 20,
    color: Theme.MAIN_COLOR,
    // fontFamily: POPPINS_MEDIUM,
    paddingLeft: 10,
  },
});

export default styles;
