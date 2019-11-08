import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                    <p>{this.props.crest}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <h5 style={{color:'grey'}}>{this.props.empName}</h5>
                    <p>{this.props.jobDescription}</p>

                </Cell>
            </Grid>





        )
    }
}
export default Experience;
