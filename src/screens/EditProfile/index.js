import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Calendar from '../../assets/svg/Calendar.svg';
import Arrow from '../../assets/svg/bottom_arrow.svg';
import Email from '../../assets/svg/emailEdit.svg'
import { Theme } from '../../utils/theme';
import CustomButton from '../../components/CustomButton';
import { navigate } from '../../../RootNavigation';
import ROUTES from '../../utils/routes';
import styles from './style';

const editProfile_list = [
    {
        id: '0',
        title: 'Male',
        icon: Arrow
    },
    {
        id: '1',
        title: '28 Y.O',
        icon: Calendar
    },
    {
        id: '2',
        title: 'New York',
        icon: Arrow
    },
    {
        id: '3',
        title: 'United States',
        icon: Arrow
    },
    {
        id: '4',
        title: 'Student',
        icon: Arrow
    },
    {
        id: '5',
        title: 'Youremail@gmail.com',
        icon: Email
    },
]
const EditProfile = () => {
    return (
        <View style={styles.container}>
            {
                editProfile_list.map((item) => {
                    return (
                        <TouchableOpacity style={styles.listContainer}>
                            <Text style={{color:Theme.black}}>
                                {item.title}
                            </Text>
                            <item.icon />
                        </TouchableOpacity>
                    )
                })
            }
            {/* button */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    // onClick={() => navigate(ROUTES.Home)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Update'}
                    textStyle={styles.buttonTextLogin}
                    buttonWidth="100%"
                    buttonHeight={40}
                    // loading={loading}
                    loadingSize={10}
                />
            </View>
        </View>
    )
}

export default EditProfile