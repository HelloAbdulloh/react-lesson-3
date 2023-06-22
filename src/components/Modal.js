import React, { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../App'

function Modal() {

    const {users,setUsers,setShow,editUser,setEditUser} = useContext(MyContext)

    function AddUser(event){
        event.preventDefault();

        if(editUser.id){
            users.forEach((element,index) => {
                if(element.id === editUser.id){
                    element.name = event.target[0].value
                    element.shartnoma = event.target[1].value
                    element.level = event.target[2].value
                    element.address = event.target[3].value
                    element.action = event.target[4].value
                }
            });
        }else{
            users.push({
                id: users.length+1,
                name: event.target[0].value,
                shartnoma: event.target[1].value,
                level: event.target[2].value,
                address: event.target[3].value,
                action: event.target[4].value
            });
        }

        setUsers([...users]);
        setShow(false);
        setEditUser({})
    }

    return <div className='col-4'>
        <div className='card mt-3'>
            <div className='card-header'>
                Add Hodim
            </div>
            <div className='card-body'>
                <form onSubmit={AddUser} id='form'>
                    <input className='form-control mb-3' defaultValue={editUser ? editUser.name : ''} type={'text'} placeholder='F.I.O' required />
                    <input className='form-control mb-3' defaultValue={editUser ? editUser.shartnoma : ''} type={'text'} placeholder='Shartnoma' required />
                    <input className='form-control mb-3' defaultValue={editUser ? editUser.level : ''} type={'text'} placeholder='Level' />
                    <input className='form-control mb-3' defaultValue={editUser ? editUser.address : ''} type={'text'} placeholder='Address' />
                    <input className='form-control mb-3' defaultValue={editUser ? editUser.action : ''} type={'text'} placeholder='Action' />
                </form>
            </div>
            <div className='card-footer text-end'>
                <button className='btn btn-danger mx-2' onClick={()=> {setShow(prev => !prev); setEditUser({})}}>Cancel</button>
                <button className='btn btn-danger' form='form'>Add+</button>
            </div>
        </div>
    </div>
}

export default Modal