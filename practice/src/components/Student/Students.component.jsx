import { useReducer } from 'react';
import { useState } from 'react';
import './students.styles.css';

const StudentDB = [
    {
        id: 1,
        name: 'Apoorv',
        marks: 95
    },
    {
        id: 2,
        name: 'Divyansh',
        marks: 90
    },
    {
        id: 3,
        name: 'Sarthak',
        marks: 75
    },
    {
        id: 4,
        name: 'Parminder',
        marks: 70
    },
    {
        id: 5,
        name: 'Madhav',
        marks: 80
    },
    {
        id: 6,
        name: 'Priya',
        marks: 82
    }
];

const reducerFunc = (state, action) => {
    switch(action.type) {
        case 'REMOVE-ITEM':
            return {
                ...state,
                StudentDB: state.StudentDB.filter(student => student.id !== action.id)
            };
        case 'SHOW-ALL':
            return {
                ...state,
                StudentDB
            }
        case 'GREATER-THAN-80':
            return {
                ...state,
                StudentDB: state.StudentDB.filter(student => student.marks > 80)
            }
        default:
            return state;
    } 
}

const Students = () => {
    // const [students, setStudents] = useState({
    //     StudentDB: StudentDB,
    //     showList: true
    // });

    const [students, dispatch] = useReducer(reducerFunc, {
        StudentDB: StudentDB,
        showList: true
    })

    const greaterThan80 = () => {
        // const filteredStudents = students.StudentDB.filter(student => student.marks > 80);
        // setStudents({...students, StudentDB: filteredStudents});
        dispatch({type: 'GREATER-THAN-80'});
    }

    const removeStudent = (id) => {
        // const newList = students.StudentDB.filter(student => student.id !== id);
        // setStudents({...students, StudentDB: newList});
        dispatch({type: 'REMOVE-ITEM', id});
    }

    const showAllStudents = () => {
        // setStudents({...students, StudentDB});
        dispatch({type: 'SHOW-ALL'});
    }

    return (
        <div className='parent-container'>
            <div className='list-container'>
                <ul>
                    {students.StudentDB.map(student => (
                        <li key={student.id}>
                            <div style={{'texAlign': 'center'}}>{student.id}</div>
                            <div>{student.name}</div>
                            <div style={{'texAlign': 'center'}}>{student.marks}</div>
                            <button type='button' onClick={() => removeStudent(student.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={greaterThan80}>Greater than 80</button>
                <button onClick={showAllStudents}>All students</button>
            </div>
        </div>
    );
}

export default Students;


// For removal of list items -> https://www.robinwieruch.de/react-remove-item-from-list/