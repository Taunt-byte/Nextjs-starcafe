import React from "react";

const Produto = () => {
  const products = [
    {
      id: 1,
      name: "Café Espresso",
      description:
        "Um shot de café expresso puro, preparado com grãos cuidadosamente selecionados para proporcionar uma experiência intensa e saborosa.",
      price: 2.0,
      image:
        "https://img.freepik.com/fotos-gratis/chavena-de-cafe-com-um-coracao-desenhado-na-espuma_1286-70.jpg?1&w=826&t=st=1684300280~exp=1684300880~hmac=1b8ec63215bc21fec32aad3d9b44b2eae2a2faf747d7b6e085700614a473e241",
    },
    {
      id: 2,
      name: "Cappuccino",
      description:
        "Uma deliciosa combinação de café expresso suave, leite vaporizado cremoso e uma generosa camada de espuma de leite, perfeito para apreciar a qualquer hora do dia.",
      price: 5.0,
      image:
        "https://img.freepik.com/fotos-gratis/cappuccino-em-um-copo-chique-com-um-bolo_78826-3325.jpg?w=900&t=st=1684300582~exp=1684301182~hmac=3b3a21e3b19b6cad6d1e443dcbc5df266c4438591d2e69fa5e863a8adeb4643a",
    },
    {
      id: 3,
      name: "Chá de Frutas",
      description:
        "Uma mistura refrescante de chás de frutas aromáticas, cuidadosamente selecionadas para oferecer um sabor único e revigorante.",
      price: 3.5,
      image:
        "https://img.freepik.com/fotos-gratis/agua-com-infusao-de-frutas-com-frutas-madeira-no-bule-de-cha-na-telha-de-pedra-e-superficie-de-madeira_176474-6371.jpg?w=740&t=st=1684300613~exp=1684301213~hmac=b63f1056bfb9b3b388e29bdc0eec12cf2ff56dc041f040eeedaa856163e43f15",
    },
    {
      id: 4,
      name: "Café Constantino",
      description:
        "Um shot de café Constantino puro e encorpado, com notas intensas e complexas que proporcionam uma experiência sensorial única.",
      price: 3.5,
      image: "https://img.freepik.com/fotos-gratis/duas-xicaras-de-cafe-e-um-prato-de-cafe-sobre-uma-mesa-com-feijao_1340-23146.jpg?w=900&t=st=1684301041~exp=1684301641~hmac=ea550a1385df2b7bf8a9a17a2879b36e7b7a6c7866988caf72e6d8af8c16e172",
    },
    {
      id: 5,
      name: "Chá de Ervas",
      description:
        "Uma infusão reconfortante de chás de ervas selecionadas, com propriedades medicinais e um aroma suave e relaxante.",
      price: 3.49,
      image: "https://img.freepik.com/fotos-gratis/xicara-com-cha-de-menta_23-2148550453.jpg?w=740&t=st=1684301097~exp=1684301697~hmac=aa9c2b83bb2994db569136f7a5b63e65fd8502eb109b3fbba915659a6fe98bde",
    },
    {
      id: 6,
      name: "Chá Japy",
      description:
        "Um copo de chá Japy, uma mistura exclusiva de chás exóticos que proporcionam uma experiência única de sabor e aroma.",
      price: 3.49,
      image: "https://img.freepik.com/fotos-gratis/vista-frontal-da-mulher-derramando-conceito-de-cha_23-2148555181.jpg?t=st=1684301131~exp=1684301731~hmac=c9342d492ab8583ceef9c96d0b4ac050ac7aa16113982dbe59f3766d3d72958d",
    },
    {
      id: 7,
      name: "Café Roman",
      description:
        "Um shot de café Roman, um blend especial de grãos selecionados, com um sabor equilibrado e aroma marcante.",
      price: 3.49,
      image: "https://img.freepik.com/fotos-gratis/xicara-de-cafe-americano-colocado-no-jornal_140725-6007.jpg?w=900&t=st=1684301164~exp=1684301764~hmac=2b9d3e112b15258b0ceeb47c5b533aa553e4aed20a92026dd3c1298a671e2172",
    },
    {
      id: 8,
      name: "Água",
      description:
        "Água pura e cristalina em uma garrafa de 700ml, ideal para se refrescar e se hidratar a qualquer momento.",
      price: 0.5,
      image: "https://img.freepik.com/fotos-gratis/jarra-de-enchimento-de-copo-de-agua_23-2148113466.jpg?w=740&t=st=1684301195~exp=1684301795~hmac=092df6791afef2488cfe850c712f2a54b273da851f72fb19f27df6a53ef274cc",
    },
    {
      id: 9,
      name: "Café do Roger Guedes",
      description:
        "Um shot de café do Roger Guedes, um blend exclusivo com grãos raros e sabores intensos, uma experiência para os verdadeiros apreciadores de café.",
      price: 999.99,
      image: "https://img.freepik.com/fotos-gratis/homem-segurando-uma-xicara-de-cafe-em-um-restaurante_23-2148465227.jpg?t=st=1684301280~exp=1684301880~hmac=4cc9ac06d2ae215844fffd3969f6206bab1f2a17a3b47185bcd28855eec185f9",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl text-center font-semibold mb-4">Nossos Produtos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-700 font-semibold">
                R${product.price.toFixed(2)}
              </p>
              <img
                src={product.image}
                alt={product.name}
                className="mt-4 mx-auto w-60 h-60 rounded-lg"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Produto;
