import React, { Component } from 'react'

export class FooterBar extends Component {
    render() {
        return (
            <footer style={footerStyle}>
                <a>© 2019 Where have been to</a>
            </footer>
        );
    }
}

const footerStyle = {
    textAlign: 'center',
    padding: '10px',
    width: '100%',
    position: 'fixed',
    bottom: '0px'
}

export default FooterBar
