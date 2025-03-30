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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-serif text-[15px] leading-tight tracking-tight text-[#1a1a1a] md:text-[15px]">
            <span className="block">Reluz </span>
            <span className="mt-1 block font-light italic tracking-[0.12em] text-[#555]">
              Estylos & Beleza
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-light tracking-wide text-[#7b7b7b] md:text-base"></p>
        </motion.div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-800">
          <a
            href="https://www.instagram.com/reluz_estylo_e_beleza?igsh=MTVvbHRpbDMxN2o5ag=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow-md transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm5.25-.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
            </svg>
          </a>
          <a
            href="https://wa.me/5547999678478"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12.01 0C5.38 0 .01 5.37.01 12a11.9 11.9 0 0 0 1.64 6.04L0 24l6.23-1.63a11.92 11.92 0 0 0 5.77 1.46h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.35zM12.01 22a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.7.97.99-3.6-.24-.37A9.91 9.91 0 0 1 2.01 12c0-5.51 4.48-10 10-10a9.9 9.9 0 0 1 7.07 2.93A9.91 9.91 0 0 1 22 12c0 5.52-4.49 10-10 10zm5.22-7.64c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15s-.76.95-.93 1.14c-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.42-.86-.77-1.44-1.72-1.6-2.01-.17-.3-.02-.46.13-.61.14-.14.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.2-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.88 1.22 3.08c.15.2 2.11 3.21 5.1 4.51.71.31 1.27.5 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.97-1.38.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.36z" />
            </svg>
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
        <h2 className="relative z-30 mb-2 text-sm uppercase tracking-widest text-gray-600">
          .
        </h2>
        <h2 className="relative z-30 mb-2 text-sm uppercase tracking-widest text-gray-600">
          Estudio de Beleza
        </h2>
        <h1 className="relative z-10 mb-10 font-serif text-3xl font-bold text-black sm:text-4xl md:text-6xl">
          Marli Bitencourt
        </h1>

        <div className="relative z-20 mb-10 flex flex-wrap justify-center gap-6">
          {[
            "https://i.pinimg.com/736x/c1/76/47/c176472332d1b1424ceeca24dbfd6f5e.jpg",
            "https://i.pinimg.com/736x/c3/16/40/c31640fbb50836c93e69e80a7f219051.jpg",
            "https://i.pinimg.com/736x/9f/35/76/9f357619b7150a301e3952d6184f35ea.jpg",
          ].map((url, index) => (
            <div
              key={index}
              className="h-32 w-32 overflow-hidden rounded-full shadow-lg sm:h-40 sm:w-40 md:h-48 md:w-48"
            >
              <img
                src={url}
                alt={`Imagem ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
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
        <div className="fixed inset-0 z-[9999] flex flex-col bg-white/100 backdrop-blur-md">
          <div className="flex justify-end p-8">
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
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                    className="h-32 w-full object-cover sm:h-40"
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
          <div
            className="relative bg-white font-sans text-gray-900"
            style={{ overflowX: "hidden" }}
          >
            <button
              onClick={() => setZoomedProduct(null)}
              className="absolute right-4 top-4 text-xl text-gray-800 hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={zoomedProduct.image}
              alt={zoomedProduct.name}
              className="max-h-[80vh] w-full rounded-t-lg object-cover"
            />
            <div className="p-8 text-center font-medium text-gray-800">
              {zoomedProduct.name}
            </div>
          </div>
        </div>
      )}
      <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
            Resultados Reais e Transformadores
          </h2>
          <p className="mt-3 text-gray-600">
            Fotos e vídeo direto do Salão — experiência real, sem filtros.
          </p>
        </div>

        {/* Carrossel Superior */}
        <div className="scrollbar-hide mb-8 w-full overflow-x-auto">
          <motion.div
            className="flex gap-4 px-2 md:gap-6"
            animate={{ x: [0, -5000, 0] }}
            transition={{ repeat: Infinity, duration: 600, ease: "linear" }}
          >
            {procedimentos.map((src, index) => (
              <div
                key={index}
                className="h-52 w-40 flex-shrink-0 overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
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

        {/* Vídeo Destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xs rounded-3xl border border-white/30 bg-white/10 p-1 shadow-2xl ring-1 ring-neutral-200 backdrop-blur-xl md:max-w-md"
        >
          <div className="aspect-[9/16] overflow-hidden rounded-[1.5rem]">
            <iframe
              src="https://www.instagram.com/reel/DBT27jxxMUB/embed"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="h-full w-full rounded-[1.5rem]"
            ></iframe>
          </div>
        </motion.div>

        {/* Carrossel Inferior */}
        <div className="scrollbar-hide mt-8 w-full overflow-x-auto">
          <motion.div
            className="flex gap-4 px-2 md:gap-6"
            animate={{ x: [-5000, 0, -5000] }}
            transition={{ repeat: Infinity, duration: 600, ease: "linear" }}
          >
            {procedimentos.reverse().map((src, index) => (
              <div
                key={index}
                className="h-52 w-40 flex-shrink-0 overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
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
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Texto */}
          <div className="text-center md:text-left">
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

          {/* Imagem responsiva */}
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl shadow-xl md:mx-0">
            <img
              src="https://i.pinimg.com/736x/17/35/50/1735500112a227c886d82544d154bb24.jpg"
              alt="Estética profissional"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Seção Final com botão e endereço */}
      <section className="relative mt-24 bg-gradient-to-br from-yellow-50 via-white to-neutral-100 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="mb-6 text-2xl font-extrabold text-gray-800">
            Sua experiência também pode ser 5 estrelas ✨
          </h3>

          <a
            href="https://g.co/kgs/fFbnXnm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-yellow-400 bg-white/80 px-6 py-3 text-sm font-semibold text-yellow-700 shadow-xl backdrop-blur-md transition-transform hover:scale-105 hover:bg-yellow-100"
          >
            ⭐⭐⭐⭐⭐ Ver avaliações no Google
          </a>

          <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white/40 px-6 py-4 font-serif text-sm text-gray-700 shadow-lg ring-1 ring-white/40 backdrop-blur-md">
            <p>📍 Reluz Estylos & Beleza</p>
            <p>R. Campo Largo, 120</p>
            <p>Balneário Piçarras - SC, 88380-000</p>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute -top-10 right-10 h-32 w-32 rounded-full bg-yellow-300/10 blur-3xl"></div>
      </section>
    </div>
  );
}
