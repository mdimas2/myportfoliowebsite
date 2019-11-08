import React , {Component} from 'react';
import {Tabs, Tab,Grid,Cell, Card,CardTitle,CardActions,CardText,Button,CardMenu,IconButton} from "react-mdl";
class Projects extends Component{
    constructor(props){
        super(props);
        this.state={active :0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: "450", margin:"auto"}}>
                    <CardTitle style={{color:"#fff",height:"176px",background:
                    'url(https://2.bp.blogspot.com/-U2Qv-53pOCg/TdDeCPPpVII/AAAAAAAAAXU/mbSElBLnHt0/w1200-h630-p-k-no-nu/Golden-Spiral.jpg) center/cover'}}>
                    Fibonacci Matrix
                    </CardTitle>
                    <CardText>
                        Recursive Multiplication of Matrices
                    </CardText>
                    <CardText> 
                        -Recursive Power
                    </CardText>
                    <CardText>
                         -Apply to the fibonnaci matrix
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/mdimas2/Computation-Prob/blob/master/FibonacciO(logn).py'
                         rel="noopener noreferrer"target="_blank" >
                        <Button colored>GitHub</Button>
                        </a>
                        
                        <a href='MyCodes\FibonacciO(logn).py' download >
                        <Button colored>Download Now</Button>
                        </a>
                        

                    </CardActions>
                    
                </Card>

                <Card shadow={5} style={{minWidth: "450", margin:"auto"}}>
                    <CardTitle style={{color:"#fff",height:"176px",background:
                    'url(https://i.ytimg.com/vi/fF_RBbvQbi4/maxresdefault.jpg) center/cover'}}>
                    </CardTitle>
                    <CardText>
                        -Coin Change Problem: Least number of change bills (Canonical/ Non-Canonical).
                    </CardText>
                    <CardText>
                        -Use Dynamic Programming to avoid unecessary recursive calls.
                    </CardText>
                    <CardText> 
                        -Use Backtracking to find the bills that are used
                    </CardText>
                    <CardActions border>

                        <a href='https://github.com/mdimas2/Computation-Prob/blob/master/CoinChange.py'
                         rel="noopener noreferrer"target="_blank" >
                        <Button colored>GitHub</Button>
                        </a>
                        
                        <a href='MyCodes\CoinChange.py' download >
                        <Button colored>Download Now</Button>
                        </a>

                    </CardActions>
                  
                </Card>
                <Card shadow={5} style={{minWidth: "450", margin:"auto"}}>
                    <CardTitle style={{color:"#000",height:"176px",background:
                    'url(https://www.cdn.geeksforgeeks.org/wp-content/uploads/tiles5.png) center/cover'}}>
                    Tiling Deffective ChessBorad
                    </CardTitle>
                    <CardText>
                        -Choose a cell that is diffective.
                    </CardText>
                    <CardText>
                        -Try to tile the board with L-shaped tiles.
                    </CardText>
                    <CardText> 
                        -Divide and conquer.
                    </CardText>
                    <CardActions border>
                    <a href='https://github.com/mdimas2/Computation-Prob/blob/master/TilingChessboard.py'
                         rel="noopener noreferrer"target="_blank" >
                        <Button colored>GitHub</Button>
                    </a>
                        
                        <a href='MyCodes\TilingChessboard.py' download >
                        <Button colored>Download Now</Button>
                        </a>
                    </CardActions>
                    
                </Card>
                <Card shadow={5} style={{minWidth: "450", margin:"auto"}}>
                    <CardTitle style={{color:"#000",height:"176px",background:
                    'url(https://www.geeksforgeeks.org/wp-content/uploads/ratinmaze_filled11.png) center/cover'}}>
                    Maze Reachibility Problem
                    </CardTitle>
                    <CardText>
                        -Given a Maze, figure waht cells are reachable from the source.
                    </CardText>
                    
                    <CardActions border>
                    <a href='https://github.com/mdimas2/Computation-Prob/blob/master/TilingChessboard.py'
                         rel="noopener noreferrer"target="_blank" >
                        <Button colored>GitHub</Button>
                    </a>
                        
                        <a href='MyCodes\MazeReach.py' download >
                        <Button colored>Download Now</Button>
                        </a>

                    </CardActions>
                    
                </Card>
                
                </div>


            )
        }
        else if(this.state.activeTab===1){
            return(
                <div>
                <Card shadow={5} style={{minWidth: "450", margin:"auto"}}>
                    <CardTitle style={{color:"#fff",height:"176px",background:
                    'url(https://img1.androidappsapk.co/poster/c/9/d/weatherapp.precipitation.forecast.lixi_6.png) center/cover'}}>
                    My Weather App
                    </CardTitle>
                    <CardText>
                        Still workig on the Project
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>

                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>

            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) =>this.setState({activeTab:tabID})} ripple>
                    <Tab>Computation Problems</Tab>
                    <Tab>Weather App</Tab>
                </Tabs>   
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>              
                
            </div>
        )
    }
}
export default Projects;