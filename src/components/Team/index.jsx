import React , {useRef  , useEffect , useState} from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const TeamSection = () => {
    const location = useLocation();
    const teamRef = useRef();
    useEffect(() => {
        // Scroll to the top when the component is mounted or when location state changes
        if (location.state || !location.state) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [location.state]);

 return (
     <div ref={teamRef} id="team">
   <div className="heading th">
   <h2 className="team-heading">
    Our<span> Team</span>
   </h2>   </div>

    <div className="tnp-officer">
        <div className="officer-img">
            <img src="src/components/Team/Images/tnpOfficer.png" alt="" />
        
            <div className="infos">
                <h2>Dr. Elanchezhiyan</h2>
                <p>Training and Placement Cell Officer</p>
            </div>
        </div>
    </div>
    <div className="departments">
        <div className="department">
            <h2 className='dept-head'>Computer Science</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/salinip.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. (Mrs.) Salini P</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>

                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/DrSheeba.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. (Mrs.) J. I. Sheeba</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Information Technology</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/vgovindasamy.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. V. Govindasamy</p>
                        <p className='sub-info'>Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/maragadhavalli.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. P. Maragathavalli</p>
                        <p className='sub-info'>Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Electronics and Communication Engineering</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/Sandanalakshmi.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. R. Sandanalakshmi</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/anandhalakshmi.png" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. A. V. Ananthalakshmi</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Electrical and Electronics Engineering</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/Mahesh.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr.B.Mahesh Kumar</p>
                        <p className='sub-info'>Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/subramani.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr.N.P.Subramaniam</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Electronics and Instrumentation Engineering</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/sindhanaiselvi.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr.D. Sindhanaiselvi</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Mechanical Engineering</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/Rathinam.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. N. Rathinam</p>
                        <p className='sub-info'>Assistant Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/vprabakaran.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Mr. V.Prabakaran</p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Chemical Engineering</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/Pallavhee_chem.jpg" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr.T.Pallavhee </p>
                        <p className='sub-info'>Associate Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/staffs/usha.png" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Ms.S.Usha </p>
                        <p className='sub-info'>Assistant Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
        <div className="department">
            <h2 className='dept-head'>Mechatronics Engineering</h2>
            <div className="staffs">
                <div className="staff">
                    <div className="staff-img">
                        <img src="src/components/Team/Images/tnpOfficer.png" alt="" />
                    </div>
                    <div className="staff-info">
                        <p className='sub-info'>Dr. Dhinakaran </p>
                        <p className='sub-info'>Professor</p>
                    </div>
                    <div className="contact">

                    </div>
                </div>
            </div>
        </div>
    </div>
    

   </div>
 );
};

export default TeamSection;