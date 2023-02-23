import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import Checked from '../../assets/checked.svg'
import Unchecked from '../../assets/unchecked.svg'
import styles from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { height_screen } from '../../utils/dimensions';


const MyAccount = ({ navigation }) => {
   
    const [checked, setChecked] = useState(false)
    const AuthScreenSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
        eva: Yup.string().required('Required'),
        evans: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        DOB: Yup.string().required('Required'),
        wedding: Yup.string().required('Required'),
        event: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'My Account'} />
           <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Formik
                    initialValues={{
                        email: 'test@gmail.com',
                        eva: 'EVA0000000',
                        evans:'Evans',
                        gender:'Gender',
                        country:'UK',
                        DOB:'Date of Birth',
                        wedding:'Wedding Anniversary',
                        event:'Special Event',

                    }}
                    onSubmit={values => {

                    }}
                    validationSchema={AuthScreenSchema}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={{alignItems:'center'}}>
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
                            <Field name="Evans">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Evans')}
                                        error={meta.touched ? meta.error : null}
                                        // placeHolderText={'Enter email'}
                                        onChangeText={handleChange('evans')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.evans}
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
                            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                {!checked ? <TouchableOpacity onPress={() => setChecked(!checked)}>
                                    <Unchecked />
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                                        <Checked />
                                    </TouchableOpacity>
                                }
                                <Text style={{ marginLeft: 5 }}>
                                    I am a student
                                </Text>
                            </View>
                            <View style={{marginTop:25}}/>
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

                            <Field name="Wedding">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Wedding')}
                                        error={meta.touched ? meta.error : null}
                                        // placeHolderText={'Enter email'}
                                        onChangeText={handleChange('wedding')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.wedding}
                                        isSecure={false}
                                    />
                                )}
                            </Field>
                            <Field name="Event">
                                {({ meta }) => (
                                    <CustomTextInput
                                        onBlur={handleBlur('Event')}
                                        error={meta.touched ? meta.error : null}
                                        // placeHolderText={'Enter email'}
                                        onChangeText={handleChange('event')}
                                        containerStyle={styles.labelContainer}
                                        inputContainerStyle={styles.inputContainer}
                                        textStyle={styles.inputTextStyle}
                                        value={values.event}
                                        isSecure={false}
                                    />
                                )}
                            </Field>
                            <View style={{marginBottom:height_screen*0.4}}/>
                        </View>
                    )}
                </Formik>
            </View>
           </ScrollView>
        </View>
    )
}
export default MyAccount;