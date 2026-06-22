import { Link, useNavigate } from "react-router-dom"
import Button from "./button.jsx";


function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="font-poppins w-full flex justify-between px-[100px] pt-2 fixed z-10 ">
        <div >
            <h1 className="font-extrabold text-6xl">
                <Link to="/">NSU</Link>
            </h1>
        </div>
        <div className="flex justify-around items-center gap-6 text-[20px]">
          <p><Link to="/">Home</Link> </p>
           <p><Link to="/history">History</Link> </p>
           <div onClick={()=>{navigate("/constact")}} className="font-medium"><Button word={"Contact us"} /></div>
          
        </div>


    </nav>
  )
}

export default Navbar
