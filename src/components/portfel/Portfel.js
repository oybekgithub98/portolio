import React from 'react';
import classes from './Portfel.module.css';
import NamImage from '../../assets/namangan.jpg';
import Calc from '../../assets/calc.jpg';
import Quran from '../../assets/quron-audios.png';
import City from '../../assets/city.jpg';
import TelegramImage from '../../assets/telegramImage.jpg';
import WhatsappImage from '../../assets/whatsappImage.jpg';
import { FaGithub } from 'react-icons/fa';


const Portfel = () => {
    return (
        <div className={classes.portfolio}>
            <h3>My Portfolio</h3>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card2}>
                    <img src={TelegramImage} alt="" />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, CSS, BOOTSTRAP and JAVASCRIPT</h4>
                        <button>View Project</button>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card2}>
                    <img src={WhatsappImage} alt="" />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and BOOTSTRAP, React JS</h4>
                        <button>View Project</button>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className={classes.portfolio_card2}>
                    <img src={Quran} alt="" />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML SCSS and React JS</h4>
                        <button>View Project</button>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.portfolio_box}>
                <div className={classes.portfolio_card1}>
                    <img src={City} alt="" />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML and CSS</h4>
                        <button>View Project</button>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={NamImage} alt="" />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML and CSS, React JS</h4>
                        <button>View Project</button>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.portfolio_card1}>
                    <img src={Calc} alt="" />
                    <div className={classes.card_overlay}>
                        <h4>This project was built using HTML, SCSS and JAVASCRIPT</h4>
                        <button>View Project</button>
                        <div className={classes.card_overlay_item}>
                            <a href="https://github.com/oybekgithub98/reactportfolio/tree/main/src/components/home">
                                <span>Github code</span>
                                <FaGithub style={{ fontSize: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfel;