import Database from "../Database/index.js";

export function createAssignment(assignment) {
    const { assignments } = Database;
    const newAssignment = {
        ...assignment,
        _id: Date.now().toString()
    };
    Database.assignments = [...assignments, newAssignment];
    return newAssignment;
}

export function getAllAssignments(courseId) {
    const { assignments } = Database;
    return assignments.filter((a) => a.course === courseId);
}

export function getAssignmentById(assignmentId) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    return assignment;
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((a) => a._id !== assignmentId);
  }
  