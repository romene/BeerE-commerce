import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const BeerItem = (props) => {

    return (
        <div className="row">
                {props.beers.map((beer) => {
                    return <div key={beer.id} className="col-md-4">
                     <Card>
                            <CardImg top width="100%" src={beer.image_url} className="py-2 img-beer" alt={beer.name} />
                        <CardBody>
                            <CardTitle>{beer.name}</CardTitle>
                            <CardSubtitle>{beer.tagline}</CardSubtitle>
                                <Button color="danger" onClick={() => props.onDeleteBeer(beer.id)}>Delete</Button>
                                <Button color="primary">Update</Button>
                        </CardBody>
                    </Card>
            </div>
                })}
        </div>
    );
};

export default BeerItem;