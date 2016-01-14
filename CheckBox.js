/**
 * Created by SNOW_zhang on 15/12/11.
 */

'use strict';

var React = require('react-native');
var ReactPropTypes = React.PropTypes;

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
    } = React;

var CheckBox = React.createClass({
    //属性类型：
    propTypes:{
        text: ReactPropTypes.string,
        textStyle: ReactPropTypes.object,
        textAtBehind: ReactPropTypes.bool,
        checked: ReactPropTypes.bool,
        onClick: ReactPropTypes.func
    },

    //默认属性(框在前，字在后，未选中,无点击事件)
    getDefaultProps(){
        return{
            text: '选项1',
            textAtBehind: true,
            checked: false
        }
    },

    //点击选择框的事件
    onClick(){
        if(this.props.onClick){
            this.props.onClick(!this.props.checked);
        }
    },


    render(){

        //选择框的图片
        var imgSource;
        if(this.props.checked){
            imgSource = require('../assets/images/checkbox_enabled.png');
        }else{
            imgSource = require('../assets/images/checkbox_disabled.png');
        }

        //文字跟可选框位置
        var container;
        if(this.props.textAtBehind){
            container = (
                <View style = {styles.container} >
                    <Image
                        style = {styles.image}
                        source = {imgSource} />
                    <View style = {styles.view} >
                        <Text style = {[this.props.textStyle,styles.text]} >{this.props.text}</Text>
                    </View>
                </View>
            );
        }else{
            container = (
                <View style = {styles.container} >
                    <View style = {styles.view} >
                        <Text style = {[this.props.textStyle,styles.text]} >{this.props.text}</Text>
                    </View>
                    <Image
                        style = {styles.image}
                        source = {imgSource} />
                </View>
            );
        }

        return(
            <TouchableHighlight
                onPress = {this.onClick}
                underlayColor='white' >
                {container}
            </TouchableHighlight>
        );
    }

});

var styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 25,
        height: 25
    },
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 15
    }
});

module.exports = CheckBox;