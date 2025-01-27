"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold text-teal-500">
            Fake<span className="text-gray-900">Store</span>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex space-x-8"
        >
          <Link
            href="/FakeStore/About"
            className="text-gray-700 hover:text-teal-500 transition duration-300"
          >
            Sobre
          </Link>
          <Link
            href="/"
            className="text-gray-700 hover:text-teal-500 transition duration-300"
          >
            FakeStore
          </Link>
          <Link
            href="/FakeStore/Contact"
            className="text-gray-700 hover:text-teal-500 transition duration-300"
          >
            Contato
          </Link>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <button
            className="text-gray-700 hover:text-teal-500 transition duration-300"
            onClick={toggleCart}
          >
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button
            className="md:hidden text-gray-700 hover:text-teal-500 transition duration-300"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="md:hidden bg-white shadow-md py-4 px-6"
        >
          <Link
            href="/FakeStore/About"
            className="block text-gray-700 hover:text-teal-500 transition duration-300 py-2"
            onClick={toggleMobileMenu}
          >
            Sobre
          </Link>
          <Link
            href="/"
            className="block text-gray-700 hover:text-teal-500 transition duration-300 py-2"
            onClick={toggleMobileMenu}
          >
            FakeStore
          </Link>
          <Link
            href="/FakeStore/Contact"
            className="block text-gray-700 hover:text-teal-500 transition duration-300 py-2"
            onClick={toggleMobileMenu}
          >
            Contato
          </Link>
        </motion.div>
      )}
      {isCartOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 bg-white shadow-lg p-6 w-1/3 h-full flex flex-col justify-center items-center z-50"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Essa função não foi feita ainda
          </h2>
          <p className="mt-4 text-gray-500 text-center">
            Em breve, você poderá visualizar e gerenciar seus produtos no
            carrinho.
          </p>
          <motion.button
            className="mt-6 px-4 py-2 bg-teal-500 text-white rounded-lg"
            onClick={toggleCart}
          >
            Fechar
          </motion.button>
        </motion.div>
      )}
    </header>
  );
}
