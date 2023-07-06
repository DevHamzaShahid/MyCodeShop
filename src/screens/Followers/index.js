import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import CustomTextInput from '../../components/CustomTextInput';
import Arrow from '../../assets/svg/bottom_arrow.svg';
import { Theme } from '../../utils/theme';
import CustomButton from '../../components/CustomButton';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import styles from './styles';
import UnselectedRadio from '../../assets/svg/unSelectedRadio.svg'


const Followers = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [country, setCountry] = useState('1');
    const [showVerifyModal, setShowVerifyModal] = useState(false);

    const AuthScreenSchema = Yup.object().shape({
        User: Yup.string().required('Required'),
        Email: Yup.string().required('Required'),

    });
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexGrow: 1, }}>
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

                                <Field name="User">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('User')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Free to send user'}
                                            onChangeText={handleChange('User')}
                                            containerStyle={[styles.labelContainer, { marginVertical: 15 }]}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.User}
                                            isSecure={false}

                                            rightIcon={
                                                <TouchableOpacity>
                                                    <UnselectedRadio height={20} />
                                                </TouchableOpacity>
                                            }
                                        />
                                    )}
                                </Field>
                                <Text style={{ fontSize: 16, color: Theme.black, fontWeight: '600', marginVertical: 10 }}>Specific user</Text>
                                <Field name="Email">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('Email')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Email or code'}
                                            onChangeText={handleChange('Email')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.Email}
                                            isSecure={false}

                                        />
                                    )}
                                </Field>
                                <Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 10, color: Theme.black }}>Estimated audience</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: Theme.appRed, borderRadius: 30, height: 100, marginVertical: 10, paddingHorizontal: 20 }}>
                                    <Text style={{ fontSize: 34, fontWeight: '700', color: Theme.black }}>
                                        800-2K
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
                {/* <View style={styles.buttonView}> */}

                {/* </View> */}
            </View>
            <CustomButton
                onClick={() => alert('Success')}
                containerStyle={styles.buttonContainerLogin}
                title={'Create Offer'}
                textStyle={styles.buttonTextLogin}
                buttonWidth="100%"
                buttonHeight={40}
                // loading={loading}
                loadingSize={10}
            />
        </ScrollView>
    )
}

export default Followers