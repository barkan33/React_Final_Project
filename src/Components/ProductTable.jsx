import { useState, useEffect} from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Box,  IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import AlertDialog from './AlertDialog';

export default function ProductTable({ products, removeProduct }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogAnswer, setDialogAnswer] = useState(false);
    const [productIdToRemove, setProductIdToRemove] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 185 },
        { field: 'author', headerName: 'Author', width: 135 },
        { field: 'price', headerName: 'Price', type: 'number', width: 95, editable: false },
        { field: 'stock', headerName: 'Stock', type: 'number', width: 90, editable: false },
        {
            field: 'action',
            headerName: '',
            width: 80,
            renderCell: (params) => (
                <IconButton sx={{ marginLeft: "20px" }} onClick={() => {
                    setOpenDialog(true);
                    setProductIdToRemove(params.row.id);
                }}>
                    <DeleteForeverIcon sx={{ color: "red" }} />
                </IconButton>
            ),
        },
    ];

    useEffect(() => {
        if (dialogAnswer && productIdToRemove !== null) {
            removeProduct(productIdToRemove);
            setOpenDialog(false);
            setProductIdToRemove(null);
            setDialogAnswer(false);
        }
    }, [dialogAnswer]);

    const handleCellEditCommit = (params) => { // עדין לא עובד, אולי יוסיפו בגרסאות הבאות של MUI
        console.log(params);
        const updatedProducts = products.map((product) => {
            if (product.id === params.id) {
                return { ...product, [params.field]: params.value };
            }
            return product;
        });
        //   updateProducts(updatedProducts); //NOT TODO 
        console.log(updatedProducts);

    }

    return (
        <div>
            <Box sx={{
                maxWidth: '90vw', width: "700px", margin: "auto", backgroundColor: "var(--white)", borderRadius: 2, boxShadow: "3px 3px 8px #222",
            }}>

                <DataGrid
                    rows={products}
                    columns={columns}

                    pageSizeOptions={[8]}
                    editable={false}
                    disableSelectionOnClick={true}
                    onCellEditCommit={e => console.log(e.value)}
                    // onCellEditStop={e => console.log(e.value)} // לא מתאים
                    // experimentalFeatures={{ newEditingApi: true }} // עדין לא עובד, אולי יוסיפו בגרסאות הבאות של MUI
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 8,
                            },
                        },
                    }}
                />
            </Box>
            <AlertDialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                content={"Are you sure you want to delete this product?"}
                title={"Delete Product"}
                setDialogAnswer={setDialogAnswer}
            />
        </div>
    )
}