import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormMod({setValues,submitFunction,Title,ResetForm,notify}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ marginTop: 5, padding: "50px" }}>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          {/* Add skill */}
          {Title}
        </Button>
      </Stack>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{color:"blue", fontSize:'1.2em'}}>
            Add New Skill
          </Typography>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Skill to add" variant="standard" sx={{marginBottom:5}} name="Skill" onChange={(e)=>{setValues('Skills',e.target.value)}}/>
            <TextField id="standard-basic" label="Proficiency levels" variant="standard" name="Proficiency levels" onChange={(e=>{setValues('proficiencyLevels',e.target.value)})}/>
          </Box>
          <Stack direction="row" spacing={2} sx={{marginTop:5}}>
            <Button variant="outlined" type="submit" onClose={handleClose} onClick={()=>{submitFunction();handleClose();ResetForm()}}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
