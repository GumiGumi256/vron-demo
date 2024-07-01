import { describe } from "node:test";
import { title } from "process";

 export const navLinks = [
  { title: "home", id:1, href: "/" },
  { title: "about Us", id:2, href: "/" },
  { title: "kitchen cabinets", id:3, href: "/" },
  { title: "wadrobs & closets", id:4, href: "/" },
  { title: "blog", id:5, href: "/" },
//   { title: "FAQS", id:6, href: "/" },
  { title: "contact us", id:6, href: "/" },
];

export const benefits = [
  {
    id: 1,
    img: '/money.png',
    title: 'Vast Experience',
    description: 'With years of expertise, Vast brings a wealth of knowledge to every project, ensuring exceptional results.'
  },
  {
    id: 2,
    img: '/calender.png',
    title: 'Professional Team',
    description: 'Our skilled professionals are dedicated to delivering top-notch service, making your design journey smooth and enjoyable.'
  },
  {
    id: 3,
    img: '/options.png',
    title: 'Furniture Wonderland',
    description: 'Explore our wide range of budget-friendly furniture, balancing style, quality, and efficiency. Our punctual delivery ensures you enjoy top-notch craftsmanship without delay.'
  }
]


export const products = [
  {
    id: 1,
    title: 'office set',
    shortDescription: 'Sustainable dining elegance',
    longDescription: 'Embrace eco-friendly sophistication with our EcoChic Dining Set. Crafted from sustainably sourced materials and designed with timeless elegance, this set not only enhances your dining space but also contributes to a greener planet. Each piece is meticulously crafted to blend functionality with eco-consciousness, ensuring every meal is enjoyed in style and with a clear conscience.',
    price: 'Ugx 1,200,000',
    image: "/furniture-1.jpg"
  },
  {
    id: 2,
    title: 'home set',
    shortDescription: 'Productivity meets sleek design',
    longDescription: 'Indulge in ultimate comfort and relaxation with our CozyNest Lounge Chair. Designed with plush cushions and ergonomic support, this chair is the perfect addition to any living space or reading nook. The contemporary design blends seamlessly with various decor styles, while the high-quality materials ensure durability and comfort for years to come. Unwind in style with the CozyNest Lounge Chair and experience a new level of comfort',
    price: 'Ugx 1,500,000',
    image: "/furniture-2.jpg"
  },
  {
    id: 3,
    title: 'CozyNest Lounge Chair',
    shortDescription: 'Comfortable relaxation redefined',
    longDescription: 'Elevate your workspace to new heights with the Zenith Office Desk. Designed for optimal productivity and ergonomic comfort, this desk features a sleek and modern design that complements any office environment. Ample storage options, including drawers and shelves, keep your workspace organized and clutter-free, while the durable construction ensures long-lasting performance. Experience the perfect fusion of style and functionality with the Zenith Office Desk.',
    price: 'Ugx 2,500,000',
    image: "/furniture-3.jpg"
  },
  {
    id: 4,
    title: 'UrbanEdge Coffee Table',
    shortDescription: 'Contemporary living centerpiece',
    longDescription: ' Make a bold statement in your living space with the UrbanEdge Coffee Table. Featuring a contemporary design with industrial-inspired accents, this coffee table is both functional and stylish. The spacious surface provides ample room for displaying decor or serving refreshments, while the sturdy construction ensures durability and longevity. Elevate your living room`s aesthetic with the UrbanEdge Coffee Table and create a focal point that reflects your modern',
    price: 'Ugx 1,000,000',
    image: "/furniture-4.jpg"
  },
  // {
  //   id: 5,
  //   title: 'RetroGlam Bedroom Set',
  //   shortDescription: 'Vintage charm meets modern flair',
  //   longDescription: ' Transform your bedroom into a luxurious retreat with the RetroGlam Bedroom Set. This collection combines vintage charm with modern flair, featuring retro-inspired details and luxurious finishes. Each piece is meticulously crafted to evoke a sense of nostalgia while offering modern functionality and comfort. From the elegant bed frame to the matching nightstands and dresser, the RetroGlam Bedroom Set exudes timeless elegance and sophistication, creating a space that`s both inviting and stylish.',
  //   price: 'Ugx 2,000,000',
  //   image: "/furniture-5.jpg"
  // },
  // {
  //   id: 6,
  //   title: 'ModaKids Bunk Bed',
  //   shortDescription: 'Fun and functional sleeping solution.',
  //   longDescription: ' Create a playful and functional space for your kids with the ModaKids Bunk Bed. This versatile sleeping solution is designed to maximize space while providing a fun and comfortable sleeping area. The sturdy construction ensures safety and durability, while the modern design adds a touch of contemporary style to any kids` room. With built-in storage options and a ladder for easy access to the upper bunk, the ModaKids Bunk Bed is the perfect choice for siblings or sleepovers, offering both convenience and charm',
  //   price: 'Ugx 2,000,000',
  //   image: "/furniture-6.jpg"
  // },
]

export const testimonials = [
  {
    id: 1,
    name: 'Olivia Thompson',
    rating: 4.5,
    img: '/avatar-2.png',
    message: 'Nina Interiors transforms our home with pure artistry! The quality of their furniture is simply unmatched.'
  },
  {
    id: 2,
    name: 'Jacob Martinez',
    rating: 5,
    img: '/avatar-1.png',
    message: 'Every piece from Nina Interiors exudes luxury and comfort. It’s more than furniture, it’s a lifestyle'
  },
  {
    id: 3,
    name: 'Sophia Williams',
    rating:3.5,
    img: '/avatar-2.png',
    message: 'Elegance meets function in every creation from Nina Interiors. Truly the epitome of sophisticated living'
  },
]