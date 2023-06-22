import React, { useContext, useState } from 'react'
import { MyContext } from '../App'

function Header() {

    const {setShow,setSearch,setSelect,setLogin} = useContext(MyContext);
    const [push,setPush] = useState('')

    function pushSearch(value){
        setPush(value);
    }

    function logOut(){
        localStorage.clear();
        setLogin('')
        
    }

  return <div className='row'>
    <div className='col-5'>
        <label>Filter</label>
        <select onChange={(event)=> setSelect(event.target.value)} className='form-select'>
            <option value={'shartnoma'}>Shartnoma</option>
            <option value={'name'}>F.I.SH</option>
            <option value={'level'}>Level</option>
            <option value={'address'}>Address</option>
            <option value={'action'}>Action</option>
        </select>
    </div>
    <div className='col-5'>
        <label>Search</label>
        <input className='form-control' value={push} onChange={(event)=> pushSearch(event.target.value)} placeholder='search...'/>
    </div>
    <div className='col-2 mt-4'>
        <button className='btn btn-primary mx-4' onClick={()=> setSearch(push)}>Qidirish</button>
        <button className='btn btn-primary' onClick={()=> setPush('')}>Clear</button>
    </div>
    <div className='col-12 mt-5 text-end'>
        <button className='btn btn-primary mx-4' onClick={()=> setShow(prev => !prev)}>Qo'shish</button>
        <button className='btn btn-primary' onClick={logOut}>Log out</button>
    </div>
  </div>
}

export default Header