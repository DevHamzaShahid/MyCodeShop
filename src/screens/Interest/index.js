import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import ROUTES from '../../utils/routes';
import { navigate } from '../../../RootNavigation';

const Box = ({ title, imageSource }) => {
    return (
        <TouchableOpacity style={styles.box_container}>
            <Image source={imageSource} style={styles.box_image} resizeMode='contain' />
            <Text style={styles.box_text}>{title}</Text>
        </TouchableOpacity>
    );
};

const Interest = () => {
    const boxes = [
        { title: 'Student', imageSource: require('../../assets/coin.png') },
        { title: 'Yoga', imageSource: require('../../assets/coin.png') },
        { title: 'Dieting', imageSource: require('../../assets/coin.png') },
        { title: 'Travel', imageSource: require('../../assets/coin.png') },
        { title: 'DIY', imageSource: require('../../assets/coin.png') },
        { title: 'Free Stuff', imageSource: require('../../assets/coin.png') },
        { title: 'NIL', imageSource: require('../../assets/coin.png') },
        { title: 'NIL', imageSource: require('../../assets/coin.png') },
        { title: 'NIL', imageSource: require('../../assets/coin.png') },
    ];

    return (
        <View style={styles.main_container}>
            <Text style={styles.main_text1}>
                Add interest
            </Text>
            <Text style={styles.main_text2}>
                Select your top 5 interests
            </Text>
            <View style={styles.box_mainContainer}>
                {boxes.map((box, index) => (
                    <View key={index} style={{ width: '33%', height: 120, padding: 5 }}>
                        <Box title={box.title} imageSource={box.imageSource} />
                    </View>
                ))}
            </View>
            <TouchableOpacity onPress={() =>navigate(ROUTES.AddList)} style={styles.button_container}>
                <Text style={styles.button_text}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Interest;
