import React, { useState } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Biograghy from './component/biography/biography';
import Videos from './component/video/videos';
import Opinions from './component/opinions/opinions';
import Home from './component/home/home';
import Imagens from './component/video/imagens/imagens';
import Nav from './component/nav/nav';
import Footer from './component/footer/footer';
import Contact from './component/contact/contact';
import context from './context';
import useResetOnRize from './hooks/useResetOnRize';

const App = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showGalleries, setShowGalleries] = useState(false);

  const { Provider } = context;

  useResetOnRize(setShowLinks, setShowGalleries);

  return (
    <Provider value={{ showLinks, setShowLinks, showGalleries, setShowGalleries }}>
      <HashRouter basename='/'>
        <div id="App">
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path="/Biografia" component={Biograghy}/>
            <Route path="/Videos" component={Videos}/>
            <Route path="/imagens" component={Imagens}/>
            <Route path="/opinions" component={Opinions}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
