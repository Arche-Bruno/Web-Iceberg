import React, { useState } from "react";
import "./SectionTrayectory.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const SectionTrayectory = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="container-sectionTrayectory">
      <section>
       
          <div className="sectionTrayectory-img">
          <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
            <div className="sectionTrayectory-content">

              <ul>
                <li>
                  {counterOn && (
                    <CountUp style={{color:"#404040", fontFamily:"Oxygen",textAlign:"center",fontSize:"40px", width:"80px" }}
                    start={0}
                    end={25}
                    duration={10}
                    delay={0}
                  ></CountUp>
                   
                  )}
                  <span>Proyectos realizados</span>{" "}
                </li>
                <li>
                  {counterOn && (
                       <CountUp style={{color:"#404040", fontFamily:"Oxygen",textAlign:"center",fontSize:"40px", width:"80px" }}
                      start={0}
                      end={250}
                      duration={12}
                      delay={0}
                    ></CountUp>
                  )}
                  <span>material creativo</span>{" "}
                </li>
                <li>
                  {counterOn && (
                   <CountUp style={{color:"#404040", fontFamily:"Oxygen",textAlign:"center",fontSize:"40px",width:"95px" }}
                      start={0}
                      end={56}
                      duration={14}
                      delay={0}
                    ></CountUp>
                  )}
                  <span>maestros experimentados</span>{" "}
                </li>
              </ul>
            </div>
            </ScrollTrigger>
          </div>
      
      </section>
    </div>
  );
};

export default SectionTrayectory;
