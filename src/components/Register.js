import React , { useState  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";




function Register(props) {

  const [email, setEmail] =useState('');
  const [name, setName] =useState('');
  const [rePassword, setRePassword] =useState('');
  const [password, setPassword] =useState('');

  function register(){
    if(!name){
        alert('Nama tidak boleh kosong')
    }else if (!password){
        alert('Password tidak boleh kosong')
    }else if (password !== rePassword){
        alert('Kedua password tidak sama')
    }else {
        alert('Berhasil mendaftar')
    }
  }
  


  return (
    <div className="aboutBody">
      <div className="container my-5">
        <h2 className="text-center">Register</h2>
        <div className="boxLogin col-8 offset-2 col-lg-4 offset-4 py-5">
          <Form id="register">
            <FormGroup className="mb-3">
              <Label for="name">Name</Label>
              <Input
                type="string"
                name="name"
                id="name"
                placeholder="Your name here..."
                onChange={(e)=>setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here..."
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Your password here..."
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label for="password2">Re-Type Password</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-enter your password..."
                onChange={(e)=>setRePassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup inline>
              <Button onClick={register} color="success">Register</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Register;
