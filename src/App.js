import React,{useState} from "react";
import { Card, CardContent,Grid,Button} from "@mui/material";

function App() {
  const[data,setData]=useState("Off");
  return (
    <Grid container spacing={2} align="center" sx={{bgcolor:"black"}}>
      <Grid  item xs={12}>
         <Card sx={{bgcolor:"black"}}>
            <CardContent>
        <img src={`img/${data}.png`} alt=""  height="500px" width="500px"/>
            </CardContent>
         </Card>
      </Grid>


      <Grid item xs={2}>
      
      </Grid>
    <Grid item xs={4}>
      <Button 
        onClick={()=>setData("On")}
        variant="contained"
        color="warning" fullWidth  >
       ON
      </Button>
    </Grid>
  
    <Grid item xs={4}>
      <Button 
        onClick={()=>setData("Off")}
        variant="contained"
        color="warning" fullWidth  >
       Off
      </Button>
    </Grid>
    <Grid item xs={2}>
      
      </Grid>
      
    </Grid>
    
  );
}

export default App;
