/* Router manipula rotas de forma modular */
import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

//import { v4 as uuidV4 } from "uuid";

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

const createCategoryService = new CreateCategoryService(
  categoriesRepository
);

createCategoryService.execute({name, description});
  
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const lista = categoriesRepository.list();
  return response.json(lista);
});

export { categoriesRoutes };