import { CarsImage } from "../model/CarsImage";

interface ICreateCarsImageDTO {
    name: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specifications;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };