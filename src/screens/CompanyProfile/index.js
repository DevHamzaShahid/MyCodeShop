import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'
import Profile from '../../assets/svg/profileImage.svg';
import Upload from '../../assets/svg/Upload.svg'
import { Field, Formik } from 'formik';
import CustomTextInput from '../../components/CustomTextInput';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton';
import Arrow from '../../assets/svg/bottom_arrow.svg';
import CountryPicker from 'react-native-country-picker-modal';
import Alert from '../../assets/svg/alertModal.svg';
import { Theme } from '../../utils/theme';
import OTPScreen from '../../components/otpBox';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import EditIcon from '../../assets/svg/EditIcon.svg'
import Flag from 'react-native-flags';
import FlagArrow from '../../assets/svg/FlagArrow.svg'
const BuisnessRegistration = () => {
    const [modalVisible, setModalVisible] = useState(false)
    // const [country, setCountry] = useState('1');
    const [country, setCountry] = useState({ cca2: 'US', name: 'United States' });
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    const AuthScreenSchema = Yup.object().shape({
        CurryInternational: Yup.string().required('Required'),
        Curry: Yup.string().required('Required'),
        Retail: Yup.string().required('Required'),
        PhoneNumber: Yup.string().required('Required'),
        Country: Yup.string().required('Required'),
        Email: Yup.string().required('Required'),
        Email2: Yup.string().required('Required')
    });
    const scrollViewRef = useRef(null);
    const handleFocus = (y) => {
        scrollViewRef.current.scrollTo({ y });
    };
    return (
        <ScrollView
        ref={scrollViewRef}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        >
        <View style={styles.container}>
            {showVerifyModal && <View style={{ position: 'absolute', zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%', width: '110%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '70%', height: 500, borderRadius: 40, backgroundColor: '#fff', alignItems: 'center', paddingVertical: 30 }}>
                    <Alert />
                    <OTPScreen />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 30 }}>
                        Verify phone number
                    </Text>
                    <Text style={{ textAlign: "center", }}>
                        Enter the code we sent to you number to verify it.
                    </Text>
                    <TouchableOpacity onPress={() => {
                        setShowVerifyModal(false)
                        navigate(ROUTES.BuisnessRegistration2)
                    }} style={{ backgroundColor: Theme.appRed, width: '80%', height: 40, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <Text style={{ color: '#fff', fontWeight: '600' }}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>}

            <Image
                style={{ height: 50, width: 50, position: 'absolute', zIndex: 2 }}
                source={{ uri: `https://www.countryflags.io/${country.flag}/flat/64.png` }}
            />
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
                            <Field name="CurryInternational">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('CurryInternational')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Curry International'}
                                        onChangeText={handleChange('CurryInternational')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(0)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.CurryInternational}
                                        isSecure={false}
                                        rightIcon={<></>}
                                    />
                                )}
                            </Field>
                            <Field name="Curry">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Curry')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Curry'}
                                        onChangeText={handleChange('Curry')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(100)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Curry}
                                        isSecure={false}
                                        rightIcon={<EditIcon />}
                                    />
                                )}
                            </Field>
                            <Field name="Retail">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Retail')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Retail, Electronics'}
                                        onChangeText={handleChange('Retail')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(200)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={{
                                            fontSize: 14,
                                            lineHeight: 18,
                                            color: Theme.black,
                                            paddingLeft: 10,
                                        }}
                                        value={values.Retail}
                                        isSecure={false}
                                        rightIcon={<Arrow />}
                                        leftIcon={<></>}
                                    />
                                )}
                            </Field>
                            {/* <Field name="Phone Number">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Phone Number')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'0000000000000000'}
                                        onChangeText={handleChange('Phone Number')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(300)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.PhoneNumber}
                                        isSecure={false}
                                        rightIcon={<Arrow />
                                        }
                                        leftIcon={
                                            (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setModalVisible(true);
                                                    }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                        <CountryPicker
                                                            withFilter
                                                            withAlphaFilter
                                                            visible={modalVisible}
                                                            renderFlagButton={(e) => {
                                                                return (
                                                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 190 }}>
                                                                        <Text> {country.callingCode ? '+' + country.callingCode : '+1'}</Text>
                                                                    </View>
                                                                );
                                                            }}
                                                            onSelect={(e) => {
                                                                setCountry(e);
                                                                alert(JSON.stringify(e))
                                                                console.log(JSON.stringify(e));
                                                            }}
                                                            onClose={() => {
                                                                setModalVisible(false);
                                                            }}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        }
                                    />
                                )}
                            </Field> */}
                             <Field name="Phone Number">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Phone Number')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Phone Number'}
                                            onChangeText={handleChange('Phone Number')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={{
                                                borderWidth: 0.2,
                                                borderColor: Theme.grey,
                                                height: 60,
                                                backgroundColor: '#FAFAFA',
                                                borderRadius: 15,
                                                paddingRight:30
                                            }}
                                            onFocus={() => handleFocus(300)}
                                            textStyle={{
                                                fontSize: 14,
                                                lineHeight: 18,
                                                color: Theme.black,
                                                paddingLeft: 40
                                            }}
                                            value={values.PhoneNumber}
                                            isSecure={false}
                                            rightIcon={<EditIcon/>}
                                            leftIcon={
                                                <View pointerEvents="box-none">
                                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Flag
                                                                code={country.cca2}
                                                                size={32}
                                                                style={{ marginRight: 10 }}
                                                            />
                                                            <FlagArrow />
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            }
                                        />
                                    )}
                                </Field>

                                <CountryPicker
                                    withFilter
                                    withAlphaFilter
                                    visible={modalVisible}
                                    placeholder={""}
                                    onSelect={(country) => {
                                        setCountry(country);
                                        setModalVisible(false);
                                    }}
                                    onClose={() => setModalVisible(false)}
                                    selectedCountryCode={country.cca2}
                                    filterProps={{}}
                                />
                            <Field name="Country">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Country')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Xexxxxxxxyy Dublin Ireland'}
                                        onChangeText={handleChange('Country')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(400)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Country}
                                        isSecure={false}
                                        rightIcon={<EditIcon />}
                                    />
                                )}
                            </Field>
                            <Field name="Email">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Email')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'www.currys.com'}
                                        onChangeText={handleChange('Email')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(500)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Email}
                                        isSecure={false}
                                        rightIcon={<EditIcon />}
                                    />
                                )}
                            </Field>
                            <Field name="Email2">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Email2')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'info@currys.com'}
                                        onChangeText={handleChange('Email2')}
                                        onFocus={() => handleFocus(600)}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Email2}
                                        isSecure={false}
                                        rightIcon={<EditIcon />}
                                    />
                                )}
                            </Field>
                        </View>
                    </View>
                )}
            </Formik>
            <View style={styles.buttonView}>
                <CustomButton
                    onClick={() => alert("updated")}
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
        </ScrollView>
    )
}

export default BuisnessRegistration