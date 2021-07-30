import React from 'react'
import {CountProvider} from './context/CountProvider';
import Counter from './components/counter/Counter';
const App = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  )
}

export default App
