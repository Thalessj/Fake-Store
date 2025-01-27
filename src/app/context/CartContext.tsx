import React, { createContext, useContext, useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: string;
  quantity: number;
}

interface CartContextValue {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateLocalStorage = (newCart: Product[]) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateLocalStorage(updatedCart);
    } else {
      updateLocalStorage([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateLocalStorage(updatedCart);
  };

  const clearCart = () => {
    updateLocalStorage([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const SomeComponent = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  console.log(cartItems);
  return (
    <div>
      <h1>Testando o Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Quantidade: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SomeComponent;
