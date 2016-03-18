'use strict';
import React, {
    View,
    Component,
    Navigator
} from 'react-native';

class AppHeader extends Component {
    render(){
        var subTitle = this.props.subTitle ? (<Text style={[styles.headerSubTitle]}>{this.props.subTitle}</Text>) : null
        return (<View id="headerview" style={[styles.header]}>
                    <View style={[styles.leftWrap]}>
                        <Text>返回</Text>
                    </View>
                    <View style={[styles.midWrap]}>
                        <Text  style={[styles.headerTitle]}>{this.props.title}</Text>
                        {subTitle}
                    </View>
                    <View style={[styles.rightWrap]}>
                        <Text>首页</Text>
                        <Text> | </Text>
                        <Text>地图</Text>
                    </View>
                </View>)
    }
}
module.exports = AppHeader;
