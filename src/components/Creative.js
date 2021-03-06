import React from 'react';
import FileUp from './FileUp';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const Creative = () => {
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

   const[creativeType, setCreativeType] = useState("")
   const creativeTypeHandle=(e)=>{
      setCreativeType(e.target.value)     
   }
   console.log(creativeType)
  return(
   <div className="bg-light">
      <h4>Ad preferences</h4>
      <div class="wrapper">
       
         <form onSubmit={handleSave}>
            <div class="form-outline mb-4">
               <label class="form-label" for="form6Example3">Heading</label>
               <input 
               type="text" 
               id="form6Example3" 
               class="form-control" 
               name="heading"
               onChange={handleChange}
               />
            </div>
 
            <div class="row mb-4">
               <div class="col">
                  <div class="form-outline">
                  <label class="form-label" for="form6Example1">Cost Per Sale</label>
                  <input 
                  type="text" 
                  id="form6Example1" 
                  class="form-control" 
                  name="costpersale"
                  onChange={handleChange}
                  />
                  </div>
               </div>
               <div class="col">
                  <div class="form-outline">
                  <label class="form-label" for="form6Example2">Destination URL</label>
                  <input 
                  type="text" 
                  id="form6Example2" 
                  class="form-control"
                  name="destinationurl" 
                  onChange={handleChange}
                  />
                  </div>
               </div>
            </div>

            <label>Creative type</label>  
            

            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="image" onClick={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Image
               </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="video" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Video
            </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="I&V" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault2">
                  Image & Video
               </label>
            </div>

            <div class="form-outline mb-4">
               <label class="form-label" for="form6Example7">Discription</label>
               <textarea class="form-control" id="form6Example7" rows="4"></textarea>  
            </div>
 
            <label>Upload Thumbnail media</label>
            <div>
               <FileUp />               
            </div>

            <br></br>     
            <label>Upload media</label>
            <div>
               <FileUp />               
            </div>
                 
            <br></br>
            <div className="inputfield">
              <Link to="/campaign" class="btn btn-primary" id="right-panel-link" role="button" >Submit</Link>           
            </div>
         </form>
      </div>

   </div>
  );
}

export default Creative;


