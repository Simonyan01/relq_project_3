import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td className="v_td">{contact.fullName}</td>
            <td className="v_td">{contact.address}</td>
            <td className="v_td">{contact.phoneNumber}</td>
            <td className="v_td">{contact.email}</td>
            <td className="v_td">
                <button 
                    type="button"
                    onClick={(event) => handleEditClick(event, contact)}
                    >
                    Edit
                </button>

                <button 
                    type="button"
                    onClick={() => handleDeleteClick(contact.id)}
                    >
                    Delete
                </button>

            </td>
        </tr>
    )
}

export default ReadOnlyRow