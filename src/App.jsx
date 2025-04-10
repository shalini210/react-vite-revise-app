import { Route, Routes } from "react-router";
import Forincrement from "./reduxeg/Forincrement";
import { useSelector } from "react-redux";
import Showcount from "./reduxeg/Showcount";
import { Link } from "react-router";
import Apicall from "./Apicall";
import HomeR from "./reduxeg/HomeR";
import LogoutR from "./reduxeg/LogoutR";
import LoginR from "./reduxeg/LoginR";
function App() {
  const username = useSelector((data)=>data.counter.username)
  return (
<>
<div>
{/* <HomeR></HomeR> */}
  <hr></hr>
  {/* <Apicall></Apicall> */}
{/* <Link to="/">Show Count </Link>
<Link to="/increment">Increment </Link> */}
</div>
<h1>Welcome <span className="text-2xl text-blue-500">{username}</span></h1>
<Routes>
  
  <Route path="/login" element={<LoginR></LoginR>}></Route>
  <Route path="/logout" element={<LogoutR></LogoutR>}></Route>
<Route path="/" element={<HomeR></HomeR>}></Route>
<Route path="/increment" element={<Forincrement></Forincrement>}></Route>

</Routes>
</>    
  )
}

export default App;
