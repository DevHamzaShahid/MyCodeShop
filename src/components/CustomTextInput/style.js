import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
  defaultLabelStyle: {
    fontSize: 15,
    lineHeight: 16,
    // fontFamily: ROBOTO_MEDIUM,
    textAlignVertical: 'center',
    color: Theme.white,
    marginBottom: 5,
    fontStyle: 'normal',
  },
  defaultInputContainerStyle: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  defaultTextStyle: {
    height: 46,
    color: 'black',
    // fontFamily: ROBOTO_REGULAR,
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 16,
    width: '90%',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    // fontFamily: POPPINS_REGULAR,
    fontStyle: 'normal',
    fontSize: 12,
  },
  iconStyle: {
    // position: 'absolute',
    // left: '88%',
    // right: 0,
    // marginTop: '-1%',
    width: '5%',
    alignSelf: 'center',
  },
  defaultTextStylePassword: {
    height: 46,
    color: 'black',
    // fontFamily: ROBOTO_MEDIUM,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    width: '100%',
  },
  speakNow: {
    fontSize: 12,
    lineHeight: 20,
    color: Theme.white,
    paddingRight: 5,
  },
  MicrophoneStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hintStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
