import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '../../utils/theme'
import Check from '../../assets/svg/check.svg'
import CustomButton from '../../components/CustomButton'
import { navigate } from '../../../RootNavigation'
import ROUTES from '../../utils/routes'
import styles from './style'
const list = [
    {
        id: '0',
        object: 'Object 01'
    },
    {
        id: '1',
        object: 'Object 02'
    },
    {
        id: '2',
        object: 'Object 03'
    },
    {
        id: '3',
        object: 'Object 04'
    },
    {
        id: '4',
        object: 'Object 05'
    }
]
const AddList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Create a list of 5 things you often buy</Text>
            <View>
                {
                    list.map((item) => {
                        return (
                            <View style={styles.listContainer}>
                                <TouchableOpacity>
                                    <Check />
                                </TouchableOpacity>
                                <Text style={{ paddingStart: 10, fontSize: 16, color: Theme.black }}>
                                    {item.object}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
            {/* button */}
            <View style={styles.buttonContainer}>
                <CustomButton
                    onClick={() => navigate(ROUTES.Home)}
                    containerStyle={styles.buttonContainerLogin}
                    title={'Find me a deal'}
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

export default AddList