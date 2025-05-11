

import Button from "@mui/material/Button"
import './App.css'
import Topbar from "./components/Topbar/Topbar.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"



function App() {

  return (
    <div>
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="content"></div>
        
      </div>
            
    </div>
  )
}

export default App
