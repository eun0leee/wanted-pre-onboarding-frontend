import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Main from './pages/Main/index.tsx';
import NotFound from './pages/NotFound/index.tsx';
import SignIn from './pages/SignIn/index.tsx';
import SignUp from './pages/SignUp/index.tsx';
import Todo from './pages/Todo/index.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
]);

export default router;
