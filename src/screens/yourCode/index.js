import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Barcode from '../../assets/svg/barcode.svg'
import CustomButton from '../../components/CustomButton'
import styles from './style'
import ROUTES from '../../utils/routes'
import { navigate } from '../../../RootNavigation'
import { Theme } from '../../utils/theme'
const YourCode = () => {

    // StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor(Theme.appRed);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Theme.appRed} />
            <View style={styles.bodyContainer}>
                <Barcode />
                <Text style={styles.text1}>Your permanent discount code </Text>
                <Text style={styles.text2}>EVANS01</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/png/sync.png')} style={{ marginTop: 20 }} />
                </TouchableOpacity>
            </View>

            {/* Button */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    onClick={() => navigate(ROUTES.ChooseInterest)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Accept'}
                    textStyle={styles.buttonTextLogin}
                    buttonWidth="100%"
                    buttonHeight={40}
                    // loading={loading}
                    loadingSize={10}
                />
            </View>
        </View>
    )
}

export default YourCode