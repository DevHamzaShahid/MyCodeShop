import React, { memo, useState, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../CustomTextInput';
import CustomButton from '../../CustomButton';
import styles from './style';
import { height_screen } from '../../../utils/dimensions';
import PhoneInput from "react-native-phone-number-input";
import Email from '../../../assets/svg/fadeEmail.svg'
import Password from '../../../assets/svg/fadeLock.svg'
import Eye from '../../../assets/svg/fadeEye.svg'
import Uncheck from '../../../assets/svg/uncheck.svg'
import YourCode from '../../../screens/yourCode';
import { navigate } from '../../../../RootNavigation';
import ROUTES from '../../../utils/routes';
import { Theme } from '../../../utils/theme';
const SignInCard = memo(({ Login }) => {
    const AuthScreenSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={values => {

                }}
                validationSchema={AuthScreenSchema}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={[styles.fieldsView]}>
                            <Field name="email">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('email')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Email'}
                                        onChangeText={handleChange('email')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.email}
                                        isSecure={false}
                                        leftIcon={<Email />}
                                    //     rightIcon={<EMAIL_ICON height={18} width={18} />
                                    // }
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
                                        rightIcon={<Eye />}

                                    />
                                )}
                            </Field>

                            {/* Remember me */}
                            <View style={styles.rememberContainer}>
                                <Uncheck />
                                <Text style={styles.rememberMe}>
                                    Remember me
                                </Text>
                            </View>
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                onClick={() => navigate(ROUTES.YourCode)}
                                containerStyle={styles.buttonContainerLogin}
                                title={'Continue'}
                                textStyle={styles.buttonTextLogin}
                                buttonWidth="100%"
                                buttonHeight={40}
                                // loading={loading}
                                loadingSize={10}
                            />
                        </View>
                        <View style={styles.bottomContainer}>
                            <Text style={{fontWeight:'500',color:Theme.black}}>Forgot the password?</Text>
                            <View style={styles.bottomInner}>
                                <Text style={{color:'#757575',paddingEnd:5}}>
                                    Business owner?
                                </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#F47257',fontWeight:'600' }}>
                                        Click here
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
});

const GetStartedCard = memo(({ }) => {
    const AuthScreenSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', marginBottom: height_screen * 0.05 }}>GetStarted</Text>
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={values => {

                }}
                validationSchema={AuthScreenSchema}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={[styles.fieldsView]}>
                            <Field name="email">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('email')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Enter email'}
                                        onChangeText={handleChange('email')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.email}
                                        isSecure={false}
                                    //     rightIcon={<EMAIL_ICON height={18} width={18} />
                                    // }
                                    />
                                )}
                            </Field>
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                onClick={handleSubmit}
                                containerStyle={styles.buttonContainerLogin}
                                title={'Next'}
                                textStyle={styles.buttonTextLogin}
                                buttonWidth="100%"
                                buttonHeight={40}
                                // loading={loading}
                                loadingSize={10}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
});

const PasswordCard = memo(({ }) => {
    const AuthScreenSchema = Yup.object().shape({
        password: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    password: '',
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
                                    />
                                )}
                            </Field>
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                onClick={handleSubmit}
                                containerStyle={styles.buttonContainerLogin}
                                title={'Next'}
                                textStyle={styles.buttonTextLogin}
                                buttonWidth="100%"
                                buttonHeight={40}
                                // loading={loading}
                                loadingSize={10}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
});

const NameCard = memo(({ }) => {
    const AuthScreenSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={values => {

                }}
                validationSchema={AuthScreenSchema}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={[styles.fieldsView]}>
                            <Field name="name">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('name')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Name'}
                                        onChangeText={handleChange('name')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.name}
                                    />
                                )}
                            </Field>
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                onClick={handleSubmit}
                                containerStyle={styles.buttonContainerLogin}
                                title={'Next'}
                                textStyle={styles.buttonTextLogin}
                                buttonWidth="100%"
                                buttonHeight={40}
                                // loading={loading}
                                loadingSize={10}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
});

const PhoneCard = memo(({ }) => {
    const AuthScreenSchema = Yup.object().shape({
        phone: Yup.string().required('Required'),
    });
    const phoneInput = useRef(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    // const [valid, setValid] = useState(false);
    // const [showMessage, setShowMessage] = useState(false);
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    phone: '',
                }}
                onSubmit={values => {

                }}
                validationSchema={AuthScreenSchema}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={[styles.fieldsView]}>
                            <Field name="phone">
                                {({ meta }) => (
                                    <PhoneInput
                                        ref={phoneInput}
                                        defaultValue={value}
                                        placeholder="Telephone"
                                        // textInputStyle={{ color: "red" }}
                                        defaultCode="DM"
                                        layout="second"
                                        onChangeText={(text) => {
                                            setValue(text);
                                        }}
                                        onChangeFormattedText={(text) => {
                                            setFormattedValue(text);
                                        }}
                                        // withDarkTheme
                                        withShadow
                                    // autoFocus
                                    />
                                    // <CustomTextInput
                                    //     onBlur={handleBlur('phone')}
                                    //     error={meta.touched ? meta.error : null}
                                    //     placeHolderText={'Name'}
                                    //     onChangeText={handleChange('phone')}
                                    //     containerStyle={styles.labelContainer}
                                    //     inputContainerStyle={styles.inputContainer}
                                    //     textStyle={styles.inputTextStyle}
                                    //     value={values.phone}
                                    // />
                                )}
                            </Field>
                        </View>
                        <View style={styles.buttonView}>
                            <CustomButton
                                onClick={handleSubmit}
                                containerStyle={styles.buttonContainerLogin}
                                title={'Next'}
                                textStyle={styles.buttonTextLogin}
                                buttonWidth="100%"
                                buttonHeight={40}
                                // loading={loading}
                                loadingSize={10}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
});

export { SignInCard, GetStartedCard, PasswordCard, NameCard, PhoneCard }