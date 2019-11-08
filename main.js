import React from 'react';
import Landing from './landingpage';
import {Switch , Route} from 'react-router-dom';
import Resume from './resume';
import Projects from './projects';

import Contact from './contact';



const Main=() => (
    <Switch>
        <Route exact path ="/" component={Landing} />
         <Route path ="/resume" component ={Resume} />
         <Route path ="/projects" component ={Projects} />
        
         <Route path ="/contact" component ={Contact} />
     </Switch>
)

export default Main;
