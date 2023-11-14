import { deleteApiCall, getApiCall, postApiCall, putApiCall } from 'gfdu'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  const[data,setData]=useState([]);
    useEffect(()=>{
        getList();
    },[])
    const getList = () =>{
        getApiCall(`users?page=2`,(response)=>{
          setData(response.data)
            console.log("response",response.data);
          })
    }
    
    const deleteRecord = (id) => {
      deleteApiCall(`users${id}`,{},(response) => {
        
        console.log(response);
      })
    };

    
  return (
    <div>
      <h1>Api Table</h1>
      <button><Link to="/addrecord">Add+</Link></button>
      <div className="apitable">
        <table className="container w-100">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img src={item.avatar}/>
                </td>
                <td>
                  <Link to={`/viewrecord/${item.id}`}>View</Link>
                </td>
                <td>
                  <Link to={`/editrecord/${item.id}`}>Edit</Link>
                </td>
                <td>
                  <Link onClick={() => deleteRecord(item.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
            }

export default Home;
