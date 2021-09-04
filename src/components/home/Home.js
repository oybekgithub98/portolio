import React from 'react';
import Figure1 from '../animation/figure1/Figure1';
import Figure2 from '../animation/figure2/Figure2';
import TypingEffect from 'new-react-typing-effect';
import homeImage from '../../assets/f934535398f235346dbe6466790a913f.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home_wrapper">
                <Figure1 />
                <div className="home_body">
                    <div className="home_body_content">
                        <p>I am</p>
                        <p>Soginboyev Oybek</p>
                        <div className="home_typing">
                            <p>I'm a

                            </p>
                            <span>
                                <TypingEffect
                                    messages={
                                        [
                                            "Developer",
                                            "Designer",
                                            "Freelancer"
                                        ]
                                    }
                                    cursor="|"
                                    textRenderer={(text, renderedCursor, atIndex) => {
                                        return (
                                            atIndex % 2 === 0 ?
                                                <h2 style={{ color: 'coral' }}>{text}{renderedCursor}</h2> :
                                                <h2 style={{ color: 'coral' }}>{text}{renderedCursor}</h2>
                                        );
                                    }}
                                    cursorRenderer={(cursor) => (
                                        <span style={{ color: 'red' }}>{cursor}</span>
                                    )}
                                    options={{
                                        text: {
                                            charactersPerSecond: 7,
                                            fullTextDelayMS: 2000,
                                            cursorColor: "red",
                                        },
                                    }}
                                />
                            </span>
                        </div>

                        <div className="home_button">
                            <button>More About Me</button>
                            <button>Portfolio</button>
                        </div>

                        <div className="figure2">
                            <Figure2 />
                        </div>
                        
                    </div>
                    <div className="home_body_image">
                        <div className="item_image">
                            <img src={homeImage} alt="" />
                        </div>
                        <div className="kub">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
