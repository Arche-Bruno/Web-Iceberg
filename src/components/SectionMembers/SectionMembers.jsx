import React from 'react'
import "./SectionMembers.css"
import member from "./../../imgs/sectionTeam1-new1.png"
import member1 from "./../../imgs/sectionTeam2-new.png"
import member2 from "./../../imgs/sectionTeam3-new.png"
import todos from "./../../imgs/img-reunion/todos-new.png"
const SectionMembers = () => {
  return (
    <div className='container-sectionSectionMembers'>
        <div className='container-sectionSectionMembers-section'>
            <div className='sectionSectionMembers-imgs'>
           
                <img src={member}   alt="image-member" />
             
          
            <img src={member1} alt="image-member" />
            <img src={member2} alt="image-member" />
            <img src={todos}   alt="image-member" />
            
          
        </div>
        </div>
        

    </div>
  )
}

export default SectionMembers