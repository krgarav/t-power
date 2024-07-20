import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./utils/db.js";
import userRoutes from "./routes/userRoutes.js"; // Import user routes
import fileDataRoutes from "./routes/fileDataRoutes.js"
import warehouseRoutes from "./routes/warehouseRoutes.js"; // Import warehouse routes
import taggingRoutes from "./routes/taggingRoutes.js"
import bwipjs from 'bwip-js';
import FileData from "./models/FileData.js";
import Warehouse from "./models/warehouse.js";
import User from "./models/user.js";
import Tagging from "./models/tagging.js";

const app = express();
// create __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/images", express.static(__dirname + '/images'));
// Routes setup
app.use("/", userRoutes); // Mount user routes at /api/users
app.use("/", fileDataRoutes);
app.use("/", warehouseRoutes);
app.use("/", taggingRoutes);



Warehouse.belongsTo(FileData, { foreignKey: "fileDataId" });
Tagging.belongsTo(FileData, { foreignKey: "fileDataId" });
Warehouse.belongsTo(User, {
    foreignKey: 'issueTo', // Replace 'userId' with your desired column name
});
const PORT = 8000;

// sequelize.sync({ alter: true }).then(() => {
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to sync the database:', error);
});


