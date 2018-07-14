import React from 'react';
import './Header.css';

import Radium, {StyleRoot} from 'radium';
import { flash, tada } from 'react-animations';

class Header extends React.Component {

    render() {
        return (
            <div style={styles}>
                <header className="tc pv4-ns">

                {this.props.title === 'TRY AGAIN' ? 
                        <StyleRoot>
                            <h1 className=" b--black-10 xxl-title" style={styles.flash}>
                                {this.props.title}
                            </h1>
                        </StyleRoot>
                    :
                        <h1 className=" b--black-10 xxl-title">
                            {this.props.title}
                        </h1>
                }
                
                    <h1 className="f5 f4-ns fw6 white score">Score: {this.props.score}</h1>
                {this.props.newHighScore ?
                    <StyleRoot>
                        <h2 className="f6 white fw2 ttu tracked top-score"
                            style={styles.tada}>
                            Score To Beat: {this.props.topScore}
                        </h2>
                    </StyleRoot>
                :
                    <h2 className="f6 white fw2 ttu tracked top-score">Score To Beat: {this.props.topScore}</h2>
                }
                </header>
            </div>
        )
    }
}

const styles = {
    fontFamily: 'Futura',
    flash: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flash, 'flash')
    },
    tada: {
        animation: 'x 1s',
        animationName: Radium.keyframes(tada, 'tada')
    }
}
  

export default Header;