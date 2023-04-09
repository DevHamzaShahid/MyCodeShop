import React from 'react';
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
import { MyTabs } from './BottomTabs';
import BuyNow from '../screens/BuyNow';
import AddShopDeal from '../screens/AddShopDeal';
import AddInterest from '../screens/AddInterest';
import Level from '../screens/Level';
import Transaction from '../screens/Transaction';
const Stack = createStackNavigator();
const AuthStack = () => {

    return (
        <Stack.Navigator
            initialRouteName={ROUTES?.AuthScreen}
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name={ROUTES?.AuthScreen}
                component={AuthScreen}
                options={{ headerShown: false }}
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
                name={ROUTES?.Interest}
                component={Interest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.AddList}
                component={AddList}
                options={{ headerShown: false }}
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
                name={ROUTES.Transaction}
                component={Transaction}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
};
export const SearchStack = () => {

    return (
        <Stack.Navigator
            initialRouteName={ROUTES?.Home}
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name={ROUTES?.Home}
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES?.BuyNow}
                component={BuyNow}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={ROUTES.AddShopDeal}
                component={AddShopDeal}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
};
export default AuthStack;