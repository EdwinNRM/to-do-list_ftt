const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/update/:id", TaskController.updateTask);
routes.get("/delete/:id", TaskController.deleteTask);

module.exports = routes;
