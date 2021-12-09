import React, { useState } from "react";
import {NewTask} from "./NewTask"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function AllTask()  {
   let taskArray = [{
                        taskName: "1",
                        description: "1",
                        datetime: "1",
                        reminder: "1",
                        priority: "1",

                      }]
    return (
    <div>
      {taskArray.map((task, idx) =>{
          return(
           <Card sx={{ minWidth: 275 }}>
                       <CardContent>
                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {task.taskName}
                         </Typography>

                         <Typography sx={{ mb: 1.5 }} color="text.secondary">
                           adjective
                         </Typography>
                         <Typography variant="body2">
                           well meaning and kindly.
                           <br />
                           {'"a benevolent smile"'}
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