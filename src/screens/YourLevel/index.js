import { View, Text } from 'react-native'
import React from 'react'
import Level from '../../assets/svg/levelStat.svg';
import Char from '../../assets/svg/char.svg';
import { Theme } from '../../utils/theme';
const YourLevel = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20,backgroundColor:Theme.white }}>
            <Text numberOfLines={3} style={{ fontSize: 16, textAlign: 'justify',color:Theme.black }}>You are at level 3, Enjoy our highest discounts and most exclusive deals in every corner of the world.</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 60 }}>
                <Level width={'98%'}/>
                <Text style={{ fontSize: 28, textAlign: 'center', fontWeight: '500', marginVertical: 20,color:Theme.black }}>
                    Enjoy your deals you’ve earned them !
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 20 ,color:Theme.black}}>
                    Enjoy free life time access to level 03 {'\n'}discount at participating shops worldwide
                </Text>
            <Char/>
            </View>
        </View>
    )
}

export default YourLevel