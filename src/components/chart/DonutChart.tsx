import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Grid, Box } from "@mui/material";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0087feb6', '#1ac40094', '#ffe6289e', '#fc00fc95'];

export default class Example extends PureComponent {

  render() {
      return (
        <>
            <Grid container spacing={2} style={{height: "50vh", padding:"0", marginTop:"0"}} >
              
                <Grid item md={3} style={{height: "40vh", padding:"0"}}>
                    <PieChart width={250} height={350} style={{display:"flex",justifyContent:"space-around"}}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={55}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"               
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                      </PieChart>
                        <Box  sx={{
                            width: 150,
                            height: 50,
                            backgroundColor: '#0087fe33',
                            border: '1px solid #ffff',
                            marginLeft: 6,
                            }}>
                          <h2 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>개발현황</h2>
                        </Box>
                      
                </Grid>
              
                <Grid item md={3} style={{height: "40vh", padding:"0"}}>
                    <PieChart width={250} height={350}style={{display:"flex",justifyContent:"space-around"}} >
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={55}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>           
                      </PieChart>
                        <Box  sx={{
                            width: 150,
                            height: 50,
                            backgroundColor: '#fc00fc3c',
                            border: '1px solid #ffff',
                            marginLeft: 6,
                            }}>
                          <h2 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>제작현황</h2>
                        </Box>
                </Grid>
                
                <Grid item md={3} style={{height: "40vh", padding:"0"}}>
                    <PieChart width={250} height={350} style={{display:"flex",justifyContent:"space-around"}}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={55}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>           
                      </PieChart>
                        <Box  sx={{
                            width: 150,
                            height: 50,
                            backgroundColor: '#fff2012c',
                            border: '1px solid #ffff',
                            marginLeft: 6,
                            }}>
                          <h2 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>사용현황</h2>
                        </Box>
                </Grid>
                
                <Grid item md={3} style={{height: "40vh", padding:"0"}}>
                    <PieChart width={250} height={350} style={{display:"flex",justifyContent:"space-around"}}>
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={55}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>           
                      </PieChart>
                        <Box  sx={{
                            width: 150,
                            height: 50,
                            backgroundColor: '#00c4a03d',
                            border: '1px solid #ffff',
                            marginLeft: 6,
                            }}>
                          <h2 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>파기현황</h2>
                        </Box>
                </Grid>                    
            </Grid>          
        </>
    );
  }
}
