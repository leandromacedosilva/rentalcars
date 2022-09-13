import { Specifications } from "../model/Specifications";
import { ICreateCategoryDTO, ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specifications[];
  constructor(){
    this.specifications = [];
  }
  create({name, description}: ICreateCategoryDTO): void{
    const specifications = new Specifications();
    Object.assign(specifications, {
      name, 
      description,
      create_at: new Date(),
    });
    this.specifications.push(specifications);
  }
  findByName(name: string): Specification {
    const specifications = this.specifications.find(
      (specifications) => specifications.name === name
    );
      return specifications;
  }
}

export { SpecificationRepository };