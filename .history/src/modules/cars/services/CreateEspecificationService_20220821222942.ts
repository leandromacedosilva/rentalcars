import { throws } from "assert";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);
            if(specificationAlreadyExists) {
              throws new Error("Specification Already Exists!");
            }
            this.specificationsRepository.create({ name, description});
    }
}

export { CreateSpecificationService };