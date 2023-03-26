import React from 'react';
import ReactDOM from 'react-dom/client';
import {Root} from "./routes/Root";
import {Error} from "./Error";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Products} from "./routes/Products";
import {getProducts} from "./api/getProducts";
import './assets/styles/index.css';
import {Main} from "./routes/Main";
import {Product} from "./routes/Product";
import {getOneProduct} from "./api/getOneProduct";
import {Auth} from "./routes/Auth";
import {userCreate} from "./api/userCreate";
import {Profile} from "./routes/Profile";
import {Provider} from "react-redux";
import store from "./store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                index: true, element: <Main/>
            },
            {
                path: '/products',
                element: <Products/>,
                loader: getProducts,
                errorElement: <Error/>
            },
            {
                path: '/products/:id',
                element: <Product/>,
                loader: getOneProduct
            },
            {
                path: '/auth',
                element: <Auth/>,
                action: userCreate
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);