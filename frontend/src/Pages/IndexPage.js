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
        console.log(this.props.beers)
        console.log("State in Store", store.getState())
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
