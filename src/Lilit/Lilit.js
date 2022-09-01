
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

        <div className="wrapper">
            <div className="wrapper-content">
                <div className="table-data">
                    <table className="table">
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Surneme</th>
                        <th>User Salary</th>
                        <th>Actions</th>

                        <tbody>
                            {users.map((user,index) => (
                                <tr>
                                    <td>{index +1}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.userSurname}</td>
                                    <td>{user.userSalary}</td>
                                    <td>
                                        <div>
                                            <button className="edit-ection" onClick={() =>handleEditClick (user,index)}>edit</button>
                                            <button className="remove-ection"onClick={() =>hendleRemove(index)}>remove</button>
                                        </div>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <form className="form" onSubmit={handleSubmitUser}onReset ={hendleCleanClick}>
                        <input placeholder="white your name"onChange={(e) => setUserData((prevState) =>({
                            ...prevState,
                            userName: e.target.value
                        }))}
                        value ={userData.userName} 
                        />
                        <input placeholder="white your surname"onChange={(e) => setUserData((prevState) =>({
                            ...prevState,
                            userSurname: e.target.value
                        }))}
                        value ={userData.userSurname}
                        />
                        <input placeholder="white your salary"onChange={(e) => setUserData((prevState) =>({
                            ...prevState,
                            userSalary: e.target.value
                        }))}
                        value ={userData.userSalary}
                        />


                        <div className="botton-wrapper">
                            <button type="reset">Clean</button>
                            <button disabled ={!isFilledFields} type="submit">{editableUserData.isEdit ? 'Edit': 'Add'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}



export default Lilit;