import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
const Security = ({ navigation }) => {
    const [resetPassword, setResetPassword] = useState('Reset your password regularly to keep your account secure')
    const [deleteAccount, setDeleteAccount] = useState('permanent Delete your myshopcode.com account')
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Security'} />
            <View style={{ marginTop: 50 }}>
                <Text style={{ padding: 10 }}>
                    Adjust your security settings
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                <TouchableOpacity>
                    <Text>Reset Password</Text>
                   </TouchableOpacity>
                   <TouchableOpacity>
                    <Text style={{ color: Theme.light_red }}>Reset</Text>
                   </TouchableOpacity>
                </View>
                <CustomTextInput
                    value={resetPassword}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ alignSelf: 'center', borderRadius: 5, height: 30, width: '90%', borderWidth: 1, borderColor: 'black' }}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                   <TouchableOpacity>
                    <Text>Delete Account</Text>
                   </TouchableOpacity>
                   <TouchableOpacity>
                    <Text style={{ color: Theme.light_red }}>Delete</Text>
                   </TouchableOpacity>
                </View>
                <CustomTextInput
                    value={deleteAccount}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ alignSelf: 'center', borderRadius: 5, height: 30, width: '90%', borderWidth: 1, borderColor: 'black' }}
                />
            </View>
        </View>
    )
}
export default Security;