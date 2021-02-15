import {Form,Button} from 'react-bootstrap';
function Register()
{
    return(
        <div>
<h1 className="text-center text-danger">Registration From</h1>
<Form>
   <Form.Group>
         <Form.Label> Name</Form.Label>
          <Form.Control required type = "text" placeholder="Enter Your Name"/>
   </Form.Group>

   <Form.Group>
         <Form.Label>Email</Form.Label>
          <Form.Control required type = "email" placeholder="Enter Your Email"/>
   </Form.Group>

   <Form.Group>
         <Form.Label>Password</Form.Label>
          <Form.Control required type = "password" placeholder="Enter Your Password"/>
   </Form.Group>

   <Form.Group>
         <Form.Label>Mobile</Form.Label>
          <Form.Control required type = "number" placeholder="Enter Your Mobile"/>
   </Form.Group>

   <Form.Group>
         <Form.Label>DOB</Form.Label>
          <Form.Control required type = "date" placeholder="Enter Your DOB"/>
   </Form.Group>

   <Form.Group>
         <Form.Label>Education</Form.Label>
          <select  required type = "number" placeholder="Enter Your Number">
             <option>FE</option> 
             <option>SE</option> 
             <option>TE</option> 
             <option>BE</option> 
              
          </select>
   </Form.Group>

   <Form.Group>
         <Form.Label>Select City</Form.Label>
         <select required type = "number" placeholder="Enter Your Number">
             <option>Pune</option>
             <option>Mumbai</option>
             <option>Nashik</option>
         </select>
   </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>       


{/* <div className="row">

    <div className = "col-lg-4">
        
    </div>
    <div className = "col-lg-4">

          <div className="from-group">
              <label>Email</label>
              <input type = "email" className = "from-control" placeholder = "Enter Your Eamil"/>
               </div>

          <div className="from-group">
              <label>Password</label>
              <input type = "password" className = "from-control" placeholder = "Enter Your Password"/>
         </div>

          <div className="from-group">
              <Button className = "btn-btn-danger mx-auto d-block">Register</Button>
         </div>
</div>

<div className = "col-lg-4">

</div>
         
    </div> */}

</div>
//  </div>
    );
};

export default Register;