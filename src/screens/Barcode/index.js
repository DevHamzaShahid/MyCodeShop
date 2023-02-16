import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { MainHeader } from '../../components/Header';
import { RenderProduct } from '../../components/Renders';
import styles from './style';

const BarcodeScreen = () => {
    return (
        <View style={styles.contain}>
            <MainHeader />
            <View style={styles.mid_container}>
                <View style={styles.mid_inner}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo_img}
                        resizeMode='contain'
                    />
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.barcode_img}
                        resizeMode='contain'
                    />
                    <Text style={styles.barcode_text}>560GTBCxs2</Text>
                    <View style={styles.buttonView}>
                        <CustomButton
                            //  onClick={() => Login()}
                            containerStyle={styles.buttonContainerLogin}
                            title={'Enter code'}
                            textStyle={styles.buttonTextLogin}
                            buttonWidth={"22%"}
                            buttonHeight={20}
                            // loading={loading}
                            loadingSize={10}
                        />
                    </View>
                </View>
                <RenderProduct name="Harvey Noman" />
                <RenderProduct name="Lidl" />
                <RenderProduct name="Argos" />
                <RenderProduct name="JD" />
                <RenderProduct name="Diesel" />
                <RenderProduct name="Jack and Jones" />
                <RenderProduct name="Timberland" />
                <RenderProduct name="Harvey Noman" />
            </View>
            <View style={styles.refer_btn}>
                <Text style={styles.refer_text}>Refer & Get 100 SHC</Text>
            </View>
        </View>
    )
}
export default BarcodeScreen;
