import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%',margin: 'auto'}}>
             <Grid className="landing-grid">
                 <Cell col={12}>
                     <img 
                      src="avatar-circle.png"
                      alt="avatar"
                      className="avatar-img"
                     />
                     <div className="banner-text">
                        <h1>Computer Engineer</h1>
                        <hr/>
                        <p>PYTHON  |  JAVA  |  C/C++</p>
                     <div className="social-links">

                         {/*LinkedIn*/}
                         <a href="http://linkedin.com/in/mhmddimassi" rel="noopener noreferrer"target="_blank">
                         <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                         </a>

                         {/*Github*/}
                         <a href="https://github.com/mdimas2" rel="noopener noreferrer"target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                         </a>

                     </div>   
                     </div>
                 </Cell>
             </Grid>
            </div>
        )
    }
}
export default Landing;