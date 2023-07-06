import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './style';
import Arrow from '../../assets/svg/bottom_arrow.svg';
import { Theme } from '../../utils/theme';
import CustomButton from '../../components/CustomButton';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';


const BuisnessRegistration2 = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [country, setCountry] = useState('1');
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    const AuthScreenSchema = Yup.object().shape({
        Address1: Yup.string().required('Required'),
        Address2: Yup.string().required('Required'),
        Zip: Yup.string().required('Required'),
        City: Yup.string().required('Required') ,
        State: Yup.string().required('Required'),
        Country: Yup.string().required('Required'),
        Web: Yup.string().required('Required')
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
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                            <Text style={styles.fieldHeading}>
                                Company address line 1
                            </Text>
                            <Field name="Address1">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Address1')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Your adress'}
                                        onChangeText={handleChange('Address1')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(0)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Address1}
                                        isSecure={false}

                                    />
                                )}
                            </Field>
                            <Text style={styles.fieldHeading}>
                                Company address line 2 ( optional )
                            </Text>
                            <Field name="Address2">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Address2')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Your adress'}
                                        onChangeText={handleChange('Address2')}
                                        containerStyle={styles.labelContainer}
                                        onFocus={() => handleFocus(100)}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Address2}
                                        isSecure={false}
                                    />
                                )}
                            </Field>
                            <View style={{ flexDirection: 'row', width:'100%',marginVertical:10,justifyContent:'space-between'}}>
                                <View style={{justifyContent:'flex-start',width:'50%'}}>
                                    <Text style={styles.fieldHeading}>
                                        Zip / Postal Code
                                    </Text>
                                    <Field name="Zip">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('Zip')}
                                                error={meta.touched ? meta.error : null}
                                                placeHolderText={'Your zip'}
                                                onChangeText={handleChange('Zip')}
                                                onFocus={() => handleFocus(200)}
                                                containerStyle={{
                                                    borderWidth: 0.2,
                                                    borderColor: Theme.grey,
                                                    height: 50,
                                                    backgroundColor: '#FAFAFA',
                                                    borderRadius: 15, width: '90%',
                                                }}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.Zip}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                </View>
                                <View style={{justifyContent:'flex-end',width:'80%'}}>
                                    <Text style={styles.fieldHeading}>
                                        City
                                    </Text>
                                    <Field name="City">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('City')}
                                                error={meta.touched ? meta.error : null}
                                                placeHolderText={'Your city'}
                                                onChangeText={handleChange('City')}
                                                onFocus={() => handleFocus(200)}
                                                containerStyle={{
                                                    borderWidth: 0.2,
                                                    borderColor: Theme.grey,
                                                    height: 50,
                                                    backgroundColor: '#FAFAFA',
                                                    borderRadius: 15, width: '60%',
                                                }}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.City}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width:'100%',marginVertical:10,justifyContent:'space-between'}}>
                                <View style={{justifyContent:'flex-start',width:'50%'}}>
                                    <Text style={styles.fieldHeading}>
                                    State / Province
                                    </Text>
                                    <Field name="State">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('State')}
                                                error={meta.touched ? meta.error : null}
                                                placeHolderText={'Your state'}
                                                onChangeText={handleChange('State')}
                                                onFocus={() => handleFocus(300)}
                                                containerStyle={{
                                                    borderWidth: 0.2,
                                                    borderColor: Theme.grey,
                                                    height: 50,
                                                    backgroundColor: '#FAFAFA',
                                                    borderRadius: 15, width: '90%',
                                                }}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.State}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                </View>
                                <View style={{justifyContent:'flex-end',width:'80%'}}>
                                    <Text style={styles.fieldHeading}>
                                    Country
                                    </Text>
                                    <Field name="Country">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('Country')}
                                                error={meta.touched ? meta.error : null}
                                                placeHolderText={'Your country'}
                                                onChangeText={handleChange('Country')}
                                                onFocus={() => handleFocus(300)}
                                                containerStyle={{
                                                    borderWidth: 0.2,
                                                    borderColor: Theme.grey,
                                                    height: 50,
                                                    backgroundColor: '#FAFAFA',
                                                    borderRadius: 15, width: '60%',
                                                }}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.Country}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                </View>
                            </View>
                            <Text style={styles.fieldHeading}>
                                Website Url
                            </Text>
                            <Field name="Web">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Web')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Your website'}
                                        onChangeText={handleChange('Web')}
                                        onFocus={() => handleFocus(400)}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Web}
                                        isSecure={false}
                                    />
                                )}
                            </Field>
                        </View>
                    </View>
                )}
            </Formik>
            {/* <View style={styles.buttonView}> */}
                <CustomButton
                    onClick={() => navigate(ROUTES.BuisnessRegistration3)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Continue'}
                    textStyle={styles.buttonTextLogin}
                    buttonWidth="100%"
                    buttonHeight={40}
                    // loading={loading}
                    loadingSize={10}
                />
            </View>
        {/* </View> */}
        </ScrollView>
    )
}

export default BuisnessRegistration2