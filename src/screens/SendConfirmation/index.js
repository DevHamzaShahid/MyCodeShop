import React from 'react'
import { View, Text, Image } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { DrawerHeader } from '../../components/Header';
import { height_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
import styles from './style';
const SendConfirmation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Currys'} />
            <View style={{ flex: 1, marginVertical: height_screen * 0.15, alignItems: 'center' }}>
                <View style={{ width: '65%', }}>
                    <Text style={{ alignSelf: 'center', marginBottom: height_screen * 0.07 }}>Select Shopcoin or Point</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={Theme.coinIcon}
                                style={styles.coin_img}
                                resizeMode='contain'
                            />
                            <Text>Shopcoin</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={styles.black_coin}
                            />
                            <Text style={{ paddingTop: 15 }}>Point</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.buttonView}>
                <CustomButton
                    //  onClick={() => Login()}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Send'}
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
export default SendConfirmation;