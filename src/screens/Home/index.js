import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Theme } from '../../utils/theme'
import styles from './style'
import Bell from '../../assets/svg/bell.svg'
import QR from '../../assets/svg/qr-code.svg'
import Scan from '../../assets/svg/Scan.svg'
import CustomTextInput from '../../components/CustomTextInput';
import SearchIcon from '../../assets/svg/search_grey.svg';
import Filter from '../../assets/svg/filter.svg';
import CouponCard from "../../assets/svg/cardCoupon.svg"
import { validateYupSchema } from 'formik';
import Booking from '../../assets/svg/Booking.com.svg';
import Apple from '../../assets/svg/apple.svg';
import McDonald from '../../assets/svg/McDonald.svg';
import eclipse from '../../assets/svg/elipse.svg';
import ComUniverse from '../../assets/svg/computeruniverse.svg';
import LaptopIcon from '../../assets/svg/laptopIcon.svg';
import MicrosoftIcon from '../../assets/svg/MicrosoftIcon.svg'
import Clock from '../../assets/svg/TimeCircle.svg'
import { navigate } from '../../../RootNavigation'
import ROUTES from '../../utils/routes';
import { width_screen } from '../../utils/dimensions'
const avatar = [{ id: '0', logo: Booking, deal: '2 Deals' }, { id: '1', logo: Apple, deal: '8 Deals' }, { id: '2', logo: McDonald, deal: '9 Deals' }, { id: '3', logo: eclipse, deal: '4 Deals' }, { id: '4', logo: ComUniverse, deal: '2 Deals' }]
const AllDeals = [{ id: '0', logo: Booking, deal: 'All', selected: true }, { id: '1', logo: Apple, deal: 'Electronics', selected: false }, { id: '2', logo: McDonald, deal: 'Beauty', selected: false }, { id: '3', logo: eclipse, deal: 'Travel', selected: false }, { id: '4', logo: ComUniverse, deal: 'Fashion', selected: false }]
const Products = [{ id: '0', products: LaptopIcon, deal: 'All', selected: true }, { id: '1', products: LaptopIcon, deal: 'Electronics', selected: false }, { id: '2', products: LaptopIcon, deal: 'Beauty', selected: false }, { id: '3', products: LaptopIcon, deal: 'Travel', selected: false }, { id: '4', products: LaptopIcon, deal: 'Fashion', selected: false }]
const index = () => {
    const [value, setValue] = useState('')
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FAFAFA' }}>
            <View style={styles.container}>
                <Text style={styles.greetingText}>
                    Good Morning 👋
                </Text>
                <TouchableOpacity style={styles.headerIcons}>
                    <Scan />
                </TouchableOpacity>
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, paddingLeft: 5 }}>
                        <Text style={styles.Evan}>
                            EVANS01
                        </Text>
                        <TouchableOpacity>
                            <QR height={30} width={30} style={{ position: 'absolute', bottom: -20 }} />
                        </TouchableOpacity>
                    </View>
                    <CustomTextInput
                        onBlur={() => { return null }}
                        placeHolderText={'What are you looking for?'}
                        onChangeText={() => setValue(value)}
                        containerStyle={styles.labelContainer}
                        inputContainerStyle={styles.inputContainer}
                        textStyle={{ paddingLeft: 15 }}
                        isSecure={false}
                        // value={value}
                        leftIcon={<SearchIcon />}
                        rightIcon={<Filter />}
                    />
                    <View style={{ width: width_screen * 0.95 }}>
                        <CouponCard width={width_screen * 0.95} />
                    </View>
                    {/* list 1 */}
                    <View style={styles.list1}>
                        <Text style={styles.list1Text1}>
                            Your Shops
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.list1Text2}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            avatar.map((Item) => {
                                return (
                                    <View style={styles.list1Container}>
                                        <Item.logo />
                                        <View style={styles.list1text}>
                                            <Text >
                                                {Item.deal}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    {/* list 2 */}
                    <View style={{ marginTop: 10 }} />
                    <View style={styles.list1}>
                        <Text style={styles.list1Text1}>
                            All Deals
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.list1Text2}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            AllDeals.map((Item) => {
                                return (
                                    <View style={styles.list2Container}>
                                        <View style={[styles.list2TextContainer, { backgroundColor: Item.selected ? Theme.appRed : Theme.white, }]}>
                                            <Text style={[styles.list2Text, { color: Item.selected ? Theme.white : Theme.black }]}>
                                                {Item.deal}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 100 }}>
                    {
                        Products.map((item) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigate(ROUTES.OpenProduct)
                                }} style={styles.list3Container}>
                                    <View style={{ height: 110, marginHorizontal: 10, width: '35%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F3F3' }}>
                                        <item.products />
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.list3Text1}>
                                            Microsoft laptop
                                        </Text>
                                        <Text numberOfLines={2} style={styles.list3Text2}>
                                            sed do eiusmod tempor{'\n'}incididunt ut labore <Text style={{ fontWeight: '800', fontSize: 12, color: Theme.black }}>view more</Text>...
                                        </Text>
                                        <View style={styles.timeContainer}>
                                            <MicrosoftIcon style={{ marginRight: 5 }} />
                                            <Clock style={{ marginHorizontal: 5 }} />
                                            <Text style={{ marginHorizontal: 5, color: Theme.black }}>
                                                09:58:06
                                            </Text>
                                            <View style={styles.priceContainer}>
                                                <Text style={{ color: '#058D13' }}>
                                                    30£ OFF
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default index