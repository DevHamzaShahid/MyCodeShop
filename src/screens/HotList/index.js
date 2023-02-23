import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
import styles from './style';
import Delete from '../../assets/delete.svg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomTextInput from '../../components/CustomTextInput';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
const HotList = ({ navigation }) => {
    const AuthScreenSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    });
    const brands = [
        {
            id: '1',
            brandName: 'Zara',
            icon: 'trash'
        },
    ]
    const products = [
        {
            id: '1',
            brandName: 'Samsung Tv',
            icon: 'trash'
        },
        {
            id: '2',
            brandName: 'Perfume',
            icon: 'trash'
        },
        {
            id: '3',
            brandName: 'Automobile',
            icon: 'trash'
        },
        {
            id: '4',
            brandName: 'Sony LinkBuds S',
            icon: 'trash'
        },

    ]
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Hot List'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Formik
                    initialValues={{
                        product: "product",
                        brands: 'brands',
                    }}
                    onSubmit={values => {

                    }}
                    validationSchema={AuthScreenSchema}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ width: '80%', alignSelf: 'center', fontSize: 11, marginTop: 20, fontWeight: '500' }}>
                                Add up to 10 products and brands you often buy and you would like to receive a continuous discount alert on them.
                            </Text>
                            <Text style={{ marginLeft: width_screen * 0.03, marginTop: 10 }}>
                                Hot List Items
                            </Text>
                            <View style={{ width: '85%', margin: width_screen * 0.02, height: 360, justifyContent: 'flex-start' }}>
                                <View style={{ borderRadius: 2, borderTopColor: Theme.black, borderWidth: 1, height: height_screen * 0.05, width: '100%' }}>
                                    <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                            Brands
                                        </Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                            Action
                                        </Text>
                                    </View>
                                </View>
                                {
                                    brands.map((item) =>
                                        <View style={{ borderRadius: 2, borderTopColor: Theme.black, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, height: height_screen * 0.05, width: '100%' }}>
                                            <View style={{ flex: 1, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text>
                                                    {item.brandName}
                                                </Text>
                                                <TouchableOpacity onPress={() => alert('delete brand')}>
                                                    <Delete style={{ padding: height_screen * 0.012 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                }
                                <View style={{ position: 'absolute', bottom: 5, width: '100%' }}>
                                    <Text style={{ color: '#D42841', fontSize: 18 }}>
                                        Add to Hot List
                                    </Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 12, marginBottom: 10 }}>
                                        Brands
                                    </Text>
                                    <Field name="brands">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('brands')}
                                                error={meta.touched ? meta.error : null}
                                                // placeHolderText={'Enter email'}
                                                onChangeText={handleChange('brands')}
                                                containerStyle={styles.labelContainer}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.brands}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                    <TouchableOpacity onPress={() => alert('ADD')} style={{ height: 40, marginTop: 10, width: '100%', alignItems: "center", justifyContent: 'center', backgroundColor: Theme.light_red }}>
                                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                                            Add Hotlist
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ width: '85%', margin: width_screen * 0.02, height: 360, justifyContent: 'flex-start', marginTop: 50 }}>
                                <View style={{ borderRadius: 2, borderTopColor: Theme.black, borderWidth: 1, height: height_screen * 0.05, width: '100%' }}>
                                    <View style={{ flex: 1, padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                            Brands
                                        </Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                            Action
                                        </Text>
                                    </View>
                                </View>
                                {
                                    products.map((item) =>
                                        <View style={{ borderRadius: 2, borderTopColor: Theme.black, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, height: height_screen * 0.05, width: '100%' }}>
                                            <View style={{ flex: 1, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text >
                                                    {item.brandName}
                                                </Text>
                                                <TouchableOpacity onPress={() => alert('delete product')}>
                                                    <Delete style={{ padding: height_screen * 0.012 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                }
                                <View style={{ position: 'absolute', bottom: 5, width: '100%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 12, marginBottom: 10 }}>
                                        Product
                                    </Text>
                                    <Field name="product">
                                        {({ meta }) => (
                                            <CustomTextInput
                                                onBlur={handleBlur('product')}
                                                error={meta.touched ? meta.error : null}
                                                // placeHolderText={'Enter email'}
                                                onChangeText={handleChange('product')}
                                                containerStyle={styles.labelContainer}
                                                inputContainerStyle={styles.inputContainer}
                                                textStyle={styles.inputTextStyle}
                                                value={values.product}
                                                isSecure={false}
                                            />
                                        )}
                                    </Field>
                                    <TouchableOpacity onPress={() => alert('ADD')} style={{ height: 40, marginTop: 10, width: '100%', alignItems: "center", justifyContent: 'center', backgroundColor: Theme.light_red, }}>
                                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                                            Add Hotlist
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                            <View style={{ marginBottom: height_screen * 0.4 }} />
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    )
}
export default HotList;