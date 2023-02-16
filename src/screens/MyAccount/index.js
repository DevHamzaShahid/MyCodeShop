import React from 'react'
import { View, Text } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
const MyAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'My Account'} />
        </View>
    )
}
export default MyAccount;