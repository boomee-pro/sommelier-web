import Cart from "components/Cart/cart";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}
export function CartProvider( {children } ) {

    const [cart, setCart] = useState([]);

    function addToCart(wine) {
        const itemExists = cart.find((item) => item.id === wine.id);
        if(itemExists) incrementQuantity(wine.id);
        else setCart([...cart, {...wine, quantity: 1}]);
    }

    function incrementQuantity(id) {
        const index = cart.findIndex((item) => item.id === id);
        cart[index].quantity++;
        setCart([...cart]);
    }

    function decrementQuantity(id) {
        const index = cart.findIndex((item) => item.id === id);
        if(cart[index].quantity === 1) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity--;
        }
        setCart([...cart])
    }

    useEffect(() => {
        const fetchCart = () => {
            let cartData = localStorage.getItem("cart");
            if(!cartData) return;
            setCart(JSON.parse(cartData));
        }

        fetchCart();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("cart", JSON.stringify(cart));
        }, 500)
    }, [cart])

    const value = {
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}