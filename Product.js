import React, {Component} from 'react';
import axios from 'axios'
import CardProduct from './CardProduct'
import {Link} from 'react-router-dom'


class Product extends React.Component{

  constructor(){
    super()
    this.state = {
        product : []
    }
}

 componentDidMount=async()=>{
    await axios.get("http://localhost/reactapi/product.php")
    .then(response=>this.setState({
        product: response.data
    }))
    console.log(this.state)
}
    render() {
      const renderData = this.state.product.map(product=>{
        return (
            <CardProduct product={product} key={product.product_id}/>
        )
    })
        return(
            <div className="container">
            <h2>Product</h2>
            <Link className="btn btn-outline-success" to={'/AddProduct'}>Tambah Product</Link>

            <table class="table table-light">
                <thead>
                    <tr class="table-success">
                    <th></th>
                    <th>Id</th>
                    <th></th>
                    <th >Product Name</th>
                    <th></th>
                    <th >Price</th>
                    <th >Option</th>

                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </table>
        </div>
        );
    }
}
export default Product;
