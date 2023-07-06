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
import Flag from 'react-native-flags';
import FlagArrow from '../../assets/svg/FlagArrow.svg'
const BuisnessRegistration = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [country, setCountry] = useState({ cca2: 'US', name: 'United States' });
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    const AuthScreenSchema = Yup.object().shape({
        companyLegalName: Yup.string().required('Required'),
        CompanyDisplayname: Yup.string().required('Required'),
        Industry: Yup.string().required('Required'),
        PhoneNumber: Yup.string().required('Required')
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
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 30,color:Theme.black }}>
                            Verify phone number
                        </Text>
                        <Text style={{ textAlign: "center",color:Theme.black }}>
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
                <View style={{ width: "40%", marginVertical: 50, alignSelf: 'center',justifyContent:'center' }}>
                    <Profile />
                    <TouchableOpacity style={{ position: 'absolute', bottom: 5 ,left:90}}  onPress={() => alert('upload photo')}>
                        <Upload />
                    </TouchableOpacity>
                </View>
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
                                <Field name="companyLegalName">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('companyLegalName')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Company Legal Name'}
                                            onChangeText={handleChange('companyLegalName')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            onFocus={() => handleFocus(0)}
                                            textStyle={styles.inputTextStyle}
                                            value={values.companyLegalName}
                                            isSecure={false}
                                        //     rightIcon={<EMAIL_ICON height={18} width={18} />
                                        // }
                                        />
                                    )}
                                </Field>
                                <Field name="CompanyDisplayname">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('CompanyDisplayname')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Company Display Name'}
                                            onChangeText={handleChange('CompanyDisplayname')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            onFocus={() => handleFocus(100)}
                                            textStyle={styles.inputTextStyle}
                                            value={values.CompanyDisplayname}
                                            isSecure={false}
                                        //     rightIcon={<EMAIL_ICON height={18} width={18} />
                                        // }
                                        />
                                    )}
                                </Field>
                                <Field name="Industry">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Industry')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Industry'}
                                            onChangeText={handleChange('Industry')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            onFocus={() => handleFocus(200)}
                                            textStyle={{
                                                fontSize: 14,
                                                lineHeight: 18,
                                                color: Theme.black,
                                                paddingLeft: 10
                                            }}
                                            value={values.Industry}
                                            isSecure={false}
                                            rightIcon={<Arrow />}
                                            leftIcon={<></>}
                                        />
                                    )}
                                </Field>


                                <Field name="Phone Number">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Phone Number')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Phone Number'}
                                            onChangeText={handleChange('Phone Number')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            onFocus={() => handleFocus(300)}
                                            textStyle={{
                                                fontSize: 14,
                                                lineHeight: 18,
                                                color: Theme.black,
                                                paddingLeft: 40
                                            }}
                                            value={values.PhoneNumber}
                                            isSecure={false}
                                            rightIcon={
                                                <TouchableOpacity style={{ position: 'absolute', left: -60, bottom: -12, height: 20, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5, flexDirection: 'row', backgroundColor: '#F9EDE8' }}>
                                                    <Text style={{ fontSize: 8, color: Theme.appRed }}>
                                                        Verify Number
                                                    </Text>
                                                </TouchableOpacity>
                                            }
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
                            </View>
                        </View>
                    )}
                </Formik>
                {/* <View style={styles.buttonView}> */}
                <CustomButton
                    onClick={() => setShowVerifyModal(true)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Continue'}
                    textStyle={styles.buttonTextLogin}
                    buttonWidth="100%"
                    buttonHeight={40}
                    // loading={loading}
                    loadingSize={10}
                />
            </View>
            {/* </View > */}
        </ScrollView>

    )
}

export default BuisnessRegistration