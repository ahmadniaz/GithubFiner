import React, {useContext} from 'react'
import UsersItem from './UsersItem'
import Spinner from '../layout/Spinner'

import GithubContext from '../../context/github/githubContext'


 const Users =()=>{
      const githubContext= useContext(GithubContext);

      const {loading, users}= githubContext;
      if(loading){
            return <Spinner/>
        }
        else{
            return (

               
            <div style={userStyles}>
                {users.map(users=>(
                 <UsersItem key={users.id} user={users}/>
                ))}
            </div>
        );
        }
        
    
}

const userStyles={
    display: 'grid',
    gridTemplateColumns: 'repeat( 3, 1fr)',
    gridGap: '1rem'
};
export default Users;

