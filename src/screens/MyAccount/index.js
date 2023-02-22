import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
const MyAccount = ({ navigation }) => {
    const [email, setEmail] = useState('test@gmail.com')
    const [eva, setEva] = useState('EVA0000000')
    const [evans, setEvans] = useState('Evans')
    const [gender, setGender] = useState('Gender')
    const [country, setCountry] = useState('UK')
    const [DOB, setDob] = useState('Dat of Birth')
    const [wedding, setWedding] = useState('Wedding Anniversary')
    const [event, setEvent] = useState('Special Event')
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'My Account'} />
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <CustomTextInput
                    value={email}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
                <CustomTextInput
                    value={eva}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
                <CustomTextInput
                    value={evans}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
                <CustomTextInput
                    value={gender}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
                <CustomTextInput
                    value={country}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />

                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                    <CheckBox
                        disabled={false}
                        // value={true}
                        style={{ transform: [{ scaleX: 0.80 }, { scaleY: 0.80 }] }}
                    // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>
                        I am a student
                    </Text>
                </View>
                {/* editable */}

                <View style={{ marginTop: 30 }} />
                <CustomTextInput
                    value={DOB}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
                <CustomTextInput
                    value={wedding}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
                <CustomTextInput
                    value={event}
                    onBlur={() => { return }}
                    textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                    inputContainerStyle={{ borderRadius: 5, height: 30, width: '80%', borderWidth: 1, borderColor: 'black' }}
                />
            </View>
        </View>
    )
}
export default MyAccount;