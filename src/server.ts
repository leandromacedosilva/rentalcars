import express from "express";

import { categoriesRoutes } from "./routes/categoriesRoutes";
import { specificationRoutes } from "./routes/specificationRoutes";

const app = express();

const port = 8888;

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}!`);
});
