const studentModel = require("../models/studentModel");
const AppError = require("../utils/appError");

const getStudents = (req, res, next) => {
    try {
        const students = studentModel.getAllStudents();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        next(error);
    }
};

const getStudent = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const student = studentModel.getStudentById(id);

        if (!student) {
            return next(new AppError("Student not found", 404));
        }

        res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        next(error);
    }
};

const createStudent = (req, res, next) => {
    try {
        const { name, course } = req.body;

        if (!name || !course) {
            return next(new AppError("Name and course are required", 400));
        }

        const newStudent = studentModel.addStudent({ name, course });

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: newStudent
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getStudents,
    getStudent,
    createStudent
};