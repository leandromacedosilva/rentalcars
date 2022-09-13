// import of library UUID
import { v4 as uuidV4 } from "uuid";

// class definition Category
class CarsImage {
    id: string;
    imageName: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { CarsImage };
