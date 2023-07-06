import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './style';
import Arrow from '../../assets/svg/bottom_arrow.svg';
import { Theme } from '../../utils/theme';
import CustomButton from '../../components/CustomButton';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import Calendar from '../../assets/svg/Calendar.svg';


const AudiancePreference = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [country, setCountry] = useState('1');
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    const AuthScreenSchema = Yup.object().shape({
        State: Yup.string().required('Required'),
        Country: Yup.string().required('Required'),
        Gender: Yup.string().required('Required'),
        Age: Yup.string().required('Required')
    });
    return (
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
                           
                            <View style={{ flexDirection: 'row', width:'100%',marginVertical:10,justifyContent:'space-between'}}>
                                <View style={{justifyContent:'flex-start',width:'50%'}}>
                                    <Field name="Country">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('Country')}
                                                error={meta.touched ? meta.error : null}
                                                placeHolderText={'Your Country'}
                                                onChangeText={handleChange('Country')}
                                                containerStyle={{
                                                    borderWidth: 0.2,
                                                    borderColor: Theme.grey,
                                                    height: 50,
                                                    backgroundColor: '#FAFAFA',
                                                    borderRadius: 15, width: '90%',
                                                }}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.Country}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                </View>
                                <View style={{justifyContent:'flex-end',width:'84%'}}>
                                    <Field name="State">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('State')}
                                                error={meta.touched ? meta.error : null}
                                                placeHolderText={'State/Region'}
                                                onChangeText={handleChange('State')}
                                                containerStyle={{
                                                    borderWidth: 0.2,
                                                    borderColor: Theme.grey,
                                                    height: 50,
                                                    backgroundColor: '#FAFAFA',
                                                    borderRadius: 15, width: '60%',
                                                }}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.State}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                </View>
                            </View>
                           
                            <Field name="Gender">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Gender')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Gender'}
                                        onChangeText={handleChange('Gender')}
                                        containerStyle={[styles.labelContainer,{marginVertical:25}]}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Gender}
                                        isSecure={false}
                                        leftIcon={<></>}
                                        rightIcon={
                                            <TouchableOpacity>
                                                <Arrow />
                                            </TouchableOpacity>
                                        }
                                    />
                                )}
                            </Field>
                            <Field name="Age">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Age')}
                                        error={meta.touched ? meta.error : null}
                                        placeHolderText={'Age'}
                                        onChangeText={handleChange('Age')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.Age}
                                        isSecure={false}
                                        leftIcon={<></>}
                                        rightIcon={
                                            <TouchableOpacity>
                                                <Calendar />
                                            </TouchableOpacity>
                                        }
                                    />
                                )}
                            </Field>
                        </View>
                    </View>
                )}
            </Formik>
            <View style={styles.buttonView}>
                <CustomButton
                    onClick={() => navigate(ROUTES.AudianceInterest)}
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
    )
}

export default AudiancePreference