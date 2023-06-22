import React, { useContext, useEffect } from 'react'
import { MyContext } from '../App';
import TableItem from './TableItem';

function Table() {

    const { users, setUser, search, select } = useContext(MyContext);

    function Add21(element){
        if(select === 'shartnoma'){
            return element.shartnoma.toLowerCase().includes(search);
        }else if(select === 'name'){
            return element.name.toLowerCase().includes(search);
        }else if(select === 'level'){
            return element.level.toLowerCase().includes(search);
        }else if(select === 'address'){
            return element.address.toLowerCase().includes(search);
        }else if(select === 'action'){
            return element.action.toLowerCase().includes(search);
        }
    }

    return <table className="table table-bordered mt-3">
        <thead>
            <tr>
                <th scope="col">F.I.O</th>
                <th scope="col">Shartnoma</th>
                <th scope="col">Level</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {
                users
                .filter((element) => search.toLowerCase() === '' ? element : Add21(element))
                .map((item, index) => <TableItem key={index} item={item} />)
            }
        </tbody>
    </table>
}

export default Table