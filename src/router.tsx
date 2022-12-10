import { createBrowserRouter } from 'react-router-dom'

import AppPage from 'app/pages/App.page'
import HomePage from 'app/pages/Home/Home.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
    children: [
      {
        path: '',
        element: <HomePage />
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
