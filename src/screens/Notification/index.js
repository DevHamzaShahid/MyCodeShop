import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { height_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
import styles from './style';
const Notification = ({ navigation }) => {
    const [enable, SetEnable] = useState(false)
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Notification'} />
            <View style={{ padding: 6 }}>

                <View style={styles.box_container}>
                    <View>
                        <Text style={styles.main_text}>Push Notifications</Text>
                        <Text style={styles.bottom_text}>Get notified once promotion and hot listed item is available</Text>
                    </View>
                    <Switch
                        trackColor={'#666666'}
                        thumbColor={Theme.white}
                        ios_backgroundColor='#666666'
                        onValueChange={(value) => SetEnable(value)}
                        value={enable}
                    />
                </View>

                <View style={styles.box_container}>
                    <View>
                        <Text style={styles.main_text}>Send and Receive</Text>
                        <Text style={styles.bottom_text}>You will be notified or sent and receive transaction</Text>
                    </View>
                    <Switch
                        trackColor={'#666666'}
                        thumbColor={Theme.white}
                        ios_backgroundColor='#666666'
                        onValueChange={(value) => SetEnable(value)}
                        value={enable}
                    />
                </View>


                <View style={styles.box_container}>
                    <View>
                        <Text style={styles.main_text}>Product Anouncement</Text>
                        <Text style={styles.bottom_text}>Be the first to know about ur newest features</Text>
                    </View>
                    <Switch
                        trackColor={'#666666'}
                        thumbColor={Theme.white}
                        ios_backgroundColor='#666666'
                        onValueChange={(value) => SetEnable(value)}
                        value={enable}
                    />
                </View>



            </View>
        </View>
    )
}
export default Notification;