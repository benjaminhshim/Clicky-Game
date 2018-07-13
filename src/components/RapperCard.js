import React from 'react';
import rappers from '../rappers.json';

class RapperCard extends React.Component {
    state = {
        clicked: rappers.clicked
    }

    isClicked = () => {
        this.setState({
            clicked: true
        })
    }

    render() {
        return (
            <section className="tc pa2">
                <article className="hide-child relative ba b--black-20 center">
                    <img src={this.props.src} width="200" height="150" alt="" onClick={this.isClicked}/>
                </article>
            </section>
        )
    }
}



export default RapperCard;