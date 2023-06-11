import React from "react";

export default function Home({navItem, activeLink}){
    return(
        <div className="home">
            <div className="content" data-aos="fade-right" data-aos-duration="3000">
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h1>SPACE</h1>
                <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div   onClick={activeLink} className="2" id="explore">
                <div data-aos="fade-left" data-aos-duration="3000" className="parg">
                    <p>EXPLORE</p>
                </div>
            </div>
        
        </div>
    )
}