import React from 'react'
import { ScrollView , TouchableWithoutFeedback , Text, View } from 'react-native'
import { Link } from 'react-router-native'

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link
      to={to} component={TouchableWithoutFeedback} style={{
        textDecoration: 'none',
        color: active ? 'red' : 'black'
      }}
    >
      {children}
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
    }}
    >
      <ScrollView>
        <Text>Nombre</Text>
      </ScrollView>
    </View>
  )
}

export default AppBar
