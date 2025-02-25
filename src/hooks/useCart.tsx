//CUSTOM HOOK
import { useState, useEffect, useMemo } from "react"
import { db } from "../data/db"
import type { Guitar, CartItem } from "../types/types";

const useCar = () => {
    //--Variables
    const MAX_ITEMS = 5;
    
    const initialCart = () : CartItem[] => {
        const getCart = localStorage.getItem('cart');
        return getCart ? JSON.parse(getCart) : [];
    };

    //--State
    const [ data ] = useState(db);
    const [ cart, setCart ] = useState(initialCart);

    useEffect(() => {
        saveLS();
    }, [cart]);

    const isEmpty = useMemo( () => cart.length === 0, [cart] );
    const cartTotal = useMemo( () => cart.reduce( (total, item) => total + (item.price * item.quantity), 0 ), [cart] );

    //--Funciones
    //--TS Type
    function addToCart(item: Guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id);

        if(itemExists >= 0) {
            if(cart[itemExists].quantity === MAX_ITEMS) { return }

            const updateCart = [...cart];
            updateCart[itemExists].quantity++;
            setCart(updateCart);
            return;
        }

        //--TS Type
        const newItem: CartItem = {...item, quantity:1};
        setCart([...cart, newItem]);
    }

    //--
    //--TS LookUp: Tipado implicito
    function removeFromCart(id: Guitar['id']) {
        //setState(Estado previo => Nuevo Estado)
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
    }

    //--
    //--TS LookUp
    function increaseQuantity(id: Guitar['id']) {
        const itemExists = cart.findIndex(guitar => guitar.id === id);

        if(cart[itemExists].quantity < MAX_ITEMS) { 
            const updateCart = [...cart];
            updateCart[itemExists].quantity++;
            setCart(updateCart);
        }
    }

    //--
    //--TS LookUp
    function decreaseQuantity(id: Guitar['id']) {
        const itemExists = cart.findIndex(guitar => guitar.id === id);

        if(cart[itemExists].quantity === 1) {
            setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
            return;
        }

        const updateCart = [...cart];
        updateCart[itemExists].quantity--;
        setCart(updateCart);
    }

    //--
    function clearCart() {
        setCart([]);
    }

    //--
    function saveLS() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return {
        data,
        cart,
        isEmpty,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseQuantity,
        increaseQuantity,
    }
}

export default useCar;
