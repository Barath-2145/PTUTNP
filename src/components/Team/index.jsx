import React, { useRef, useEffect, useState } from 'react';
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
    const ImagePath = (imagePath) => {
        return `TeamImages/${imagePath}`;
    }

    return (
        <div ref={teamRef} id="team">
            <div className="heading th">
                <h2 className="team-heading">
                    Our<span> Team</span>
                </h2>   </div>

            <div className="tnp-officer">
                <div className="officer-img">
                    <img src={ImagePath("tnpOfficer.png")} alt="" />

                    <div className="infos">
                        <h2>Dr. Elanchezhiyan</h2>
                        <p>Training and Placement Cell Officer</p>
                    </div>
                </div>
            </div>
            <div className="departments">
                <div className="department">
                    <h2 className='dept-head'>Computer <span className='span-class'>Science</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("salinip.jpg")} alt="" />
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
                                <img src={ImagePath("DrSheeba.jpg")} alt="" />
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
                    <h2 className='dept-head'>Information <span className='span-class'>Technology</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("vgovindasamy.jpg")} alt="" />
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
                                <img src={ImagePath("maragadhavalli.jpg")} alt="" />
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
                    <h2 className='dept-head'>Electronics and Communication <span className='span-class'>Engineering</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("Sandanalakshmi.jpg")} alt="" />
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
                                <img src={ImagePath("anandhalakshmi.png")} alt="" />
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
                    <h2 className='dept-head'>Electrical and Electronics <span className='span-class'>Engineering</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("Mahesh.jpg")} alt="" />
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
                                <img src={ImagePath("subramani.jpg")} alt="" />
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
                    <h2 className='dept-head'>Electronics and Instrumentation <span className='span-class'>Engineering</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("sindhanaiselvi.jpg")} alt="" />
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
                    <h2 className='dept-head'>Mechanical <span className='span-class'>Engineering</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("Rathinam.jpg")} alt="" />
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
                                <img src={ImagePath("vprabakaran.jpg")} alt="" />
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
                    <h2 className='dept-head'>Chemical <span className='span-class'>Engineering</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath("Pallavhee_chem.jpg")} alt="" />
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
                                <img src={ImagePath("usha.png")} alt="" />
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
                    <h2 className='dept-head'>Mechatronics <span className='span-class'>Engineering</span></h2>
                    <div className="staffs">
                        <div className="staff">
                            <div className="staff-img">
                                <img src={ImagePath(".jpg")} alt="" />
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