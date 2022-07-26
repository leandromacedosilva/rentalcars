import { Router } from "express";

import { SpecificationRepository } from "../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationsRoutes };