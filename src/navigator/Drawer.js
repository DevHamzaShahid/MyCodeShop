import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';
import AuthStack from '../navigator'
import DrawerContent from '../components/DrawerContent';
import ROUTES from '../utils/routes';
import MyAccount from '../screens/MyAccount';
import HotList from '../screens/HotList';
import History from '../screens/History';
import EarnShopCoin from '../screens/EarnShopCoin';
import Notification from '../screens/Notification';
import AppLanguage from '../screens/AppLanguage';
import Security from '../screens/Security';
import About from '../screens/About';
import Chat from '../screens/Chat';
import FAQ from '../screens/FAQ';
import ContactUs from '../screens/ContactUs';
import TermCondition from '../screens/TermCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import { Theme } from '../utils/theme';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
        drawerType: 'front',
        headerShown: false,
        drawerActiveBackgroundColor: Theme.black,
        drawerActiveTintColor: Theme.white
      }}
      drawerStyle={{ width: 260 }}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen
        options={{ headerShown: false }}
        name={ROUTES.AuthStack}
        component={AuthStack}
      />
      <Drawer.Screen
        name={ROUTES.MyAccount}
        component={MyAccount}
      />
      <Drawer.Screen
        name={ROUTES.HotList}
        component={HotList}
      />
      <Drawer.Screen
        name={ROUTES.History}
        component={History}
      />
      <Drawer.Screen
        name={ROUTES.EarnShopcoin}
        component={EarnShopCoin}
      />
      {/* <Drawer.Screen
        name={ROUTES.Notification}
        component={Notification}
      /> */}
      <Drawer.Screen
        name={ROUTES.AppLanguage}
        component={AppLanguage}
      />
      {/* <Drawer.Screen
        name={ROUTES.Security}
        component={Security}
      /> */}
      <Drawer.Screen
        name={ROUTES.About}
        component={About}
      />
      <Drawer.Screen
        name={ROUTES.Chat}
        component={Chat}
      />
      {/* <Drawer.Screen
        name={ROUTES.FAQ}
        component={FAQ}
      /> */}
      <Drawer.Screen
        name={ROUTES.ContactUs}
        component={ContactUs}
      />
      <Drawer.Screen
        name={ROUTES.TermCondition}
        component={TermCondition}
      />
      <Drawer.Screen
        name={ROUTES.PrivacyPolicy}
        component={PrivacyPolicy}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
