import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native'
import Home from './app/screens/Home'

function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}

export default App
