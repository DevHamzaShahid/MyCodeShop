import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomDropDown from '../../components/CustomDropDown';
import { DrawerHeader } from '../../components/Header';
import { Theme } from '../../utils/theme';
import styles from './style';
import Arrow from '../../assets/svg/bottom_arrow.svg'

const ListItem = ({ title }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <View>
            <TouchableOpacity style={styles.listUpperContainer} onPress={toggleExpand}>
                <Text style={styles.listText}>{title}</Text>
                <Arrow />
            </TouchableOpacity>

            {expanded && (
                <>
                    <View style={styles.modalContainer}>
                        <Text style={{color:Theme.black}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>
                </>
            )}
        </View>
    );
};

const FAQ = () => {
    const listItems = ['Question 01 ?', 'Question 02 ?', 'Question 03 ?', 'Question 04 ?', 'Question 05 ?'];
    return (
        <View style={styles.container}>
            {listItems.map((item, index) => (
                <>
                    <ListItem key={index} title={item} />
                </>
            ))}
        </View>
    );
};

export default FAQ;