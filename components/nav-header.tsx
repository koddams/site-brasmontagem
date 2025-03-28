'use client';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Linha Superior - Navegação */}
      <nav className="w-full bg-white shadow-sm">
        <div className="container mx-auto h-full px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex-shrink-0"
            >
              <Image
                src="/images/logo-brasmontagem.png"
                alt="Logo BRASMONTAGEM"
                width={140}
                height={60}
                className="h-12 w-auto md:h-14"
              />
            </motion.a>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8 items-center h-full">
              {['Servicos', 'Projetos', 'Contato'].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ color: '#F59E0B' }}
                  className="text-blue-600 hover:text-yellow-500 transition-colors cursor-pointer font-medium h-full flex items-center border-b-2 border-transparent hover:border-yellow-500"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden flex items-center gap-4">
              <button
                className="text-blue-600 hover:text-yellow-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Linha Inferior - Contatos (Azul) */}
      <div className="w-full bg-blue-900 h-10 md:h-12">
        <div className="container mx-auto h-full px-4">
          <div className="flex items-center justify-between h-full gap-4">
            {/* Contatos Esquerda */}
            <div className="flex-1 flex items-center gap-4 overflow-x-auto">
              <a
                href="mailto:nely.vendas@brasmontagem.com.br"
                className="text-white hover:text-yellow-500 transition-colors flex items-center gap-2 text-xs md:text-sm whitespace-nowrap"
              >
                <FaEnvelope className="w-3 h-3 md:w-4 md:h-4" />
                nely.vendas@brasmontagem.com.br
              </a>

              <a
                href="tel:11971898699"
                className="text-white hover:text-yellow-500 transition-colors flex items-center gap-2 text-xs md:text-sm whitespace-nowrap"
              >
                <FaPhoneAlt className="w-3 h-3 md:w-4 md:h-4" />
                (11) 97189-8699
              </a>
            </div>

            {/* WhatsApp Direita */}
            <a
              href="https://wa.me/5511971898699"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-yellow-500 transition-colors flex items-center gap-2 text-xs md:text-sm"
            >
              <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden md:inline">Fale pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white backdrop-blur-lg md:hidden"
        >
          <div className="container mx-auto px-4 py-8 flex flex-col items-end">
            <button
              className="mb-8 text-blue-600 hover:text-yellow-500"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full space-y-6 text-right">
              {['Servicos', 'Projetos', 'Contato'].map((item, index) => (
                <a
                  key={index}
                  className="block text-2xl text-blue-600 hover:text-yellow-500"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}