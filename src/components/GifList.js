import React, { Component } from 'react'

export default class GifList extends Component {
    displayGifs = () => {
        this.props.gifs.forEach(gif => {
            return (
            <li>
                {gif.data.images.url}
            </li>
            )
        })
    }
    
    render() {
        console.log(this.props.gifs)
        return (
            <ul>
                {this.props.gifs.map(gif => <img src={gif.images.original.url}/>)}
            </ul>
        )
    }
}
