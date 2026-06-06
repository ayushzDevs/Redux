import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './Components/Todo'
import { Provider } from 'react-redux'
import { store } from './App/store'

function App() {
  return (
    <div>
      <Provider store={store}>
          <Todo/>
      </Provider>
    </div>
  )
}

export default App
