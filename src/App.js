import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      // testing purposes
      
      console.log('Form:', values);
    },
    validate: values =>{
      let errors = {};
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!values.emailField) errors.emailError = 'Field required';
      if(!values.pswField) errors.pswError = 'Field required';
      if (!regex.test(values.emailField) ) errors.emailError = 'Username should be an email';
   
      return errors;
    }
  })
  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input name="emailField" type="text" onChange={formik.handleChange} 
        value={formik.values.emailField}/>
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div>: null}
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} 
        value={formik.values.pswField}/>
        {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div>: null}
        <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
