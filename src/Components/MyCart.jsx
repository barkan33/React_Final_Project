import Offcanvas from 'react-bootstrap/Offcanvas';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export default function MyCart({ show, handleClose, cart, removeFromCart }) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 150, editable: false, },
        { field: 'author', headerName: 'Author', width: 110, editable: false, },
        { field: 'price', headerName: 'Price', type: 'number', width: 60, editable: false, },
        { field: 'quantity', headerName: 'Quantity', type: 'number', width: 70, editable: true, },
        {
            field: 'action', headerName: 'Action', width: 60, renderCell: (params) => (
                <IconButton onClick={() => removeFromCart(params.row.id, params.row.quantity)}><DeleteForeverIcon sx={{ color: "red" }} /></IconButton>
            ),
        }
    ];
    let total = 0;
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false} style={{ width: "560px" }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <Box sx={{ height: 526, width: '100%' }}>
                        <DataGrid
                            rows={cart}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 8,
                                    },
                                },
                            }}
                            pageSizeOptions={[8]}
                            editable={false}
                            disableSelectionOnClick={true}
                        />
                    </Box>
                    {useMemo(() => {
                        total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                        return <Offcanvas.Title>Total: ${total.toFixed(2)}</Offcanvas.Title>;
                    }, [cart])}
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}