import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Login from './features/Auth/Login';
import Register from './features/Auth/Register';
import CreatePost from './pages/CreatePost';
import NotFound from './components/NotFound';
import SinglePost from './pages/SinglePost';
import About from './pages/About';

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
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/not-found',
          element: <NotFound />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
