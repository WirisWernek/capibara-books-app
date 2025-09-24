import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import FavoritePage from './app/views/favorite'
import FeedPage from './app/views/feed'
import ProfilePage from './app/views/profile'
import SearchPage from './app/views/search'
import UploadPage from './app/views/upload'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import '@/global.css'
import { CloudUpload, Newspaper } from 'lucide-react-native'

const { Home, User, PlusCircle, Heart, Search } = require('lucide-react-native')

const Tab = createBottomTabNavigator()

export default class App extends Component {
    render() {
        return (
            <GluestackUIProvider mode='dark'>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarShowLabel: false,
                            tabBarIcon: ({ focused, color, size }) => {
                                // Import icons dynamically to avoid importing all icons

                                if (route.name === 'Feed') {
                                    return <Newspaper size={size} color={color} fill={'transparent'} />
                                } else if (route.name === 'Profile') {
                                    return <User size={size} color={color} fill={'transparent'} />
                                } else if (route.name === 'Upload') {
                                    return <CloudUpload size={size} color={color} fill={'transparent'} />
                                } else if (route.name === 'Favorite') {
                                    return <Heart size={size} color={color} fill={'transparent'} />
                                } else if (route.name === 'Search') {
                                    return <Search size={size} color={color} fill={'transparent'} />
                                }

                                return null
                            },
                        })}
                    >
                        <Tab.Screen name='Feed' component={FeedPage} />
                        <Tab.Screen name='Profile' component={ProfilePage} />
                        <Tab.Screen name='Upload' component={UploadPage} />
                        <Tab.Screen name='Favorite' component={FavoritePage} />
                        <Tab.Screen name='Search' component={SearchPage} />
                    </Tab.Navigator>
                </NavigationContainer>
            </GluestackUIProvider>
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
