import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function AllTask()  {
     const [taskList, setTaskList] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("taskList");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    return (
    <div>
      {taskList.map((task, idx) =>{
          return(
           <Card sx={{ minWidth: 275 }}>
                       <CardContent>
                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {task.taskName}
                         </Typography>
                         <Typography variant="body2">
                           {task.description}
                         </Typography>
                       </CardContent>
                       <CardActions>
                         <Button size="small">Learn More</Button>
                       </CardActions>
                     </Card>
          )
      })}
      </div>
     );

   };