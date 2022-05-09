import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Books() {
  const [rows, setRows] = React.useState([]);
  const [bookname, setBookname] = React.useState('');
  const [bookid, setBookid] = React.useState('');
  const [bookauthor, setBookauther] = React.useState('');
  const [bookreturndate, setBookreturndate] = React.useState('');
  const [bookdateofborrow, setBookborrow] = React.useState('');
  const [bookborrowedby, setBookborrowedby] = React.useState('');
  React.useEffect(() => {
      getValues();
  }, []);
   const getValues = async () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('http://localhost:3300/books', requestOptions);
    const data = await response.json();
  console.log(data);
  setRows(data);
}
const submitbook=async () => {
  const requestOptions = {
      method: 'POST',
      
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: bookid,
        bookname: bookname,
        author: bookauthor,
        borrowedby: bookborrowedby,
        borrowdate: bookdateofborrow,
        returndate: bookreturndate,
      }),
  };
  const response = await fetch('http://localhost:3300/books', requestOptions);
  const data = await response.json();
console.log(data);
getValues();
}
React.useEffect(()=>{
  console.log(bookname);
},[bookname])
  return (
    <div style={{padding:10}}>
      <div style={{width:"100%",backgroundColor:"black"}}>
        <h1 style={{textAlign:"center",color:"white"}}>BOOKS SECTION</h1>
      </div>
         <div style={{display:"flex",flex:1}}>
    <span>Book id</span>
<input style={{marginLeft:20,marginBottom:20}}  onChange={(data)=>setBookid(data.target.value)}></input>
      </div>
      <div style={{display:"flex",flex:1}}>
    <span>Enter Book Name</span>
<input style={{marginLeft:20,marginBottom:20}} onChange={(data)=>setBookname(data.target.value)}></input>
      </div>
      <div style={{display:"flex",flex:1}}>
      <span>Enter Book Auther</span>
<input style={{marginLeft:20,marginBottom:20}} onChange={(data)=>setBookauther(data.target.value)}></input>
      </div>
      <div style={{display:"flex",flex:1}}>
      <span>Enter Book Return Date</span>
<input style={{marginLeft:20,marginBottom:20}} onChange={(data)=>setBookreturndate(data.target.value)}></input>
      </div>
      <div style={{display:"flex",flex:1}}>
      <span>Enter Book Borrow By</span>
<input style={{marginLeft:20,marginBottom:20}} onChange={(data)=>setBookborrow(data.target.value)}></input>
      </div>
      <div style={{display:"flex",flex:1}}>
      <span>Enter Book Borrow By</span>
<input style={{marginLeft:20,marginBottom:20}} onChange={(data)=>setBookborrowedby(data.target.value)}></input>
      </div>
      <button onClick={()=>submitbook()} style={{backgroundColor:"black",color:"white",width:100,height:50,borderRadius:50,cursor:"pointer",marginBottom:50}}>Submit</button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Return Date</TableCell>
            <TableCell align="right">Date of Borrow</TableCell>
            <TableCell align="right">Borrowed By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length>0?rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bookname}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.returndate}</TableCell>
              <TableCell align="right">{row.borrowdate}</TableCell>
              <TableCell align="right">{row.borrowedby}</TableCell>
            </TableRow>
          )):null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );

}

export default Books;