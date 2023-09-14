import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

const router = Router();

// Rotas do usuário
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/userinfo", isAuthenticated, new DetailUserController().handle);

//Rotas das categorias
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

//Rotas dos produtos
router.post("/product", isAuthenticated, new CreateProductController().handle);

export { router };
