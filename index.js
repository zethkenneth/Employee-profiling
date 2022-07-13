const express = require(`express`);
const cors = require(`cors`);

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//getting routes
const officesRouter = require("./api/Offices/office.router");
const positionsRouter = require("./api/Positions/position.router");
const employeesRouter = require("./api/employees/employee.router");

//applying Routes
app.use("/employees", employeesRouter);
app.use("/positions", positionsRouter);
app.use("/offices", officesRouter);

app.listen(1234, () => {
    console.log("SERVER RUNNING IN PORT 1234");
});