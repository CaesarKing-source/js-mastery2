import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store'
import { RouterProvider, createBrowserRouter } from 'react-router'
import CounterPage from './pages/Counter'
import TodoPage from './pages/TodoPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/counter',
        element: <CounterPage />,
      },
      {
        path: '/todo',
        element: <TodoPage />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
