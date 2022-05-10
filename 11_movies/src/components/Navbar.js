import React from "react";
import { NavLink} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="users">Users</NavLink>
                     
                    </li>
                </ul>
           </div>
      </div>
    </nav>
    )
}

export default Navbar;