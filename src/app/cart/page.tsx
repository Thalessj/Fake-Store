"use client";

import { CartProvider, useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();  

  if (cartItems.length === 0) return <p>O carrinho está vazio!</p>;

  const total = cartItems.reduce(
    (sum, product) => sum + parseFloat(product.price) * product.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Seu Carrinho</h1>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id} className="mb-4">
            <h2 className="text-xl">{product.title}</h2>
            <p>Quantidade: {product.quantity}</p>
            <p>Preço total: ${(product.quantity * parseFloat(product.price)).toFixed(2)}</p>
            <button
              className="bg-red-500 text-white py-1 px-2 mt-2 rounded"
              onClick={() => removeFromCart(product.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-6">Total: ${total.toFixed(2)}</h2>
      <button
        className="mt-4 bg-black text-white py-2 px-4 rounded"
        onClick={clearCart}
      >
        Esvaziar Carrinho
      </button>
    </div>
  );
}
