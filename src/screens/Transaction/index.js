import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import SearchIcon from '../../assets/svg/search_grey.svg';
import Filter from '../../assets/svg/filter.svg';
import styles from './style';
import Icon from '../../assets/svg/lapp.svg'
import { Theme } from '../../utils/theme';
const data = [
    {
        Id: '1234',
        offertype: 'Discount',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '56738',
        offertype: 'Coupon',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '90132',
        offertype: 'Deal',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '12344',
        offertype: 'Discount',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '56758',
        offertype: 'Coupon',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '9012',
        offertype: 'Deal',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '123c4',
        offertype: 'Discount',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '56c78',
        offertype: 'Coupon',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
    {
        Id: '90ed12',
        offertype: 'Deal',
        productname: 'Mac Book Pro',
        date: 'Jan 14, 2023',
        icon: Icon,
        price: '1200£'
    },
];

const Transaction = () => {
const [value,setValue]=useState('')
    return (
        <View style={styles.container}>
            <View style={{ width: '92%' }}>
                <CustomTextInput
                    onBlur={() => { return null }}
                    placeHolderText={'Search'}
                    onChangeText={() => setValue(value)}
                    containerStyle={styles.labelContainer}
                    inputContainerStyle={styles.inputContainer}
                    textStyle={{ paddingLeft: 15 }}
                    isSecure={false}
                    // value={value}
                    leftIcon={<SearchIcon />}
                    rightIcon={<Filter />}
                />
            </View>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                {
                    data.map((item) => {
                        return (
                            <View style={styles.listContainer}>
                                <View style={styles.Icon}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 60, borderRadius: 30, width: 60, backgroundColor: '#F3F3F3' }}>
                                        <item.icon />
                                    </View>
                                </View>
                                <View style={styles.itemBody}>
                                    <Text style={styles.productName}>
                                        {item.productname}
                                    </Text>
                                    <TouchableOpacity style={styles.saveButton}>
                                        <Text style={{color:Theme.black}}>
                                            save
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.dateView}>
                                        122456515874 | {item.date}
                                    </Text>
                                </View>
                                <View style={styles.lastContainer}>
                                    <Text style={styles.price}>
                                        {item.price}
                                    </Text>
                                    <TouchableOpacity style={styles.download}>
                                        <Text style={styles.downloadText}>
                                            Download
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};
export default Transaction