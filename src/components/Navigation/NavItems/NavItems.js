import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => {
    return (
        <ul className={classes.NavItems}>
        <NavItem link="/">Inicio</NavItem>
        <NavItem link="/about">Nosotros</NavItem>
        <NavItem link="/products">Productos</NavItem>
        </ul>
    );
}

export default navItems;