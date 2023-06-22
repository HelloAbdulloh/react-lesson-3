import React, { useContext } from 'react'
import { MyContext } from '../App'

function TableItem({item}) {

  const {users,setUsers,setShow,editUser,setEditUser} = useContext(MyContext);

  function deleteUser(id){
    users.forEach((element,index) => {
      if(element.id === id){
        users.splice(index,1);
      }
    });

    setUsers([...users])

  };

  function editUserf(item){
    setShow(true);
    setEditUser(item);
  }

  return <tr>
  <th scope="row">{item?.name}</th>
  <td>{item.shartnoma}</td>
  <td>{item.level}</td>
  <td>{item.address}</td>
  <td>{item.action}</td>
  <td><button className='btn' onClick={()=> editUserf(item)}><i className="fa-sharp fa-solid fa-pen-to-square text-danger"></i></button></td>
  <td><button className='btn' onClick={()=> deleteUser(item.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
</tr>
}

export default TableItem