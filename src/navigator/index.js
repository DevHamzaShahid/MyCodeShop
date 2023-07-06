import React, { useEffect } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../utils/routes';
import AuthScreen from '../screens/Auth'
import Dashboard from '../screens/Dashboard';
import BarcodeScreen from '../screens/Barcode';
import ViewBusiness from '../screens/ViewBusiness';
import SendScreen from '../screens/Send';
import SendConfirmation from '../screens/SendConfirmation'
import BuyShopCoin from '../screens/BuyShopCoin.js';
import Discount from '../screens/Discount';
import Interest from '../screens/Interest';
import AddList from '../screens/AddList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { BuisnessTabs, MyTabs } from './BottomTabs';
import BuyNow from '../screens/BuyNow';
import AddShopDeal from '../screens/AddShopDeal';
import AddInterest from '../screens/AddInterest';
import Level from '../screens/Level';
import Transaction from '../screens/Transaction';
import YourCode from '../screens/yourCode';
import ChooseInterest from '../screens/ChooseInterest';
import { Theme } from '../utils/theme';
import OpenProduct from '../screens/OpenProduct';
import Scan from '../assets/svg/Scan.svg';
import Send from '../assets/svg/Send.svg'
import AddShop from '../screens/AddShop';
import Profile from '../screens/Profile';
import YourLevel from '../screens/YourLevel';
import EditProfile from '../screens/EditProfile';
import Security from '../screens/Security';
import Notification from '../screens/Notification';
import FAQ from '../screens/FAQ';
import BuisnessRegistration from '../screens/BuisnessRegistration';
import BuisnessRegistration2 from '../screens/BuisnessRegistration2';
import BuisnessRegistration3 from '../screens/BuisnessRegisteration3';
import AdminDashboard from '../screens/AdminDashboard';
import CreateOffer from '../screens/CreateOffer';
import AudiancePreference from '../screens/AudiancePreference';
import AudianceInterest from '../screens/AudianceInterest';
import Followers from '../screens/Followers';
import BuisnessAccount from '../screens/BuisnessAccount';
import CompanyProfile from '../screens/CompanyProfile';
import { DefaultTheme } from '@react-navigation/native';
import ArrowBack from '../assets/svg/arrowBackWhite.svg';
import Back from '../assets/svg/arrowBack.svg'
import { ProgressBar } from 'react-native-paper';
const Stack = createStackNavigator();
const AuthStack = ({ navigation }) => {

    const customTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'red', // Set the color of the back arrow to red
            text: 'black', // Set the color of the header title to black
        },
    };
    StatusBar.setBackgroundColor(Theme.white);
    StatusBar.setBarStyle('dark-content');

    const CustomHeader = ({ progress, title }) => {
        return (
            <View style={{ felx: 1, backgroundColor: '#ffffff' }}>
                <View style={{ height: 50, width: '60%', alignSelf: 'center', marginTop: 10 }}>
                    <ProgressBar progress={progress} color="red" style={{ height: 8, borderRadius: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: '600' }}>{title}</Text>
                </View>
            </View>
        );
    };
    return (
        <Stack.Navigator
            initialRouteName={ROUTES?.AuthScreen}
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name={ROUTES?.AuthScreen}
                component={AuthScreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleStyle: { color: Theme.black, marginTop: 20 },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: '',

                }
                }
            />
            <Stack.Screen
                name={ROUTES?.Dashboard}
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.BarcodeScreen}
                component={BarcodeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.ViewBusiness}
                component={ViewBusiness}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.Send}
                component={SendScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.SendConfirmation}
                component={SendConfirmation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.BuyshopCoin}
                component={BuyShopCoin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.Discount}
                component={Discount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.Profile}
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.Interest}
                component={Interest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.AddList}
                component={AddList}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: Theme.white },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Add List',
                    headerRight: () => (
                        <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 6, justifyContent: 'center', width: '30%', marginHorizontal: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: Theme.appRed, textDecorationLine: 'underline', fontWeight: '700' }}>
                                SKIP
                            </Text>
                        </TouchableOpacity>
                    )
                }
                }
            />
            <Stack.Screen
                name={ROUTES.Home}
                component={MyTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.BuyNow}
                component={BuyNow}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.AddInterest}
                component={AddInterest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.Level}
                component={Level}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.OpenProduct}
                component={OpenProduct}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff', marginTop: 20 },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black },
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTintColor: '#F14825',
                    headerTitleAlign: 'left',
                    title: '',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 16, justifyContent: 'space-between', width: '25%' }}>
                            <TouchableOpacity>
                                <Send />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
            <Stack.Screen
                name={ROUTES.YourLevel}
                component={YourLevel}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTintColor: Theme.black,
                    headerTitleStyle: { color: Theme.black, marginTop: 20 },
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleAlign: 'left',
                    title: 'Your Level',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16, marginTop: 20, justifyContent: 'space-between', width: '30%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
            <Stack.Screen
                name={ROUTES.CompanyProfile}
                component={CompanyProfile}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black, marginLeft: -10 },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Company Profile',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', width: '40%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
            <Stack.Screen
                name={ROUTES.EditProfile}
                component={EditProfile}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: Theme.white },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black, marginTop: 20, },
                    headerTintColor: Theme.appRed,
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleAlign: 'left',
                    title: 'Edit Profile',

                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16, justifyContent: 'space-between', width: '30%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    ),

                }
                }
            />
            <Stack.Screen
                name={ROUTES.BuisnessAccount}
                component={BuisnessAccount}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Account',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', width: '30%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
            <Stack.Screen
                name={ROUTES.Security}
                component={Security}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleStyle: { color: Theme.black, marginTop: 20, },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Security',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16, justifyContent: 'space-between', width: '30%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    ),
                }
                }
            />
            <Stack.Screen
                name={ROUTES.Notification}
                component={Notification}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleStyle: { color: Theme.black, marginTop: 20, },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Notifications',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16, justifyContent: 'space-between', width: '35%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    ),
                }
                }
            />
            <Stack.Screen
                name={ROUTES.Transaction}
                component={Transaction}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleStyle: { color: Theme.black, marginTop: 20, },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Transactions',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16, justifyContent: 'space-between', width: '35%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    ),
                }
                }
            />
            <Stack.Screen
                name={ROUTES.FAQ}
                component={FAQ}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: Theme.white, height: 60 },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black, marginTop: 20, },
                    headerTintColor: Theme.appRed,
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleAlign: 'left',
                    title: 'FAQ',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 16, justifyContent: 'space-between', width: '30%' }}>
                            <TouchableOpacity>
                                <Scan />
                            </TouchableOpacity>
                        </View>
                    ),
                }
                }
            />
            <Stack.Screen
                name={ROUTES.BuisnessRegistration}
                component={BuisnessRegistration}
                options={({ route }) => ({
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    // title: 'Business registration',
                    header: (props) => <CustomHeader progress={0.10} title={'Business registration'} />,
                })}
            />
            <Stack.Screen
                name={ROUTES.BuisnessRegistration2}
                component={BuisnessRegistration2}
                options={{
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    title: 'Business registration',
                    header: (props) => <CustomHeader progress={0.42} title={'Business registration'} />,

                }
                }
            />
            <Stack.Screen
                name={ROUTES.BuisnessRegistration3}
                component={BuisnessRegistration3}
                options={{
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    // title: 'Business registration',
                    header: (props) => <CustomHeader progress={1} title={'Business registration'} />,
                }
                }
            />
            <Stack.Screen
                name={ROUTES.AdminDashboard}
                component={BuisnessTabs}
                options={{
                    headerShown: false,
                }
                }
            />
            <Stack.Screen
                name={ROUTES.YourCode}
                component={YourCode}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F14825' },
                    headerLeftContainerStyle: { marginTop: 20 },
                    headerTitleStyle: { marginTop: 20 },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTintColor: '#fff',
                    headerTitleAlign: 'left',
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => {
                            navigation.goBack()
                        }
                        }>
                            <ArrowBack />
                        </TouchableOpacity>
                    ),
                    title: 'Your Code'
                }
                }
            />
            <Stack.Screen
                name={ROUTES.ChooseInterest}
                component={ChooseInterest}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#fff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: Theme.black },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Choose Your Interest'
                }
                }
            />
            <Stack.Screen
                name={ROUTES.AddShop}
                component={AddShop}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#ffffff' },
                    headerShadowVisible: false,
                    headerBackTitleVisible: true,
                    headerTitleStyle: { color: Theme.black },
                    headerTintColor: Theme.appRed,
                    headerTitleAlign: 'left',
                    title: 'Add Shop',
                }
                }
            />
        </Stack.Navigator>
    )
};
export const createOfferStack = () => {
    const CustomHeader = ({ progress, title, skip }) => {
        return (
            <View style={{ felx: 1, backgroundColor: '#ffffff' }}>
                <View style={{ height: 50, width: '60%', alignSelf: 'center', marginTop: 10 }}>
                    <ProgressBar progress={progress} color="red" style={{ height: 8, borderRadius: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: '600' }}>{title}</Text>
                    {skip && <TouchableOpacity style={{ flexDirection: 'row', paddingRight: 10, justifyContent: 'center', width: '50%', marginHorizontal: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: Theme.appRed, textDecorationLine: 'underline', fontWeight: '700' }}>
                            SKIP
                        </Text>
                    </TouchableOpacity>}
                </View>
            </View>
        );
    };
    return (
        <Stack.Navigator
            initialRouteName={ROUTES?.CreateOffer}
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name={ROUTES.CreateOffer}
                component={CreateOffer}
                options={{
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    // title: 'Create Offer',
                    header: (props) => <CustomHeader progress={0.10} title={'Create Offer'} skip={false} />
                }
                }
            />
            <Stack.Screen
                name={ROUTES.AudiancePreference}
                component={AudiancePreference}
                options={{
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    // title: 'Audiance Preference',
                    // headerRight: () => (
                    //     <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 6, justifyContent: 'center', width: '50%', marginHorizontal: 10, alignItems: 'center' }}>
                    //         <Text style={{ fontSize: 14, color: Theme.appRed, textDecorationLine: 'underline', fontWeight: '700' }}>
                    //             SKIP
                    //         </Text>
                    //     </TouchableOpacity>
                    // )
                    header: (props) => <CustomHeader progress={0.48} title={'Audience Preference'} skip={true} />


                }
                }
            />
            <Stack.Screen
                name={ROUTES.AudianceInterest}
                component={AudianceInterest}
                options={{
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    // title: 'Audiance Interest',
                    // headerRight: () => (
                    //     <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 6, justifyContent: 'center', width: '45%', marginHorizontal: 10, alignItems: 'center' }}>
                    //         <Text style={{ fontSize: 14, color: Theme.appRed, textDecorationLine: 'underline', fontWeight: '700' }}>
                    //             SKIP
                    //         </Text>
                    //     </TouchableOpacity>
                    // )
                    header: (props) => <CustomHeader progress={1} title={'Audience Interest'} skip={true} />

                }
                }
            />
            <Stack.Screen
                name={ROUTES.Followers}
                component={Followers}
                options={{
                    // headerShown: true,
                    // headerStyle: { backgroundColor: '#ffffff' },
                    // headerShadowVisible: false,
                    // headerBackTitleVisible: false,
                    // headerTitleStyle: { color: Theme.black },
                    // headerTintColor: Theme.appRed,
                    // headerTitleAlign: 'left',
                    // title: 'Followers',
                    header: (props) => <CustomHeader progress={1} title={'Followers'} skip={false} />

                }
                }
            />
        </Stack.Navigator>
    )
}
// export const SearchStack = () => {

//     return (
//         <Stack.Navigator
//             initialRouteName={ROUTES?.Home}
//             screenOptions={{
//                 headerTitleAlign: 'center',
//             }}>
//             <Stack.Screen
//                 name={ROUTES?.Home}
//                 component={Home}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name={ROUTES?.BuyNow}
//                 component={BuyNow}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name={ROUTES.AddShopDeal}
//                 component={AddShopDeal}
//                 options={{ headerShown: false }}
//             />
//         </Stack.Navigator>
//     )
// };
export default AuthStack;