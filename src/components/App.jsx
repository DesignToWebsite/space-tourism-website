import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import '../style/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

function App() {

    //menu for small screen
    const [nav, setNav] = React.useState({
        nav: 'hamburger',
        show: ''
    })
    //active links
    const [navItem, setNavItem] = React.useState([
        {
            item: 'home',
            active: true,
            id: 1
        },
        {
            item: 'destination',
            active: false,
            id: 2
        },
        {
            item: 'crew',
            active: false,
            id: 3
        },
        {
            item: 'technology',
            active: false,
            id: 4
        }
    ])
    function navMenu() {
        setNav(prev => prev.nav === 'hamburger' ?
            { nav: 'close', show: 'show' } : { nav: 'hamburger', show: '' }
        )
    }

    function activeLink(e) {
        const item_id = e.target.className;
        console.log(item_id)
        if(item_id>0 && item_id<5)
            setNavItem(prev => {
                return prev.map(item => {
                    if (item.id === parseInt(item_id)) {
                        return { ...item, active: true };
                    } else {
                        return { ...item, active: false };
                    }
                });
            });
    }

    let page = 'home';
    if (navItem[0].active) {
        page = 'home'
    } else if (navItem[1].active) {
        page = 'destination'
    } else if (navItem[2].active) {
        page = 'crew'
    } else if (navItem[3].active) {
        page = 'technology'
    }


    return (
        <div className={`app ${page}`} >
            <Nav nav={nav} navMenu={navMenu} navItem={navItem} activeLink={activeLink} />
            {navItem[0].active && <Home navItem={navItem} activeLink={activeLink}/>}
            {navItem[1].active && <Destination />}
            {navItem[2].active && <Crew />}
            {navItem[3].active && <Technology />}
        </div>
    );
}

export default App;
