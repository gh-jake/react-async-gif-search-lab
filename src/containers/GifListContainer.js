import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const BASE_URL = 'https://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=Wd7JKY8yH0Yr389zyghauxLWb8g6FmeR&rating=g'

export default class GifListContainer extends Component {

    constructor() {
        super();

        this.state = {
            gifInput: '' ,
            gifArray: []
        }
    }

    handleChange = (event) => {
        this.setState({
            gifInput: event.target.value
        })
        // console.log(this.state.gifInput)
    }

    handleSubmit = (event) => {
        //query API with user's input
        event.preventDefault();
        // console.log(this.state.gifInput);
        fetch(BASE_URL + `${this.state.gifInput}` + API_KEY)
        .then(res => res.json())
        .then(response => {
            // return gifArray;
            // console.log('gifs', gifArray)
            this.setState({
                ...this.state,
                gifArray: [response.data[0], response.data[1], response.data[2]]
            })
            console.log(this.state)
        })
        .catch(error => alert("Error: " + error))
    }
    
    render() {
        return (
            <div>
                < GifList gifs={this.state.gifArray}/>
                < GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </div>
        )
    }
}
