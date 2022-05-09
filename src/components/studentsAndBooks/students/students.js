import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Students() {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        getValues();
    }, []);
     const getValues = async () => {
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch('http://localhost:3300/students', requestOptions);
      const data = await response.json();
    console.log(data);
    setRows(data);
  }
  return (
    <div style={{padding:10}}>
        <div style={{width:"100%",backgroundColor:"black"}}>
        <h1 style={{textAlign:"center",color:"white",marginBottom:50}}>STUDENTS SECTION</h1>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length>0?rows.map((row) => (
            <TableRow
              key={row.firstname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
  );
}

export default Students;