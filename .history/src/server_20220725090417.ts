import express from "express";

import { categoriesRoutes } from "../src/routes/categoriesRoutes";

const app = express();

const port = 8888;

app.use(express.json());

app.use(categoriesRoutes);



app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}!`);
});
