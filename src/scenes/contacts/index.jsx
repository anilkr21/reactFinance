import React from 'react';
import { Box  } from '@mui/material';
import {DataGrid,GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';
import{ useTheme} from '@mui/material';
// import { DataGrid  } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
// import { GridToolbarQuickFilter } from '@mui/x-data-grid';



const Contacts =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const columns = [
        {field: "id" , headerName: "ID" , flex: 1},
        {field: "registrarId" , headerName: "registrarID"},
        {field: "name" , headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age" , headerName: "Age", Type: "number", headerAlign: "left", align: "left" },
        {field: "phone" , headerName: "Phone", flex: 1,},
        {field: "email" , headerName: "Email", flex: 1,},
        {field: "address" , headerName: "Address", flex: 1,},
        {field: "city" , headerName: "City", flex: 1,},
        {field: "zipCode" , headerName: "ZipCode", flex: 1,},
    ];

  return (
    <Box m="20px">
        <Header title="CONTACTS" subtitle="List Of Contacts For Furture References" />
        <Box 
            m="40px 0 0 0"
            height="75vh" sx={{
                "& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-column--cell":{
                    color:colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeader":{
                    backgroundColor:colors.blueAccent[700],
                    borderBottom:"none"
                },
                // "& .MuiDataGrid-virtualScroller":{
                //     backgroundColor: colors.primary[400]
                // },
                "& .MuiDataGrid-footerContainer":{
                    borderTop:"none",
                    backgroundColor:colors.blueAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${colors.grey[100]} !important`
                },
            }}
        >
            <DataGrid 
                    localeText={{
                        toolbarDensity: 'Size',
                        toolbarDensityLabel: 'Size',
                        toolbarDensityCompact: 'Small',
                        toolbarDensityStandard: 'Medium',
                        toolbarDensityComfortable: 'Large',
                    }}
                    rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar}}  
            />
        </Box>
    </Box>
  )
}

export default Contacts;
