import { Category } from "../model/category";

import { ICategoriesRepository, ICreateCategoryDTO, } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // private define como o atributo será acessado
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description,  name }: ICreateCargoryDTO): void {
    const category = new Category();
  
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
  
  this.categories.push(category);
  }

  // listar cadastros das categorias
list(): Category[]{ 
    return this.categories;
}
// Verificar cadastro
findByName(name: string): Category{
  const category = this.categories.find(
    (category) => category.name === name
  );
  return category;
}
// fim checking cadastro
}

export { CategoriesRepository };
