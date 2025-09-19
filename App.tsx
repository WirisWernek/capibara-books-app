import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import FavoritePage from './app/favorite'
import FeedPage from './app/feed'
import ProfilePage from './app/profile'
import SearchPage from './app/search'
import UploadPage from './app/upload'

const Tab = createBottomTabNavigator()

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Feed' component={FeedPage} />
                    <Tab.Screen name='Profile' component={ProfilePage} />
                    <Tab.Screen name='Upload' component={UploadPage} />
                    <Tab.Screen name='Favorite' component={FavoritePage} />
                    <Tab.Screen name='Search' component={SearchPage} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
