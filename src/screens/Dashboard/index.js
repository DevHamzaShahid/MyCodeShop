import React, { useEffect, useState, useRef } from 'react'
import { View, Image, TouchableOpacity, Text, Animated } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { MainHeader } from '../../components/Header';
import { TransactionHistory } from '../../components/Renders';
import styles from './style';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import { Theme } from '../../utils/theme';

const Dashboard = ({ navigation }) => {

    const animation = new Animated.Value(0)
    useEffect(() => {
        Animated.spring(animation, {
            toValue: 20,
            friction: 0,
            tension: 10,
            useNativeDriver: true,
        }).start()
    }, [])

    const trans = {
        transform: [
            {
                translateY: animation
            }
        ]
    }
    return (
        <View style={styles.contain}>
            <MainHeader navigation={navigation} path={'dashboard'} />
            <View style={styles.mid_container}>
                <View style={styles.tab_header}>
                    <TouchableOpacity style={styles.tab_box}>
                        <Text style={styles.tab_text}>Transaction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab_box}>
                        <Text style={styles.tab_text}>Marketplace</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigate(ROUTES.ViewBusiness)}>
                    <Text style={styles.busineses_text}>View Busineses</Text>
                </TouchableOpacity>
                <TransactionHistory name={'Earn'} points={'+10SHC'} date={'December 30,2022'} />
                <TransactionHistory name={'Earn'} points={'+10SHC'} />
                <TransactionHistory name={'Earn'} points={'+10SHC'} />

                <TransactionHistory name={'Earn'} points={'+10SHC'} date={'December 30,2022'} />
                <TransactionHistory name={'Earn'} points={'+10SHC'} />
                <TransactionHistory name={'Earn'} points={'+10SHC'} />
            </View>
            <View style={styles.refer_btn}>
                <Text style={styles.refer_text}>Refer & Get 100 SHC</Text>
            </View>
            <View style={styles.coin_btn}>
                <Animated.Image
                    source={Theme.coinIcon}
                    style={[styles.coin_img, trans]}
                    resizeMode='contain'
                />
                <Text style={styles.coin_text}>Tap to earn Shopcoin</Text>
            </View>
        </View>
    )
}
export default Dashboard;
