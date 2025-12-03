import {CiLocationOn} from "react-icons/ci";
import {IoMdCall} from "react-icons/io";
import {MdOutlineEmail} from "react-icons/md";
import footerData from "../../api/footerApi.json";
import {NavLink} from "react-router-dom";
const Footers = () => {
    const footer = {
        CiLocationOn:<CiLocationOn/>,
        IoMdCall:<IoMdCall/>,
        MdOutlineEmail:<MdOutlineEmail/>
    }
return(
   <footer className="footer-section">
    <div className="container grid grid-three-cols">
{footerData.map((data,index)=>{
    const {icon,title,details,add}= data;
    return (
        <div key={index} className="footer-contact">
<div className="icon"> {footer[icon]}</div>
<div className="footer-contact-text">

<p>{title}</p>
<NavLink to={add}>
<p>{details}</p>
</NavLink>
</div>
            </div>
    )
})}
        </div>

   </footer>
)}
export default Footers;

