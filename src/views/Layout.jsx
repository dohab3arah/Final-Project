import { Outlet } from 'react-router-dom';
import Navbar from '../components/organisem/Navbar';
export default function RootLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
}
