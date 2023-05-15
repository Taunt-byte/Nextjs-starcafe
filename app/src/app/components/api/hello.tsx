import { NextApiRequest, NextApiResponse } from "next";

const products = [
        {
          id: 1,
          name: 'Café Espresso',
          description: 'Um shot de café expresso puro.',
          price: 2.00,
        },
        {
          id: 2,
          name: 'Cappuccino',
          description: 'Café expresso, leite vaporizado e espuma de leite.',
          price: 5.00,
        },
        {
          id: 3,
          name: 'Chá de Frutas',
          description: 'Uma mistura de chás de frutas aromáticas.',
          price: 3.50,
        },
        {
            id: 4,
            name: 'Café Constantino',
            description: 'Um shot de café constantino puro.',
            price: 3.50,
          },
          {
            id: 5,
            name: 'Chá de Ervas',
            description: 'Uma mistura de chás de ervas aromáticas.',
            price: 3.49,
          },
          {
            id: 6,
            name: 'Chá Japy',
            description: 'Um copo de chá de Japy.',
            price: 3.49,
          },
          {
            id: 7,
            name: 'Cafe Roman',
            description: 'Um shot de café Roman.',
            price: 3.49,
          },
          {
            id: 8,
            name: 'Agua',
            description: 'Agua 700ml.',
            price: 1.50,
          },
          {
            id: 9,
            name: 'Cafe do Roger Guedes',
            description: 'Um shot de café Roger Guedes.',
            price: 999.99,
          },
          {
            id: 10,
            name: 'Cafe Dona Maria',
            description: 'Uma mistura de grãos de cafe.',
            price: 3.49,
          },
  ];
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(products);
  }