import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SendScreen from "../screens/Send";
import Search from '../assets/search.svg'
import Search_Grey from '../assets/search_grey.svg'
import Plus from '../assets/Tab_plus.svg'
import Plus_grey from '../assets/Tab_plus_grey.svg'
import Profile_grey from '../assets/profile-round-grey.svg'
import { TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import Dashboard from "../screens/Dashboard";
import { BuyNowStack, SearchStack, createOfferStack } from ".";
import AddInterest from "../screens/AddInterest";
import MyAccount from "../screens/MyAccount";
import HomeActive from '../assets/svg/home.svg';
import Profileicon from '../assets/svg/profile.svg';
import Add from '../assets/svg/addButton.svg';
import AddInactive from '../assets/svg/addButtonInactive.svg'
import HomeInactive from '../assets/svg/inactiveHome.svg';
import ProfileInactive from '../assets/svg/profileInactive.svg'
import ROUTES from "../utils/routes";
import Home from "../screens/Home";
import { routeNameRef } from "../../RootNavigation";
import AddShop from "../screens/AddShop";
import Profile from "../screens/Profile";
import AdminDashboard from "../screens/AdminDashboard";
import BuisnessAccount from "../screens/BuisnessAccount";
const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { position: 'absolute', paddingBottom: 20, height: 70, padding: 5 },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused()
                        if (isFocused) {
                            return (
                                <HomeActive />
                            )
                        }
                        else {
                            return (
                                <HomeInactive />
                            )
                        }

                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                }
                }
            />
            <Tab.Screen
                name={ROUTES.AddShop}
                component={AddShop}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused()
                        if (isFocused) {
                            return (
                                <Add />
                            )
                        }
                        else {
                            return (
                                <AddInactive />
                            )
                        }
                    },
                    tabBarLabel: () => null,
                }
                }
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused()
                        if (isFocused) {
                            return (
                                <Profileicon />
                            )
                        }
                        else {
                            return (
                                <ProfileInactive />
                            )
                        }
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                }
                }
            />

        </Tab.Navigator>
    );
}

export function BuisnessTabs() {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: { position: 'absolute', paddingBottom: 20, height: 70, padding: 5 },
                headerShown: false
            }}
        >
            <Tab.Screen
                name={ROUTES.BuisnessHome}
                component={AdminDashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused()
                        if (isFocused) {
                            return (
                                <HomeActive />
                            )
                        }
                        else {
                            return (
                                <HomeInactive />
                            )
                        }
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                }
                }
            />
            <Tab.Screen
                name={ROUTES.AddShop}
                component={createOfferStack}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused()
                        if (isFocused) {
                            return (
                                <Add />
                            )
                        }
                        else {
                            return (
                                <AddInactive />
                            )
                        }
                    },
                    tabBarLabel: () => null,
                }
                }
            />
            <Tab.Screen
                name={ROUTES.BuisnessAccount}
                component={BuisnessAccount}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused()
                        if (isFocused) {
                            return (
                                <Profileicon />
                            )
                        }
                        else {
                            return (
                                <ProfileInactive />
                            )
                        }
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                }
                }
            />

        </Tab.Navigator>
    );
}