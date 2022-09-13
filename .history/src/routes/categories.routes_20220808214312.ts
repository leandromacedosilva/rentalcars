// ROUTER manipula as rotas de forma modular
import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const CategoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
// criado service para chamar o EXECUTE
const createCategoryService = new CreateCategoryService(
  categoriesRepository
);

 createCategoryService.execute({ name, description });
  
   return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
   const lista = categoriesRepository.list();
  return response.json(lista);
});

export { categoriesRoutes };