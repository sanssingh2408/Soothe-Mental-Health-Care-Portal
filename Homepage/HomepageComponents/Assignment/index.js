import React from 'react'
import './assessmentstyle.css'
import assessmentHome from '../../HomepageAssets/assessmentHome.jpg'
import {Link} from 'react-router-dom'

const Assignment = props => {
    return (
      <div className="AssignmentMainContainer">
        <div className="AssignmentContainer" style={{boxSizing: 'border-box'}}> 
        <div className="cardHeader2">
          <h2 className="siddheshfontheading">Assessment</h2>
        </div>
        <div className="AssignmentCardContent">
          <div className="AssignmentImageContainer">
            <img className="AssignmentImage" src={assessmentHome}></img>
          </div>
          <div className="AssignmentDescription">
            <p className="AssignmentDescriptionContent">When you’re going through a tough time it’s normal to feel down for a while, emotions like sadness and grief help make us human. But if you’re feeling sad or miserable most of the time over a long period of time, you might have depression.</p>
            <p className="AssignmentDescriptionContent">Think about the last two weeks, rather than just today or yesterday. Take this self-test to help figure out whether you’re showing any of the warning signs of depression. This won’t give you a diagnosis but it will help you decide the next step.</p>
            <br></br>
            <div className="Assignmentbtn">
            <a href="/depressionTest" class="round-button">Depression Test</a>
            
            <Link to="/anxietyTest" class="round-button">Anxiety Test</Link>
            
        </div>
          </div>
        </div>
        </div>
      </div>
    )
}
export default Assignment