export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Aria Lounge Sofa',
    category: 'Sofas',
    price: 3200,
    image: 'https://images.pexels.com/photos/8135275/pexels-photo-8135275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A luxurious beige sofa with plush cushions, handcrafted for ultimate comfort and timeless elegance.',
  },
  {
    id: 2,
    name: 'Velvet Noir Sofa',
    category: 'Sofas',
    price: 2850,
    image: 'https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Sophisticated velvet upholstery with deep seating, designed to be the centerpiece of any room.',
  },
  {
    id: 3,
    name: 'Nordic Accent Chair',
    category: 'Armchairs',
    price: 980,
    image: 'https://images.pexels.com/photos/12269764/pexels-photo-12269764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A stylish brown armchair with clean lines, perfect for modern and transitional interiors.',
  },
  {
    id: 4,
    name: 'Verde Lounge Chair',
    category: 'Armchairs',
    price: 1250,
    image: 'https://images.pexels.com/photos/35632442/pexels-photo-35632442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A sculptural armchair in a minimalist design, bringing warmth and character to any space.',
  },
  {
    id: 5,
    name: 'Heritage Oak Dining Table',
    category: 'Tables',
    price: 2400,
    image: 'https://images.pexels.com/photos/11112739/pexels-photo-11112739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'An elegant solid oak dining table showcasing natural grain and minimalist craftsmanship.',
  },
  {
    id: 6,
    name: 'Marble Dining Table',
    category: 'Tables',
    price: 3100,
    image: 'https://images.pexels.com/photos/39828896/pexels-photo-39828896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A stunning marble table with a chic base, elevating every dining experience.',
  },
  {
    id: 7,
    name: 'Serenity Coffee Table',
    category: 'Tables',
    price: 760,
    image: 'https://images.pexels.com/photos/32246936/pexels-photo-32246936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A minimalist coffee table with warm earth tones, designed for modern living spaces.',
  },
  {
    id: 8,
    name: 'Contour Lounge Chair',
    category: 'Armchairs',
    price: 1100,
    image: 'https://images.pexels.com/photos/25857376/pexels-photo-25857376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A modern armchair with sleek contours and soft lighting, crafted for refined relaxation.',
  },
];

export const categories = ['All', 'Sofas', 'Armchairs', 'Tables'];
