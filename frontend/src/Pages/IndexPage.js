import React, { Component, Fragment } from 'react'
import store from '../store/store'
import { fetchBeers } from "../store/actions/actions";
import { connect } from "react-redux";


import { FeaturedBeers} from '../Components/FeaturedBeers'

class IndexPage extends Component {
    
    componentDidMount(){
        this.props.fetchBeers()

        
    }
    render() {
        console.log("State in Store", store.getState().beerState)
        console.log(this.props.beers)
        
        return (
            <Fragment>
                <FeaturedBeers/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state
    }
}
export default connect(mapStateToProps,{fetchBeers})(IndexPage)
