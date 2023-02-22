import React from 'react'
import { View, Text } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
const TermCondition = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Term & Condition'} />
            <Text style={styles.text}>
                Privacy Policy
            </Text>
        </View>
    )
}
export default TermCondition;