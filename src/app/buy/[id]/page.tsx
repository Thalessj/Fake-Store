"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) =>
          console.error("Erro ao buscar os detalhes do produto:", error)
        );
    }
  }, [id]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (item: Product) => item.id.toString() !== id
        );
        setOtherProducts(filteredProducts.slice(0, 4));
      })
      .catch((error) =>
        console.error("Erro ao buscar outros produtos:", error)
      );
  }, [id]);

  if (!product) {
    return <div className="text-center py-20">Carregando produto...</div>;
  }

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="bg-white shadow-lg mt-20 rounded-lg overflow-hidden flex flex-col lg:flex-row mb-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-contain w-full h-full p-4"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-teal-500 text-2xl font-semibold mb-6">
              ${product.price}
            </p>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-teal-500 transition">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Outros Produtos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProducts.map((otherProduct) => (
              <Link
                key={otherProduct.id}
                href={`/buy/${otherProduct.id}`}
                className="bg-white shadow-lg rounded-lg overflow-hidden group h-180 flex flex-col hover:shadow-xl transition"
              >
                <Image
                  src={otherProduct.image}
                  alt={otherProduct.title}
                  width={300}
                  height={300}
                  className="object-contain w-full h-52 p-4"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-500 transition">
                    {otherProduct.title}
                  </h3>
                  <p className="text-teal-500 font-semibold mt-2 mb-4">
                    ${otherProduct.price}
                  </p>
                  <div className="flex-grow"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
