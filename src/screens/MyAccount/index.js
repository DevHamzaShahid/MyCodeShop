import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import styles from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Profile_Screen from '../../assets/profile-screen.svg'
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';

const MyAccount = ({ navigation }) => {

    const [checked, setChecked] = useState(false)
    const AuthScreenSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
        eva: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        DOB: Yup.string().required('Required'),

    });
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.profile_logo}>
                        <Profile_Screen />
                    </View>
                    <Text style={styles.text1}>
                        My Account
                    </Text>
                    <Text>
                        DMK23xDW
                    </Text>
                 <TouchableOpacity onPress={()=>navigate(ROUTES.Level)}>
                 <Text style={styles.text2}>
                        Level 0
                    </Text>
                 </TouchableOpacity>
                    <Text style={styles.description}>
                        We ONLY share your discount code; we DO NOT share any other information you provide us
                    </Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Formik
                        initialValues={{
                            email: 'test@gmail.com',
                            eva: 'JVuycusd6',
                            city: 'City',
                            gender: 'Gender',
                            country: 'UK',
                            DOB: 'Date of Birth',


                        }}
                        onSubmit={values => {

                        }}
                        validationSchema={AuthScreenSchema}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={{ alignItems: 'center' }}>
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
                                <Field name="Eva">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Eva')}
                                            error={meta.touched ? meta.error : null}
                                            // placeHolderText={'Enter email'}
                                            onChangeText={handleChange('eva')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.eva}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="city">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('city')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'City'}
                                            onChangeText={handleChange('city')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.city}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="Gender">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Gender')}
                                            error={meta.touched ? meta.error : null}
                                            // placeHolderText={'Enter email'}
                                            onChangeText={handleChange('gender')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.gender}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="Country">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Country')}
                                            error={meta.touched ? meta.error : null}
                                            // placeHolderText={'Enter email'}
                                            onChangeText={handleChange('country')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.country}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>

                                {/* editable */}
                                <Field name="DOB">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('DOB')}
                                            error={meta.touched ? meta.error : null}
                                            // placeHolderText={'Enter email'}
                                            onChangeText={handleChange('DOB')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.DOB}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>

                            </View>
                        )}
                    </Formik>
                </View>
                <View style={{ alignSelf: 'center', marginTop: 50 }}>
                    <TouchableOpacity onPress={()=>navigate(ROUTES.Security)}>
                        <Text style={styles.bottom_link}>Security</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigate(ROUTES.Transaction)}>
                        <Text style={styles.bottom_link}>Transaction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigate(ROUTES.Notification)}>
                        <Text style={styles.bottom_link}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigate(ROUTES.FAQ)}>
                        <Text style={styles.bottom_link}>FAQ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 100 }} />
            </ScrollView>
        </View>
    )
}
export default MyAccount;