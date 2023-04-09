import React from 'react'
import { Text, View, Image } from 'react-native'
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
            <View style={styles.container_inner}>
                <Image
                    source={Theme.logo}
                    style={styles.logoBox}
                    resizeMode='contain'
                />
                <Text>Shopping reward for everyone</Text>
                {/* <PhoneCard /> */}
                <SignInCard Login={Login} />
            </View>
        </View>
    )
}
export default AuthScreen;
