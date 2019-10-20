import React, { Component } from 'react';
import {
    Content, Box, Container, Notification,
    Pagination, PageList, Progress} from 'bloomer';
import './Home.scss';
import axios from 'axios';
import Slider from "react-slick";
import { PRODUCTS_URL } from './../../constants/index';
import Product from '../children/product/Product';

class Home extends Component {

    state = {
        items: []
    }

    componentDidMount() {

        axios.get(PRODUCTS_URL).then(res => {
            
            this.setState({
                items: res.data.data
            });
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        const products = this.state.items.map(product => {
            return <Product key={product.id} isNotPromo={true}
                id={product.id}
                name={product.name}
                price={product.price}
                packaging={product.packaging}
                quantity={product.quantity}
            />
        });

        const promoProducts = this.state.items.map((product, index) => {

            //only promote the first 11 items
            return index <= 10 ? <Product key={product.id}
                id={product.id}
                name={product.name}
                product={product}
                price={product.price}
                packaging={product.packaging}
                quantity={product.quantity} /> : null
        }); 

        return (
            <div className='children-content'>
                <Container className='pb'>
                    <Notification className='promotion-notification' isColor='success'>Today's Special <strong>65%</strong> remaining.</Notification>
                    <Progress isSize='small' isColor='success' value={65} max={100} />
                </Container>

                <Slider {...settings}>
                    {promoProducts}
                </Slider>
                <br /><br />
                <Content className='mx-default'>
                    <p className='text-left stock-in-store' tag='h4'>Available in store:</p>
                </Content>

                <Box className='mx-default'>
                    {/* <PageControl>Previous</PageControl>
                    <PageControl isNext>Next</PageControl> */}
                    <Pagination isAlign='centered'>
                        <PageList>
                            {products}
                        </PageList>
                    </Pagination>
                </Box>
            </div>
        )
    }
};

export default Home;