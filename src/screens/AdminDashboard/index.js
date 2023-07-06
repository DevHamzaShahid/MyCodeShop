import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Bell from '../../assets/svg/NotificationAdmin.svg'
import { Theme } from '../../utils/theme'
import Reach from '../../assets/svg/TotalReach.svg';
import Clicks from '../../assets/svg/TotalClicks.svg';
import Sales from '../../assets/svg/TotalSales.svg';
import Followers from '../../assets/svg/followers.svg';
import Avatar from '../../assets/svg/adminListAvatar.svg';
import Edit from '../../assets/svg/Edit.svg';
import Cursor from '../../assets/svg/cursor.svg';

const duration = [
    {
        id: '1',
        text: '1D',
        selected: false
    },
    {
        id: '2',
        text: '1W',
        selected: false
    },
    {
        id: '3',
        text: '1M',
        selected: true
    },
    {
        id: '4',
        text: '3M',
        selected: false
    },
    {
        id: '5',
        text: '1Y',
        selected: false
    },
    {
        id: '6',
        text: '5Y',
        selected: false
    },
]
const AdminDashboard = () => {
    StatusBar.setBackgroundColor('#ED521E');
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ backgroundColor: '#ED521E', width: '100%', borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
                {/* header */}
                <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Image source={require('../../assets/png/logo.png')} style={{ height: 30, width: 30 }} />
                    <TouchableOpacity>
                        <Bell />
                    </TouchableOpacity>
                    <View style={{ height: '150%', position: 'absolute', marginLeft: 50, top: -10 }}>
                        <Text style={{ fontSize: 14, color: Theme.white, paddingBottom: 4 }}>
                            Welcome 👋
                        </Text>
                        <Text style={{ fontSize: 20, color: Theme.white, fontWeight: '600', paddingTop: 4 }}>
                            CURRYS
                        </Text>
                    </View>
                </View>

                {/* body */}
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, width: '40%' }}>
                        <Reach />
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: Theme.white, marginVertical: 5 }}>
                                Total Reach
                            </Text>
                            <Text style={{ fontSize: 18, color: Theme.white, fontWeight: '700' }}>
                                200
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, width: '40%' }}>
                        <Clicks />
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: Theme.white, marginVertical: 5 }}>
                                Total Clicks
                            </Text>
                            <Text style={{ fontSize: 18, color: Theme.white, fontWeight: '700' }}>
                                50
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, width: '40%' }}>
                        <Sales />
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: Theme.white, marginVertical: 5 }}>
                                Total Sales
                            </Text>
                            <Text style={{ fontSize: 18, color: Theme.white, fontWeight: '700' }}>
                                €1500
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, width: '40%' }}>
                        <Followers />
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: Theme.white, marginVertical: 5 }}>
                                Followers
                            </Text>
                            <Text style={{ fontSize: 18, color: Theme.white, fontWeight: '700' }}>
                                402
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Duration */}

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 20 }}>
                    {duration.map((item) => {
                        return (
                            <TouchableOpacity style={{ backgroundColor: item.selected ? Theme.white : Theme.appRed, width: 40, height: 30, alignItems: 'center', margin: 6, justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: item.selected ? Theme.appRed : Theme.white, }}>
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            {/* list */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
                {duration.map(() => {
                    return (
                        <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 18, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: 'pink', flexDirection: 'row', height: 120, alignSelf: 'center' }}>
                            {/* start view */}
                            <View style={{ width: '20%', height: 120, alignItems: 'center', justifyContent: 'center' }}>
                                <Avatar />
                            </View>
                            {/* center view */}
                            <View style={{ width: '65%', height: 120, justifyContent: 'space-evenly' }}>
                                <Text style={{ fontSize: 22, fontWeight: '500', color: Theme.black }}>
                                    Title
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#ECECEC', height: 28, marginHorizontal: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: Theme.black, paddingHorizontal: 5, fontSize: 10 }}>
                                            30 days
                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#ECECEC', height: 28, marginHorizontal: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: Theme.black, paddingHorizontal: 5, fontSize: 10 }}>
                                            Reach : 800
                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#ECECEC', height: 28, marginHorizontal: 4, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: Theme.black, paddingHorizontal: 5, fontSize: 10 }}>
                                            Purchase : 400
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: Theme.black, paddingHorizontal: 4, fontSize: 16 }}>
                                        100% discount |
                                    </Text>
                                    <TouchableOpacity>
                                        <Cursor />
                                    </TouchableOpacity>
                                    <Text style={{ color: Theme.black, paddingHorizontal: 4, fontSize: 16 }}>
                                        30 Clicks
                                    </Text>
                                </View>
                            </View>
                            {/* end view */}
                            <View style={{ width: '15%', height: 80, alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity>
                                    <Edit />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#F86161', height: 30, width: '100%', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: Theme.white, fontSize: 12, fontWeight: '500' }}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default AdminDashboard
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30
    },

});