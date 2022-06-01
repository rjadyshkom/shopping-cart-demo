import React, { useState } from 'react';
import { Header } from '../UI/header/Header';
// noinspection ES6CheckImport
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { AppContext } from '../../services/appContext';
import { routes } from '../../helpers/routes';

function App() {

    const [cartItems, setCartItems] = useLocalStorage('products', []);
    const [modal, setModal] = useState(false);

    const onAdd = (product) => {
        const isExist = cartItems.find(item => item.id === product.id);
        if (isExist) {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...isExist, qty: isExist.qty + 1 } : item))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    const onDecrease = (product) => {
        const isExist = cartItems.find(item => item.id === product.id);

        if (isExist.qty === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id));
        } else {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...isExist, qty: isExist.qty - 1 } : item))
        }
    }

    const onRemove = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    }

    return (
        <AppContext.Provider value={{ cartItems, setCartItems, modal, setModal, onAdd, onDecrease, onRemove }}>
            <div className={classes.container}>
                <Header />
                <Routes>
                    {Object.values(routes).map((route, key) => {
                        return (
                            <Route key={key} path={route.path} element={<route.element />} />
                        );
                    })}
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;