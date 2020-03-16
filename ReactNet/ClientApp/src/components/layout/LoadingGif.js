import React, { Component } from 'react';

export class LoadingGif extends Component {
    render() {
        return (
            <img src="/images/icons/loading.gif"
                style={{ position: "fixed", top: (window.innerHeight / 2) - 300, left: (window.innerWidth / 2) - 250, zIndex: 3 }} 
            alt="loading" />
        );
    }
}