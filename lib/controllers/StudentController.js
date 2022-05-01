const StudentService = require("../services/StudentServices")
const Reader = require("../utils/Reader")

const students = Reader.readJsonFile("visualpartners.json");

class StudentController {
    static getAllStudents() {
        const allStudents = StudentService.getStudents(students);
        return allStudents;
    }
    static getCertifiedStudents() {
        const studentsCertified = StudentService.certifiedStudents(students);
        return studentsCertified;
    }
    static getHasEnoughCredits(credits) {
        const enoughCredits = StudentService.hasEnoughCredits(students, credits);
        return enoughCredits;
    }
}

module.exports = StudentController;