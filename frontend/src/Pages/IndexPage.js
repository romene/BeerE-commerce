import React, { Component, Fragment } from 'react'



import { FeaturedBeers} from '../Components/FeaturedBeers'

export default class IndexPage extends Component {
    render() {
        return (
            <Fragment>
                <FeaturedBeers/>
            </Fragment>
        )
    }
}

