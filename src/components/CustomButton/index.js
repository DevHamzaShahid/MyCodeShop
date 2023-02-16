import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import styles from './style';

const CustomButton = memo(
  ({
    onClick,
    loading,
    containerStyle,
    title,
    textStyle,
    buttonWidth,
    buttonHeight,
    loadingSize,
    loadingColor,
    check,
    disabled,
  }) => {
    if (!loading) {
      return (
        <View style={buttonWidth ? { width: buttonWidth } : null}>
          <TouchableOpacity
            disabled={disabled ? disabled : false}
            style={[
              styles.defaultContainerStyle,
              { height: buttonHeight },
              { ...containerStyle },
            ]}
            onPress={onClick}>
            {check === true ? (
              <Text style={[styles.defaultButtonTextStyle, textStyle]}>
                {title}
              </Text>
            ) : (
              <View style={styles.linearGradient}>
                <Text style={[styles.defaultButtonTextStyle, textStyle]}>
                  {title}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={buttonWidth ? { width: buttonWidth } : null}>
        <View
          style={[
            styles.defaultContainerStyle,
            { height: buttonHeight },
            { ...containerStyle },
          ]}>
          {check === true ? (
            <DotIndicator
              count={3}
              color={loadingColor ? loadingColor : 'white'}
              animationDuration={800}
              size={loadingSize}
            />
          ) : (
            <View style={styles.linearGradient}>
              <DotIndicator
                count={3}
                color={loadingColor ? loadingColor : 'white'}
                animationDuration={800}
                size={loadingSize}
              />
            </View>
          )}
        </View>
      </View>
    );
  },
);

export default CustomButton;
