import { Route, Routes } from "react-router";
import Forincrement from "./reduxeg/Forincrement";
import { useSelector } from "react-redux";
import Showcount from "./reduxeg/Showcount";
import { Link } from "react-router";
function App() {
  const username = useSelector((data)=>data.counter.username)
  return (
<>
<div>
<Link to="/">Show Count </Link>
<Link to="/increment">Increment </Link>
</div>
<h1>Welcome <span className="text-2xl text-blue-500">{username}</span></h1>
<Routes>
  
<Route path="/" element={<Showcount></Showcount>}></Route>
<Route path="/increment" element={<Forincrement></Forincrement>}></Route>

</Routes>
</>    
  )
}

export default App;
