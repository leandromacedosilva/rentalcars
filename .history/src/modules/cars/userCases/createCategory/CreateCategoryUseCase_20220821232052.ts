import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
// cria-se interface para receber informações da rota
interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // Inicializa-se o objeto
  constructor(private categoriesRepository: ICategoriesRepository) {}
  // executa a tarefa quando requisitada
  execute({ name, description }: IRequest) {
    // verifica o cadastro
    const categoryAlreadyExists = 
    this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      // caso exista a informação, retorna uma exceção
      throw new Error("Category Already Exists!");
    }
    // Caso contrário, o cadastro será feito aqui
    this.categoriesRepository.create(name, description);
  }
}

export { CreateCategoryUseCase };
