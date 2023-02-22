import React from 'react'
import { View, Text } from 'react-native'
import CustomDropDown from '../../components/CustomDropDown';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
const FAQ = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'FAQ'} />
            <Text style={{ alignSelf: 'center', marginTop: 50, marginBottom: 20, fontSize: 15 }}>
                Frequently Asked Questions (FAQ)
            </Text>
            <CustomDropDown customItems={[
                { value: '1', label: 'How are you' },
                { value: '2', label: 'How is it hanging?' },
                { value: '3', label: 'How about game?' },
            ]} customStyle={styles.DropdownStyle} />
            <CustomDropDown customItems={[
                { value: '1', label: 'How are you' },
                { value: '2', label: 'How is it hanging?' },
                { value: '3', label: 'How about game?' },
            ]} customStyle={styles.DropdownStyle} />
            <CustomDropDown customItems={[
                { value: '1', label: 'How are you' },
                { value: '2', label: 'How is it hanging?' },
                { value: '3', label: 'How about game?' },
            ]} customStyle={styles.DropdownStyle} />
            <CustomDropDown customItems={[
                { value: '1', label: 'How are you' },
                { value: '2', label: 'How is it hanging?' },
                { value: '3', label: 'How about game?' },
            ]} customStyle={styles.DropdownStyle} />
        </View>
    )
}
export default FAQ;