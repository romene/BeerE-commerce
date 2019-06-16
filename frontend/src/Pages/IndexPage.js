import React, { Component } from 'react'


import {Hero} from '../Components/Global/Hero'
import {NavBar} from '../Components/Global/Nav'
import { FeaturedBeers} from '../Components/FeaturedBeers'

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <FeaturedBeers/>
            </div>
        )
    }
}

