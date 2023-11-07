import React, { useEffect } from 'react'
import "./CompanySlider.css"


const Announcement = () => {

    useEffect(() => {
        const copy = document.querySelector('.logos-slide').cloneNode(true);

        document.querySelector('.logos').appendChild(copy);
    }, []);

    return (
        <div className="container">
            <h1 className='pastRecruiters'></h1>
            <div className="logos">

                <div id="logos-slide" className="logos-slide" >
                    <div className="info">
                        <p className="head">
                            Announcement on Campus Placement Drive
                            Name of the Company: Mbit Wireless
                            CTC: 7.5 LPA
                            Date: July 13 and 14
                            Eligible Branches: CSE, ECE, IT, EEE, EIE and MECHATRONICS.
                            Professor and T&P Officer
                        </p>
                        <h4>https://docs.google.com/forms/d/1B1xx4Vt93jl38FW639SRq0eoc36mblMaDzPQwpBRUJU/edit</h4>
                    </div>
                    <div className="info">
                        <p className="head">
                            Announcement on Campus Placement Drive
                            Name of the Company: Mbit Wireless
                            CTC: 7.5 LPA
                            Date: July 13 and 14
                            Eligible Branches: CSE, ECE, IT, EEE, EIE and MECHATRONICS.
                            Professor and T&P Officer
                        </p>
                        <h4>https://docs.google.com/forms/d/1B1xx4Vt93jl38FW639SRq0eoc36mblMaDzPQwpBRUJU/edit</h4>
                    </div>
                    <div className="info">
                        <p className="head">
                            Announcement on Campus Placement Drive
                            Name of the Company: Mbit Wireless
                            CTC: 7.5 LPA
                            Date: July 13 and 14
                            Eligible Branches: CSE, ECE, IT, EEE, EIE and MECHATRONICS.
                            Professor and T&P Officer
                        </p>
                        <h4>https://docs.google.com/forms/d/1B1xx4Vt93jl38FW639SRq0eoc36mblMaDzPQwpBRUJU/edit</h4>
                    </div>
                </div>
            </div></div>

    )
}

export default Announcement