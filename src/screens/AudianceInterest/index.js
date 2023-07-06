import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import CustomButton from '../../components/CustomButton'
import { navigate } from '../../../RootNavigation'
import ROUTES from '../../utils/routes'
import styles from './style'
const interest = [
    {
        id: '0',
        name: 'Fashion', selected: true
    }, {
        id: '1',
        name: 'Beauty', selected: false
    }, {
        id: '2',
        name: 'Yoga', selected: true
    }, {
        id: '3',
        name: 'Travel', selected: true
    }, {
        id: '4',
        name: 'DYI', selected: true
    }, {
        id: '5',
        name: 'Free Stuff', selected: false
    }, {
        id: '6',
        name: 'Jewelries', selected: true
    }, {
        id: '7',
        name: 'Fragrances', selected: false
    }, {
        id: '8',
        name: 'Pet', selected: true
    }, {
        id: '9',
        name: 'Gaming', selected: false
    }, {
        id: '10',
        name: 'Organic', selected: true
    }, {
        id: '11',
        name: 'Sport', selected: true
    }, {
        id: '12',
        name: 'Shoes', selected: false
    }, {
        id: '13',
        name: 'Skin Care', selected: true
    }, {
        id: '14',
        name: 'Gifting', selected: false
    }, {
        id: '15',
        name: 'Health', selected: true
    }, {
        id: '16',
        name: 'Food', selected: true
    }, {
        id: '17',
        name: 'Sport', selected: false
    }, {
        id: '18',
        name: 'Maternity', selected: true
    }, {
        id: '19',
        name: 'Electronics', selected: false
    }
]
const AudianceInterest = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, height: '120%', paddingHorizontal: 20, backgroundColor: Theme.white }}>
                <Text style={styles.textHeader}>
                    Choose your top 5 interests and get the best offers recommendations.
                </Text>
                <View style={styles.listContainer}>
                    {interest.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[styles.itemContainer, { backgroundColor: item.selected ? Theme.appRed : Theme.white }]}
                            >
                                <Text style={[styles.itemText, { color: item.selected ? Theme.white : Theme.appRed }]}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <CustomButton
                    onClick={() => navigate(ROUTES.Followers)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Continue'}
                    textStyle={styles.buttonTextLogin}
                    buttonWidth="100%"
                    buttonHeight={40}
                />
            </ScrollView>
        </View>

    )
}

export default AudianceInterest