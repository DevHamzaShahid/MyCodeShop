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
import AlertCancel from '../../assets/svg/alertCancel.svg';
import { Theme } from '../../utils/theme';
import { ProgressBar, useTheme } from 'react-native-paper';
import { round } from 'react-native-reanimated';

const list = [
    {
        id: '0',
        name: 'Personal Info',
        arrow: Arrow,
        leftIcon: Info,
        route: ROUTES.EditProfile
    },
    {
        id: '1',
        name: 'Notification',
        arrow: Arrow,
        leftIcon: Notification,
        route: ROUTES.Notification

    },
    {
        id: '2',
        name: 'Transaction',
        arrow: Arrow,
        leftIcon: Transaction,
        route: ROUTES.Transaction

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
    {
        id: '6',
        name: 'Cancel Account',
        route: ROUTES.Notification,
        // arrow: Arrow,
        leftIcon: Cancel,
    },

]
const Profile = () => {
    const [value, setValue] = useState(25);
    const [onCancel, setOnCancel] = useState(false);

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };
    const RoundedProgressBar = ({ progress, color, style }) => {
        return (
          <View style={[style, { borderRadius: 100, overflow: 'hidden' }]}>
            <ProgressBar progress={progress} color={color} style={{ height: '100%' }} />
          </View>
        );
      };
    return (
        <View style={styles.container}>
            {
                onCancel &&
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <AlertCancel height={150} width={150} style={{ marginVertical: 20 }} />
                        <Text style={styles.heading}>
                            Cancel Account
                        </Text>
                        <Text style={styles.desc}>
                            Are you sure you want to cancel your account?
                        </Text>
                        <TouchableOpacity onPress={() => setOnCancel(false)} style={styles.yes}>
                            <Text style={styles.yesText}>
                                Yes
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setOnCancel(false)} style={styles.no}>
                            <Text style={styles.noText}>
                                No
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            <ScrollView style={{ marginBottom: 80 }}>
                <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                    {/* header */}
                    <View style={{ paddingLeft: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../../assets/png/logo.png')} style={{ height: 30, width: 30 }} resizeMode='contain' />
                        <Text style={{ fontSize: 18, fontWeight: '600', color: Theme.black, position: 'absolute', marginLeft: 60 }}>Account</Text>
                        <TouchableOpacity onPress={() => navigate(ROUTES.YourLevel)}>
                            <Scan />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 22, fontWeight: '600', marginVertical: 15, color: Theme.black, paddingLeft: 15 }}>
                        EVANS01
                    </Text>
                    <Text style={{ color: Theme.black, paddingLeft: 15 }}>
                        Youremail@gmail.com
                    </Text>
                    <View style={styles.sliderContainer}>
                        {/* <ProgressBar progress={0.65} color={Theme.appRed} style={{ height: 20, borderRadius:20}} /> */}
                        <RoundedProgressBar progress={0.65} color={Theme.appRed} style={{ height: 20 }} />
                        <View style={{ position: 'absolute', alignSelf: 'center' }}>
                            <Text style={{ color: Theme.white, fontWeight: 'bold', fontSize: 12 }}>Level 2</Text>
                        </View>
                    </View>
                    {/* list */}
                    {
                        list.map((item) => {
                            return (
                                <TouchableOpacity onPress={() => { if (item.name != 'Cancel Account') { navigate(item.route) } else { setOnCancel(true) } }} style={{ width: '90%', height: 60, marginVertical: 10, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <item.leftIcon />
                                    <Text style={{ fontSize: 14, fontWeight: '500', position: 'absolute', marginLeft: 80, color: Theme.black }}>
                                        {item.name}
                                    </Text>
                                    {item.arrow && <item.arrow />}
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile;