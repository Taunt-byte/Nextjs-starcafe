import React from "react";

const Produto = () => {
  const products = [
    {
      id: 1,
      name: "Café Espresso",
      description: "Um shot de café expresso puro.",
      price: 2.0,
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Café expresso, leite vaporizado e espuma de leite.",
      price: 5.0,
    },
    {
      id: 3,
      name: "Chá de Frutas",
      description: "Uma mistura de chás de frutas aromáticas.",
      price: 3.5,
    },
    {
      id: 4,
      name: "Café Constantino",
      description: "Um shot de café constantino puro.",
      price: 3.5,
    },
    {
      id: 5,
      name: "Chá de Ervas",
      description: "Uma mistura de chás de ervas aromáticas.",
      price: 3.49,
    },
    {
      id: 6,
      name: "Chá Japy",
      description: "Um copo de chá de Japy.",
      price: 3.49,
    },
    {
      id: 7,
      name: "Cafe Roman",
      description: "Um shot de café Roman.",
      price: 3.49,
    },
    {
      id: 8,
      name: "Agua",
      description: "Agua 700ml.",
      price: 1.5,
    },
    {
      id: 9,
      name: "Cafe do Roger Guedes",
      description: "Um shot de café Roger Guedes.",
      price: 999.99,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Nossos Produtos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-700 font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Produto;
