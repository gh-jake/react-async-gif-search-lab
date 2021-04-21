import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    Enter a Search Term: 
                    <br></br>
                    <input type='text' name='name' onChange={this.props.handleChange}/>
                </label>
                <br></br>
                <button onClick={this.props.handleSubmit}>Find Gifs</button>
            </form>
        )
    }
}
