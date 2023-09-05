import React from 'react'
import { View } from 'react-native'
import { Link, NativeRouter, Route } from 'react-router-native'

const Home = () => <Text>Home</Text>
const About = () => <Text>About</Text>
export const TestRouteNative = () => (
  <NativeRouter>
    <View>
      <View>
        {/* Define our links. They are like anchor tags */}
        <Link to='/'>
          <Text>Home</Text>
        </Link>
        <Link to='/about'>
          <Text>About</Text>
        </Link>
      </View>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </View>

  </NativeRouter>
)
