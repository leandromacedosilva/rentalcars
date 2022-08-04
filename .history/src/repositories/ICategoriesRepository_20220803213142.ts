import { Category } from "../model/category";

// DTO - Data Transfer Object
interface ICreateCargoryDTO{
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({name, description}: ICreateCargoryDTO): void;
}

export { ICreateCargoryDTO, ICategoriesRepository };