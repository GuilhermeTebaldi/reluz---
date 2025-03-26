import { useState } from "react";

import { motion } from "framer-motion";

export default function BeautySalon() {
  interface Product {
    name: string;
    image: string;
  }
  const [showProducts, setShowProducts] = useState(false);
  const [zoomedProduct, setZoomedProduct] = useState<Product | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  const phoneNumber = "5547999678478"; // WhatsApp

  const products = [
    {
      name: "shampoo maxxi liss",
      image:
        "https://i.pinimg.com/474x/ff/88/2d/ff882df015f96a4a5a1c3f08610bbfbd.jpg",
    },
    {
      name: "Kit in blue shampoo, óleo e máscara Capilar",
      image:
        "https://i.pinimg.com/474x/ee/20/55/ee205501f8c1a568f640a44cdc55309c.jpg",
    },
    {
      name: "Olenka MÁSCARA",
      image:
        "https://i.pinimg.com/474x/eb/08/eb/eb08eb692e5dfd3728e9dc4ab8326545.jpg",
    },
    {
      name: " Argan & Jojoba Prime",
      image:
        "https://i.pinimg.com/736x/46/25/07/4625078d1c219b0c65cfa26d5ef124db.jpg",
    },
    {
      name: "kit Dicolore Shampoo creme Restaurador",
      image:
        " https://i.pinimg.com/736x/28/b3/30/28b330150561c60eadb67fd5c675c357.jpg ",
    },
    {
      name: "Bio Comurol DERMOTRICOLOGIA AANTIQUEDA",
      image:
        "https://i.pinimg.com/736x/a0/44/f1/a044f13ae3fd13bce19da2be22a2f52c.jpg",
    },
    {
      name: "OLENKA shampoo e condicionador",
      image:
        "https://i.pinimg.com/736x/7d/c8/2b/7dc82b0af0956fbc6fca02ede170f9ed.jpg",
    },

    {
      name: "DiColore shampoo e condicionador",
      image:
        "https://i.pinimg.com/736x/3b/45/c2/3b45c2e5cef8ac1f9ebfc97d9e13c7bc.jpg",
    },
    {
      name: "Kit In Blue crescimento e fortalecimento dos fios  ",
      image:
        " https://i.pinimg.com/474x/86/c0/52/86c0521f1f5b75842e3067af7dbc9ef8.jpg ",
    },
    {
      name: " Óleo Capilar DIColore Argan e Jojoba ",
      image:
        " https://i.pinimg.com/736x/2d/7d/83/2d7d8336a5651b4f06ce3b70af598071.jpg",
    },
    {
      name: " Máscara de Tonalização e Hidratação OLENKA ",
      image:
        " https://i.pinimg.com/736x/a3/60/19/a36019200c725d098f6ef1b855384a7a.jpg ",
    },
    {
      name: " Kit Shampoo e Máscara Regeneração Intensa OLENKA ",
      image:
        "https://i.pinimg.com/736x/06/77/39/0677396b1505f139141c18a9a5bfdcb2.jpg  ",
    },
    {
      name: " kit Shampoo e Condicionador Pitaya DIColore ",
      image:
        "https://i.pinimg.com/736x/25/fc/1d/25fc1df988c2b45bb07fab48139c2b33.jpg  ",
    },
    {
      name: "  Kit DIColore para cabelos Cacheados",
      image:
        " https://i.pinimg.com/736x/44/40/1c/44401c038a5bbd5dea347ef0603e3230.jpg ",
    },
    {
      name: " Kit de Tratamento Esfoliante OLENKA ",
      image:
        " https://i.pinimg.com/736x/2f/2c/8f/2f2c8f6cff1806fa609704557c03a860.jpg ",
    },

    {
      name: " Kit Shampoo e Condicionador Revitalização da Cor OLENKA ",
      image:
        " https://i.pinimg.com/736x/f4/ae/d7/f4aed7166bcd19ed738b284b8a08ec50.jpg ",
    },
    {
      name: "Kit Shampoo e Máscara Proteção dos Loiros OLENKA  ",
      image:
        "  https://i.pinimg.com/736x/23/e9/4a/23e94acbf017eaf8d81234b552a99092.jpg",
    },
    {
      name: " CC Cream leav-in Universal mais de 13 benefícios. - Fluido pré escova ",
      image:
        " https://i.pinimg.com/736x/a6/e9/bd/a6e9bd9596aa74f92e80a194b2500b8f.jpg ",
    },
    {
      name: " Sério de Nutrição Intensiva OLENKA ",
      image:
        " https://i.pinimg.com/474x/23/cb/40/23cb408b0419b45be734aedc23a6030e.jpg ",
    },
    {
      name: " LEAV IN DIColore ",
      image:
        " https://i.pinimg.com/736x/61/e6/cc/61e6cca8c9c1cfdd9f7e1adced6996a7.jpg ",
    },
    {
      name: " BOOM! Equalizador Hídrico DIColore ",
      image:
        "  https://i.pinimg.com/474x/a0/40/c8/a040c83e8f560e6590dc8ff57f584205.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const procedimentos = [
    "https://i.pinimg.com/736x/41/8c/96/418c968fe43c2b02a41029e18e576449.jpg",
    "https://i.pinimg.com/736x/ce/8f/3c/ce8f3c2f489feb20dbd8b381e0f40c86.jpg",
    "https://i.pinimg.com/474x/31/89/6c/31896cd2eb81e6703c4c7aca96a277b6.jpg",
    "https://i.pinimg.com/474x/05/e3/f0/05e3f049872eacc3a44615f2bc36f93a.jpg",
    "https://i.pinimg.com/474x/1c/47/9a/1c479ae6014d3f646d59607e468f848a.jpg",
    "https://i.pinimg.com/474x/7d/4f/e5/7d4fe55b363ff3218833a808bc06e88c.jpg",
    "https://i.pinimg.com/474x/33/49/2b/33492ba636a8a5659384c16052f29189.jpg",
    "https://i.pinimg.com/474x/5c/4b/f6/5c4bf6afd332c7a7601e3939fea002c9.jpg",
    "https://i.pinimg.com/474x/f0/e0/eb/f0e0eb46994dc9bbc92246bd34ed304a.jpg",
    "https://i.pinimg.com/474x/65/35/85/653585a8f2383a91ae9ab01a8850a01b.jpg",
    "https://i.pinimg.com/736x/41/8c/96/418c968fe43c2b02a41029e18e576449.jpg",
    "https://i.pinimg.com/736x/ce/8f/3c/ce8f3c2f489feb20dbd8b381e0f40c86.jpg",
    "https://i.pinimg.com/474x/31/89/6c/31896cd2eb81e6703c4c7aca96a277b6.jpg",
    "https://i.pinimg.com/474x/05/e3/f0/05e3f049872eacc3a44615f2bc36f93a.jpg",
    "https://i.pinimg.com/474x/1c/47/9a/1c479ae6014d3f646d59607e468f848a.jpg",
    "https://i.pinimg.com/474x/7d/4f/e5/7d4fe55b363ff3218833a808bc06e88c.jpg",
    "https://i.pinimg.com/474x/33/49/2b/33492ba636a8a5659384c16052f29189.jpg",
    "https://i.pinimg.com/474x/5c/4b/f6/5c4bf6afd332c7a7601e3939fea002c9.jpg",
    "https://i.pinimg.com/474x/f0/e0/eb/f0e0eb46994dc9bbc92246bd34ed304a.jpg",
    "https://i.pinimg.com/474x/65/35/85/653585a8f2383a91ae9ab01a8850a01b.jpg",
    "",
  ];
  return (
    <div
      className="relative bg-white font-sans text-gray-900"
      style={{ overflowX: "hidden" }}
    >
      <header className="fixed left-0 top-0 z-[9999] flex w-full items-center justify-between bg-white/30 px-6 py-3 shadow-sm backdrop-blur-md">
        <h1 className="text-xl font-bold tracking-wide text-gray-800">
          Reluz Estylos & Beleza
        </h1>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-800">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5547999678478"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </header>
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-16 pt-14 text-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/ed/bf/1b/edbf1b22ac273cc4d6659a32b73a12c4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

        <h2 className="relative z-10 mb-2 text-sm uppercase tracking-widest text-gray-600">
          Estudio de Beleza
        </h2>
        <h1 className="relative z-10 mb-10 font-serif text-3xl font-bold text-black sm:text-4xl md:text-6xl">
          Marli Aparecida
        </h1>

        <div className="relative z-10 mb-20 flex w-full max-w-4xl items-center justify-center">
          <div className="absolute left-[15%] top-[30%] h-40 w-40 overflow-hidden rounded-full shadow-lg">
            <img
              src="https://i.pinimg.com/736x/c1/76/47/c176472332d1b1424ceeca24dbfd6f5e.jpg"
              alt="Produto"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="z-20 h-40 w-40 overflow-hidden rounded-full shadow-xl sm:h-56 sm:w-56 md:h-72 md:w-72">
            <img
              src="https://i.pinimg.com/736x/c3/16/40/c31640fbb50836c93e69e80a7f219051.jpg"
              alt="Corte"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute right-[15%] top-[30%] h-40 w-40 overflow-hidden rounded-full shadow-lg">
            <img
              src="https://i.pinimg.com/736x/9f/35/76/9f357619b7150a301e3952d6184f35ea.jpg"
              alt="Escova"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="z-10 rounded-full bg-black px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-gray-800"
          onClick={() => setShowProducts(true)}
        >
          Ver Produtos
        </motion.button>

        <div className="z-10 mb-2 mt-12 font-serif text-xl text-black">
          COMBO IMPERDÍVEL!
        </div>
        <ul className="z-10 mb-4 text-lg font-medium text-black">
          <li> HIDRATAÇÃO</li>
          <li> CORTE</li>
          <li> ESCOVA</li>
          <li> UNHAS</li>
          <li> </li>
        </ul>

        <p className="z-10 mb-8 text-sm uppercase tracking-wide text-gray-500">
          Venha se sentir bem!
        </p>

        <a
          href="https://wa.me/+5547999678478"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 inline-block rounded-full bg-black/30 px-6 py-3 text-lg font-semibold text-white shadow transition hover:bg-black"
        >
          Reserve seu horário via WhatsApp!
        </a>
      </section>
      {showProducts && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white/90 backdrop-blur-md">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowProducts(false)}
              className="text-xl font-bold text-gray-800 transition hover:text-red-500"
            >
              ✕ Fechar
            </button>
          </div>

          {/* Barra de pesquisa */}
          <div className="px-6 pb-4">
            <input
              type="text"
              placeholder="Buscar produto..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-yellow-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Grid scrollável com produtos filtrados */}
          <div className="flex-1 overflow-y-auto px-6 pb-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  onClick={() => setZoomedProduct(product)}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-3 text-center text-sm font-medium text-gray-800 md:text-base">
                    {product.name}
                  </div>
                  <div className="px-3 pb-4 text-center">
                    <a
                      href={`https://wa.me/${phoneNumber}?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-10 inline-block rounded-full bg-black/20 px-2 py-2 text-lg font-semibold text-white shadow transition hover:bg-black"
                    >
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      {zoomedProduct && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-lg bg-white shadow-lg">
            <button
              onClick={() => setZoomedProduct(null)}
              className="absolute right-3 top-2 text-xl text-gray-800 hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={zoomedProduct.image}
              alt={zoomedProduct.name}
              className="max-h-[80vh] w-full rounded-t-lg object-cover"
            />
            <div className="p-4 text-center font-medium text-gray-800">
              {zoomedProduct.name}
            </div>
          </div>
        </div>
      )}
      <section className="bg-white px-4 py-16">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Veja alguns resultados reais
        </h2>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -5000, 0] }}
            transition={{ repeat: Infinity, duration: 600, ease: "linear" }}
          >
            {procedimentos.map((src, index) => (
              <div
                key={index}
                className="h-[320px] min-w-[350px] overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Procedimento ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="relative bg-white px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="text-left">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Quais as{" "}
              <span className="rounded bg-neutral-200 px-1 text-neutral-700">
                diferenças
              </span>{" "}
              entre um <span className="italic">procedimento</span> e um{" "}
              <span className="italic">tratamento</span>?
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Isso pode ser essencial se você busca{" "}
              <strong className="text-gray-800">
                resultados realmente eficazes
              </strong>
              .
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://i.pinimg.com/736x/ab/d0/91/abd09164d548729c96ce00242fbdde67.jpg"
              alt="Estética profissional"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-12 text-center font-serif text-sm text-gray-400">
          .
        </div>
        <div className="mt-12 text-center font-serif text-sm text-gray-400"></div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://g.co/kgs/fFbnXnm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-yellow-500 bg-white px-4 py-2 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-100"
          >
            ⭐⭐⭐⭐⭐ Ver avaliações e avaliar no Google
          </a>
        </div>

        <div className="mt-12 text-center font-serif text-sm text-gray-400">
          Reluz Estylos & Beleza - R. Campo Largo, 120, Balneário Piçarras - SC,
          88380-000
        </div>
      </section>
    </div>
  );
}
