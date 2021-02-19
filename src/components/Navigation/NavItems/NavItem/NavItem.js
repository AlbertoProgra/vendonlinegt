import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
    return(
        <li className={classes.NavItem}>
            {/* exact hace match con la url de forma extricta */}
            {/* activeClassName para visualizar clases activa del css */}
            <NavLink to={props.link} exact activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    );
}

export default navItem;