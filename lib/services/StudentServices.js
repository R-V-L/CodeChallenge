class StudentService {
    static getStudents(students) {
        return students;
    }
    static certifiedStudents(students) {
        const studentsCertified = students.filter((student) => student.haveCertification == true);
        const emailsInNode = studentsCertified.map((student) => student.email);
        return emailsInNode;
    }
    static hasEnoughCredits(students, credits) {
        const enoughCredits = students.filter((student) => student.credits > credits);
        return enoughCredits;
    }
}

module.exports = StudentService