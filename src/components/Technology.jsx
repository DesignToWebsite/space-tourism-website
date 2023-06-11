import React, { useState } from "react";
import technology from '../data/technology';

export default function Technology() {
    const [tech, setTech] = useState(technology)
    function activeCrew(event) {
        const item_id = event.target.className;
        if (item_id > 0 && item_id <= tech.length)
            setTech(prev => {
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
        <div className="tech explore">
            <h3> <span>03</span> SPACE LAUNCH 101</h3>
            <div className="dest">
                <div className="content">
                    {tech.map(item => {
                        if (item.active) {
                            return (
                                <div data-aos="slide-up" data-aos-duration="3000" className="item">
                                    <h2>THE TERMINOLOGY…</h2>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                        else
                            return null;
                    })}
                    <div className="nav_dest">
                        <ul>
                            {
                                tech.map(item => {
                                    return (
                                        <li
                                            className={`${item.id} ${item.active ? 'active' : ''}`}
                                            onClick={activeCrew}>
                                            {item.id}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="img">
                    {tech.map(item => {
                        if(item.active)
                            return(<img data-aos="slide-up" data-aos-duration="3000" src={item.images.portrait} alt={item.name} />)
                        else
                            return null;
                    })}
                </div>
            </div>
        </div>

    )
}