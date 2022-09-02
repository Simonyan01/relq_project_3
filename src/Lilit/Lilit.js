
import React,{useState} from "react";
import './Table.css'

const initialValues ={
    userName:'',
    userSurname:'',
    userSalary:''
}

function Lilit() {
    const[userData, setUserData] = useState(initialValues);
    const[users, setUsers] = useState([]);
    const [editableUserData, setEditableUserData] = useState({
        isEdit: false,
        userIndex: null
      });

    const hendleRemove = (index) => {
        setUsers(users.filter((user, userIndex) => userIndex !== index));
        
    }

     const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

    const handleSubmitUser = (e) => {
        e.preventDefault();

        if(isFilledFields){
            if(editableUserData.isEdit){
                const editedData = users;
                editedData.splice(editableUserData.userIndex, 1, userData);
                setUsers(editedData);

                setEditableUserData({
                    isEdit: false,
                    userIndex: null
                  })
            }else{
                setUsers((prevState) => [...prevState,userData]);
            }
            


        setUserData(initialValues)
            
        }

        
    }
    const hendleCleanClick = () => setUserData(initialValues);

    const handleEditClick = ( data, index ) => {
        setUserData(data);
        setEditableUserData({
          isEdit: true,
          userIndex: index
        })
      }

    return (

        <div className="lil-wrapper">
            <div className="lil-wrapper-content">
                <div className="lil-table-data">
                    <table className="lil-table">
                        <th className="lil-th">#</th>
                        <th className="lil-th">User Name</th>
                        <th className="lil-th">User Surneme</th>
                        <th className="lil-th">User Salary</th>
                        <th className="lil-th">Actions</th>

                        <tbody>
                            {users.map((user,index) => (
                                <tr>
                                    <td className="lil-td">{index +1}</td>
                                    <td className="lil-td">{user.userName}</td>
                                    <td className="lil-td">{user.userSurname}</td>
                                    <td className="lil-td">{user.userSalary}</td>
                                    <td className="lil-td">
                                        <div>
                                            <button className="lil-edit-ection" onClick={() =>handleEditClick (user,index)}>edit</button>
                                            <button className="lil-remove-ection"onClick={() =>hendleRemove(index)}>remove</button>
                                        </div>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <form className="lil-form" onSubmit={handleSubmitUser}onReset ={hendleCleanClick}>
                        <input className="lil-input" placeholder="white your name"onChange={(e) => setUserData((prevState) =>({
                            ...prevState,
                            userName: e.target.value
                        }))}
                        value ={userData.userName} 
                        />
                        <input className="lil-input" placeholder="white your surname"onChange={(e) => setUserData((prevState) =>({
                            ...prevState,
                            userSurname: e.target.value
                        }))}
                        value ={userData.userSurname}
                        />
                        <input className="lil-input" placeholder="white your salary"onChange={(e) => setUserData((prevState) =>({
                            ...prevState,
                            userSalary: e.target.value
                        }))}
                        value ={userData.userSalary}
                        />


                        <div className="lil-botton-wrapper">
                            <button className="button-clean" type="reset">Clean</button>
                            <button className="button-add" disabled ={!isFilledFields} type="submit">{editableUserData.isEdit ? 'Edit': 'Add'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}



export default Lilit;