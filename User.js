import React, {Component} from 'react';
import axios from 'axios'
import CardUser from './CardUser'
import {Link} from 'react-router-dom'

class User extends React.Component{

  constructor(){
    super()
    this.state = {
        user : []
    }
}

componentDidMount=async()=>{
    await axios.get("http://localhost/reactapi/user.php")
    .then(response=>this.setState({
        user: response.data
    }))
    console.log(this.state)
}
    render() {
      const renderData = this.state.user.map(user=>{
        return (
            <CardUser user={user} key={user.id} refresh ={this.componentDidMount}/>
        )
    })
        return(
            <div className="container">
            <h2>User</h2>
            <Link className="btn btn-outline-success" to={'/Form'}>Tambah User</Link>
            <table class="table table-light">
                <thead>
                    <tr class="table-success">
                    <th></th>
                    <th>Id</th>
                    <th></th>
                    <th >Nama</th>
                    <th></th>
                    <th >Alamat</th>
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
export default User;
