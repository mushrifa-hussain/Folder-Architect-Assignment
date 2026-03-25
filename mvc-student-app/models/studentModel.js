const students = [
    { id: 1, name: "Navya", course: "MERN" },
    { id: 2, name: "Kavya", course: "AIML" }
];

const getAllStudents = () => {
    return students;
};

const getStudentById = (id) => {
    return students.find((student) => student.id === id);
};

const addStudent = (studentData) => {
    const newStudent = {
        id: students.length + 1,
        ...studentData
    };
    students.push(newStudent);
    return newStudent;
};
module.exports={
    getAllStudents,
    getStudentById,
    addStudent
};