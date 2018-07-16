import React from 'react';
import './RapperCard.css';


import Radium, {StyleRoot} from 'radium';
import { flipInX } from 'react-animations';

const RapperCard = props => (
    <section className="tc">
        <article className="hide-child relative b--black-20 center">
            <StyleRoot>
                <img 
                    className="rapper-card"
                    src={props.src} 
                    width="250" 
                    height="175" 
                    alt="" 
                    onClick={() => {props.isClicked(props.id)}}
                    style={styles.flipInX}
                />
            </StyleRoot>
        </article>
    </section>
)

const styles = {
    flipInX: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    }
  }
  

export default RapperCard;

