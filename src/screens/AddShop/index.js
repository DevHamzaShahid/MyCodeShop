import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Qrcode from '../../assets/svg/qrscanner.svg';
import Scanner from '../../assets/svg/ScanWhite.svg'
import QrRectangle from '../../assets/svg/QrRectangle.svg'
import styles from './style';
import Arrow from '../../assets/svg/arrowBack.svg'
import { navigate } from '../../../RootNavigation';
const AddShop = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 20, marginVertical: 5 ,marginTop:20}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{ alignSelf: 'center' }}>
                <Arrow />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Add Shop
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 10, }}>
                <Text style={styles.heading}>
                    Enter code manually
                </Text>
            </View>
            <View style={styles.qrContainer}>
                <QrRectangle style={styles.qrBars} width={'90%'} />
                <Qrcode />
                <Text numberOfLines={2} style={styles.bodyText}>
                    Scan the QR code of the shop you want to add to your list
                </Text>
            </View>
            <TouchableOpacity style={styles.bottomContainer}>
                <Scanner style={styles.scannerIcon} />
                <Text style={styles.buttonText}>
                    Scan QR Code
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddShop