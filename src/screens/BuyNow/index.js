import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import Scanner from '../../assets/scanner.svg'
import { Theme } from '../../utils/theme'
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
const cards = [
    {
        id: '1',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: '30% OFF',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '2',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: 'Price for 2',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '3',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: 'Buy 1 get 1',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '4',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: '30% OFF',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '5',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: 'Price for 2',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '6',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: 'Buy 1 get 1',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '7',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: '30% OFF',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '8',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: 'Price for 2',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
    {
        id: '9',
        title: 'Microsoft Surface Laptop 4 13" 15',
        description: 'Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade.',
        footer: 'Buy 1 get 1',
        footer2: 'limited offer',
        expiry: '2:32:00'
    },
];
const Card = ({ item }) => {
    const image_source = require('../../assets/products.png')
    return (
        <View style={{ marginTop: 10, padding: 15 }}>
            <View style={{ hegiht: 105, width: 150, borderWidth: 1, borderColor: Theme.black, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={image_source} style={{ height: 100, width: 140 }} resizeMode='contain' />
            </View>
            <View style={{ width: 150, marginTop: 5, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 7 }}>
                    Microsoft Surface Laptop 4 13" i5
                </Text>
                <Text style={{ textAlign: 'justify', fontSize: 7, marginTop: 5 }}>
                    Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade to Windows 11 1 (when available, see below) 1Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device. Certain features require specific hardware, see Windows Specifications.
                </Text>
                <Text style={styles.footer}>{item.footer}</Text>
                <Text style={styles.footer2}>{item.footer2}</Text>
                <Text style={styles.expiry}>{item.expiry}</Text>
            </View>
        </View>
    );
};
const BuyNow = () => {
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(() => {
          navigation.setOptions({ tabBarVisible: false });

          return () => {
              navigation.setOptions({ tabBarVisible: true });
          };
        }, [])
      );
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 50 }}>
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigate(ROUTES.AddShopDeal)} style={styles.header_icon}>
                    <Scanner />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/deal.png')} style={{ height: 300, width: 300 }} resizeMode='contain' />
                    <Text style={styles.heading}>
                        Microsoft Surface Laptop 4 13" i5
                    </Text>
                    <View style={styles.description_container}>
                        <Text style={styles.description}>
                            Microsoft Surface Laptop 4 13" i5 | 8GB | 512GB | Standstone Free Upgrade to Windows 11 1 (when available, see below) 1Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device. Certain features require specific hardware, see Windows Specifications.
                        </Text>
                    </View>
                    <View style={styles.price_container}>
                        <Text style={styles.pre_price}>
                            260 euros
                        </Text>
                        <Text style={styles.current_price}>
                            200 euros
                        </Text>
                    </View>
                    {/* Buy now button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.button_text}>
                            Buy now
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 20 }}>
                        Related deals
                    </Text>
                    <FlatList
                        data={cards}
                        renderItem={({ item }) => <Card item={item} />}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header_icon:{ zIndex: 2, position: "absolute", right: 5},
    heading:{ fontWeight: "bold", fontSize: 16 },
    description_container:{ width: '90%', alignItems: 'center', marginTop: 10 },
    description:{ textAlign: 'justify', fontSize: 12 },
    price_container:{ flexDirection: 'row', marginTop: 10 },
    pre_price:{ textDecorationLine: 'line-through', fontWeight: "bold", color: 'red', right: 10 },
    button:{ backgroundColor: '#FFBB25', marginTop: 20, alignItems: 'center', justifyContent: 'center', width: '60%', height: 40, borderRadius: 5, borderColor: Theme.black, borderWidth: 1 },
    current_price:{ fontWeight: "bold", left: 10 },
   button_text:{ fontWeight: 'bold', fontSize: 20 },
    footer: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    },
    footer2: {
        fontSize: 12,
        color: Theme.dark_orange,
    },
    expiry: {
        fontSize: 14,
        color: 'gold',
    },
})
export default BuyNow