import { Category } from "../model/category";

// dto - data ttansfer object
interface ICreateCargoryDTO{
  name: string;
  description: string;
}

class CategoriesRepository{
  /* PRIVATE define como o atributo será acessado */
  private categories: Category[];
}

create({ description,  name }: ICreateCargoryDTO){
  const category = new Category();
}

Object.assign(category,{
  name,
  description,
  created_at: new Date(),
});

this.categories.push(category);

