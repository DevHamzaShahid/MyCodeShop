import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
import Email from '../../assets/email.svg'
import Location from '../../assets/location.svg'
import Call from '../../assets/call.svg'
import CustomTextInput from '../../components/CustomTextInput';
const ContactUs = ({ navigation }) => {
    const [name, setName] = useState('Your Name')
    const [email, setEmail] = useState('Email')
    const [phone, setPhone] = useState('Phone Number')
    const [message, setMessage] = useState('Enter message')

    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Contact Us'} />
            <View style={{ alignSelf: 'center' }}>
                <Text style={{ alignSelf: 'center', marginTop: 30, fontWeight: '600' }}>
                    Contact Info
                </Text>
                <Text style={{ marginTop: 20 }}>
                    If you have any questions concerns or complaints,{'\n'} you can contact myshop.com ltd at:
                </Text>

                <Call style={{ marginTop: 15 }} />
                <Text style={{ marginTop: 10 }}>
                    Tel: 353 874 838 736
                </Text>

                <Location style={{ marginTop: 20 }} />
                <Text style={{ marginTop: 10 }}>
                    Inniscarra, Main Street, Rathcoole, Co. Dublin, D24E029, Ireland.
                </Text>

                <Email style={{ marginTop: 20 }} />
                <Text style={{ marginTop: 10 }}>
                    hello@myshopcode.com
                </Text>


                <Text style={{ alignSelf: 'center', marginTop: 30, fontWeight: '600' }}>
                    Get in touch
                </Text>

                <View style={{ alignItems: 'center' }}>
                    <CustomTextInput
                        value={name}
                        onBlur={() => { return }}
                        textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                        inputContainerStyle={{ borderRadius: 5, height: 35, width: '90%', borderWidth: 1, borderColor: 'black', marginTop: 20 }}
                    />
                    <CustomTextInput
                        value={email}
                        onBlur={() => { return }}
                        textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                        inputContainerStyle={{ borderRadius: 5, height: 35, width: '90%', borderWidth: 1, borderColor: 'black' }}
                    />
                    <CustomTextInput
                        value={phone}
                        onBlur={() => { return }}
                        textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                        inputContainerStyle={{ borderRadius: 5, height: 35, width: '90%', borderWidth: 1, borderColor: 'black' }}
                    />
                    <CustomTextInput
                        value={message}
                        onBlur={() => { return }}
                        textStyle={{ fontSize: 10, lineHeight: 12, color: 'grey' }}
                        inputContainerStyle={{ borderRadius: 5, height: 35, width: '90%', borderWidth: 1, borderColor: 'black' }}
                    />
                </View>
            </View>
            <View style={{justifyContent:'center',alignSelf:'center',alignItems:'center',backgroundColor:Theme.light_red,height:50,width:'90%',position:'absolute',bottom:50}}>
                <Text style={{color:Theme.white,fontWeight:'bold',fontSize:18}}>
                    Send
                </Text>
            </View>
        </View>
    )
}
export default ContactUs;