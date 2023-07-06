import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
import { Field, Formik } from 'formik';
import Password from '../../assets/svg/password.svg'
import * as Yup from 'yup';
import Eye from '../../assets/svg/eye.svg'
import { width_screen } from '../../utils/dimensions';
import CustomButton from '../../components/CustomButton';

const Security = ({ navigation }) => {
    const [resetPassword, setResetPassword] = useState('Reset your password regularly to keep your account secure')
    const [deleteAccount, setDeleteAccount] = useState('permanent Delete your myshopcode.com account')
    
    const AuthScreenSchema = Yup.object().shape({
        password: Yup.string().required('Required'),
        password1: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal:width_screen * 0.03,marginBottom:20}}>
                <Text style={{fontSize:16,color:Theme.black}}>Adjust your security settings</Text>
            </View>
            <Formik
                initialValues={{
                    password: '',
                    password1: '',
                }}
                onSubmit={values => {

                }}
                validationSchema={AuthScreenSchema}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={[styles.fieldsView]}>
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
                                        rightIcon={<Eye />}

                                    />
                                )}
                            </Field>
                            <Field name="password">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('password1')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Password'}
                                        onChangeText={handleChange('password1')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        isSecure={true}
                                        value={values.password1}
                                        leftIcon={<Password />}
                                        rightIcon={<Eye />}

                                    />
                                )}
                            </Field>
                        </View>
                    </View>
                )}
            </Formik>
            {/* button */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    // onClick={() => navigate(ROUTES.Home)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Update'}
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
export default Security;