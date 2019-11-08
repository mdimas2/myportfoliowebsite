import React , {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from "react-mdl";

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mohamad Dimassi</h2>
                        <img
                            src="avatar-about.png"
                            alt="avatar"
                            style={{height:'250px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                            First Year Computer Engineering Student at McGill University.
                        </p>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                            Currently living in Montreal, QC, CANADA.
                        </p>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                            Make sure to reach out if you want to work on any project.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                        <List>
                          <ListItem>
                             <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                 <i className="fa fa-phone-square" aria-hidden="true"/>
                                 +1 (438) 978-6824
                                 </ListItemContent>
                          </ListItem>
                          <ListItem>
                             <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                 <i className="fa fa-fax" aria-hidden="true"/>
                                 +1 (438) 978-6824
                                 </ListItemContent>
                          </ListItem>
                          <ListItem>
                             <ListItemContent style={{fontSize:'28px',fontFamily:'Anton'}}>
                                 <i className="fa fa-envelope" aria-hidden="true"/>
                                 mohamad.dimassi@mail.mcgill.ca
                                 </ListItemContent>
                          </ListItem>
                         
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Contact;