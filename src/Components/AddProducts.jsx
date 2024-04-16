import { useState } from 'react';
import { Box, TextField, Button, Snackbar } from '@mui/material';
import ProductTable from './ProductTable';


export default function AddProducts({ products, setProducts, removeProduct }) {
    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        description: "",
        author: "",
        artist: "",
        publisher: "",
        publicationDate: "",
        genre: "",
        price: 0,
        coverImage: "",
        stock: 0,
    });
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMassage] = useState("");
    const handleChange = (event) => { setFormData({ ...formData, [event.target.name]: event.target.value, }); };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = isValidProduct(formData);
        if (validationResult != true) {
            setErrorMassage(validationResult);
            setOpen(true);
            return;
        }
        handleSave(formData);
    };

    function isValidProduct(product) {
        const { id, title, description, author, artist, publisher, publicationDate, genre, price, stock, coverImage } = product;
        if (id <= 0) return "Please enter a valid ID";
        if (!title.trim()) return "Please enter a title";
        if (!description.trim()) return "Please enter a description";
        if (!author.trim()) return "Please enter an author";
        if (!artist.trim()) return "Please enter an artist";
        if (!publisher.trim()) return "Please enter a publisher";
        if (!publicationDate) { return "Please enter Publication Date."; }
        if (publicationDate > new Date()) { return "Date of Publication cannot be in the future."; }

        if (!coverImage.trim()) return "Please enter a cover image";
        if (!Array.isArray(product.genre))
            if (!genre.trim()) return "Please enter a genre";

        if (price <= 0) return "Please enter a valid price";
        if (stock <= 0) return "Please enter a valid stock";
        if (products.find(prod => prod.id === id)) return "Products already exists.";
        return true;
    }

    const handleSave = (newProducts) => {
        if (!Array.isArray(newProducts.genre))
            newProducts.genre = newProducts.genre.split(",");
        console.log(newProducts);
        setProducts([...products, newProducts]);
        setErrorMassage("Product Added.");
        setOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
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
                <h5 className="display-5 text-center text-black-50">Add New Product</h5>

                <div>
                    <TextField
                        id="id"
                        label="ID"
                        name="id"
                        type="number"
                        value={formData.id}
                        onChange={handleChange}
                    />

                    <TextField
                        id="title"
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <TextField
                        id="author"
                        label="Author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />

                    <TextField
                        id="artist"
                        label="Artist"
                        name="artist"
                        value={formData.artist}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        label="Description"
                        name="description"
                        multiline

                        value={formData.description}
                        onChange={handleChange}
                    />


                    <TextField
                        id="publisher"
                        label="Publisher"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <TextField
                        id="publicationDate"
                        label="Publication Date"
                        name="publicationDate"
                        type="date"
                        value={formData.publicationDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />

                    <TextField
                        id="genre"
                        label="Genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id="price"
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <TextField
                        id="coverImage"
                        label="Cover Image URL"
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                    />
                </div>
                <div>

                    <TextField
                        id="stock"
                        label="Stock"
                        name="stock"
                        type="number"
                        value={formData.stock}
                        onChange={handleChange}
                    />

                </div>
                <Button type="submit" variant="contained" sx={{ backgroundColor: 'var(--sectionBG)', color: 'white', marginTop: "5px" }}>
                    Add Product
                </Button>

                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message={errorMessage}
                />
            </Box>
            <div style={{ margin: "5vh" }} />
            <ProductTable products={products} removeProduct={removeProduct} />
        </>
    )
}
