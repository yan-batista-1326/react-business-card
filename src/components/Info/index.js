import React from 'react';

import profile from '../../images/raiden.jpg'

export default function Info() {
    return(
        <div className='infoContainer'>
            <img src={profile} alt="profile" className='infoContainer--photo'></img>

            <div className='profileContainer'>
                <div className='profileContainer--name'>
                    <h1>Yan Batista</h1>
                    <h3>Frontend Developer</h3>
                    <p>yanbatista.website</p>
                </div>

                <div className='profileContainer--buttons'>
                    <button className='btn emailButton'><i class="fa-solid fa-envelope"></i> Email</button>
                    <button className='btn linkedInButton'><i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/yan-batista-de-souza-barreto/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                </div>
            </div>
        </div>
    );
}