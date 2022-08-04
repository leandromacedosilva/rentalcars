import { Category } from "../model/category";

import { ICategoriesRepository, ICreateCategoryDTO,} from "../models/category"

// dto - data ttansfer object
interface ICreateCargoryDTO{
  name: string;
  description: string;
}

//analisa o cadastro
findByName(name: string): Category{
  const category = this.categories.find(
    (category) => category.name === name
  );
  return category;
}

class CategoriesRepository{
  /* PRIVATE define como o atributo será acessado */
  private categories: Category[];


constructor(){
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

}

export { CategoriesRepository };
