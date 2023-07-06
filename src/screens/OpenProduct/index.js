import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme';
import Microsoft from '../../assets/svg/MicrosoftIcon.svg'
import Arrow from '../../assets/svg/arrow.svg'
import Apple16 from '../../assets/svg/apple16inch.svg'
import Clock from '../../assets/svg/TimeCircle.svg'
import styles from './style';
const products = [
    {
        id: '0',
        logo: Apple16,
        name: 'Laptop',
        time: '09:58:06',
        price: '30£'
    },
    {
        id: '1',
        logo: Apple16,
        name: 'Laptop',
        time: '09:58:06',
        price: '30£'
    },
    {
        id: '2',
        logo: Apple16,
        name: 'Laptop',
        time: '09:58:06',
        price: '30£'
    },
    {
        id: '3',
        logo: Apple16,
        name: 'Laptop',
        time: '09:58:06',
        price: '30£'
    },
    {
        id: '4',
        logo: Apple16,
        name: 'Laptop',
        time: '09:58:06',
        price: '30£'
    }
]
const OpenProduct = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, marginBottom: '22%' }}>

                {/* product image */}
                <View style={styles.mainImage}>
                    <Image source={require('../../assets/png/productRotation.png')} style={{ width: '90%' }} resizeMode='contain' />
                </View>
                {/* product heading  */}
                <View style={styles.heading}>
                    <Microsoft height={40} width={40} />
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: Theme.black }}>
                            Microsoft Surface Laptop I5
                        </Text>
                        <Text style={{ color: Theme.black, fontWeight: '300' }}>
                            Official Microsoft Store
                        </Text>
                    </View>
                </View>
                {/* heading price */}
                <View style={styles.priceContainer}>
                    <View style={styles.offPrice}>
                        <Text style={{ fontSize: 12, color: '#058D13' }}>
                            60£ OFF
                        </Text>
                    </View>
                    <Text style={styles.actuallPrice}>
                        260£
                    </Text>
                    <Arrow style={{}} />
                    <Text style={{ fontWeight: '600', color: Theme.black }}>
                        200£
                    </Text>
                </View>
                {/* description */}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.desc_heading}>
                        Description
                    </Text>
                    {/* <Text numberOfLines={2} style={{ color: Theme.black, fontWeight: '300' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore view more...
                    </Text> */}
                    <Text numberOfLines={2} style={{ color: Theme.black, fontWeight: '300', fontSize: 12 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <Text style={{ fontWeight: '800', fontSize: 12, color: Theme.black }}>view more</Text>...
                    </Text>
                </View>
                {/* product list */}
                <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 25, marginBottom: 10, color: Theme.black }}>Related Deals</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        products.map((item) => {
                            return (
                                <View style={styles.productListContainer}>
                                    <View style={{ backgroundColor: '#F3F3F3', padding: 10, borderRadius: 10 }}>
                                        <item.logo />
                                    </View>
                                    <Text style={{ fontWeight: '700', marginTop: 8, color: Theme.black }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <Clock />
                                        <Text>
                                            {item.time} |
                                        </Text>
                                        <View style={styles.productPriceContainer}>
                                            <Text style={styles.listPrice}>
                                                {item.price} OFF
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </ScrollView>

            {/* Buynow button container */}
            <View style={styles.bottomContainer}>
                <View style={styles.bottomPriceContainer}>
                    <Text style={{ color: '#757575' }}>
                        Final Price
                    </Text>
                    <Text style={styles.finalPrice}>
                        1200£
                    </Text>
                </View>
                <TouchableOpacity style={styles.bottomButtonContainer}>
                    <Text style={styles.buynowText}>
                        Buy Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OpenProduct