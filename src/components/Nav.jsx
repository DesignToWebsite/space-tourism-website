import React from "react";
export default function Nav({nav, navMenu, navItem, activeLink}) {

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#">
                    <img src="./assets/shared/logo.svg" alt="logo"/>
                </a>
                <div className="line"></div>
            </div>
            <div className={`menu_icon`} onClick={navMenu}>
                <img src={`./assets/shared/icon-hamburger.svg`} alt="menu icon"/>
            </div>
            
            <div className={`menu_item ${nav.show}`}>
                <ul>
                    <div className={`menu_icon`} onClick={navMenu}>
                        <img src={`./assets/shared/icon-close.svg`} alt="menu icon"/>
                    </div>
                    {
                        navItem.map(item=>{
                            return(
                            <li  className={`${item.active ? 'active' : ''}`} onClick={activeLink}  key={item.id}>
                                <a onClick={nav.nav ==='close' ? navMenu : null} className={item.id} href="#">
                                    <span className={item.id}>0{item.id} </span>{item.item}
                                </a>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}