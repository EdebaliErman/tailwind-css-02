import React from 'react'
import { BsFire } from 'react-icons/bs';
import { IoIosWater } from 'react-icons/io';
import { GiFallingRocks } from 'react-icons/gi';
import { TiWeatherWindy } from 'react-icons/ti';
import { MdElectricBolt } from 'react-icons/md';

function Navbar({ head }) {

    return (
        <div className='navbar'>
            <SideBarIcon
                head={head}
                color={"hover:bg-fire"}
                text={"Fire"}
                info={<IconVideo img={"https://media.tenor.com/q_KPruJ5GtYAAAAi/fire.gif"} />}
                icon={<BsFire size={32} />} />
            <SideBarIcon
                head={head}
                color={"hover:bg-water"}
                text={"Water"}
                info={<IconVideo img={"https://i.giphy.com/media/dv1YqjQEMHwCD3J9b6/giphy.webp"} />}
                icon={<IoIosWater size={32} />} />
            <SideBarIcon
                head={head}
                color={"hover:bg-rock"}
                text={"Soil"}
                info={<IconVideo img={"https://i.gifer.com/o8G.gif"} />}
                icon={<GiFallingRocks size={32} />} />
            <SideBarIcon
                head={head}
                color={"hover:bg-air"}
                text={"Air"}
                info={<IconVideo img={"https://i.gifer.com/yy3.gif"} />}
                icon={<TiWeatherWindy size={32} />} />
            <SideBarIcon
                head={head} 
                text={"Lightening"}
                color={'hover:bg-electrick'}
                info={<IconVideo img={"https://i.gifer.com/4s2J.gif"} />}
                icon={<MdElectricBolt size={32} />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text, head, info, color }) => {

    return (
        <div className={`sidebar-icon group ${color}`} onClick={() => head(info)} >
            {icon}
            <span className={`sidebar-tooltip ${color} group-hover:scale-100`}>{text}</span>
        </div>)
}

const IconVideo = ({ img }) => {
    return <img className='duration-800 animate-pulse ease-in-out' src={img} alt={img} />
}
export default Navbar
