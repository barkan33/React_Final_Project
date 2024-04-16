import { useState } from 'react';

import { Box, Snackbar, Button, TextField } from '@mui/material';


export default function Profile({ connectedUser, setConnectedUser, user_DB, setUser_DB }) {
    const [formData, setFormData] = useState({ ...connectedUser });
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMassage] = useState("");

    const handleChange = (event) => { setFormData({ ...formData, [event.target.name]: event.target.value, }); };

    const isValidUser = (newUser) => {
        const { firstName, lastName, password, confirmPassword, email, birthDate } = newUser;

        if (!firstName.trim() || !lastName.trim()) { return "Please enter your first and last name."; }
        if (!/^[a-zA-Z ]*$/.test(firstName) || !/^[a-zA-Z ]*$/.test(lastName)) { return "Name cannot contain numbers and special characters"; }

        if (!email) { return "Please enter your email."; }

        if (!birthDate) { return "Please enter your date of birth."; }
        if (birthDate < new Date(1900, 0, 1)) { return "Date of birth cannot be before 1900."; }
        if (birthDate > new Date()) { return "Date of birth cannot be in the future."; }

        if (password.length < 6) { return "Password must be at least 6 characters long."; }
        if (password !== confirmPassword) { return "Passwords do not match."; }
        if (!/^[a-zA-Z0-9][a-zA-Z0-9-\\._]+@([a-zA-Z0-9]){2,15}(.[a-zA-z]{1,6}){1,2}$/.test(email)) {
            return "Please enter a valid email address.";
        }

        if (user_DB.find(u => u.email === newUser.email && u.email !== connectedUser.email)) return "Email already exists.";
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = isValidUser(formData);
        if (validationResult != true) {
            setErrorMassage(validationResult);
            setOpen(true);
            return;
        }
        handleSave(formData);
    };

    const handleSave = (updatedUser) => {
        setUser_DB(prevUser_DB => prevUser_DB.map(user =>
            user.email === connectedUser.email ? updatedUser : user
        ));
        setConnectedUser(updatedUser);
        setErrorMassage("Profile updated.");
        setOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root, .MuiInputBase-root': { m: 1, width: '300px' },
                "@media (max-width: 700px)": {
                    width: "90vw",
                    '& .MuiTextField-root': { display: "block", m: 1, marginInline: "auto", width: '100%' },
                },
                bgcolor: 'var(--white)',
                width: "700px",
                margin: "auto",
                paddingBottom: "20px",
                borderRadius: "8px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: "6px 5px 6px #00000037",
                marginTop: "8vh",

            }}
            onSubmit={handleSubmit}
        >
            <h5 className="display-5 text-center text-black-50">Welcome, {connectedUser.firstName}</h5>
            <div>
                <TextField
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div >
                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}

                />
                <TextField
                    id="birthDate"
                    label="Birth Date"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div>
                <TextField
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                />
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" variant="contained" sx={{ backgroundColor: 'var(--sectionBG)', color: 'white', marginTop: "5px" }}>
                Save Changes
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={errorMessage}
            />
        </Box>
    );
}
