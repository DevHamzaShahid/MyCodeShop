import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
import Email from '../../assets/email.svg'
import Location from '../../assets/location.svg'
import Call from '../../assets/call.svg'
import CustomTextInput from '../../components/CustomTextInput';
import { ScrollView } from 'react-native-gesture-handler';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { height_screen } from '../../utils/dimensions';

const ContactUs = ({ navigation }) => {
   
    const AuthScreenSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Contact Us'} />
            <ScrollView showsVerticalScrollIndicator={false} >
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

                    <View style={{ alignItems: 'center' ,marginTop:20}}>
                        <Formik
                            initialValues={{
                                name:"Your Name",
                                email: 'Email',
                                phone: 'Phone Number',
                                message: 'Enter message',
                            }}
                            onSubmit={values => {

                            }}
                            validationSchema={AuthScreenSchema}>
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <View style={{ alignItems: 'center' }}>
                                    <Field name="name">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('name')}
                                                error={meta.touched ? meta.error : null}
                                                // placeHolderText={'Enter email'}
                                                onChangeText={handleChange('name')}
                                                containerStyle={styles.labelContainer}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.name}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('email')}
                                                error={meta.touched ? meta.error : null}
                                                // placeHolderText={'Enter email'}
                                                onChangeText={handleChange('email')}
                                                containerStyle={styles.labelContainer}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.email}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                    <Field name="phone">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('phone')}
                                                error={meta.touched ? meta.error : null}
                                                // placeHolderText={'Enter email'}
                                                onChangeText={handleChange('phone')}
                                                containerStyle={styles.labelContainer}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.phone}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                    <Field name="message">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('message')}
                                                error={meta.touched ? meta.error : null}
                                                // placeHolderText={'Enter email'}
                                                onChangeText={handleChange('message')}
                                                containerStyle={styles.labelContainer}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.message}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                    <View style={{marginBottom:height_screen*0.4}}/>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </ScrollView>
            <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: Theme.light_red, height: 40, width: '90%', position: 'absolute', bottom: 10 }}>
                <Text style={{ color: Theme.white, fontWeight: 'bold', fontSize: 18 }}>
                    Send
                </Text>
            </View>
        </View>
    )
}
export default ContactUs;