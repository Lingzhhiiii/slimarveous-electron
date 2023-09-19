import { useState } from 'react'
import './App.scss'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux';
import store from './states/store/store';
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </div>
  )
}

export default App
