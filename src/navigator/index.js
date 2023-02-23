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
        </Stack.Navigator>
    )
};
export default AuthStack;