import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import {options} from './swaggerOptions'
const specs=swaggerJSDoc(options)

import tasksRoutes from "./routes/tasks";

const app = express();

//Cualquier aplicación de  backend pueda conectarse
app.use(cors());

//podemos ver la peticiones que llegan por consola
app.use(morgan("dev"));

//necesario para insert into
app.use(express.json());
app.use(tasksRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;
