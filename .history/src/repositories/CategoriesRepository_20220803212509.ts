import { Category } from "../model/category";

import { 
  ICategoriesRepository, 
  ICreateRepositoryDTO,
} from "./ICategoriesRepository";

// Interface transferida para o arquivo interface: ICategoryRepository.ts 
// dto - data ttansfer object
// interface ICreateCargoryDTO{
// name: string;
// description: string;
//}

class CategoryRepository implements ICategoryRepository{
  // private define como o atributo será acessado
  private categories: ICategory[];
}

constructor() {
  this.categories = [];
}

create({ description,  name }: ICreateCargoryDTO): void {
  const category = new Category();

  Object.assign(category, 
    name,
    description,
    created_at: new Date(),
);

this.categories.push(category);
}

// listar cadastros das categorias
list(): Category[]{ 
    return this.categories;
}

// Listar cadastros das categorias
list(): Category[] {
  return this.categories;
}

// Verificar cadastro
findByName(name: string): Category{
  const category = this.categories.find(
    (category) => category.name === name
  );
  return category;
}

export { CategoriesRepository };
