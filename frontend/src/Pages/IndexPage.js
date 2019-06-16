import React, { Component } from 'react'
import {Hero} from '../Components/Global/Hero'
import { Nav } from '../Components/Global/Nav'

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
            </div>
        )
    }
}

