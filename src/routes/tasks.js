import { Router } from "express";
import {
  deleteTask,
  getTask,
  getTaskCount,
  getTasks,
  saveTask,
  updateTask,
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 * description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: obtiene todas las tareas
 *   tags: [Tasks]
 */
router.get("/tasks", getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *   summary: total de tareas
 *   tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount);
/**
 * @swagger
 * /tasks/:
 *  get:
 *   summary: obtiene una tarea
 *   tags: [Tasks]
 */
router.get("/tasks/:id", getTask);
/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: crea una tarea
 */
router.post("/tasks", saveTask);
/**
 * @swagger
 * /tasks:
 *  delete:
 *   summary:elimina las tarea por id
 */
router.delete("/tasks/:id", deleteTask);
/**
 * @swagger
 * /tasks:
 *  put:
 *   summary: abtualiza las tareas por id
 */
router.put("/tasks/:id", updateTask);

export default router;
