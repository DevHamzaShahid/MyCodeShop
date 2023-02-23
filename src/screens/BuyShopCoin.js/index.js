import { View, Text, StyleSheet, PanResponder, Slider, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { DrawerHeader } from '../../components/Header'
import styles from './styles'
import Animated, { Easing } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import SeekBar from 'react-seekbar-component'
import { Theme } from '../../utils/theme';
import Checked from '../../assets/checked.svg'
import Unchecked from '../../assets/unchecked.svg'
import { ScrollView } from 'react-native-gesture-handler';
const values = [100, 1000, 10000, 100000];
const BuyShopCoin = ({ navigation }) => {
    const [value, setValue] = useState(values[0]);
    const [checked, setChecked] = useState(false);

    const onValueChange = (newValue) => {
        const roundedValue = findClosestValue(newValue);
        setValue(roundedValue);
        console.log(roundedValue);
    };

    const findClosestValue = (newValue) => {
        let closestValue = values[0];
        values.forEach((v) => {
            if (Math.abs(v - newValue) < Math.abs(closestValue - newValue)) {
                closestValue = v;
            }
        });
        return closestValue;
    };

    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'Buy Shopcoin (SHC)'} />
           <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{ alignItems: 'center', marginTop: 100 }}>
                <Text>
                    Drag slider to set your Shopcoin amount
                </Text>
                <View style={{
                    justifyContent: 'center',
                    marginTop: 10,
                    height: 100,
                    width: '90%',
                    borderRadius: 10,
                    borderColor: Theme.black,
                    borderWidth: 0.5,
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.5,
                }}>
                    <Slider
                        style={{ width: '80%', alignSelf: 'center' }}
                        minimumValue={values[0]}
                        maximumValue={values[3]}
                        step={1}
                        value={value}
                        onValueChange={onValueChange}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        {values.map((v) => (
                            <Text key={v}>{v}</Text>
                        ))}
                    </View>

                </View>
            </View>
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 50 }}>
                <Text style={{ justifyContent: 'flex-start', fontWeight: 'bold', fontSize: 22 }}>Amount</Text>
                <Text style={{ justifyContent: 'flex-end', fontWeight: 'bold', fontSize: 22 }}>1,000SHC</Text>
            </View>
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 30 }}>
                <Text style={{ justifyContent: 'flex-start', fontWeight: 'bold', fontSize: 22 }}>Total</Text>
                <Text style={{ justifyContent: 'flex-end', fontWeight: 'bold', fontSize: 22 }}>10$</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, alignItems: 'center', justifyContent: 'center' }}>
                                {!checked ? <TouchableOpacity onPress={() => setChecked(!checked)}>
                                    <Unchecked />
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                                        <Checked />
                                    </TouchableOpacity>
                                }
                                <Text style={{ marginLeft: 5 }}>
                                Save your payment details
                                </Text>
                            </View>
           </ScrollView>
           <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: Theme.light_red, height: 40, width: '90%', position: 'absolute', bottom: 10 }}>
                <Text style={{ color: Theme.white, fontWeight: 'bold', fontSize: 18 }}>
                    Checkout Now
                </Text>
            </TouchableOpacity>
        </View>


    )
}

export default BuyShopCoin