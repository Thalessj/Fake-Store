"use client";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto p-6 max-w-4xl text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-600 text-lg leading-7 mb-6">
            Este é um formulário de contato fictício. Se fosse real, você
            poderia nos enviar uma mensagem com dúvidas, sugestões ou qualquer
            outra solicitação. Como a FakeStore é apenas para aprendizado,
            sinta-se à vontade para testar esta página!
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Seu Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Seu E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Sua Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Digite sua mensagem"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-teal-500 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
