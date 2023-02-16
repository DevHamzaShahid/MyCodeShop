import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import { DrawerHeader } from '../../components/Header';
import { TransactionHistory } from '../../components/Renders';
import ROUTES from '../../utils/routes';
import { Theme } from '../../utils/theme';
import styles from './style';
const SendScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Send'} rightText={"Done"} />
            <View style={styles.box_busines}>
                <CustomTextInput
                    // onBlur={handleBlur('email')}
                    // error={meta.touched ? meta.error : null}
                    placeHolderText={'Search'}
                    // onChangeText={handleChange('email')}
                    containerStyle={styles.labelContainer}
                    inputContainerStyle={styles.inputContainer}
                    textStyle={styles.inputTextStyle}
                    // value={values.email}
                    isSecure={false}
                //     rightIcon={<EMAIL_ICON height={18} width={18} />
                // }
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SendConfirmation)}>
                <TransactionHistory name={'Currys'} />
            </TouchableOpacity>
            <TransactionHistory name={'Harvey Noman'} />
            <TransactionHistory name={'Lidl'} />
            <TransactionHistory name={'Argos'} />
            <TransactionHistory name={'JD'} />
        </View>
    )
}
export default SendScreen;