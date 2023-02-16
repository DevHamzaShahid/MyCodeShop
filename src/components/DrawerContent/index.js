import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { memo, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import styles from './style';
import { Theme } from '../../utils/theme'

const DrawerContent = props => {
  const { navigation } = props;
  const CustomView = memo(({ name, routeName }) => {
    return (
      <TouchableOpacity style={styles.row} onPress={() => navigate(routeName)}>
        <Text style={styles.row_text}>{name}</Text>
      </TouchableOpacity>
    )
  })
  return (
    <DrawerContentScrollView
      {...props}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.scrollView}>
      <Image
        source={Theme.logo}
        style={{ width: 65, height: 65, alignSelf: 'center' }}
      />

      <CustomView name={'My Account'} routeName={ROUTES.MyAccount} />
      <CustomView name={'Hot List'} routeName={ROUTES.HotList} />
      <CustomView name={'History'} routeName={ROUTES.History} />
      <CustomView name={'Ways to Earn Shopcoin'} routeName={ROUTES.EarnShopcoin} />
      <CustomView name={'Notification'} routeName={ROUTES.Notification} />
      <CustomView name={'App Language'} routeName={ROUTES.AppLanguage} />
      <CustomView name={'Security'} routeName={ROUTES.Security} />
      <CustomView name={'About'} routeName={ROUTES.About} />
      <CustomView name={'Chat'} routeName={ROUTES.Chat} />
      <CustomView name={'FAQ'} routeName={ROUTES.FAQ} />
      <CustomView name={'Contact US'} routeName={ROUTES.ContactUs} />

      <TouchableOpacity style={styles.logoutView} onPress={() => navigate(ROUTES.TermCondition)}>
        <Text style={styles.versionText}>
          Term & condition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutView} onPress={() => navigate(ROUTES.PrivacyPolicy)}>
        <Text style={styles.versionText}>
          Privacy Policy
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
