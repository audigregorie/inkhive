import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import Login from './features/Auth/Login';
import Register from './features/Auth/Register';
import CreatePost from './pages/CreatePost';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/posts',
          element: <Posts />
        },
        {
          path: '/:slug',
          element: <SinglePost />
        },
        {
          path: '/create',
          element: <CreatePost />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
