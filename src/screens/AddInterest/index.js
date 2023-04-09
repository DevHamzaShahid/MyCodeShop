import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';

import styles from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { height_screen } from '../../utils/dimensions';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';


const AddInterest = () => {

    const AuthScreenSchema = Yup.object().shape({
        item1: Yup.string().required('Required'),
        item2: Yup.string().required('Required'),
        item3: Yup.string().required('Required'),
        item4: Yup.string().required('Required'),
        item5: Yup.string().required('Required'),
    });
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={{ color: 'red', paddingLeft: 20 }}>Add Interest</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>
                Add list
            </Text>
            <Text style={styles.text2}>
                Create a list of 5 things you often buy
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Formik
                        initialValues={{
                            item1: '',
                            item2: '',
                            item3: '',
                            item4: '',
                            item5: '',
                        }}
                        onSubmit={values => {

                        }}
                        validationSchema={AuthScreenSchema}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={{ alignItems: 'center' }}>
                                <Field name="item1">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('item1')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Add item'}
                                            onChangeText={handleChange('item1')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.item1}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="item2">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('item2')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Add item'}
                                            onChangeText={handleChange('item2')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.item2}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="item3">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('item3')}
                                            error={meta.touched ? meta.error : null}
                                            placeHolderText={'Add item'}
                                            onChangeText={handleChange('item3')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.item3}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="item4">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('item4')}
                                            placeHolderText={'Add item'}
                                            error={meta.touched ? meta.error : null}
                                            onChangeText={handleChange('item4')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.email}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>
                                <Field name="item5">
                                    {({ meta }) => (
                                        <CustomTextInput
                                            onBlur={handleBlur('item5')}
                                            placeHolderText={'Add item'}
                                            error={meta.touched ? meta.error : null} placeHolderText={'Add item'}
                                            onChangeText={handleChange('item5')}
                                            containerStyle={styles.labelContainer}
                                            inputContainerStyle={styles.inputContainer}
                                            textStyle={styles.inputTextStyle}
                                            value={values.item5}
                                            isSecure={false}
                                        />
                                    )}
                                </Field>

                                <View style={{ marginBottom: height_screen * 0.4 }} />
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button_container}>
                <Text style={styles.button_text}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddInterest;