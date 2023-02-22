import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { DrawerHeader } from '../Header';
import styles from './style';
const CustomDropDown = ({ navigation, customStyle, customItems }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('How are you?');
    const [items, setItems] = useState(customItems);
    console.log("val", value);
    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="How are you?"
                style={[customStyle]}
                containerStyle={{
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.5,
                }}
                dropDownContainerStyle={{ alignSelf: 'center' }}
            />
        </View>
    )
}
export default CustomDropDown