import { View, Text, Slider, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { DrawerHeader } from '../../components/Header';
import { Image } from 'react-native';
const Level = ({ navigation }) => {
    const [value, setValue] = useState(3);

    return (
        <>
            <DrawerHeader navigation={navigation} name={'Level'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 20 ,marginBottom:50}}>
                    {/* 1st card */}
                    <View style={{ borderColor: '#FFE09D', borderWidth: 1.5, width: '90%', padding: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            You're at Level 3,
                            Enjoy our highest discounts and most exclusive deals in every corner of the world.
                        </Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={3}
                            step={1}
                            value={value}
                            onValueChange={(val) => setValue(val)}
                            minimumTrackTintColor="#F8AF12"
                            maximumTrackTintColor="##F8AF12"
                            thumbTintColor="#F8AF12"
                            thumbProps={{
                                children: (
                                    <Text style={styles.thumbText}>
                                        {value}
                                    </Text>
                                ),
                                style: styles.thumb,
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>level 0</Text>
                            <Text>level 3</Text>
                        </View>
                    </View>

                    {/* deal box container */}
                    <View style={{ marginTop: 30, }}>
                        <Text style={{ textAlign: 'center', lineHeight: 20 }}>
                            Enjoy your deals – you've earned them!
                            Enjoy free lifetime access to Level 3 discount at participating shops worldwide.
                        </Text>
                        {/* deal boxes level 1*/}
                        <View style={{ borderWidth: 2, alignItems: 'center', borderColor: '#F8AF12', marginTop: 50, borderRadius: 20}}>
                            {/* deal heading */}
                            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8AF12', height: 20, borderRadius: 10, top: -10 }}>
                                <Text>
                                    Level 1
                                </Text>
                            </View>
                            <Text style={{ textAlign: 'center' }}>
                                Enjoy this level at participating shops worldwide upon completing your profile
                            </Text>
                            {/* icons with text */}
                            <View style={{ marginTop: 20 }} />
                            <View style={{ flexDirection: 'row', width: '60%' }}>
                                <Image source={require('../../assets/deal_level.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Limited deal offers</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '60%', marginTop: 10, marginBottom: 20 }}>
                                <Image source={require('../../assets/interest.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>5 Interests</Text>
                            </View>
                        </View>

                        {/* leve2 */}
                        <View style={{ borderWidth: 2, alignItems: 'center', borderColor: '#F8AF12', marginTop: 50, borderRadius: 20 }}>
                            {/* deal heading */}
                            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8AF12', height: 20, borderRadius: 10, top: -10 }}>
                                <Text>
                                    Level 2
                                </Text>
                            </View>
                            <Text style={{ textAlign: 'center' }}>
                                Enjoy this level at participating shops worldwide upon completing your profile
                            </Text>
                            {/* icons with text */}
                            <View style={{ marginTop: 20 }} />
                            <View style={{ flexDirection: 'row', width: '60%' }}>
                                <Image source={require('../../assets/deal_level.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Limited deal offers</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '60%', marginTop: 10, }}>
                                <Image source={require('../../assets/support.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Priority Support</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '60%', marginTop: 10, marginBottom: 20 }}>
                                <Image source={require('../../assets/interest.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>5 Interests</Text>
                            </View>
                        </View>

                        {/* level 3 */}
                        <View style={{ borderWidth: 2, alignItems: 'center', borderColor: '#F8AF12', marginTop: 50, borderRadius: 20 }}>
                            {/* deal heading */}
                            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8AF12', height: 20, borderRadius: 10, top: -10 }}>
                                <Text>
                                    Level 3
                                </Text>
                            </View>
                            <Text style={{ textAlign: 'center' }}>
                                Enjoy this level at participating shops worldwide upon completing your profile
                            </Text>
                            {/* icons with text */}
                            <View style={{ marginTop: 20 }} />
                            <View style={{ flexDirection: 'row', width: '60%' }}>
                                <Image source={require('../../assets/deal_level.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Limited deal offers</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '60%', marginTop: 10, }}>
                                <Image source={require('../../assets/support.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Priority Support</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '60%', marginTop: 10, }}>
                                <Image source={require('../../assets/exclusive.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Exclusive Deals</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '60%', marginTop: 10, marginBottom: 20 }}>
                                <Image source={require('../../assets/interest.png')} resizeMode={'contain'} style={{ height: 30, width: 30 }} />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>5 Interests</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>

    )
}

const styles = StyleSheet.create({
    thumb: {
        backgroundColor: '##F8AF12',
        borderRadius: 16,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    thumbText: {
        color: '#000',
        fontWeight: 'bold',
    },
    slider: {
        height: 40,
        marginTop: 10
    },
});

export default Level