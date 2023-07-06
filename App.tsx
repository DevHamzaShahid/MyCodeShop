import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import AuthStack from './src/navigator';
import Drawer from './src/navigator/Drawer';
import { Theme } from './src/utils/theme';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef, routeNameRef } from './RootNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
        isReadyRef.current = true;
      }}>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar barStyle={'dark-content'} backgroundColor={Theme.white} /> */}
        <Drawer />
      </SafeAreaView>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, },
});
export default App;
