import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Wrapper } from './components/Wrapper'
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './pages/LoginPage';
import { TodoPage } from './pages/TodoPage';
import { RegPage } from './pages/RegPage';

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <TodoPage/>,
            errorElement: <ErrorPage />
        },
        {
            path: "/login",
            element: <LoginPage/>,
            errorElement: <ErrorPage />
        },
        {
        path: "/reg",
        element: <RegPage/>,
        errorElement: <ErrorPage />
        },
    ]);
    return (
        <Wrapper>
            <RouterProvider router={router}/>
        </Wrapper>
    )
}