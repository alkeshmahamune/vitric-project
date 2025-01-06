import { Container, Typography, Box, Grid, Button, Stack } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CachedIcon from '@mui/icons-material/Cached';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Modal from "@mui/material/Modal";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

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


const Greeting = ({onClick,userInformation,Title,Update,setValues,Notify,sucessToast}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <Box sx={{ bgcolor: '#f9f9f9', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Student Info Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 2, height:285, }}>
              <Typography variant="h6" sx={{ mb: 2}}>
                Student Information
              </Typography>
              <Typography className="roboto-regular" sx={{padding:"8px 0px" }}>
                Name: <span className="userName">{userInformation['Name']}</span>
              </Typography>
              <Typography className="roboto-regular" sx={{padding:"8px 0px" }}>
                E-mail: <span className="userName">{userInformation['E-mail']}</span>
              </Typography>
              <Typography className="roboto-regular" sx={{padding:"8px 0px" }}>
                Qualification: <span className="userName">{userInformation['Qualification']}</span>
              </Typography>
              <Typography className="roboto-regular" sx={{padding:"8px 0px" }}>
                D.O.B.: <span className="userName">{userInformation['D.O.B.']}</span>
              </Typography>
              <Typography className="roboto-regular" sx={{padding:"8px 0px" }}>
                Ph. No.: <span className="userName">{userInformation['Ph. No.']}</span>
              </Typography>
            </Box>
          </Grid>
          
          {/* Profile and Actions Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}>
              <Box className="ProfilePhoto" sx={{ height: 150, bgcolor: '#e0e0e0', mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Profile Actions
              </Typography>
              <Box>
                <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>{onClick();Notify()}}>
                  delete user
                </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CachedIcon />}
                    onClick={()=>{handleOpen();setValues()}}
                  >
                    {Update}
                  </Button>
                  {/* <Button variant="outlined" startIcon={<FiberNewIcon />}>
                    Create new user
                  </Button> */}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <div>
      
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
            <TextField id="standard-basic" label="Your Name" variant="standard" sx={{marginBottom:5}} name="Name" onKeyUp={(e)=>{setValues('Name',e.target.value)}}/>
            <TextField id="standard-basic" label="Email" variant="standard" name="E-mail" onKeyUp={(e)=>{setValues('E-mail',e.target.value)}}/>
            <TextField id="standard-basic" label="Qualificaiton" variant="standard" name="Qualificaiton" onKeyUp={(e)=>{setValues('Qualification',e.target.value)}}/>
            <TextField id="standard-basic" label="D.O.B." variant="standard" name="D.O.B." onKeyUp={(e)=>{setValues('D.O.B.',e.target.value)}}/>
            <TextField id="standard-basic" label="Ph.No." variant="standard" name="Ph.No." onKeyUp={(e)=>{setValues('Ph.No.',e.target.value)}}/>            
          </Box>
          <Stack direction="row" spacing={2} sx={{marginTop:5}}>
            <Button variant="outlined" type="submit" onClose={handleClose} onClick={()=>{handleClose();sucessToast()}}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
    </Box>
  );
};

export default Greeting;
