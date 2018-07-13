import React from 'react';


const RapperCard = props => (
    <section className="tc pa2">
        <article className="hide-child relative ba b--black-20 center">
            <img 
                src={props.src} 
                width="200" 
                height="150" 
                alt="" 
                onClick={() => props.isClicked(props.id)}/>
        </article>
    </section>
)




export default RapperCard;