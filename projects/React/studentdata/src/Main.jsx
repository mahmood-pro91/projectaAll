import { Link } from "react-router-dom";

import "./Main.css"

export default function Main() {
    return (
        <div className="btn-container">
            <button className="btn btn-primary"><Link className="link" to="/">Home</Link></button>
            <button className="btn btn-primary"><Link className="link" to="/table">ClientsTable</Link></button>
            <button className="btn btn-primary"><Link className="link" to="/client/create">CreateClient</Link></button>
            <button className="btn btn-primary"><Link className="link" to="/client/edit/:id">EditClient</Link></button>
            <button className="btn btn-primary"><Link className="link" to="/client/view/:id">ViewDetails</Link></button>
        </div>
    )
}