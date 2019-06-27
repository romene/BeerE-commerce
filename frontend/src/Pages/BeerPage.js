import React, { Fragment } from 'react'
import FormBeers from '../Components/Form_Beers'
import BeerItem from '../Components/BeerItem'
import NoProducts from '../Components/Noproducts'
import { addBeer, updateBeer, deleteBeer} from '../store/actions/actions'
import {connect} from 'react-redux'

const BeerPage = (props) => {
    const { beers } = props 
    return (
        <Fragment>
           <div className="container mb-5">
                {props.beers.length === 0 || props.beers === undefined || null ? <NoProducts /> : <BeerItem beers={beers} onDeleteBeer={props.onDeleteBeer} /> }
                
           </div>
            <FormBeers onAddBeer={props.onAddBeer} onDeleteBeer={props.onDeleteBeer}/>
        </Fragment>
    )
}

const mapStateToProps = state => {
    
return {
    beers: state.beerState.beers
} 
}

const mapDispatchToProps = dispatch => {
    return {
        onAddBeer(beer) {dispatch(addBeer(beer))},
        onDeleteBeer(beer) {dispatch(deleteBeer(beer))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerPage)






