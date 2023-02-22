import React from 'react'
import { View, Text } from 'react-native'
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
import Avatar from '../../assets/avatar.svg'
const History = ({ navigation }) => {
    const history = [
        {
            name: 'Samsung TV',
            action: 'Buy',
            date: '30 Feb 2023'
        },
        {
            name: 'Samsung TV',
            action: 'Buy Point',
            date: '30 Feb 2023'
        },
        {
            name: 'Samsung TV',
            action: 'redeem',
            date: '30 Feb 2023'
        },
        {
            name: 'Samsung TV',
            action: 'reserve',
            date: '30 Feb 2023'
        },
    ]
    return (
        <View style={styles.container}>
            <DrawerHeader navigation={navigation} name={'History'} />
            <View style={{ justifyContent: 'space-around', alignSelf:'center', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ width: '20%',fontSize:12 }}>Thumb</Text>
                <Text style={{ width: '25%',fontSize:12, }}>Name</Text>
                <Text style={{ width: '25%',fontSize:12,  }}>Action</Text>
                <Text style={{ width: '25%',fontSize:12,  }}>Date</Text>
            </View>
            {
                history.map((item) =>
                    <View style={{ flexDirection: 'row', alignSelf:'center',marginTop: 20, alignItems: 'center' }}>
                        <View style={{ width: '20%' }}>

                            <Avatar />
                        </View>
                        <Text style={{ width: '25%' }}>{item.name}</Text>
                        <Text style={{ width: '25%' }}>{item.action}</Text>
                        <Text style={{ width: '25%' }}>{item.date}</Text>
                    </View>
                )
            }
        </View>
    )
}
export default History;