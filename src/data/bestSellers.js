// src/data/bestSellers.js
import { products } from './product';

// Select 10 best-selling products (you can modify this list)
export const bestSellers = [
  products.find(p => p.id === 2),   
  products.find(p => p.id === 10),  
  products.find(p => p.id === 27), 
  products.find(p => p.id === 38),  
  products.find(p => p.id === 47),  
  products.find(p => p.id === 5),   
  products.find(p => p.id === 13),  
  products.find(p => p.id === 16),  
  products.find(p => p.id === 28), 
  products.find(p => p.id === 48),  
];





