import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  pageContainer: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  tableContainer: {
    marginTop: '20px',
  },
  table: {
    width: '100%',
    marginBottom: '10px',
  },
  tableHead: {
    backgroundColor: '#f9f9f9',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
});

const firstNames = [
  'Alejandro', 'Sofía', 'Mateo', 'Valentina', 'Daniel', 'María', 'Pablo', 'Paula', 'David', 'Lucía',
  'Adrián', 'Emma', 'Álvaro', 'Ainhoa', 'Javier', 'Laura', 'Sergio', 'Julia', 'Carlos', 'Valeria'
];

const lastNames = [
  'González', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Díaz', 'Vázquez',
  'Serrano', 'Torres', 'Ruiz', 'Fuentes', 'Cruz', 'Molina', 'Arias', 'Santos', 'Flores', 'Iglesias'
];

const generateStudentData = () => {
  const students = [];
  for (let i = 1; i <= 30; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const student = {
      id: i,
      name: `${firstName} ${lastName}`,
      math: Math.floor(Math.random() * 101), 
      science: Math.floor(Math.random() * 101), 
    };
    students.push(student);
  }
  return students;
};

const Tabla = () => {
  const classes = useStyles();
  const [subject, setSubject] = useState('math');
  const studentData = generateStudentData();

  const handleSubjectChange = () => {
    setSubject(subject === 'math' ? 'science' : 'math');
  };

  return (
    <div className={classes.pageContainer}>
      <h1>Lista de Alumnos y Notas</h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Nota {subject === 'math' ? 'Matemáticas' : 'Ciencias'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student[subject]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.buttonContainer}>
        <Button variant="outlined" color="primary" onClick={handleSubjectChange}>
          Ver Notas de {subject === 'math' ? 'Ciencias' : 'Matemáticas'}
        </Button>
      </div>
    </div>
  );
};

export default Tabla;
