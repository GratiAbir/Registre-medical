import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTable.css'
import {userColumns, userRows} from '../datatablesource  '

const DataTable = () => {
    const actionColumn=[
        {
            field: "action",
            headerName: "ACTION",
            width: 270,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                    <div className='viewButton'>View Result</div>
                    <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>

              );
            },
          }
        ]

        const [data,setData] = useState(userRows)
        const handleDelete=(id) =>{
            setData(data.filter(item =>item.id !== id ))
        }

  return (
    <div className='DataTable'>
        <DataGrid style={{height: 445}}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={6}
        rowsPerPageOptions={[6]}
        
      />
    </div>
  )
}

export default DataTable;