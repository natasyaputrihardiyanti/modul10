import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function CardProduct({product, refresh}){
  function deleteProduct(){
          swal({
              title: "Are you sure?",
              text: "Once deleted, data ("  + product.product_name + ") will not be able to recover!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
          })
          .then(async (willDelete) => {
          if (willDelete) {
              swal("data (" + product.product_name + ") has been deleted!", {icon: "success",});
                  
              await axios.delete("http://localhost/reactapi/deleteProduct.php?id=" + product.product_id)

              return refresh()
          } else {
              swal("data (" + product.product_name + ") is safe!");
          }
          }); }

    return(
        <tr>
            <th scope="row">{product.product_id}</th>
            <th scope="row">{product.product_name}</th>
            <th scope="row">{product.product_price}</th>
            <th>
            <Link className="btn btn-outline-info" to={'/editProduct/' + product.product_id}>Edit</Link>
            <button type="button" class="btn btn-outline-danger" onClick={deleteProduct}>Hapus</button>

            </th>
        </tr>
    )
}

export default CardProduct
