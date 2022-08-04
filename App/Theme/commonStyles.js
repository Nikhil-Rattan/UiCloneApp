import Colors from "./Colors";

export default {
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.black
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    backBtnImgStyle: {
        height: 20,
        width: 20,
        marginRight: 10,
        marginVertical: 10
    },
    boldFont: {
        fontSize: 26,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.white

    },
    mediumFont: {
        fontFamily: 'Poppins-Medium',
        color: Colors.white
    },
    lightFont: {
        fontFamily: 'Poppins-Light',
        color: Colors.white
    },
    regularFont: {
        fontSize:14,
        fontFamily: 'Poppins-Regular',
        color: Colors.white
    },
    smallIconStyle:{
        height:15,width:15
    },
    mediumIconStyle:{
        height:22,width:22
    }
}