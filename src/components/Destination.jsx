import React, { useState } from "react";
import destination from "../data/destination";
export default function Destination() {    
    const [dest, setDest] = useState(destination)
    function activeDest(event) {
        const item_id = event.target.className;
        if (item_id > 0 && item_id <= dest.length)
            setDest(prev => {
                return prev.map(item => {
                    if (parseInt(item.id) === parseInt(item_id)) {
                        return { ...item, active: true };
                    } else {
                        return { ...item, active: false };
                    }
                });
            });
    }
    console.log(dest)
    return (
        <div className="destination explore">
            <h3> <span>01</span> Pick your destination</h3>
            <div className="dest">
                <div  className="img">
                    {dest.map(item => {
                        if(item.active)
                            return(<img  data-aos="slide-right" data-aos-duration="2000" src={item.images.png} alt={item.name} />)
                        else
                            return null;
                    })}
                </div>
                <div className="content">
                    <div className="nav_dest">
                        <ul>
                            {
                                dest.map(item => {
                                    return (
                                        <li
                                            className={`${item.id} ${item.active ? 'active' : ''}`}
                                            onClick={activeDest}>
                                            {item.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {dest.map(item => {
                        if (item.active) {
                            return (
                                <div data-aos="slide-left" data-aos-duration="2000" className="item">
                                    <h1>{item.name}</h1>
                                    <p>{item.description} </p>
                                    <hr />
                                    <div className="info">
                                        <div className="group">
                                            <h4>AVG. DISTANCE</h4>
                                            <h2>{item.distance}</h2>
                                        </div>
                                        <div className="group">
                                            <h4>Est. travel time</h4>
                                            <h2>{item.travel}</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else
                            return null;
                    })}
                </div>
            </div>
        </div>

    )
}