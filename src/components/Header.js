import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="dt w-100 border-box pa3 ph5-ns">
                    <p>
                        Clicky Game
                    </p>
                    <div className="dtc v-mid w-75 tr">
                        <a className="dark-gray f6 f5-ns dib mr3 mr4-ns">Score: {this.props.score}</a>
                        <a className="dark-gray f6 f5-ns dib mr3 mr4-ns">Top Score: {this.props.topScore}</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;