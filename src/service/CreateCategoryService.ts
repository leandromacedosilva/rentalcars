import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
// interface que recebe informações das rotas
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    // inicializa o objeto
    constructor(private categoriesRepository: ICategoriesRepository) {}
    // EXECUTE processa a inteface quando requisitado
    execute({ name, description }: IRequest) {
        // verifica o cadastro
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            // retorna erro caso já exista a mesma informação
            throw new Error("Category already exists!");
        }
        // cadastra os dados recebidos caso não exista redundância.
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };