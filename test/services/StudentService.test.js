const StudentService = require("../../lib/services/StudentServices");

const students = [{ email: "Todd@visualpartnership.xyz", credits: 508, haveCertification: true }, { email: "Pedro@visualpartnership.xyz", credits: 468, haveCertification: false }, { email: "Juan@visualpartnership.xyz", credits: 568, haveCertification: true }];

describe("Test para StudentService", () => {
    test("Requerimento 1: Obtener a todos los estudiantes", () => {
        const allStudents = StudentService.getStudents(students);
        expect(allStudents.length).toBe(3);
    }),
    test("Requerimento 2: Obtener correos de estudiantes certificados", () => {
        const studentsCertified = StudentService.certifiedStudents(students);
        expect(studentsCertified.length).toBe(2);
    }),
    test("Requerimento 3: Obtener estudiantes con mas de X creditos", () => {
        const credits = 500;
        const enoughCredits = StudentService.hasEnoughCredits(students, credits);
        expect(enoughCredits.length).toBe(2);
    });
});