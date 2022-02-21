import React from 'react';
import {Link} from 'react-router-dom';

import DisplayTable from './DisplayTable';
import DateRange from '../DateRange';

const CampaignCreate = () => {
   //import React, { Fragment, useState } from "react";
  const [data, setData] = React.useState();

  const handleSave = (event) =>{
     console.log(data);
     event.preventDefault();
  }
  
  const handleChange = (event) =>{
     //console.log(event.target.name, event.target.value);
     setData({
        ...data,
        [event.target.name]: event.target.value
     })
  }
  
    
  return (
     <div>
   <div className="bg-light">
       <h4>Create campaign</h4>
    <div className="wrapper">
        <form onSubmit={handleSave}>
        <div className="title">
          Campaign details
        </div>
        <div className="form">
            
           <div className="col-lg-3">
              <label>Campaign Name</label>
              <input 
              type="text" 
              className="form-control"
              name="campname"
              onChange={handleChange}
              />
              
           </div>  
            <div className="col-lg-6">
              <label>Ads category</label>
              <input 
              type="text" 
              className="form-control"
              name="category"
              onChange={handleChange}
              />
           </div>  
           <div className="col-lg-6">
              <label>Budget</label>
              <input 
              type="currency" 
              className="input"
              name="budget"
              onChange={handleChange}
              />
           </div>  
          
           <div className="date">
              <DateRange />
           </div>
           
           <div class="main2">
              <ul><li><Link to="/creative">Create creative</Link></li></ul>            
           </div>
    
            <div className="table-container">
               <DisplayTable />
            </div>
            <div class="main2">
            <Link to="/campcrea" role="button" type="submit" class="btn btn-primary">Save</Link> 
           </div>
           
        
        </div>
        </form>   
    </div>
    </div>
    </div>	
  );

}

export default CampaignCreate;
