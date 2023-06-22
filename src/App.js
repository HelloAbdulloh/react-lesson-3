import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Table from "./components/Table";

export const MyContext = createContext();
function App() {
  const [users, setUsers] = useState([{id: 1,name: 'john uik',shartnoma: 'uy arenda',level: '1',address: 'washington street 1', action:'ishchi'},{id: 2 ,name: 'kal bosh',shartnoma: 'mexanik',level: '1',address: 'Toshkent street 2', action:'ishchi'}]);
  const [show, setShow] = useState(false);
  const [search,setSearch] = useState('');
  const [select,setSelect] = useState('shartnoma');
  const [editUser,setEditUser] = useState({});
  const [login,setLogin] = useState('');

  useEffect(()=>{
    setLogin(localStorage.getItem('login'))
  },[])

  return <div className="container">
{ login === 'true' ? <MyContext.Provider value={{
      users,
      setUsers,
      show,
      setShow,
      search,
      setSearch,
      select,
      setSelect,
      editUser,
      setEditUser,
      setLogin
    }}>
      <Header />
      <div className="row">
        <div className={show ? 'col-8' : 'col-12'}><Table /></div>
        {show ? <Modal /> : ''}
      </div>
    </MyContext.Provider> : <Login setLogin={setLogin}/>}
  </div>
}

export default App;
