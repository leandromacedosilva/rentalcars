/* Router manipula rotas de forma modular */
import { Router } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const category = { name, description };

  categories.push(category);

  return response.status(201).send();
});