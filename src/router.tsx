import { createBrowserRouter } from 'react-router-dom'

import App from 'app/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>Index</div>
      }
    ]
  }
])

export default router
