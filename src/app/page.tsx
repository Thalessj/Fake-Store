"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  isFeatured?: boolean;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = data.map((product: Product, index: number) => ({
          ...product,
          isFeatured: index < 5,
        }));
        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!products) {
    return (
      <>
        <p>Carregando...</p>
      </>
    );
  }

  const featuredProducts = products.filter((product) => product.isFeatured);
  const otherProducts = products.filter((product) => !product.isFeatured);

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <section className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-[350px] md:h-[700px] rounded-xl mt-20"
        >
          <SwiperSlide>
            <div className="h-full w-full bg-black flex items-center justify-center">
              <h1 className="text-3xl text-white font-bold">Carrousel</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-teal-500 flex items-center justify-center">
              <h1 className="text-3xl text-white font-bold">Carrousel</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-green-300 flex items-center justify-center">
              <h1 className="text-3xl text-white font-bold">Carrousel</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Produtos em Destaque
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group h-180 flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-500 transition">
                  {product.title}
                </h3>
                <p className="text-teal-500 font-semibold mt-2 mb-4">
                  ${product.price}
                </p>
                <div className="flex-grow"></div>
                <Link href={`/buy/${product.id}`}>
                  <button className="mt-4 flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-teal-500 transition">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Comprar
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Outros Produtos
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {otherProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group h-180 flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-500 transition">
                  {product.title}
                </h3>
                <p className="text-teal-500 font-semibold mt-2 mb-4">
                  ${product.price}
                </p>
                <div className="flex-grow"></div>
                <Link href={`/buy/${product.id}`}>
                  <button className="mt-4 flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-teal-500 transition">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Comprar
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
