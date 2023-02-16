import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import CustomTextInput from '../../components/CustomTextInput';
import { MainHeader } from '../../components/Header';
import { BusinessCard, TransactionHistory } from '../../components/Renders';
import styles from './style';

const ViewBusiness = ({ navigation }) => {
    return (
        <View style={styles.contain}>
            <MainHeader navigation={navigation} />
            <View style={styles.mid_container}>
                <View style={styles.box_busines}>
                    <Text style={styles.text_busines}>Businesses</Text>
                    <CustomTextInput
                        // onBlur={handleBlur('email')}
                        // error={meta.touched ? meta.error : null}
                        placeHolderText={'Search Business'}
                        // onChangeText={handleChange('email')}
                        containerStyle={styles.labelContainer}
                        inputContainerStyle={styles.inputContainer}
                        textStyle={styles.inputTextStyle}
                        // value={values.email}
                        isSecure={false}
                    //     rightIcon={<EMAIL_ICON height={18} width={18} />
                    // }
                    />
                </View>

                <BusinessCard name={'Currys'} />
                <BusinessCard name={'Harvey'} />
                <BusinessCard name={'Shein'} />
                <BusinessCard name={'ZARA'} />
                <BusinessCard name={'Vans'} />
                <BusinessCard name={'Mark and Spencer'} />
                <BusinessCard name={'JD'} />
                <BusinessCard name={'Currys'} />
                <BusinessCard name={'Harvey'} />
                <BusinessCard name={'Shein'} />
            </View>
        </View>
    )
}
export default ViewBusiness;
