'use strict';
import React, {
  Component,
  View,
  Navigator
} from 'react-native';
import AppHeader from './AppHeader';
import AppBody from './AppBody';

class Page extends Component{
    render(){
        return (
            <View>
                <AppHeader {...this.props}/>
                <AppBody >
                    {this.props.children}
                </AppBody>
            </View>
        )
    }
}
module.exports = Page;
