"use client";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <Link
            href="/"
            className="text-2xl font-bold text-teal-500"
          >
            Fake<span className="text-gray-900">Store</span>
          </Link>

          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:contato@Store.com"
              className="text-gray-600 hover:text-teal-500 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.hr
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-300 my-6"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-gray-600 text-sm"
        >
          <p>© 2025 FakeStore. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="hover:text-teal-500 transition"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="hover:text-teal-500 transition"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="hover:text-teal-500 transition"
            >
              FAQ
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
