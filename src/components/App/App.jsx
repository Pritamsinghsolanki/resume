import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects';
import OpenSource from './../OpenSource/OpenSource';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';
import CP from './../CP/CP';

import './App.css';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar />
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/projects' exact component={Projects} />
                    <Route path='/skills' exact component={Skills} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/CP' exact component={CP} />
                    <Route path='/OpenSource' eaxct component={OpenSource}></Route>
                    <GoHome />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
