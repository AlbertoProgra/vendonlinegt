import classes from './Footer.module.css';

// function component
const footer = (props) => {
    return (
       <div className={classes.fBottom}>
           <div /*classsName={classes.fBottom1}*/>
                
           </div>
           <div className={classes.fBottom2}>
               <span style={{marginRight: "30vh"}}>Ventas Online en Guatemala .
                    <span style={{fontWeight: "lighter"}}> &copy; 2021 voGT</span>
               </span>
           </div>
       </div> 
    )
}

export default footer;