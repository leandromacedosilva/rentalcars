import express from "express";

import { router } from "./routes";

//import { categoriesRoutes } from "./routes/categories.routes";
//import { specificationsRoutes } from "./routes/specification.routes";

const app = express();

const port = 8888;

app.use(express.json());
app.use(router);

//app.use("/categories", categoriesRoutes);
//app.use("/specifications", specificationsRoutes);

app.listen(port, () => {
    console.log(`Express server is running at http://127.0.0.1:${port}!`);
});
