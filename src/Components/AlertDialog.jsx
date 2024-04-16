import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function AlertDialog({ openDialog, setOpenDialog, content, title, setDialogAnswer }) {

    const handleDisagree = () => {
        setOpenDialog(false);
    };
    const handleAgree = () => {
        setDialogAnswer(true);
        setOpenDialog(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={openDialog}
                onClose={() => { setOpenDialog(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDisagree}>Disagree</Button>
                    <Button onClick={handleAgree} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}