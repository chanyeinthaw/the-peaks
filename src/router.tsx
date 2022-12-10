import { createBrowserRouter } from 'react-router-dom'

import AppPage from 'app/pages/App.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
    children: [
      {
        path: '',
        element: <div>Index</div>
      },
      {
        path: 'view/*',
        element: <div>id</div>
      }
    ],
    errorElement: <div>Oops</div>
  }
])

export default router
