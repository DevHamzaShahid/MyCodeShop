import React, { memo, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput as Input } from 'react-native';
import MaskInput from 'react-native-mask-input';
import styles from './style';
import { Theme } from '../../utils/theme';

const CustomTextInput = memo(
  ({
    value,
    keyboardType,
    placeHolderText,
    onChangeText,
    containerStyle,
    inputContainerStyle,
    textStyle,
    numberOfLines,
    onBlur,
    onFocus,
    multiline,
    error,
    isSecure,
    editable,
    onSubmitEditing,
    returnKeyType,
    rightIcon,
    maskType,
    callBack,
    style
  }) => {
    const [secure, setSecure] = useState(true);
    return (
      <View style={[containerStyle,style]}>
        <View
          style={[
            styles.defaultInputContainerStyle,
            { ...inputContainerStyle },
            error ? styles.errorBorder : null,
          ]}>
          {maskType ? (
            <MaskInput
              style={
                isSecure || rightIcon
                  ? [styles.defaultTextStyle, { ...textStyle }]
                  : [styles.defaultTextStylePassword, { ...textStyle }]
              }
              onChangeText={(masked, unmasked) => onChangeText(masked)}
              onFocus={onFocus}
              onBlur={e => {
                onBlur(e);
                if (callBack) {
                  callBack();
                }
              }}
              multiline={multiline}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType ? keyboardType : 'default'}
              placeholder={placeHolderText ? placeHolderText : 'Fill Field'}
              placeholderTextColor={Theme.black}
              value={value}
              secureTextEntry={isSecure ? secure : false}
              autoCapitalize={'none'}
              editable={editable}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              mask={[
                '(',
                /\d/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
          ) : (
            <Input
              style={
                isSecure || rightIcon
                  ? [styles.defaultTextStyle, { ...textStyle }]
                  : [styles.defaultTextStylePassword, { ...textStyle }]
              }
              onChangeText={onChangeText}
              onFocus={onFocus}
              onBlur={e => {
                onBlur(e);
                if (callBack) {
                  callBack();
                }
              }}
              multiline={multiline}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType ? keyboardType : 'default'}
              placeholder={placeHolderText ? placeHolderText : 'Fill Field'}
              placeholderTextColor={Theme.black}
              value={value}
              secureTextEntry={isSecure ? secure : false}
              autoCapitalize={'none'}
              editable={editable}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
            />
          )}
          {/* {isSecure ? (
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => setSecure(!secure)}>
              {!secure ? (
                <Eye height={18} width={18} />
              ) : (
                <EyeHide height={18} width={18} />
              )}
            </TouchableOpacity>
          ) : null} */}
          {rightIcon ? (
            <TouchableOpacity disabled={true} style={styles.iconStyle}>
              {rightIcon}
            </TouchableOpacity>
          ) : null}
        </View>

        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    );
  },
);

export default CustomTextInput;
