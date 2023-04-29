
import React, { useState } from "react";
import crews from '../data/crew';

export default function Crew() {
    const [crew, setCrew] = useState(crews)
    function activeCrew(event) {
        const item_id = event.target.className;
        if (item_id > 0 && item_id <= crew.length)
            setCrew(prev => {
                return prev.map(item => {
                    if (parseInt(item.id) === parseInt(item_id)) {
                        return { ...item, active: true };
                    } else {
                        return { ...item, active: false };
                    }
                });
            });
    }
    return (
        <div className="crew explore">
            <h3> <span>02</span> Meet your crew</h3>
            <div className="dest">
                <div className="content">
                    {crew.map(item => {
                        if (item.active) {
                            return (
                                <div data-aos="slide-left" data-aos-duration="2000" className="item" key={item.id}>
                                    <h2>{item.role}</h2>
                                    <h1>{item.name}</h1>
                                    <p>{item.bio}</p>
                                </div>
                            )
                        }
                        else
                            return null;
                    })}
                    <div className="nav_dest">
                        <ul>
                            {
                                crew.map(item => {
                                    return (
                                        <li
                                            className={`${item.id} ${item.active ? 'active' : ''}`}
                                            onClick={activeCrew}>
                                            
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="img">
                    {crew.map(item => {
                        if(item.active)
                            return(<img data-aos="slide-left" data-aos-duration="2000" key={item.id} src={item.images.png} alt={item.name} />)
                        else
                            return null;
                    })}
                </div>
            </div>
        </div>

    )
}