import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Registration from './Components/Registration';
import Store from './Components/Store';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Map from './Components/Map';
import Features from './Components/Features';
import UserTable from './Components/UserTable';

function App() {
  const [user_DB, setUser_DB] = useState([{
    firstName: 'ad',
    lastName: 'min',
    id: 11111111,
    password: 'admin',
    email: 'admin@admin.com',
    birthDate: '2024-04-04',
    cart: []
  }]);
  const [connectedUser, setConnectedUser] = useState(user_DB[0]);
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
      coverImage: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/57c43ae6ec459/clean.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/61+hFGCapwL._SL1500_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/61BvMZbTw9L._SL1000_.jpg",
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
      coverImage: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-2678528.jpg?1708830976",
      stock: 7,
    },
    {
      id: 13141,
      title: "The Walking Dead Deluxe",
      description: "A post-apocalyptic horror comic book series",
      author: "Robert Kirkman",
      artist: "Tony Moore",
      publisher: "Image Comics",
      publicationDate: "2003-10-08",
      genre: ["Horror", "Survival"],
      price: 19.99,
      coverImage: "https://www.hollywoodreporter.com/wp-content/uploads/2020/07/the_walking_dead_-_publicity_-_embed_6-2020_.jpg?w=928",
      stock: 4,
    }, {
      id: 13142,
      title: "The Walking Dead",
      description: "A post-apocalyptic horror comic book series",
      author: "Robert Kirkman",
      artist: "Tony Moore",
      publisher: "Image Comics",
      publicationDate: "2003-10-08",
      genre: ["Horror", "Survival"],
      price: 14.99,
      coverImage: "https://www.hollywoodreporter.com/wp-content/uploads/2020/07/the_walking_dead_-_publicity_-_embed_5-2020_.jpg?w=928",
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
      coverImage: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/e0/6160bdc11ac10/clean.jpg",
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
      coverImage: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/03/619e63a155950/clean.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/612645-lZcL._SL1200_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/71etcZII5cL._SL1000_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/71lBTGxPOOL._SL1500_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/71DjQ8bWwXL._SL1000_.jpg",
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
      coverImage: "https://m.media-amazon.com/images/I/81YyqrzNDbL._SL1499_.jpg",
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
      coverImage: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699557764-91kCNDS7ucL.jpg?crop=1xw:1xh;center,top&resize=980:*",
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
      coverImage: "https://cdn.imagecomics.com/assets/i/releases/7187/the-wicked-the-divine-1_2e9b2f1490.jpg",
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
      coverImage: "https://ew.com/thmb/vbb3CkRcNTBnKrGFuc0mzQBMzhw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Papergirls-dfe9b536a36c4d189b5aff86cadc3f92.jpg",
      stock: 6,
    }
  ]);

  const addToCart = (id) => {
    if (connectedUser == null) return;
    setProducts(prevProducts => prevProducts.map(product =>
      product.id === id ? { ...product, stock: product.stock - 1 } : product
    ));

    setUser_DB(prevUser_DB => prevUser_DB.map(user => {
      if (user.id !== connectedUser.id) return user;

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

    setProducts(prevProducts => prevProducts.map(product =>
      product.id === id ? { ...product, stock: product.stock + quantity } : product
    ));
  };
  const removeUser = (id) => {
    setUser_DB(prevUser_DB =>
      prevUser_DB.filter(user => user.id !== id)
    );
  }
  useEffect(() => {
    if (connectedUser != null) {

      const updatedUser = user_DB.find(user => user.id === connectedUser.id);
      if (updatedUser)
        setConnectedUser(updatedUser);
    }

  }, [user_DB]);

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <NavBar connectedUser={connectedUser} setConnectedUser={setConnectedUser} user_DB={user_DB} removeFromCart={removeFromCart} />
          <Routes>
            <Route path="" element={<Hero products={products} />} />
            <Route path="/registration" element={<Registration user_DB={user_DB} setUser_DB={setUser_DB} />} />
            <Route path="/store" element={<Store addToCart={addToCart} products={products} />} />
            <Route path="/profile" element={<Profile connectedUser={connectedUser} setConnectedUser={setConnectedUser} user_DB={user_DB} setUser_DB={setUser_DB} />} />
            <Route path="/location" element={<Map></Map>} />
            <Route path="/features" element={<Features />} />
            <Route path="/admin" element={<UserTable user_DB={user_DB} removeUser={removeUser} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default App
