// Toolbar is a stateless component, no va a manejar estados o functional component sin hooks.
// classes es el nombre con el cual identificare al objeto de css.

import classes from './Toolbar.module.css';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <nav>
                <NavItems/>
            </nav>
        </header>
    );
}

export default toolbar;