import React, { useState } from 'react';
import './Lyov.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



const initialValues = {
  userName: '',
  userSurname: '',
  userSalary: '',
  userAge: ''
}

function Lyov() {
  const [userData, setUserData] = useState(initialValues)
  const [users, setUsers] = useState([]);
  const [ediTableUserData, setEdiTableUserData] = useState({
    IsEdit: false,
    userIndex: null
  })
  const handleRemoveClick = (index) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  }
  const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

  const handleSubmitUser = (e) => {

    e.preventDefault();
    if (isFilledFields) {
      if (ediTableUserData.IsEdit) {
        const editedData = users;
        editedData.splice(ediTableUserData.userIndex, 1, userData)

        setUsers(editedData);

        setEdiTableUserData({
          IsEdit: false,
          userIndex: null
        })

      } else {
        setUsers((prevState) => [...prevState, userData]);
      }
      setUserData(initialValues);
    }

  }

  const handleClearClick = () => setUserData(initialValues);

  const handleEditClick = (data, index) => {
    setUserData(data);
    setEdiTableUserData({
      IsEdit: true,
      userIndex: index
    })

  }
  console.log('users:', users);

  return (
    
      <div className='lo_container' >
        <div className='lo_content'>
          <div className='lo_table-data'>
            <table className='lo_table' key={users.id}>
              <tbody className='lo_users'>
                <tr>
                  <th className='lo_th' scope="col">#</th>
                  <th className='lo_th' scope="col">Name</th>
                  <th className='lo_th' scope="col">Surname</th>
                  <th className='lo_th' scope="col">Age</th>
                  <th className='lo_th' scope="col">Salary</th>
                  <th className='lo_th' scope="col">Actions</th>
                </tr>
              </tbody>
              <tbody className='lo_users' >
                {users.map((user, index) => (
                  <tr key={index} >
                    <td className='lo_td'>
                      {index + 1}
                    </td>
                    <td className='lo_td'>
                      {user.userName}
                    </td>
                    <td className='lo_td'>
                      {user.userSurname}
                    </td>
                    <td className='lo_td'>
                      {user.userAge}
                    </td>
                    <td className='lo_td'>
                      {user.userSalary}
                    </td>
                    <td className='lo_td'>
                      <div>
                        <button className='lo_editButton' onClick={() => handleEditClick(user, index)}><FontAwesomeIcon icon={faPen} /></button>
                        <button className='lo_removeButton' onClick={() => handleRemoveClick(index)}><FontAwesomeIcon icon={faTrash} color /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <form className='lo_form' onSubmit={handleSubmitUser} onReset={handleClearClick}>
            <input className='lo_input' placeholder='Write your Name'
              onChange={(e) => setUserData((prevState) => ({
                ...prevState,
                userName: e.target.value

              }))}
              value={userData.userName}

            />


            <input className='lo_input' placeholder='Write your Surname'
              onChange={(e) => setUserData((prevState) => ({
                ...prevState,
                userSurname: e.target.value
              }))}
              value={userData.userSurname}
            />


            <input className='lo_input' placeholder='Write your Age'
              onChange={(e) => setUserData((prevState) => ({
                ...prevState,
                userAge: e.target.value
              }))}
              value={userData.userAge}
            />

            <input className='lo_input' placeholder='Write your Salary'
              onChange={(e) => setUserData((prevState) => ({
                ...prevState,
                userSalary: e.target.value
              }))}
              value={userData.userSalary}
            />




            <div className='lo_buttons-wrapper'>
              <button className='lo_clearButton' type="reset">
                Clear
              </button>
              <button className='lo_editAddButton' disabled={!isFilledFields} type="submit">
                {ediTableUserData.IsEdit ? <FontAwesomeIcon icon={faPen} /> : 'Add'}

              </button>


            </div>
          </form>
        </div>
      </div>
  );
}


export default Lyov;
