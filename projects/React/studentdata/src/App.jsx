
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ClientsTable from './ClientsTable.jsx'
import CreateClient2 from './CreateClient2.jsx'
import DeleteClient from "./DeleteClient.jsx"
import EditClient from "./EditClient.jsx"
import ViewDetails from "./ViewDetails.jsx"


import Main from './Main'


function App() {


  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" 
          element={<Main/> }
            />
          <Route 
          path="/table" 
          element={<ClientsTable />} />
          <Route 
          path="/client/create" 
          element={<CreateClient2 />} />
          <Route 
          path="/client/edit/:id" 
          element={<EditClient />} />
          <Route 
          path="client/view/:id" 
          element={<ViewDetails />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
