import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MyCart from './MyCart';
import LogoBW2 from '../assets/logoBW2';
import LogoPurple from '../assets/LogoPurple';

export default function NavBar({ connectedUser, setConnectedUser, user_DB, removeFromCart }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [open, setOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate();


    const handleChangeTextField = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleLoginClick = () => setShowLoginModal(true);
    const handleLogoutClick = () => { setConnectedUser(null); }
    const toggleShowCart = () => setShowCart((s) => !s);
    const handleCloseCart = () => setShowCart(false);

    const handleSubmit = (e) => {
        const { email, password } = formData;
        const tempUser = user_DB.find(u => u.email === email && u.password === password);
        if (tempUser) {
            setConnectedUser(tempUser);
            setShowLoginModal(false)
            navigate("/");
        } else {
            setOpen(true)
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="md" className="navBar sections sticky-top" data-bs-theme="dark">
                <Container style={{ minWidth: "0p" }}>
                    <Navbar.Brand as={Link} to="/"><LogoBW2 height={"7vh"} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/store">Store</Nav.Link>
                            <Nav.Link as={Link} to="/features">Features</Nav.Link>
                            <Nav.Link as={Link} to="/location">Location</Nav.Link>
                        </Nav>
                        {!connectedUser && <Nav>
                            <Nav.Link as={Link} onClick={handleLoginClick}>Login</Nav.Link>
                            <Nav.Link as={Link} to="/registration">Get Started</Nav.Link>
                        </Nav>}
                        {connectedUser && <Nav>
                            <Nav.Link as={Link} onClick={toggleShowCart} >MyCart</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/" onClick={handleLogoutClick} >Logout</Nav.Link>
                        </Nav>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LogoPurple height={"70vw"} />
            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseLoginModal}></button>
                <h5 className="display-4 text-center text-black-50">Log in Below</h5>
                <Modal.Body>
                    <div className='text-black-50 d-flex flex-column align-items-center'>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChangeTextField}
                            margin="normal"
                            sx={{ marginBlock: 1 }}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            onChange={handleChangeTextField}
                            margin="normal"
                            sx={{ marginBlock: 1 }}

                        />
                        <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: 'var(--sectionBG)', color: 'white', mt: 2 }}>
                            LOGIN
                        </Button>
                        <Snackbar
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                            open={open}
                            autoHideDuration={2000}
                            onClose={handleCloseSnackbar}
                            message="Password or Email Incorrect"
                        />
                    </div>
                </Modal.Body>
            </Modal>
            {connectedUser && <MyCart show={showCart} handleClose={handleCloseCart} cart={connectedUser.cart} removeFromCart={removeFromCart} />}

        </>
    );
}
