import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    // Route to enroll a user in a course
    app.post("/api/enrollments", (req, res) => {
        const { userId, courseId } = req.body; // Extract userId and courseId from the request body
            const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
            res.status(201).json(enrollment); // Respond with the enrollment details
    });

    // Route to unenroll a user from a course
    app.delete("/api/enrollments",  (req, res) => {
        const { userId, courseId } = req.body; // Extract userId and courseId from the request body
            enrollmentsDao.unenrollUserInCourse(userId, courseId);
            res.sendStatus(204); // No content indicates successful deletion
    });

    app.get("/api/enrollments", (req, res) => {
        const courses = enrollmentsDao.findAllEnrollments();
        res.send(courses);
      });
}