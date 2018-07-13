import React from 'react';

class RapperCard extends React.Component {
    render() {
        return (
            <section className="tc pa2">
                <article className="hide-child relative ba b--black-20 center">
                    <img src={this.props.src} width="200" height="150"/>
                </article>
            </section>
        )
    }
}

export default RapperCard;