/* Router manipula rotas de forma modular */
import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { Category } from "../model/category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const category: Category  = { 
    name,
    description,
    id: uuidV4(),
    created_at: new Date(),
    };

  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes };