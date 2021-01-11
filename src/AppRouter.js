import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Gallery } from "./Components/Pages/Gallery";
import * as Reducer from './Components/atoms/reducer';
import LoginButton from './Components/atoms/LoginButton';
import LogoutButton from './Components/atoms/LogoutButton';
import Add from "./Components/Pages/Add";
import Remove from "./Components/Pages/Remove";
import './index.css';
import "./css/style.css";

export const imageContext = React.createContext()

// export const initialState = {
//     images :[]
// }

// export const reducer = (state, action) => {
   
//     switch(action.type){
//         case 'add':
//             const x = state.images
//             x.push(action.data);
//             return {...state, images: x};
//         case 'remove':
//             const z = state.images
//             const y = z.filter((val) => {
//                 return (val.name !== action.name)
//             })
//             console.log(y);
//             return {...state, images:y};
            
//         default:
//             return state;
//     }
// }

function AppRouter() {
    // const [imgName, setImgName] = useState('hari')
    // const providerValue = useMemo( () => ({imgName, setImgName}), [imgName, setImgName])

    const [image, setImage] = useReducer(Reducer.reducer, Reducer.initialState)

    return (
        <Router>
            <div>
                <div className="header">
                    <h1 className="title">WELCOME!</h1>
                </div>
                <nav className="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                    <Link to="/contact/">Contact</Link>
                    <Link to="/gallery/">Gallery</Link>
                    
                    <div className="dropdown">
                        <button className="dropbtn">
                            Gallery Admin
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <li>
                                <Link to="/add/">Add Image</Link>
                            </li>
                            <li>
                                <Link to="/remove/">Remove Image</Link>
                            </li>
                            {/* <li>
                                <Link to="/add/">Update Image</Link>
                            </li> */}
                        </div>
                    </div>
                    <LoginButton />
                    <LogoutButton />
                </nav>
                <imageContext.Provider value={{image, setImage}}>
                <Route path="/" exact component={Home} />
                <Route path="/about/"  component={About} />
                <Route path="/contact/"  component={Contact} />
                <Route path="/gallery/"  component={Gallery} />
                <Route path="/add/" component={Add} />
                <Route path="/remove/" component={Remove} />
                </imageContext.Provider>
            </div>
        </Router>
    );
}

export default AppRouter;