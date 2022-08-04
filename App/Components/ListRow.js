import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../Theme/Colors';
import commonStyles from '../Theme/commonStyles';

export default function ListRow({ businessInfo }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={businessInfo.image} style={[commonStyles.mediumIconStyle,styles.iconStyle]} />
            </View>
            <View style={styles.textContainer}>
                <Text style={commonStyles.regularFont}>{businessInfo.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: 60,
        borderRadius:10,
        backgroundColor: '#232323'
    },
    iconContainer:{
        flex: 2, 
        borderRightWidth:1.5,
        borderColor:Colors.grey
    },
    iconStyle: {
        alignSelf:'center'
    },
    textContainer:{
        flex: 9, marginHorizontal:15 
    }

});