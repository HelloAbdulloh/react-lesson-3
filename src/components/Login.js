import React from 'react'

function Login({setLogin}) {

  function signInSave(event){

    event.preventDefault();

    if(event.target[0].value || event.target[1].value){
    localStorage.setItem('login','true');  
    setLogin('true')
    }
  }

  return  <div className='vh-100 w-100 justify-content-center align-items-center d-flex' style={{ flexWrap: 'wrap' }}>
  <div className='card border-5' style={{ width: '400px', height: '400px' }}>
    <h3 className='text-center'>Login In</h3>
    <form className='card-body p-5 rounded' id='form' onSubmit={signInSave}>
      <input className='form-control mb-3 rounded-0 w-100' type={'email'} placeholder='Email...' required />
      <input className='form-control mb-4 rounded-0 w-100' type={'password'} placeholder='Password...' required />
    </form>
    <button className='btn btn-warning' form='form'>Login In</button>
  </div>
</div>
}

export default Login