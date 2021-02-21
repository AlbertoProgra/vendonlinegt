import { useLocation } from 'react-router-dom';
import image404 from '../../assets/images/404error.svg';
import classes from './NotFound.module.css';

const NotFound = (props) => {
    let location = useLocation();

    return(
        <div className={classes.CenterImage}>
            <img src={image404} alt="Not Found"/>
            <h2 style = {{marginBottom: "20px"}}>¡ La página que buscas no se encuentra !</h2>
            <h4 style = {{marginTop: "0px"}}>{ 'La URL brindada fue: '}
                <span>{ location.pathname }</span>
            </h4>
        </div>
    );
}

export default NotFound;