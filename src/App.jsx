import React, { useState } from "react";
import { COMPANY_INFO, SERVICES, PRODUCTS } from "./data/redlightData";
import logoImg from "./assets/logo.jpeg";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Enviar pedido de Serviço via WhatsApp (Corrigido para Mobile)
  const handleServiceWhatsApp = (serviceTitle) => {
    const text = `Olá, *${COMPANY_INFO.name}*! Gostaria de solicitar um orçamento para o serviço: *${serviceTitle}*. Podem me ajudar?`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    // Usar window.location.href evita o bug de abrir e fechar aba vazia no telemóvel
    window.location.href = url;
  };

  // Enviar pedido de Produto via WhatsApp (Corrigido para Mobile)
  const handleProductWhatsApp = (product) => {
    const text = `Olá, *${COMPANY_INFO.name}*! Tenho interesse em adquirir o produto:\n- *Item:* ${product.name}\n- *Cód:* #${product.id}\n- *Preço:* ${product.price} MZN\n\nEstá disponível para entrega/levantamento?`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  // Filtragem de Produtos
  const categories = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategory === "Todos" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500/30">
      {/* 1. CABEÇALHO / NAVBAR */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/80 px-4 lg:px-8 py-3 flex items-center justify-between transition-all">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Logo em Destaque Absoluto */}
          <div className="relative group flex items-center justify-center select-none">
            {/* Brilho de fundo mais intenso */}
            <div className="absolute -inset-1.5 bg-orange-500/40 rounded-full blur-md group-hover:bg-orange-500/60 transition-all duration-300"></div>
            <img
              src={logoImg}
              alt="Redelight MOZ"
              loading="eager"
              className="relative w-12 h-12 sm:w-14 sm:h-14 bg-zinc-950 p-0.5 rounded-full object-cover border-2 border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.2)] z-10 hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-black tracking-wider text-orange-500 uppercase leading-none">
              REDE<span className="text-white">LIGHT</span>{" "}
              <span className="text-[10px] sm:text-xs text-orange-400 font-bold border border-orange-500/30 px-1 py-0.5 rounded align-middle ml-0.5">
                MOZ
              </span>
            </span>
            <p className="text-[9px] sm:text-[10px] text-zinc-400 mt-1 uppercase tracking-widest hidden min-[360px]:block">
              A solução é a nossa razão
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#servicos" className="hover:text-orange-500 transition-colors">
            Serviços
          </a>
          <a href="#produtos" className="hover:text-orange-500 transition-colors">
            Materiais & Loja
          </a>
          <a href="#sobre" className="hover:text-orange-500 transition-colors">
            Sobre Nós
          </a>
        </nav>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
          className="bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] transition-all flex items-center gap-2 active:scale-95"
        >
          <span className="text-base">💬</span>
          <span className="hidden min-[400px]:inline">Fale Connosco</span>
        </a>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950 pt-12 pb-16 px-4 sm:px-8 text-center border-b border-zinc-800">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <span className="inline-block px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
            ⚡ Especialistas em Instalações e Reparações
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-tight">
            Segurança e Excelência com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Redelight MOZ
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Oferecemos serviços técnicos especializados de instalação elétrica
            residencial, diagnóstico e reparação de equipamentos eletrónicos,
            além da venda direta de material elétrico de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
            <a
              href="#servicos"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] active:scale-95 text-sm sm:text-base"
            >
              Solicitar Serviço Técnico
            </a>
            <a
              href="#produtos"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold rounded-xl border border-zinc-700 transition-all active:scale-95 text-sm sm:text-base"
            >
              Ver Catálogo de Materiais
            </a>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Nossos Serviços Especializados
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Soluções rápidas e eficientes com garantia técnica de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                  {serv.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{serv.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {serv.description}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {serv.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2"
                    >
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      <span className="flex-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleServiceWhatsApp(serv.title)}
                className="mt-6 w-full py-3.5 bg-zinc-800/80 group-hover:bg-orange-500 group-hover:text-zinc-950 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Pedir Orçamento</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO DE PRODUTOS / MATERIAIS */}
      <section
        id="produtos"
        className="py-16 px-4 sm:px-8 bg-zinc-900/30 border-t border-zinc-800/50 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Loja de Materiais
              </h2>
              <p className="text-zinc-400 text-sm mt-1.5">
                Compre componentes e materiais de qualidade garantida.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Pesquisar material..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zinc-900 border border-zinc-700 text-white text-sm rounded-xl pl-10 pr-4 py-3 sm:py-2.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 w-full transition-all"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
                🔍
              </span>
            </div>
          </div>

          {/* Categorias - Otimizado para Mobile com Scroll Horizontal */}
          <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                  selectedCategory === cat
                    ? "bg-orange-500 border-orange-500 text-zinc-950 shadow-md"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-all shadow-md"
              >
                <div>
                  <div className="relative h-48 sm:h-52 bg-zinc-800 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {prod.badge && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-zinc-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-lg">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 space-y-1.5">
                    <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">
                      {prod.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 space-y-4">
                  <div className="text-lg sm:text-xl font-black text-white">
                    {prod.price.toLocaleString("pt-MZ")}{" "}
                    <span className="text-xs font-normal text-zinc-500">
                      MZN
                    </span>
                  </div>

                  <button
                    onClick={() => handleProductWhatsApp(prod)}
                    className="w-full py-3 bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-zinc-950 font-bold text-sm rounded-xl border border-orange-500/30 hover:border-transparent transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Comprar Material</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <span className="text-4xl mb-3 block">🧐</span>
              <h3 className="text-white font-bold mb-1">Nenhum material encontrado</h3>
              <p className="text-zinc-500 text-sm">
                Tenta pesquisar por outro termo ou muda a categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. DIFERENCIAIS / SOBRE */}
      <section
        id="sobre"
        className="py-16 px-4 sm:px-8 max-w-6xl mx-auto text-center space-y-10 scroll-mt-10"
      >
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Porquê Escolher a Redelight MOZ?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Trabalhamos com rigor técnico para entregar resultados duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-white mb-2 text-lg">Segurança Garantida</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Instalações elétricas executadas rigorosamente de acordo com as
              normas técnicas de segurança vigentes.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-white mb-2 text-lg">Atendimento Rápido</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Prontidão e agilidade para diagnosticar e resolver avarias
              elétricas e reparações urgentes.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-bold text-white mb-2 text-lg">
              Material Certificado
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Fornecemos cabos, disjuntores e componentes eletrónicos de
              alta qualidade para máxima durabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 pt-12 pb-8 px-4 sm:px-8 text-center text-sm text-zinc-500 space-y-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src={logoImg}
            alt="Redelight MOZ"
            className="w-10 h-10 rounded-full object-cover border-2 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <span className="font-extrabold tracking-widest text-zinc-300">REDELIGHT MOZ</span>
        </div>
        <p className="text-orange-500/80 font-medium italic">
          "A solução é a razão da nossa existência."
        </p>
        <div className="border-t border-zinc-800/50 pt-6 mt-6 max-w-sm mx-auto">
          <p className="text-xs">
            © {new Date().getFullYear()} Redelight MOZ.<br /> Agência de Serviços e
            Material Elétrico.<br />Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}