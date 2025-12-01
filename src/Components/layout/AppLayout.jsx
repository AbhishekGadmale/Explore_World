import Headers  from "../UI/Headers";
import Footers from "../UI/Footers";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
return(
    <div>
      
      <Headers/>
      <Outlet/>
      <Footers/>
    </div>
)
}

export default AppLayout;