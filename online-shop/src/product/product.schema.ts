
import { EntitySchema } from 'typeorm';
import { Product } from './product.entity.js';

export const ProductSchema = new EntitySchema<Product>({
  name: 'Product',
  target: Product,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    version: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    longDescription: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  relations: {
  },
  
});
