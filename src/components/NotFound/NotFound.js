import { useLocation } from 'react-router-dom';
import image404 from '../../assets/images/404error.svg';

const NotFound = (props) => {
    let location = useLocation();

    return(
        <div style = {{textAlign: "center"}}>
            <img src={image404} alt="Not Found" style={{height: "50vh"}} />
            <h2 style = {{marginBottom: "10px"}}>¡ La página que buscas no se encuentra !</h2>
            <h4 style = {{marginTop: "0px"}}>{ 'La URL brindada fue: '}
            <span style = {{color: "#fb503b", textDecoration: "underline", marginLeft: "5px", fontSize: "20px" }}>
                { location.pathname }
                </span>
            </h4>
        </div>
    );
}

export default NotFound;