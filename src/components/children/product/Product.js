import React, { useState } from 'react';
import './Product.scss';
import {
    Card, CardContent,
    Image, Media, MediaContent, Subtitle,
    MediaLeft, Title, MediaRight
} from 'bloomer';
import { PRODUCT_IMAGE } from '../../../constants/index';
import { withRouter } from 'react-router';

const Product = (props) => {

    const [productState, setproductState] = useState({
        ...props,
        image: PRODUCT_IMAGE + props.name.toLowerCase().replace(' ', '') + '.jpg'
    });

    const previewhandler = () => {

        console.log('props pushing ', productState);
        
        const { history } = props;
        
        history.push({
            pathname: '/product',
            search: '?pid='+props.id,
            state: { 
                    name: productState.name,
                    price: productState.price,
                    image: productState.image,
                    quantity: productState.quantity
                }
          });
    }

    const nodata = '***';
    const fireTrucked = productState.name.length > 10 ? productState.name.slice(0, 8) : productState.name;
    return (
        <div className=''>
            <div className='promo-product'>
                <Card onClick={previewhandler}>
                    <CardContent>
                        <Media>
                            <MediaLeft>
                                <Image isSize='48x48' src={productState.image} alt='item' />
                            </MediaLeft>
                            <MediaContent>
                                <Title isSize={4}>{fireTrucked}</Title>
                                <Subtitle isSize={6}>{props.price} <span className='price'>ZAR</span></Subtitle>
                            </MediaContent>
                            <MediaRight>
                                <p className='price' tag='h6'> {props.packaging ? props.packaging : nodata}</p>
                            </MediaRight>
                        </Media>
                        {productState.isNotPromo &&
                            <Media >
                                <MediaRight>
                                    <p className='price' tag='h6'><strong>Price: </strong> { productState.price }<span className='price'> ZAR</span></p>
                                </MediaRight>
                                <MediaRight>
                                    <p className='price' tag='h6'><strong>Quantity: </strong> { productState.quantity }</p>
                                </MediaRight>
                            </Media>
                        }
                        {!productState.isNotPromo &&<Subtitle isSize={6}> only {props.quantity} left </Subtitle>}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export default withRouter(Product);