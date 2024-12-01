import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './componets/Home/Home.jsx';
import About from './componets/About/About.jsx';
import Contact from './componets/Contact/Contact.jsx';
import User from './componets/User/User.jsx';
import Github from './componets/Github/Github.jsx';  // Add this import for Github component

// Define the router with paths and their corresponding components
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        path: 'github',
        element: <Github />  // Added the Github route
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
