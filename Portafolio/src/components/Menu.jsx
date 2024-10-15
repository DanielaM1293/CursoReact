import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className='menu'>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : null)} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : null)} to={"/acerca"}>About</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : null)} to={"/servicios"}>Services</NavLink>
    </nav>
  );
}
