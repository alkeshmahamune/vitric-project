import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CachedIcon from '@mui/icons-material/Add';
import FormMod from './form';
import { useState,useEffect } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90,sortable: false },
  { field: 'Skills', headerName: 'Skills', width: 500,sortable: false },
  { field: 'proficiencyLevels', headerName: 'Proficiency levels', width: 280,sortable: false },
  {
    field:'Actions',
    headerName:'Actions',
    width:180,
    sortable: false
  }
];

export default function DataTable() {
  let userdata={
    Skills:null,
    proficiencyLevels:null
  }

  // const [rows, setRows] = useState([()=>{
  //   const storedData=localStorage.getItem('userdata')
  //   return storedData? JSON.parse(storedData):{
  //     'Skills':null,
  //     'proficiencyLevels':null
  //   }
  // }]);

  // useEffect(()=>{
  //   localStorage.setItem('userdata', JSON.stringify(userdata))
  // },[userdata])

  // State for rows
  const [rows, setRows] = useState([]);

  const isDataAvailable = rows.length > 0;
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const setValues = (propName, propValue) => {
    if (propValue !== "") {
      userdata[propName]=propValue
    }
  };

  const submitFunction=()=>{
    if(userdata.proficiencyLevels!=="" && userdata.Skills!==""){
      setRows((prevRows) => [
        ...prevRows,
        {
          id: prevRows.length === 0 ? 1 : prevRows[prevRows.length - 1].id + 1,
          Skills: userdata.Skills, 
          proficiencyLevels: userdata.proficiencyLevels,  
        },
      ]);
    }
  }
  
  const ResetForm = () => {
    // Logic to reset the form fields
    userdata = { Skills: null, proficiencyLevels: null };
  };

  return (
    <Container>
      <Paper sx={{ width: "100%", marginTop: 10 }}>
        {isDataAvailable ? (
          <DataGrid
          // rows={rows}
          rows={rows.map((row) => ({
            id: row.id,
            Skills: row.Skills,
            proficiencyLevels: row.proficiencyLevels,
            // Actions:setButton(newButton)
          }))}
          columns={columns}
          pageSize={5}
          checkboxSelection
          pagination={false}
          hideFooter
          autoHeight
          sx={{ border: 0 }}
          />
        ) : (
          // <FormMod setValues={setValues} submitFunction={submitFunction} />
          <Typography sx={{display:'flex', justifyContent:'center'}}>No Skills To display</Typography>
        )}
      </Paper>
      <FormMod setValues={setValues} submitFunction={submitFunction} Title='Add Skill' ResetForm={ResetForm}/>
      <Stack direction="row" spacing={2} sx={{ marginTop: 5, display: "flex" }}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{ marginTop: 5, alignSelf: "flex-start", display: "flex" }}
        >
          Delete All
        </Button>
      </Stack>
      {showForm && <FormMod />}
    </Container>
  );
}
