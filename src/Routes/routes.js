import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import {Home} from "../Components/Pages/Home";
import {About} from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Gallery from "../Components/Pages/Gallery";
import Add from "../Components/Pages/Add";
import Remove from "../Components/Pages/Remove";

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/"  component={About} />
            <Route path="/contact/"  component={Contact} />
            <Route path="/gallery/"  component={Gallery} />
            <Route path="/add/" component={Add} />
            <Route path="/remove/" component={Remove} />
        </Switch>
    )
}