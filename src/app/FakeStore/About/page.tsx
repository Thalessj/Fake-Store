"use client";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto p-6 max-w-4xl text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre a FakeStore
          </h1>
          <p className="text-gray-600 text-lg leading-7 mb-6">
            A FakeStore é uma loja fictícia criada exclusivamente para fins
            educacionais. Seu principal objetivo é ajudar desenvolvedores a
            praticarem suas habilidades em tecnologias modernas, como React,
            Next.js e APIs.
          </p>
          <p className="text-gray-600 text-lg leading-7 mb-6">
            Aqui você encontrará produtos que não existem, mas que simulam um
            ambiente realista para o aprendizado de manipulação de dados, design
            responsivo, consumo de APIs, e muito mais. Nada do que está aqui
            está à venda de verdade!
          </p>
          <p className="text-teal-500 font-semibold text-lg">
            "Aprender fazendo é o melhor caminho para dominar qualquer
            habilidade."
          </p>
        </div>
      </div>
    </main>
  );
}
