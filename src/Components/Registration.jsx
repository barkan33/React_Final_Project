import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';

export default function Registration({ user_DB, setUser_DB }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        birthDate: '',
        cart: []
    });
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMassage] = useState("");
    const navigate = useNavigate();

    const handleChangeTextField = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

    const isValidUser = (user) => {
        const { firstName, lastName, password, confirmPassword, email, birthDate, cart } = user;

        if (!firstName.trim() || !lastName.trim()) { return "Please enter your first and last name."; }
        if (!/^[a-zA-Z ]*$/.test(firstName) || !/^[a-zA-Z ]*$/.test(lastName)) { return "Name cannot contain numbers and special characters"; }
        if (!email) { return "Please enter your email."; }
        if (!birthDate) { return "Please enter your date of birth."; }

        if (password.length < 6) { return "Password must be at least 6 characters long."; }
        if (password !== confirmPassword) { return "Passwords do not match."; }
        if (!/^[a-zA-Z0-9][a-zA-Z0-9-\\._]+@([a-zA-Z0-9]){2,15}(.[a-zA-z]{1,6}){1,2}$/.test(email)) {
            return "Please enter a valid email address.";
        }

        if (user_DB.find(u => u.email === user.email)) return "User already exists.";
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

        const newUser = { ...formData };
        delete newUser.confirmPassword;
        const newUser_DB = [...user_DB, newUser];
        setUser_DB(newUser_DB);
        navigate('/')
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: "400px", maxWidth: "90vw", marginInline: "auto", marginBottom: "130px", marginTop: "80px", backgroundColor: "var(--white)", padding: 20, borderRadius: 8, boxShadow: "6px 5px 6px #00000037" }}>
            <h5 className="display-5 text-center text-black-50">Registation</h5>

            <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChangeTextField}
                margin="normal"
                fullWidth
                sx={{ marginBlock: 1 }}
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChangeTextField}
                margin="normal"
                fullWidth
                sx={{ marginBlock: 1 }}
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChangeTextField}
                margin="normal"
                fullWidth
                sx={{ marginBlock: 1 }}

            />
            <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChangeTextField}
                margin="normal"
                fullWidth
                sx={{ marginBlock: 1 }}

            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChangeTextField}
                margin="normal"
                fullWidth
                sx={{ marginBlock: 1 }}

            />
            <TextField
                label="Birth Date"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChangeTextField}
                margin="normal"
                fullWidth
                InputLabelProps={{ shrink: true }}

            />
            <Button type="submit" variant="contained" sx={{ backgroundColor: 'var(--sectionBG)', color: 'white' }}>
                Register
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={errorMessage}
            />
        </form>
    );
}
