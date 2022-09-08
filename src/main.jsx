import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from "redux"
import {Provider} from "react-redux"
import userReducer from './store/reducers/userReducer'

const store = createStore(userReducer,{users:[{fName: 'shimon' ,lname:'berry',age: "27", email: "shimonb055@icloud.com"}


]})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
