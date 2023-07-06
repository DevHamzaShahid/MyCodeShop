import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Profile from '../../assets/svg/profileImage.svg';
import Upload from '../../assets/svg/Upload.svg'
import { Field, Formik } from 'formik';
import CustomTextInput from '../../components/CustomTextInput';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton';
import Arrow from '../../assets/svg/bottom_arrow.svg';
import CountryPicker from 'react-native-country-picker-modal';
import Error from '../../assets/svg/errorImage.svg';
import { Theme } from '../../utils/theme';
import OTPScreen from '../../components/otpBox';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import SelectedRadio from '../../assets/svg/selectedRadio.svg'
import UnSelectedRadio from '../../assets/svg/unSelectedRadio.svg'
import { Dimensions } from 'react-native';
const heightt = Dimensions.get("screen")
const CreateOffer = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [country, setCountry] = useState('1');
    const [showModal, setShowModal] = useState(false);

    const AuthScreenSchema = Yup.object().shape({
        Title: Yup.string().required('Required'),
        Website: Yup.string().required('Required'),
        Offertype: Yup.string().required('Required'),
        OfferDuration: Yup.string().required('Required'),
        Description: Yup.string().required('Required')
    });
    return (
        <ScrollView style={{ marginBottom: 80, backgroundColor: Theme.white }}>
            {showModal && <View style={{ flex: 1, zIndex: 2, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '120%', width: '100%', alignItems: 'center' }}>
                <View style={{ width: '75%', height: '70%', marginVertical: 20, borderRadius: 40, backgroundColor: '#fff', alignItems: 'center', paddingVertical: 30, justifyContent: 'center' }}>
                    <Error height={150} width={150} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 20, color: Theme.black }}>
                        You don’t have a link ?
                    </Text>
                    <Text style={{ textAlign: "center", color: Theme.black }}>
                        Select one of the options below
                    </Text>
                    <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'space-between', height: 50, marginVertical: 10 }}>
                        <SelectedRadio />
                        <Text style={{ lineHeight: 20, color: Theme.black ,marginLeft:8}}>
                        Buyer will complete{'\n'}purchase with discount code
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'space-between', height: 50, marginVertical: 10 }}>
                        <UnSelectedRadio />
                        <Text style={{ lineHeight: 20, color: Theme.black ,marginLeft:8}}>
                            Buyer will complete{'\n'}purchase with discount code
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setShowModal(false)
                        navigate(ROUTES.AudiancePreference)
                    }} style={{ backgroundColor: Theme.appRed, width: '80%', height: 40, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <Text style={{ color: '#fff', fontWeight: '600' }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
            <View style={styles.container}>

                <View style={{ width: '40%', marginVertical: 10 }}>
                    <Profile />
                    <TouchableOpacity onPress={() => alert('upload photo')}>
                        <Upload style={{ position: 'absolute', bottom: 0, right: 15 }} />
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
                                <Field name="Title">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Title')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Title ( 35 letters max )'}
                                            onChangeText={handleChange('Title')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.Title}
                                            isSecure={false}
                                        //     rightIcon={<EMAIL_ICON height={18} width={18} />
                                        // }
                                        />
                                    )}
                                </Field>
                                <Field name="Website">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Website')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Copy and past your website'}
                                            onChangeText={handleChange('Website')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.Website}
                                            isSecure={false}
                                            rightIcon={
                                                <TouchableOpacity style={{ position: 'absolute', left: -55, bottom: -12, height: 20, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 5, flexDirection: 'row', backgroundColor: '#F9EDE8' }}>
                                                    <Text style={{ fontSize: 8, color: Theme.appRed }}>
                                                        I don’t have a link
                                                    </Text>
                                                </TouchableOpacity>
                                            }
                                        />
                                    )}
                                </Field>
                                <Field name="Offertype">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Offertype')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Offer type'}
                                            onChangeText={handleChange('Offertype')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={{
                                                fontSize: 12,
                                                lineHeight: 18,
                                                color: Theme.black,
                                                paddingLeft: 10,
                                            }}
                                            value={values.Offertype}
                                            isSecure={false}
                                            rightIcon={<Arrow />}
                                            leftIcon={<></>}
                                        />
                                    )}
                                </Field>
                                <Field name="OfferDuration">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('OfferDuration')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Offer Duration'}
                                            onChangeText={handleChange('OfferDuration')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={{
                                                fontSize: 12,
                                                lineHeight: 18,
                                                color: Theme.black,
                                                paddingLeft: 10,
                                            }}
                                            value={values.OfferDuration}
                                            isSecure={false}
                                            rightIcon={<Arrow />}
                                            leftIcon={<></>}
                                        />
                                    )}
                                </Field>
                                <Field name="Description">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Description')}
                                            numberOfLines={5}
                                            multiline={true}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Description ( Optional )'}
                                            onChangeText={handleChange('Description')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={{
                                                borderWidth: 0.2,
                                                borderColor: Theme.grey,
                                                height: 150,
                                                backgroundColor: '#FAFAFA',
                                                borderRadius: 15,
                                            }}
                                            textStyle={{
                                                fontSize: 12,
                                                color: Theme.black,
                                                paddingHorizontal: 10,
                                                height: 120,
                                                textAlignVertical: 'top',
                                                width: '90%'
                                            }}
                                            value={values.Description}
                                            isSecure={false}
                                            leftIcon={<></>}
                                        />
                                    )}
                                </Field>
                            </View>
                        </View>
                    )}
                </Formik>
                <View style={styles.buttonView}>
                    <CustomButton
                        onClick={() => setShowModal(true)}
                        containerStyle={styles.buttonContainerLogin}
                        title={'Continue'}
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

export default CreateOffer