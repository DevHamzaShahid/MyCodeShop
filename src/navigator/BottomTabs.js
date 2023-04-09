import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SendScreen from "../screens/Send";
import Search from '../assets/search.svg'
import Search_Grey from '../assets/search_grey.svg'
import Plus from '../assets/Tab_plus.svg'
import Plus_grey from '../assets/Tab_plus_grey.svg'
import Profile from '../assets/profile-round.svg'
import Profile_grey from '../assets/profile-round-grey.svg'
import { TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import Dashboard from "../screens/Dashboard";
import { BuyNowStack, SearchStack } from ".";
import AddInterest from "../screens/AddInterest";
import MyAccount from "../screens/MyAccount";
const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { position: 'absolute' ,padding:5},
                headerShown: false
            }}
        >
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused();
                       if(isFocused){
                        return(
                            <Search_Grey/>
                        )
                       }
                       else{
                        return(
                        <Search/>
                        )
                       }
                    },
                    tabBarShowLabel: false,
                    tabBarButton: ({ onPress, onLongPress, children }) => {
                        const isFocused = useIsFocused();
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    if (isFocused) {
                                        // alert('Already on this screen');
                                        return
                                    } else {
                                        onPress();
                                    }
                                }}
                                onLongPress={onLongPress}
                                style={{
                                    flex: 1,
                                }}
                            >
                                {children}
                            </TouchableOpacity>
                        );
                    },
                }
                }
            />
            <Tab.Screen
                name="AddInterest"
                component={AddInterest}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused();
                       if(isFocused){
                        return(
                            <Plus_grey/>
                        )
                       }
                       else{
                        return(
                        <Plus/>
                        )
                       }
                    },
                    tabBarShowLabel: false,
                }
                }
            />
            <Tab.Screen
                name="MyAccount"
                component={MyAccount}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        const isFocused = useIsFocused();
                       if(isFocused){
                        return(
                            <Profile_grey/>
                        )
                       }
                       else{
                        return(
                        <Profile/>
                        )
                       }
                    },
                    tabBarShowLabel: false
                }
                }
            />

        </Tab.Navigator>
    );
}