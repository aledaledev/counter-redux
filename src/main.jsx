import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppCounterAmount from './components/AppCounterAmount'
import {Provider} from 'react-redux'
import store from './store/index'
import SuperCounter, {store as storeCounter} from './components/SuperCounter'

const render = () => {
  return ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*!<App />
    <Provider store={store}>
    <AppCounterAmount />
    </Provider>*/}
    
    <SuperCounter />
    
  </React.StrictMode>
)
}
render()
storeCounter.subscribe(render)