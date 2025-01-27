"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CartProvider, useCart } from "@/app/context/CartContext"

interface Product {
  id: number;
  title: string;
  price: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Erro ao buscar o produto:", error));
    }
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>Preço: ${product.price}</p>
      <button
        className="mt-4 bg-black text-white py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
