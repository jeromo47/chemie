import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      ref: z.string(),
      familia: z.string(),
      descripcion: z.string(),
      usos: z.array(z.string()).default([]),
      presentaciones: z.array(z.string()).default([]),
      registroBiocida: z.string().optional(),
      imagen: image().optional(),
      fichaPDF: z.string().optional(),
      destacado: z.boolean().default(false),
      orden: z.number().optional(),
    }),
});

const sectors = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    icono: z.string().optional(),
    productosRecomendados: z.array(z.string()).default([]),
    orden: z.number().optional(),
  }),
});

export const collections = { products, sectors };
