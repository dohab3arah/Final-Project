import { createBrowserRouter } from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import Activities from '../views/add';
import Contact from '../views/Contact';
import Discover from '../views/Discover';
import RootLayout from '../views/Layout';
import NotFound from '../views/NotFound';
import Register from '../views/Register';
import SignIn from '../views/SignIn';
import Profile from '../views/Profile';
import CheckOut from '../views/Checkout'; 
import CountryForm from '../components/molecules/CountryForm';
import CityForm from '../components/molecules/CityForm';
import ResidanceForm from '../components/molecules/ResidanceForm';
import Add from '../views/add';
import RoomForm from '../components/molecules/RoomForm';
import Flights from "../views/Flights.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'add',
        element: <Add />,
        children:[
          {
          path: 'add-country',
          element: <CountryForm />
        },
          {
          path: 'add-room',
          element: <RoomForm />
        },
        {
          path: 'add-city',
          element: <CityForm />
        },
        {
          path: 'ResidanceForm',
          element: <ResidanceForm />
        },
      ]

        
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'discover/:id',
        element: <Discover />
      },
      {
        path: 'discover',
        element: <Discover />
      },
      {
        path: 'flights',
        element: <Flights />
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path: 'Profile',
        element: <Profile />
      },
      {
        path: 'Checkout/:id',
        element: <CheckOut />
      },
    ]
  },
  {
    path: 'register',
    element: <Register />
  },

  {
    path: 'SignIn',
    element: <SignIn />
  },
]);

export default router;
