import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UsersItem=(props)=> {
   
    
        const { login , avatar_url}=props.user;
        return (
            <div className="card text-center">
                <img className="round-img" src={avatar_url} alt="Avatar" style={{width:'60px'}}/>
                <h3>{login}</h3>
                <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
               
            </div>
            
        )
    
}
UsersItem.prototype={
user:PropTypes.object.isRequired,
}

export default UsersItem
