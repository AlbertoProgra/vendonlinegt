import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

// ya no coloco React.Component porque ya lo importe
// este es un componente
class Layout extends Component {
// me retorna el jsx, e utilizo this porque estoy en un componente de clase
    render(){
        return(
            <div>
                {/*<div> Toolbar [Links] </div> y main es como el body*/}
                <Toolbar/>
                <main className={classes.Content}> 
                    { this.props.children }
                </main>
            </div>
        );
    }
}

export default Layout;

