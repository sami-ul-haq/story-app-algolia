import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PostsContextProvider from './GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostsContextProvider>
    <App />
  </PostsContextProvider>,
)
