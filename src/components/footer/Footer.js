import React, { useState } from 'react';
import classes from './Footer.module.css';
import { FaTelegram, FaWhatsapp, FaHome, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const [buttonOpen, setButtonOpen] = useState(false);

    // clock function
    let time = new Date().toLocaleString();
    const [cdata, setCdata] = useState(time);
    console.log(cdata)

    const UpDataTime = () => {

        time = new Date().toLocaleTimeString();
        setCdata(time)
    }

    setInterval(UpDataTime, 1000);


    // OpenButton function
    // const OpenButton = (e) => {
    //     const open_icons = document.querySelector('.fahome1');

    //     if (buttonOpen) {
    //         open_icons.classList.add('activeButton')
    //         setButtonOpen(false);
    //     } 
    // }

    return (
        <div className={classes.footer}>
            <div className={classes.footer_wrapper}>
                <div className={classes.icon_group}>
                    <a href="https://xn--80affa3aj0al.xn--80asehdb/#/login">
                        <FaTelegram style={{ fontSize: "35px" }} className={classes.teleg} />
                    </a>
                    <a href="https://web.whatsapp.com/">
                        <FaWhatsapp style={{ fontSize: "35px" }} className={classes.what} />
                    </a>
                    <a href="https://www.instagram.com/?hl=ru">
                        <FaInstagram style={{ fontSize: "35px" }} className={classes.instag} />
                    </a>
                    <a href="https://www.instagram.com/?hl=ru">
                        <FaTwitter style={{ fontSize: "35px" }} className={classes.twit} />
                    </a>
                </div>
                <div className={classes.copy_right}>
                    <h3>{time}</h3>
                </div>
                {/* <div className={classes.open_button}>
                    <div className={classes.fa_home} onClick={OpenButton} ><FaHome style={{ fontSize: "40px" }} /></div>
                    <div className={classes.open_icons}>
                        <FaHome className={classes.fahome1} />
                        <FaHome className={classes.fahome2} />
                        <FaHome className={classes.fahome3} />
                        <FaHome className={classes.fahome4} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
