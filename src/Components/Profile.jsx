import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function Profile({ connectedUser, setConnectedUser, user_DB, setUser_DB }) {
    const [formData, setFormData] = useState({ ...connectedUser });
    const [isEditing, setIsEditing] = useState(false);
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMassage] = useState("");

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value, });
    };
    

    const isValidUser = (user) => {
        const { firstName, lastName, password, confirmPassword, email, birthDate } = user;




        if (!firstName.trim() || !lastName.trim()) { return "Please enter your first and last name."; }
        if (!/^[a-zA-Z ]*$/.test(firstName) || !/^[a-zA-Z ]*$/.test(lastName)) { return "Name cannot contain numbers and special characters"; }
        if (!email) { return "Please enter your email."; }
        if (!birthDate) { return "Please enter your date of birth."; }

        if (password.length < 6) { return "Password must be at least 6 characters long."; }
        if (password !== confirmPassword) { return "Passwords do not match."; }
        if (!/^[a-zA-Z0-9][a-zA-Z0-9-\\._]+@([a-zA-Z0-9]){2,15}(.[a-zA-z]{1,6}){1,2}$/.test(email)) {
            return "Please enter a valid email address.";
        }

        if (user_DB.find(u => u.email === user.email && u.email !== connectedUser.email)) return "User already exists.";
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



    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = (updatedUser) => {
        setUser_DB(prevUser_DB => prevUser_DB.map(user =>
            user.email === connectedUser.email ? updatedUser : user
        ));
        setConnectedUser(updatedUser);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
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
                '& .MuiTextField-root': { m: 1, width: '300px' },
                bgcolor: '#eeeeff',
                width: "700px",
                margin: "auto",
                paddingBottom: "20px",
                borderRadius: "8px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            onSubmit={handleSubmit}
        >
            <h5 className="display-5 text-center text-black-50">Приветствие</h5>
            <div>
                <TextField
                    id="firstName"
                    label="Имя"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
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
                    label="Дата рождения"
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
                    label="Пароль"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <TextField
                    id="confirmPassword"
                    label="Подтвердите пароль"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" variant="contained" sx={{ backgroundColor: 'var(--sectionBG)', color: 'white', marginTop: "5px" }}>
                Сохранить изменения
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

function Greeting({ name }) {
    return

}

function ProfileInfo({ user }) {
    return

}

function EditForm({ user, onSave, onCancel }) {
    // ... поля ввода для редактирования
    return

}