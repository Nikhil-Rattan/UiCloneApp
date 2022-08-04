import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from '../Theme/commonStyles';

class CustomHeader extends Component {
  render() {
    return (
      <>
        <TouchableOpacity>
            <Image style={[commonStyles.backBtnImgStyle]} source={this.props.leftImage} />
        </TouchableOpacity>
        {this.props.hasRightImage?
        	<TouchableOpacity>
            	<Image style={[commonStyles.backBtnImgStyle]} source={this.props.rightImage} />
       		</TouchableOpacity>
		:null}
      </>
    );
  }
}

const PropType = PropTypes

CustomHeader.propTypes = {
  leftImage: PropType.number,
  rightImage:PropType.number,
  hasRightImage:PropType.bool

};
CustomHeader.defaultProps = {
  hasRightImage:false
}

export default CustomHeader;