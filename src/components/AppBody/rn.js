'use strict';
import React, {
  Component,
  View
} from 'react-native';
class AppBody extends Component {
    render(){
        return (
            <View id="main">
                {this.props.children}
            </View>
        )
    }
}
