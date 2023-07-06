import { View, Text, Image, Slider, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Scan from '../../assets/svg/Scan.svg'
import styles from './style';
import Info from '../../assets/svg/personalInfo.svg';
import Notification from '../../assets/svg/notification.svg';
import Transaction from '../../assets/svg/transaction.svg';
import Security from '../../assets/svg/Security.svg';
import Faq from '../../assets/svg/FAQ.svg';
import Logout from '../../assets/svg/logout.svg';
import Cancel from '../../assets/svg/cancelAccount.svg';
import Arrow from '../../assets/svg/rightArrow.svg';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import LaptopIcon from '../../assets/svg/laptopIcon.svg';
import { Theme } from '../../utils/theme';
import QR from '../../assets/svg/AlertQR.svg'
import SelectedQRbtn from '../../assets/svg/selectQRButton.svg';
import DownloadQRBtn from '../../assets/svg/downloadQR.svg'
const list = [
    {
        id: '0',
        name: 'Company Profile',
        arrow: Arrow,
        leftIcon: Info,
        route: ROUTES.CompanyProfile
    },
    {
        id: '1',
        name: 'Notification',
        arrow: Arrow,
        leftIcon: Notification,
        route: ROUTES.Notification

    },
    {
        id: '3',
        name: 'Security',
        arrow: Arrow,
        leftIcon: Security,
        route: ROUTES.Security

    },
    {
        id: '4',
        name: 'FAQ',
        arrow: Arrow,
        leftIcon: Faq,
        route: ROUTES.FAQ

    },
    {
        id: '5',
        name: 'Log Out',
        // arrow: Arrow,
        leftIcon: Logout,
        route: ROUTES.BuisnessRegistration

    },


]
const BuisnessAccount = () => {
    const [value, setValue] = useState(25);
    const [onCancel, setOnCancel] = useState(false);

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <View style={styles.container}>
            {
                onCancel &&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <QR style={{ marginVertical: 20 }} />
                        <Text style={styles.heading}>
                            Your QR code
                        </Text>
                        <Text style={styles.desc}>
                            You can scan or download your qr {'\n'}code.
                        </Text>

                        <TouchableOpacity onPress={() => setOnCancel(false)} style={styles.yes}>
                            <SelectedQRbtn />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setOnCancel(false)} style={styles.no}>
                            <DownloadQRBtn />
                        </TouchableOpacity>
                    </View>
                </View>
            }
            <View style={{ marginHorizontal: 15 }}>
                {/* header */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Image source={require('../../assets/png/logo.png')} style={{ height: 30, width: 30, marginLeft: 20 }} resizeMode='contain' />
                    <Text style={{ fontSize: 18, color: Theme.black, fontWeight: '600', position: 'absolute', marginLeft: 70 }}>Account</Text>
                    <TouchableOpacity>
                        <Scan />
                    </TouchableOpacity>
                </View>

                {/* <Text style={{ fontSize: 22, fontWeight: '600', marginVertical: 15 }}>
                    EVANS01
                </Text>
                <Text>
                    Youremail@gmail.com
                </Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={50}
                        step={1}
                        value={value}
                        onValueChange={handleValueChange}
                        minimumTrackTintColor="#ff0000"
                        thumbTintColor="#ff0000"
                        thumbImage={() => <Scan />}
                    />
                </View> */}
                {/* list */}
                <ScrollView style={{ marginVertical: 50 }}>
                    <View style={{ borderBottomColor: Theme.appRed, borderBottomWidth: 0.4, width: '90%', marginBottom: 20, alignSelf: 'center' }} />
                    {
                        list.map((item) => {
                            return (
                                <TouchableOpacity onPress={() => { if (item.name != 'Log Out') { navigate(item.route) } else { setOnCancel(true) } }} style={{ width: '90%', height: 60, marginVertical: 10, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <item.leftIcon />
                                    <Text style={{ fontSize: 14, fontWeight: '500', position: 'absolute', marginLeft: 80, color: Theme.black }}>
                                        {item.name}
                                    </Text>
                                    {item.arrow && <item.arrow />}
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default BuisnessAccount