// ROUTER manipula as rotas de forma modular
import { Router } from "express";

//import { CategoriesRepository } from "../repositories/CategoriesRepository";
//import { CreateCategoryService } from "../services/CreateCategoryService";
import { createCategoryController } from "../modules/cars/userCases/createCategory";
import { listCategoriesController } from "../modules/cars/userCases/createCategory";

const categoriesRoutes = Router();
//const CategoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
   return createCategoryController.handle(request, response);
// criado service para chamar o EXECUTE
//const createCategoryService = new CreateCategoryService(
  //categoriesRepository
});
 
/*createCategoryService.execute({ name, description });
   return response.status(201).send();
});*/

categoriesRoutes.get("/", (request, response) => {
   const lista = categoriesRepository.list();
  return response.json(lista);
});

export { categoriesRoutes };