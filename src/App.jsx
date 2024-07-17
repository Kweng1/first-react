// src/components/App.jsx
import React from 'react';
import Student from './components/student';

const Students = () => {
    const students = [
        { name: "Vhaugn", department: "Science", finalGrade: 85, status: "Pass" },
        { name: "Christian", department: "Arts", finalGrade: 78, status: "Pass" },
        { name: "Aeron", department: "Commerce", finalGrade: 92, status: "Pass" },
        { name: "Sweet", department: "Filipino", finalGrade: 60, status: "Pass" },
        { name: "Siton", department: "English", finalGrade: 74, status: "Pass" },
        { name: "Allen", department: "Math", finalGrade: 81, status: "Pass" },
        { name: "James", department: "Pathfit", finalGrade: 88, status: "Pass" },
        { name: "Kyle", department: "OOP", finalGrade: 69, status: "Pass" },
        { name: "Ivan", department: "GE9", finalGrade: null, status: "Fail" },
        { name: "Judy", department: "CC101", finalGrade: null, status: "Fail" }
    ];

    return (
        <div>
            <h1>Student List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} student={student} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Students />
        </div>
    );
}

export default App;
