import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'

const AddShopDeal = () => {
    return (
        <View style={{flex:1, alignItems: 'center' }}>
            <Image source={require('../../assets/logo.png')} style={{ height: 150, width: 150, marginTop: 150 }} resizeMode='contain' />
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: Theme.black, backgroundColor: '#0AC82A',height:30,width:'60%',borderRadius:6,position:'absolute',bottom:80}}>
                <Text style={{ fontWeight: 'bold' }}>Add to shop deals</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddShopDeal