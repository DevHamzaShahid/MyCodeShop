import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { Theme } from '../../utils/theme'
import { SignInCard } from '../../components/Cards/AuthCards'
import Sync from '../../assets/sync.svg'
import { navigate } from '../../../RootNavigation'
import ROUTES from '../../utils/routes'
const Discount = () => {

    return (
        <View style={styles.contain}>
            <View style={styles.container_inner}>
                <Image
                    source={Theme.logo}
                    style={styles.logoBox}
                    resizeMode='contain'
                />
                <Text style={{marginTop:60}}>Your permanent discount code</Text>
                <View style={styles.code_container}>
                    <Text style={styles.code_text}>BHAJBV67vhg6</Text>
                    <Sync />
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigate(ROUTES.Interest)} style={styles.button_container}>
                <Text style={styles.button_text}>
                    Accept
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Discount