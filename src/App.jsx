import React, { useState, useEffect } from "react";
import { client, urlFor } from "./sanity"; // Importação do cliente Sanity
import logoImg from "./assets/logo.jpeg";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Estados para armazenar os dados vindos do Sanity
  const [companyInfo, setCompanyInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Buscar dados no Sanity ao carregar a página
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Consultas GROQ (linguagem de pesquisa do Sanity)
        const companyReq = client.fetch(`*[_type == "companyInfo"][0]`);
        const servicesReq = client.fetch(`*[_type == "service"]`);
        const productsReq = client.fetch(`*[_type == "product"]`);

        // Executa todas as consultas ao mesmo tempo
        const [companyData, servicesData, productsData] = await Promise.all([
          companyReq, 
          servicesReq, 
          productsReq
        ]);

        setCompanyInfo(companyData);
        setServices(servicesData);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do Sanity:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Enquanto os dados carregam, mostra uma tela de carregamento simples
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-orange-600 font-bold">
        A carregar Redelight MOZ...
      </div>
    );
  }

  // Enviar pedido de Serviço via WhatsApp
  const handleServiceWhatsApp = (serviceTitle) => {
    const telefone = companyInfo?.whatsapp || "258877305740";
    const nomeEmpresa = companyInfo?.name || "Redelight MOZ";
    const text = `Olá, *${nomeEmpresa}*! Gostaria de solicitar um orçamento para o serviço: *${serviceTitle}*. Podem me ajudar?`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  // Enviar pedido de Produto via WhatsApp
  const handleProductWhatsApp = (product) => {
    const telefone = companyInfo?.whatsapp || "258877305740";
    const nomeEmpresa = companyInfo?.name || "Redelight MOZ";
    // Sanity usa _id em vez de id
    const text = `Olá, *${nomeEmpresa}*! Tenho interesse em adquirir o produto:\n*Item:* ${product.name}\n*Cód:* #${product._id.slice(0, 5)}\n*Preço:* ${product.price} MZN\n\nEstá disponível para entrega/levantamento?`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  // Filtragem de Produtos
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "Todos" || p.category === selectedCategory;
    // Previne erros caso a descrição venha nula do Sanity
    const desc = p.description || "";
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. CABEÇALHO / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 lg:px-8 py-3 flex items-center justify-between shadow-sm transition-all">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative group flex items-center justify-center select-none">
            <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur-sm group-hover:bg-orange-500/40 transition-all duration-300"></div>
            <img
              src={logoImg}
              alt={companyInfo?.name || "Redelight MOZ"}
              loading="eager"
              className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white p-0.5 rounded-full object-cover border-2 border-orange-500 shadow-sm z-10 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-black tracking-wider text-orange-600 uppercase leading-none">
              REDE<span className="text-slate-900">LIGHT</span>{" "}
              <span className="text-[10px] sm:text-xs text-orange-700 bg-orange-100 font-bold border border-orange-200 px-1.5 py-0.5 rounded align-middle ml-0.5">
                MOZ
              </span>
            </span>
            <p className="text-[9px] sm:text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-semibold hidden min-[360px]:block">
              {companyInfo?.tagline || "A solução é a razão da nossa existência."}
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#servicos" className="hover:text-orange-600 transition-colors">Serviços</a>
          <a href="#produtos" className="hover:text-orange-600 transition-colors">Materiais & Loja</a>
          <a href="#sobre" className="hover:text-orange-600 transition-colors">Sobre Nós</a>
        </nav>

        <a
          href={`https://wa.me/${companyInfo?.whatsapp || "258877305740"}`}
          className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md shadow-orange-500/20 transition-all flex items-center gap-2 active:scale-95"
        >
          <span className="text-base">💬</span>
          <span className="hidden min-[400px]:inline">Fale Connosco</span>
        </a>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-slate-50 pt-12 pb-16 px-4 sm:px-8 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200 shadow-sm">
            ⚡ Especialistas em Instalações e Reparações
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight sm:leading-tight">
            Segurança e Excelência com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              {companyInfo?.name || "Redelight MOZ"}
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 font-normal">
            Oferecemos serviços técnicos especializados de instalação elétrica residencial, diagnóstico e reparação de equipamentos eletrónicos, além da venda direta de material elétrico de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
            <a href="#servicos" className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95 text-sm sm:text-base">
              Solicitar Serviço Técnico
            </a>
            <a href="#produtos" className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 shadow-sm transition-all active:scale-95 text-sm sm:text-base">
              Ver Catálogo de Materiais
            </a>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Nossos Serviços Especializados</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">Soluções rápidas e eficientes com garantia técnica de qualidade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((serv) => (
            <div key={serv._id} className="bg-white border border-slate-200 hover:border-orange-500/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-100 border border-orange-200 text-orange-600 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {serv.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{serv.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{serv.description}</p>
                
                <ul className="space-y-2.5 pt-2">
                  {serv.features?.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-0.5">✓</span>
                      <span className="flex-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => handleServiceWhatsApp(serv.title)} className="mt-6 w-full py-3.5 bg-slate-900 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm">
                <span>Pedir Orçamento</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO DE PRODUTOS / MATERIAIS */}
      <section id="produtos" className="py-16 px-4 sm:px-8 bg-slate-100/70 border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Loja de Materiais</h2>
              <p className="text-slate-600 text-sm mt-1.5">Compre componentes e materiais de qualidade garantida.</p>
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Pesquisar material..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border border-slate-300 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-3 sm:py-2.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 w-full transition-all shadow-sm"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                  selectedCategory === cat ? "bg-orange-600 border-orange-600 text-white shadow-sm" : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((prod) => (
              <div key={prod._id} className={`bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-slate-300 hover:shadow-lg transition-all ${!prod.available ? 'opacity-60' : ''}`}>
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    {/* Renderiza a imagem usando a função urlFor() do Sanity */}
                    {prod.image && (
                      <img
                        src={urlFor(prod.image).width(400).url()}
                        alt={prod.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {prod.badge && (
                      <span className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md">
                        {prod.badge}
                      </span>
                    )}
                    {!prod.available && (
                      <span className="absolute top-3 right-3 bg-slate-900 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md">
                        Esgotado
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 space-y-1.5">
                    <span className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">{prod.category}</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 leading-snug">{prod.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{prod.description}</p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 space-y-4">
                  <div className="text-lg sm:text-xl font-black text-slate-900">
                    {prod.price?.toLocaleString("pt-MZ")} <span className="text-xs font-semibold text-slate-500">MZN</span>
                  </div>

                  <button
                    onClick={() => handleProductWhatsApp(prod)}
                    disabled={!prod.available}
                    className="w-full py-3 bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white font-bold text-sm rounded-xl border border-orange-200 hover:border-transparent transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm disabled:bg-slate-200 disabled:text-slate-400 disabled:border-slate-200 disabled:cursor-not-allowed"
                  >
                    <span>{prod.available ? "Comprar Material" : "Sem Stock"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <span className="text-4xl mb-3 block">🧐</span>
              <h3 className="text-slate-900 font-bold mb-1">Nenhum material encontrado</h3>
              <p className="text-slate-500 text-sm">Tenta pesquisar por outro termo ou muda a categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. DIFERENCIAIS / SOBRE */}
      <section id="sobre" className="py-16 px-4 sm:px-8 max-w-6xl mx-auto text-center space-y-10 scroll-mt-10">
         {/* Mantido igual ao teu código */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Porquê Escolher a {companyInfo?.name || "Redelight MOZ"}?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">Trabalhamos com rigor técnico para entregar resultados duradouros.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">Segurança Garantida</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Instalações elétricas executadas rigorosamente de acordo com as normas técnicas de segurança vigentes.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">Atendimento Rápido</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Prontidão e agilidade para diagnosticar e resolver avarias elétricas e reparações urgentes.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">Material Certificado</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Fornecemos cabos, disjuntores e componentes eletrónicos de alta qualidade para máxima durabilidade.</p>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ */}
      <footer className="border-t border-slate-800 bg-slate-900 pt-12 pb-8 px-4 sm:px-8 text-center text-sm text-slate-400 space-y-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={logoImg} alt={companyInfo?.name || "Redelight MOZ"} className="w-10 h-10 rounded-full object-cover border-2 border-slate-700 bg-white" />
          <span className="font-extrabold tracking-widest text-white">{companyInfo?.name?.toUpperCase() || "REDELIGHT MOZ"}</span>
        </div>
        <p className="text-orange-400 font-medium italic">"{companyInfo?.tagline || "A solução é a razão da nossa existência."}"</p>
        <div className="border-t border-slate-800 pt-6 mt-6 max-w-sm mx-auto">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} {companyInfo?.name || "Redelight MOZ"}.<br /> Agência de Serviços e Material Elétrico.<br />Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}