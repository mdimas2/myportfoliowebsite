import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                            src="avatar.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Mohamad Dimassi</h2>
                        <h4 style={{color:'grey'}}>Engineer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <p>
                        An enthusiastic, dedicated and versatile young person with an outstanding academic background and
excellent attitude to work. Highly motivated and reliable with the aim of improving managerial and developement skills and to
innovate. 
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5>Address</h5>
                        <p>3455 Aylmer Street, Montreal, Canada</p>
                        <h5>Phone</h5>
                        <p>+1 (438) 978-6824</p>
                        <h5>Email</h5>
                        <p>mohamad.dimassi@mail.mcgill.ca</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={6}>
                        <h2>Education</h2>


                        <Education
                        startYear={2019 }
                        endYear={" PRESENT"}
                        schoolName="McGill University"
                        schoolDescription="First year at Mcgill"
                        schoolCrest=<img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png"
                    style={{height:'100px'}}
                    />
                         />
                         <Education
                        startYear={2018 }
                        endYear={ 2019}
                        schoolName="American University of Beirut"
                        schoolDescription="Part of the Computer and Communication Engineering program. Dean's honor lis in Fall 2018 and Spring 2019"
                        schoolCrest=<img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/39/AUB_Seal_3.png"
                    style={{height:'100px'}}
                    />
                         />
                         <Education
                        startYear={2003 }
                        endYear={ 2018}
                        schoolName="Lycee Abdel Kader"
                        schoolDescription="Serie Scientifique. Graduated with honors. Awarded the prize: Vie Scolaire. Captain of the Soccer team and treasurer of the graduates Commite. Elected president of the high school council "
                        schoolCrest=<img 
                    src="lycee.png"
                    style={{height:'100px'}}
                    />
                         />
                         <hr style={{borderTop:'3px solid #e22947'}}/> 
                        <h2>Experience</h2>   
                        <Experience
                            startYear='Jan 2019 '
                            endYear=' May 2019'
                            jobName='Computer Lab Assistant'
                            empName='American University of Beirut'
                            jobDescription='helped students with assignments'
                            crest=<img
                            src='https://upload.wikimedia.org/wikipedia/commons/3/39/AUB_Seal_3.png'
                            style={{height:'100px'}}
                            />
                        />
                        <Experience
                            startYear='Jan 2019 '
                            endYear=' May 2019'
                            jobName='Mathematics Tutor'
                            empName='Synkers'
                            jobDescription='Tutored math from terminal french bacc'
                            crest=<img
                            src='http://phoenicianfunds.com/wp-content/uploads/2019/01/New-Logo.png'
                            style={{height:'80px',width:'200px'}}
                            />
                        />
                        <Experience
                            startYear='June 2016 '
                            endYear=' June 2016'
                            jobName='Internship Trainee'
                            empName='apps2you'
                            jobDescription='school intern'
                            crest=<img
                            src='http://web.apps2you.com/images/logo.png'
                            style={{height:'80px',width:'200px'}}
                            />
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/> 

                        <h2>Skills</h2>
                        <Skills
                        skill="Python"
                        progress={75}
                        />
                        <Skills
                        skill="Java"
                        progress={65}
                        />
                        <Skills
                        skill="C++"
                        progress={50}
                        />
                        <Skills
                        skill="C"
                        progress={0}
                        />




                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;