import express from "express";

import { router } from "./routes";

const port = 5000;
// import { categoriesRoutes } from "./routes/categories.routes";
// import { specificationsRoutes } from "./routes/specification.routes";
const app = express();
app.use(express.json());
app.use(router);
// app.use("/categories", categoriesRoutes);
// app.use("/specifications", specificationsRoutes);
app.listen(port, () => {
    console.log(`Express server running at http://127.0.0.1:${port}`);
});
