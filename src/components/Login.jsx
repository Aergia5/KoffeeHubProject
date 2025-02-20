import React, { useState } from 'react';
import Signup from './Signup';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <MDBContainer fluid className="justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#F3EFDC] to-[#F3EFDC] rounded-lg">
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-black my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-black-50 mb-5">Please enter your login and password!</p>

              <form onSubmit={handleSubmit} className="w-100">
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-black'
                  label='Email address'
                  id='formControlLg'
                  type='email'
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-black'
                  label='Password'
                  id='formControlLg'
                  type='password'
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="small mb-3 pb-lg-2">
                  <a className="text-black-50" href="#!">Forgot password?</a>
                </p>
                <MDBBtn type="submit" outline className='mx-2 px-5' color='black' size='lg'>
                  Login
                </MDBBtn>
              </form>

              <div>
                <p className="mb-0">Don't have an account? <a href="/signup" className="text-black-50 fw-bold">Sign Up</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;