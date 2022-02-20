import React from 'react';
import {Link} from 'react-router-dom';

import DisplayTable from './DisplayTable';
import DateRange from '../DateRange';

function CampaignCreate() {
  
    
  return (
     <div>
   <div className="bg-light">
       <h4>Create campaign</h4>
    <div className="wrapper">
        
        <div className="title">
          Campaign details
        </div>
        <div className="form">
            
           <div className="col-lg-3">
              <label>Campaign Name</label>
              <input type="text" className="input"/>
           </div>  
            <div className="col-lg-6">
              <label>Ads category</label>
              <input type="text" className="input"/>
           </div>  
           <div className="col-lg-6">
              <label>Budget</label>
              <input type="currency" className="input"/>
           </div>  
          
           <div className="date">
              <DateRange />
           </div>
           
           <div class="main2">
              <ul><li><Link to="/creative">Add Advertisment</Link></li></ul>            
           </div>
    
            <div className="table-container">
               <DisplayTable />
            </div>
            <div class="main2">
              <ul><li><Link to="/campcrea">Save</Link></li></ul>            
           </div>
        
        </div>   
    </div>
    </div>
    </div>	
  );

}

export default CampaignCreate;
