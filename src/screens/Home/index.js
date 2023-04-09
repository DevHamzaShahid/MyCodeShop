import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Theme } from '../../utils/theme';
import CustomTextInput from '../../components/CustomTextInput';
import { useFocusEffect } from '@react-navigation/core';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';

const CARD_WIDTH = '100%';
const CARD_HEIGHT = 70;

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

const Card = ({ item, setShowSearchBar }) => {
    const image_source = require('../../assets/deal.png')
    return (
        <TouchableOpacity onPress={() => setShowSearchBar(true)} style={styles.card}>
            <Image style={styles.image} resizeMode='contain' source={image_source} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.footer_container}>
                <Text style={styles.footer}>{item.footer}</Text>
                <Text style={styles.footer2}>{item.footer2}</Text>
                <Text style={styles.expiry}>{item.expiry}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Home = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)

    return (
        <>
            <View style={{flexDirection:'row',marginTop:8,justifyContent:'space-between'}}>
            <Text style={{ paddingLeft: 20 }}>
                Filters
            </Text>
            <TouchableOpacity onPress={()=>navigate(ROUTES.BuyNow)}>
            <Text style={{paddingRight:20}}>
                Products
            </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {showSearchBar &&
                    <TouchableOpacity onPress={() => setShowSearchBar(false)} style={{ position: 'absolute', zIndex: 2, width: '100%', height: '100%', justifyContent: 'center' }}>
                        <CustomTextInput placeHolderText={"What are you looking for?"} inputContainerStyle={{ borderRadius: 10, borderColor: 'red', borderWidth: 2, height: 50 }} />
                    </TouchableOpacity>
                }
                <FlatList
                    data={cards}
                    renderItem={({ item }) => <Card item={item} setShowSearchBar={setShowSearchBar} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 4,
        borderColor: Theme.grey,
        borderWidth: 1,
        borderRadius: 8,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: '25%',
        height: '90%',
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        justifyContent: 'center',
        width: "53%"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 4,
    },
    description: {
        fontSize: 8,
        color: '#666',
    },
    footer_container: {

        height: 60,
        width: '20%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    footer: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold'
    },
    footer2: {
        fontSize: 8,
        color: Theme.dark_orange,
    },
    expiry: {
        fontSize: 10,
        color: 'gold',
    },
});

export default Home;
