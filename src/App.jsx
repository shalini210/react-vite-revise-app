import Forincrement from "./reduxeg/Forincrement";
import { useSelector } from "react-redux";
function App() {
  const username = useSelector((data)=>data.counter.username)
  return (
<>
<div>
npm install  react-redux
npm install @reduxjs/toolkit react-redux
</div>
<h1>Welcome <span className="text-2xl text-blue-500">{username}</span></h1>
<Forincrement></Forincrement>
</>    
  )
}

export default App;
