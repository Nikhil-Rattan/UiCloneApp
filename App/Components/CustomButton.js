import React, { Component } from 'react';
import {
    TouchableOpacity,StyleSheet,Text
} from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from '../Theme/commonStyles';
import Colors from '../Theme/Colors';

class CustomButton extends Component {
    render() {
        return (
            <>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={[commonStyles.boldFont,styles.btnTxtSize]}>{this.props.btnTxt}</Text>
                </TouchableOpacity>
            </>
        );
    }
}

const PropType = PropTypes

CustomButton.propTypes = {
    btnTxt: PropType.string,
};
CustomButton.defaultProps = {
    btnTxt: 'Next'
}
const styles = StyleSheet.create({
    btnContainer:{
        width: '100%',
         height: 50, 
         backgroundColor: Colors.orange, 
         borderRadius: 10, 
         marginBottom:60,
         justifyContent: 'center', 
         alignItems: 'center'
    },
    btnTxtSize:{
        fontSize: 16
    }
})

export default CustomButton;