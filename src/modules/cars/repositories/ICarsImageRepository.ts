import { CarsImage } from "../model/CarsImage";

interface ICreateCarsImageDTO {
    name: string;
}

interface ICreateCarsImageRepository {
    create({ name }: ICreateCarsImageDTO): void;
    findByName(name: string): CarsImage;
}

export { ICreateCarsImageDTO, ICreateCarsImageRepository };
