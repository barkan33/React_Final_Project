import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero'
import Registration from './Components/Registration';
import Store from './Components/Store';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Map from './Components/Map';
import Features from './Components/Features';

function App() {
  const [user_DB, setUser_DB] = useState([{
    firstName: 'ad',
    lastName: 'min',
    password: 'admin',
    email: 'admin@admin.com',
    birthDate: '2024-04-04',
    cart: []
  }]);
  const [connectedUser, setConnectedUser] = useState({
    firstName: 'ad',
    lastName: 'min',
    password: 'admin',
    email: 'admin@admin.com',
    birthDate: '2024-04-04',
    cart: []
  });
  const [products, setProducts] = useState([
    {
      id: 12345,
      title: "The Amazing Spider-Man",
      description: "Peter Parker faces a new threat...",
      author: "Stan Lee",
      artist: "Steve Ditko",
      publisher: "Marvel Comics",
      publicationDate: "1963-03-01",
      genre: ["Superhero", "Action"],
      price: 6,
      coverImage: "./src/assets/react.svg",
      stock: 10,
    },
    {
      id: 24680,
      title: "Batman: Year One",
      description: "Bruce Wayne's early days as the Dark Knight",
      author: "Frank Miller",
      artist: "David Mazzucchelli",
      publisher: "DC Comics",
      publicationDate: "1987-02-01",
      genre: ["Superhero", "Crime"],
      price: 12.99,
      coverImage: "./src/assets/react.svg",
      stock: 5,
    },
    {
      id: 35791,
      title: "Watchmen",
      description: "A deconstruction of the superhero genre",
      author: "Alan Moore",
      artist: "Dave Gibbons",
      publisher: "DC Comics",
      publicationDate: "1986-09-01",
      genre: ["Superhero", "Thriller"],
      price: 19.99,
      coverImage: "./src/assets/react.svg",
      stock: 8,
    }, {
      id: 11121,
      title: "Saga",
      description: "A space opera/fantasy comic book series",
      author: "Brian K. Vaughan",
      artist: "Fiona Staples",
      publisher: "Image Comics",
      publicationDate: "2012-03-14",
      genre: ["Sci-Fi", "Fantasy"],
      price: 9.99,
      coverImage: "./src/assets/react.svg",
      stock: 7,
    },
    {
      id: 13141,
      title: "The Walking Dead",
      description: "A post-apocalyptic horror comic book series",
      author: "Robert Kirkman",
      artist: "Tony Moore",
      publisher: "Image Comics",
      publicationDate: "2003-10-08",
      genre: ["Horror", "Survival"],
      price: 14.99,
      coverImage: "./src/assets/react.svg",
      stock: 12,
    },
    {
      id: 15161,
      title: "Ms. Marvel",
      description: "A teenage Pakistani American superhero",
      author: "G. Willow Wilson",
      artist: "Adrian Alphona",
      publisher: "Marvel Comics",
      publicationDate: "2014-02-05",
      genre: ["Superhero", "Coming-of-age"],
      price: 3.99,
      coverImage: "./src/assets/react.svg",
      stock: 15,
    },
    {
      id: 17181,
      title: "Black Panther",
      description: "The king and protector of Wakanda",
      author: "Ta-Nehisi Coates",
      artist: "Brian Stelfreeze",
      publisher: "Marvel Comics",
      publicationDate: "2016-04-06",
      genre: ["Superhero", "Political"],
      price: 4.99,
      coverImage: "./src/assets/react.svg",
      stock: 20,
    },
    {
      id: 19202,
      title: "Hellboy",
      description: "A demon summoned to Earth who fights supernatural evil",
      author: "Mike Mignola",
      artist: "Mike Mignola",
      publisher: "Dark Horse Comics",
      publicationDate: "1994-03-23",
      genre: ["Supernatural", "Action"],
      price: 10.99,
      coverImage: "./src/assets/react.svg",
      stock: 6,
    },
    {
      id: 21222,
      title: "Sandman",
      description: "A dark fantasy comic book series about the Lord of Dreams",
      author: "Neil Gaiman",
      artist: "Sam Kieth",
      publisher: "DC Comics",
      publicationDate: "1989-01-01",
      genre: ["Fantasy", "Horror"],
      price: 15.99,
      coverImage: "./src/assets/react.svg",
      stock: 4,
    },
    {
      id: 23242,
      title: "Y: The Last Man",
      description: "A post-apocalyptic science fiction comic book series",
      author: "Brian K. Vaughan",
      artist: "Pia Guerra",
      publisher: "Vertigo Comics",
      publicationDate: "2002-09-18",
      genre: ["Sci-Fi", "Drama"],
      price: 12.99,
      coverImage: "./src/assets/react.svg",
      stock: 9,
    },
    {
      id: 25262,
      title: "Preacher",
      description: "A supernatural, Western, and dark comedy comic book series",
      author: "Garth Ennis",
      artist: "Steve Dillon",
      publisher: "Vertigo Comics",
      publicationDate: "1995-04-01",
      genre: ["Supernatural", "Western"],
      price: 16.99,
      coverImage: "./src/assets/react.svg",
      stock: 5,
    },
    {
      id: 27282,
      title: "Fables",
      description: "Fairy tale characters living in the real world",
      author: "Bill Willingham",
      artist: "Lan Medina",
      publisher: "Vertigo Comics",
      publicationDate: "2002-07-10",
      genre: ["Fantasy", "Mystery"],
      price: 13.99,
      coverImage: "./src/assets/react.svg",
      stock: 11,
    },
    {
      id: 29303,
      title: "Invincible",
      description: "A superhero comic book series",
      author: "Robert Kirkman",
      artist: "Cory Walker",
      publisher: "Image Comics",
      publicationDate: "2003-01-22",
      genre: ["Superhero", "Action"],
      price: 9.99,
      coverImage: "./src/assets/react.svg",
      stock: 8,
    },
    {
      id: 31323,
      title: "The Wicked + The Divine",
      description: "Twelve gods reincarnated as pop stars",
      author: "Kieron Gillen",
      artist: "Jamie McKelvie",
      publisher: "Image Comics",
      publicationDate: "2014-06-18",
      genre: ["Fantasy", "Music"],
      price: 3.99,
      coverImage: "./src/assets/react.svg",
      stock: 13,
    },
    {
      id: 33343,
      title: "Paper Girls",
      description: "Four 12-year-old newspaper delivery girls get caught in a conflict",
      author: "Brian K. Vaughan",
      artist: "Cliff Chiang",
      publisher: "Image Comics",
      publicationDate: "2015-10-07",
      genre: ["Sci-Fi", "Mystery"],
      price: 11.99,
      coverImage: "./src/assets/react.svg",
      stock: 6,
    }
  ]);
  const addToCart = (id) => {
    if (connectedUser == null) return;
    setProducts(prevProducts => prevProducts.map(product =>
      product.id === id ? { ...product, stock: product.stock - 1 } : product
    ));

    setUser_DB(prevUser_DB => prevUser_DB.map(user => {
      if (user.email !== connectedUser.email) return user;

      const existingProductIndex = user.cart.findIndex(item => item.id === id);

      //מוצר קיים
      if (existingProductIndex !== -1) {
        const updatedCart = [...user.cart];
        updatedCart[existingProductIndex].quantity++;
        return { ...user, cart: updatedCart };
      } else {
        //מוצר חדש
        let product = products.find(item => item.id === id);
        return { ...user, cart: [...user.cart, { id, title: product.title, author: product.author, price: product.price, quantity: 1 }] };
      }
    }));


  };
  const removeFromCart = (id, quantity) => {
    setUser_DB(prevUser_DB =>
      prevUser_DB.map(user => {
        if (user.email !== connectedUser.email) return user;

        const updatedCart = user.cart.filter(item => item.id !== id);
        return { ...user, cart: updatedCart };
      })
    );

    // setConnectedUser(prevUser => ({
    //   ...prevUser,
    //   cart: prevUser.cart.filter(item => item.id !== id)
    // }));

    setProducts(prevProducts => prevProducts.map(product =>
      product.id === id ? { ...product, stock: product.stock + quantity } : product
    ));
  };
  useEffect(() => {
    if (connectedUser != null) {

      const updatedUser = user_DB.find(user => user.email === connectedUser.email);
      if (updatedUser)
        setConnectedUser(updatedUser);
    }

  }, [user_DB]);

  return (
    <>
      <BrowserRouter>
        <NavBar connectedUser={connectedUser} setConnectedUser={setConnectedUser} user_DB={user_DB} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="/registration" element={<Registration user_DB={user_DB} setUser_DB={setUser_DB} />} />
          <Route path="/store" element={<Store addToCart={addToCart} products={products} />} />
          <Route path="/profile" element={<Profile connectedUser={connectedUser} setConnectedUser={setConnectedUser} user_DB={user_DB} setUser_DB={setUser_DB} />} />
          <Route path="/location" element={<Map></Map>} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
};

export default App
