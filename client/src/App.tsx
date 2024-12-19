import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Register from './features/Auth/Register';
import Login from './features/Auth/Login';
import PostList from './features/Post/PostList';
import SinglePost from './features/Post/SinglePost';
import CreatePost from './features/Post/CreatePost';

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
          element: <PostList />
        },
        {
          path: '/:slug',
          element: <SinglePost />
        },
        {
          path: '/create/:slug',
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
