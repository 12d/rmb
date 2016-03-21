'use strict';
import React, {
  Component,
  StyleSheet,
  Text
} from 'react-native';

import {Application, AppHeader, AppBody, Page} from '../moles.rn'

class Index extends Component {
    render(){
        return (
            <Page title='携程团购'>
                <Text onPress={()=>{
                    this.props.navigator.push({
                        name: 'list'
                    })
                }}>Index Page</Text>
            </Page>
        )
    }
}

class List extends Component {
    render(){
        return (
            <Page title='list page of Ctrip App' subTitle="search 'hotel' 88 results">
                <Text onPress={()=>{
                    this.props.navigator.push({
                        name: 'detail'
                    })
                }}>List Page</Text>
            </Page>
        )
    }
}

class Detail extends Component {
    render(){
        return (
            <Page title='detail page of Ctrip App'>
                <Text onPress={()=>{
                    this.props.navigator.pop()
                }}>Detail Page</Text>
            </Page>
        )
    }
}

module.exports = {
    Index: Index,
    List: List,
    Detail: Detail
}
