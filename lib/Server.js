const StudentController = require("./controllers/StudentController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Visual Thinking API welcome!" });
});

app.get("/v1/students/", (request, response) => {
    const allStudents = StudentController.getAllStudents();
    response.json(allStudents);
});

app.get("/v1/students/certified", (request, response) => {
    const studentsCertified = StudentController.getCertifiedStudents();
    response.json(studentsCertified);
});

app.get("/v1/students/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const enoughCredits = StudentController.getHasEnoughCredits(credits);
    response.json(enoughCredits);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});