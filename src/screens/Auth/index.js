import React, { useEffect } from 'react'
import { Text, View, Image, ScrollView, StatusBar } from 'react-native'
import { navigate } from '../../../RootNavigation';
import { SignInCard, GetStartedCard, PasswordCard, NameCard, PhoneCard } from '../../components/Cards/AuthCards';
import ROUTES from '../../utils/routes';
import { Theme } from '../../utils/theme';
import styles from './style';
const AuthScreen = () => {
    const Login = () => {
        navigate(ROUTES.Discount)
    }
   
    return (
        <View style={styles.contain}>
           <ScrollView showsVerticalScrollIndicator={false}>
           <View style={styles.container_inner}>
                <Image
                    source={Theme.logo}
                    style={styles.logoBox}
                    resizeMode='contain'
                />
                <Text style={styles.text}>Login Or Create Account</Text>
                {/* <PhoneCard /> */}
                <SignInCard Login={Login} />
            </View>
            
           </ScrollView>
        </View>
    )
}
export default AuthScreen;
