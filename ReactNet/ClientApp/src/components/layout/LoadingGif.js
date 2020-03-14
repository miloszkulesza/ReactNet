import React, { Component } from 'react';

export class LoadingGif extends Component {
    render() {
        return (
            <img src="/images/icons/loading.gif" style={{ position: "fixed", top: (window.screen.height / 2) - 300, left: (window.screen.width / 2) - 250, zIndex: 3 }} />
        );
    }
}