import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
const AppLanguage = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('English');
    const [items, setItems] = useState([
        { label: 'English', value: 'English' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'French', value: 'French' },
        { label: 'German', value: 'German' },
        { label: 'Italian', value: 'Italian' },
        
    ]);
    console.log("val",value);
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'App Language'} />
            <View style={styles.DropDowncontainer}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="English"
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    style={styles.dropdownStyle}
                />
            </View>
        </View>
    )
}

export default AppLanguage;