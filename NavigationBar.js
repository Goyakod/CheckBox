/**
 * Created by bhyt-pro1 on 15/12/10.
 */

'use strict';

var React = require('react-native');
var Constants = require('../assets/Constants');

var{
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image
    } = React;

var NavigationBar = React.createClass({

    render() {
        return(
            <View style = {styles.barContainer} >

                <View style = {styles.leftView} >
                    <TouchableHighlight
                        underlayColor = {Constants.ThemeColor}
                        activeOpacity = {0.8}
                        style = {styles.leftTouch}
                        onPress = {this.props.onLeftItemPress} >
                        <Image
                            style = {styles.leftImage}
                            source = {require('../assets/images/back.png')}/>
                    </TouchableHighlight>
                </View>

                <View style = {styles.titleView} >
                    <Text style = {styles.titleText} >{this.props.barTitle}</Text>
                </View>

                <View style = {styles.rightView} >
                    <TouchableHighlight
                        underlayColor = {Constants.YTColor}
                        activeOpacity = {0.6}
                        style = {styles.rightTouch}
                        onPress = {this.props.onRightItemPress} >
                        <Text style = {styles.rightText} >{this.props.rightText}</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
});

NavigationBar.propTypes = {
    barTitle: React.PropTypes.string,
    barHeight: React.PropTypes.number,
    leftText: React.PropTypes.string,
    rightText: React.PropTypes.string,
    onLeftItemPress: React.PropTypes.func,
    onRightItemPress: React.PropTypes.func
};

NavigationBar.defaultProps = {
    barTitle: '主题',
    barHeight: 44,
    leftText: '',
    rightText:'',
    onLeftItemPress: noop,
    onRightItemPress: noop
};

function noop () {};

var styles = StyleSheet.create({
    barContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Constants.ThemeColor,
        height: 44
    },

    titleText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },


    leftView:{
        marginLeft: 15
    },
    leftTouch:{

    },
    leftText:{
        fontSize: 16,
        color: 'white'
    },
    leftImage:{
        width:50,
        height:28
    },

    rightView:{
        marginRight: 15,
        width:50,
        height:28
    },
    rightTouch:{

    },
    rightText:{
        fontSize: 16,
        color: 'white'
    }

});

module.exports = NavigationBar;
