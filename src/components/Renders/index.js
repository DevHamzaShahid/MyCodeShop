import React, { memo } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Theme } from '../../utils/theme'
import styles from './style'

const RenderProduct = memo(({ name }) => {
    return (
        <View style={styles.product_container}>
            <Theme.ImageArea width={30} height={30} />
            <View style={styles.product_row}>
                <Text style={styles.product_text}>{name}</Text>
            </View>
        </View>
    )
})
const TransactionHistory = memo(({ name, date, points }) => {
    return (
        <View style={styles.transaction_container}>
            {/* <Text style={styles.point_date}>{date}</Text> */}
            <View style={styles.transaction_inner}>
                <Theme.ImageArea width={30} height={30} />
                <View style={styles.point_row}>
                    <Text style={styles.point_text}>{name}</Text>
                    <Text style={styles.point_text}>{points}</Text>
                </View>
            </View>
        </View>

    )
})

const BusinessCard = memo(({ name }) => {
    return (
        <View style={styles.business_card}>
            <Theme.ImageArea width={40} height={40} />
            <Text style={styles.business_text}>{name}</Text>
        </View>
    )
})
export { RenderProduct, TransactionHistory, BusinessCard }