'use strict';
import React, {
  Component,
  Navigator
} from 'react-native';

class Application extends Component {
    render(){
        // console.log(this.props)
        return (<Navigator renderScene={this.renderScene.bind(this)} initialRoute={{name:'index'}} configureScene={this.configureScene}/>)
    }
    configureScene(){
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }
    renderScene (route, navigator) {
        var Scene = this.props.routeConfig[route.name];
        return <Scene route={route} navigator={navigator} message={route.message}/>
    }
}
module.exports = Application;
