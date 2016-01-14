/**
 * Created by SNOWzhang on 15/12/14.
 */
'use strict';

var React = require('react-native');
var Constants = require('../assets/Constants');
var ReactPropTypes = React.PropTypes;

var {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    } = React;

var StatusButton = React.createClass({
    //属性类型：
    propTypes:{
        btnStyle: ReactPropTypes.object,
        title: ReactPropTypes.string,
        subTitle :ReactPropTypes.string,
        selected: ReactPropTypes.bool,
        onSelected: ReactPropTypes.func
    },

    //默认属性
    getDefaultProps(){
        return{
            title: '主题',
            subTitle: '副主题',
            selected: false
        }
    },

    onSelected(){
        if(this.props.onSelected){
            this.props.onSelected(!this.props.selected,this.props.title,this.props.subTitle);
        }
    },

    render(){

        var container;
        if(this.props.selected){
            container = (
                <View style = {styles.container_selected} >
                    <View style = {styles.titleView_selected} >
                        <Text style = {styles.titleText_selected} >{this.props.title}</Text>
                    </View>
                    <View style = {styles.subTitleView_selected} >
                        <Text style = {styles.subTitleText_selected} >{this.props.subTitle}</Text>
                    </View>
                </View>
            );
        }else{
            container = (
                <View style = {styles.container_normal} >
                    <View style = {styles.titleView_normal} >
                        <Text style = {styles.titleText_normal} >{this.props.title}</Text>
                    </View>
                    <View style = {styles.subTitleView_normal} >
                        <Text style = {styles.subTitleText_normal} >{this.props.subTitle}</Text>
                    </View>
                </View>
            );
        }

        return(
            <TouchableHighlight
                style = {this.props.btnStyle}
                onPress = {this.onSelected}>
                {container}
            </TouchableHighlight>
        );
    }

});

var styles = StyleSheet.create({

    //默认的样式
    container_normal:{
        backgroundColor: Constants.ThemeColor
    },
    titleView_normal:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText_normal:{
        color: 'white',
        fontSize: 10
    },
    subTitleView_normal:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitleText_normal:{
        color: 'white',
        fontSize: 12
    },

    //选中的样式：
    container_selected:{
        backgroundColor: Constants.highlightColor,
    },
    titleView_selected:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText_selected:{
        color: Constants.ThemeColor,
        fontSize: 10
    },
    subTitleView_selected:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitleText_selected:{
        color: Constants.ThemeColor,
        fontSize: 12
    }
});

module.exports = StatusButton;

/* 使用示例：
*
*  <StatusButton
    btnStyle = {{marginTop:25}}
    selected = {this.state.btnSelected}
    onSelected = {(selected)=>{
    this.setState({
        btnSelected: selected
    });
    }} />
*
* 说明：btnStyle设置按钮整体样式，内部具体的样式可以回到这个类来修改
*
* */