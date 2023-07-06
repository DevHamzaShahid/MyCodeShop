import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import Password from '../../assets/svg/fadeLock.svg';
import * as Yup from 'yup';
import Eye from '../../assets/svg/fadeEye.svg';
import styles from './style';
import CustomTextInput from '../../components/CustomTextInput';
import Email from '../../assets/svg/fadeEmail.svg'
import CustomButton from '../../components/CustomButton';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import Char from '../../assets/svg/char.svg'
const BuisnessRegistration3 = () => {
    const [resetPassword, setResetPassword] = useState('Reset your password regularly to keep your account secure')
    const [deleteAccount, setDeleteAccount] = useState('permanent Delete your myshopcode.com account')

    const AuthScreenSchema = Yup.object().shape({
        Email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    password: '',
                    password1: '',
                }}
                onSubmit={values => {

                }}
                validationSchema={AuthScreenSchema}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={{marginVertical:30}}>
                        <View style={[styles.fieldsView]}>
                            <Field name="Email">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Email')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Email'}
                                        onChangeText={handleChange('Email')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        isSecure={true}
                                        value={values.Email}
                                        leftIcon={<Email />}
                                        rightIcon={
                                            <TouchableOpacity>
                                            
                                        </TouchableOpacity>
                                        }

                                    />
                                )}
                            </Field>
                            <Field name="password">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('password')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Password'}
                                        onChangeText={handleChange('password')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        isSecure={true}
                                        value={values.password}
                                        leftIcon={<Password />}
                                        rightIcon={
                                            <TouchableOpacity>
                                                <Eye />
                                            </TouchableOpacity>
                                        }

                                    />
                                )}
                            </Field>
                        </View>
                    </View>
                )}
            </Formik>
            <Char style={{marginTop:5}} height={300} width={350}/>
            <View style={styles.buttonView}>
                <CustomButton
                    onClick={() => navigate(ROUTES.AdminDashboard)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Register'}
                    textStyle={styles.buttonTextLogin}
                    buttonWidth="100%"
                    buttonHeight={40}
                    // loading={loading}
                    loadingSize={10}
                />
            </View>
        </View>
    )
}

export default BuisnessRegistration3