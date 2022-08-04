import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import CustomHeader from '../Components/CustomHeader';
import CustomButton from '../Components/CustomButton';
import ListRow from '../Components/ListRow';
import Colors from '../Theme/Colors';
import commonStyles from '../Theme/commonStyles';
import Images from '../Theme/Images';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const businessInfo = [
            {
                "id": 1,
                "title": "Business Name",
                "image": Images.shopIcon,
            },
            {
                "id": 2,
                "title": "ABN Number",
                "image": Images.numberIcon,
            },
            {
                "id": 3,
                "title": "Got a Website?",
                "image": Images.globeIcon,
            },
        ]
        return (
            <SafeAreaView style={[commonStyles.mainContainer]}>
                <View style={styles.marginContiner}>
                    <View style={[commonStyles.headerContainer]}>
                        <CustomHeader
                            leftImage={Images.backBtn}
                        />
                    </View>
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                        <View style={styles.indicatorContainer}>
                            <View style={styles.inactiveIndicator}></View>
                            <View style={styles.activeIndicator}></View>
                            <View style={styles.inactiveIndicator}></View>
                            <View style={styles.inactiveIndicator}></View>
                        </View>
                        <View style={styles.txtHeadingContainer}>
                            <Text style={[commonStyles.boldFont, styles.mainHeadingTxt]}>Your Business Details.</Text>
                            <Text style={[commonStyles.regularFont]}>Please add your business details below. Don’t have an ABN? no worries you can skip this step for now.</Text>
                        </View>
                        <View style={styles.circleContainer}>
                            <View style={styles.viewProfileContainer}>
                                <Image source={Images.imgPickerIcon} style={[commonStyles.smallIconStyle]} />
                            </View>
                            <View style={styles.imgPickerContainer}>
                                <TouchableOpacity style={styles.pickerStyle}>
                                    <Image source={Images.cameraIcon} style={[commonStyles.smallIconStyle, styles.cameraIconStyle]} />
                                    <Text style={[commonStyles.regularFont, styles.pickerTxt]}>add a photo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={businessInfo}
                            renderItem={({ item: businessInfo }) => <ListRow businessInfo={businessInfo} />}
                            keyExtractor={(businessInfo) => businessInfo.id}
                            contentContainerStyle={{marginVertical:30}}
                        />
                        <CustomButton />

                    </ScrollView>
                </View>

            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    marginContiner: {
        flex: 1,
        marginHorizontal: 20
    },
    container: {
        flex: 1
    },
    indicatorContainer: {
        flexDirection: 'row', marginTop: 30
    },
    inactiveIndicator: {
        height: 8,
        width: 25,
        borderRadius: 20,
        backgroundColor: Colors.grey,
        marginRight: 4
    },
    activeIndicator: {
        height: 8,
        width: 25,
        borderRadius: 20,
        backgroundColor: Colors.white,
        marginRight: 4
    },
    txtHeadingContainer: {
        marginVertical: 40
    },
    mainHeadingTxt: {
        marginBottom: 25
    },
    circleContainer: {
        flex: 1,
        height: 130,
        width: 130,
        borderRadius: 70,
        backgroundColor: Colors.grey,
        alignSelf: 'center',
        marginBottom: 20,
        flexDirection: 'row'
    },
    viewProfileContainer: {
        flex: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 35
    },
    imgPickerContainer: {
        flex: 3, justifyContent: 'flex-end', marginBottom: 10
    },
    pickerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.zBlack,
        height: 25, width: 120,
        borderRadius: 20,
    },
    pickerTxt: {
        fontSize: 12, marginRight: 10
    },
    cameraIconStyle: {
        marginHorizontal: 10
    }

});