import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AlertDialog from './AlertDialog';


export default function UserTable({ user_DB, removeUser }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogAnswer, setDialogAnswer] = useState(false);
    const [userIdToRemove, setUserIdToRemove] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', width: 85, editable: false, },
        { field: 'firstName', headerName: 'First Name', width: 95, editable: false, },
        { field: 'lastName', headerName: 'Last Name', width: 90, editable: false, },
        { field: 'email', headerName: 'Email', width: 210, editable: false, },
        { field: 'birthDate', headerName: 'Birth Date', type: 'number', width: 95, editable: false, },
        {
            field: 'action', headerName: '', width: 60, renderCell: (params) => (
                <IconButton onClick={() => {
                    setOpenDialog(true);
                    setUserIdToRemove(params.row.id);
                }}>
                    <DeleteForeverIcon sx={{ color: "red" }} /></IconButton>
            ),
        }
    ];
    useEffect(() => {
        if (dialogAnswer && userIdToRemove !== null) {
            removeUser(userIdToRemove);
            setOpenDialog(false);
            setUserIdToRemove(null);
            setDialogAnswer(false);
        }
    }, [dialogAnswer]);

    return (
        <div>
            <Box sx={{
                maxWidth: 'fit-content', margin: "auto", backgroundColor: "var(--white)", borderRadius: 2, boxShadow: "3px 3px 8px #222",
            }}>

                <DataGrid
                    rows={user_DB}
                    columns={columns}
                    pageSizeOptions={[8]}
                    editable={false}
                    disableSelectionOnClick={true}
                    disableColumnMenu={true}

                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 8,
                            },
                        },
                    }}
                />
            </Box>
            <AlertDialog openDialog={openDialog} setOpenDialog={setOpenDialog} content={"Are you sure?"} title={"Delete User"} setDialogAnswer={setDialogAnswer} />
        </div>
    )
}
