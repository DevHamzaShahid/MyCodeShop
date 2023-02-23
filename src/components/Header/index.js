import React, { memo } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { navigate } from '../../../RootNavigation'
import ROUTES from '../../utils/routes'
import { Theme } from '../../utils/theme'
import styles from './style'
const MainHeader = memo(({ navigation, path }) => {
    return (
        <View style={styles.header_container}>
            <View style={styles.header_icon_row}>
                {
                    path == 'dashboard' ?
                        <TouchableOpacity onPress={() => navigation?.openDrawer()}>
                            <Theme.Menu width={28} height={28} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => navigation?.goBack()}>
                            <Theme.Arrow_Back width={28} height={28} />
                        </TouchableOpacity>
                }
                <TouchableOpacity>

                    <Image
                        source={require('../../assets/scanner.png')}
                        style={styles.header_icon_row_img}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.header_text}>1,000 SHC</Text>
            <View style={styles.header_row}>
                <TouchableOpacity style={styles.header_icon_circle} onPress={() => navigate(ROUTES.Send)}>
                    <View style={styles.header_icon_circle_inner}>
                        <Image
                            source={require('../../assets/share.png')}
                            style={styles.header_icon_row_img}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.header_circle_text}>Send</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.header_icon_circle}>
                    <View style={styles.header_icon_circle_inner}>
                        <Image
                            source={require('../../assets/recevie.png')}
                            style={styles.header_icon_row_img}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.header_circle_text}>Receive</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.BuyshopCoin)
                } style={styles.header_icon_circle}>
                    <View style={[styles.header_icon_circle_inner, { backgroundColor: Theme.light_red }]}>
                        <Image
                            source={require('../../assets/plus.png')}
                            style={styles.header_icon_row_img}
                            resizeMode='contain'
                        />
                    </View>
                    <Text style={styles.header_circle_text}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
})

const DrawerHeader = memo(({ navigation, rightText, name }) => {
    return (
        <View style={styles.drawer_header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Theme.Arrow_Back width={25} height={25} />
            </TouchableOpacity>
            <Text style={styles.drawer_text}>{name}</Text>
            {
                rightText ?
                    <TouchableOpacity>
                        <Text style={styles.done_text}>{rightText}</Text>
                    </TouchableOpacity>
                    :
                    <View></View>
            }
        </View>
    )
})
export { MainHeader, DrawerHeader }