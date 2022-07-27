/* Router manipula rotas de forma modular */
import { Router } from "express";

import { CategoriesRepository, CategoriesRepository } from "../repositories/CategoriesRepository";

import { v4 as uuidV4 } from "uuid";

//import { Category } from "../model/category";

const categoriesRoutes = Router();
const CategoriesRepository = new CategoriesRepository();

//const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  /*const category: Category  = { 
    name,
    description,
    id: uuidV4(),
    created_at: new Date(),
    };
  categories.push(category);*/

  CategoriesRepository.create({name, description});

  return response.status(201).send();
});

export { categoriesRoutes };