import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

import "./DataTable.css";

const CRUDExample = () => {
 const [data, setData] = useState([]);
 const [formData, setFormData] = useState({ name: '', email: '' });
 const [isEditing, setIsEditing] = useState(false);
 const [showModal, setShowModal] = useState(false);
 const [deleteRecordId, setDeleteRecordId] = useState(null);

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  try {
   const response = await fetch('http://localhost:81/TNP/dataTable.php');
   const json = await response.json();
   setData(json);
  } catch (error) {
   console.error('Error fetching data:', error);
  }
 };

 const handleCreate = async () => {
  try {
   const response = await fetch('http://localhost:81/TNP/dataTable.php', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });
   if (response.ok) {
    fetchData();
    setFormData({ name: '', email: '' });
   } else {
    console.error('Error creating record:', response.status);
   }
  } catch (error) {
   console.error('Error creating record:', error);
  }
 };

 const handleUpdate = async () => {
  try {
   const response = await fetch(`http://localhost:81/TNP/dataTable.php?id=${formData.id}`, {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });
   if (response.ok) {
    fetchData();
    setShowModal(true);
   } else {
    console.error('Error updating record:', response.status);
   }
  } catch (error) {
   console.error('Error updating record:', error);
  }
 };

 const handleEdit = (row) => {
  setIsEditing(true);
  setFormData({ id: row.id, name: row.name, email: row.email });
 };

 const handleCancel = () => {
  setIsEditing(false);
  setFormData({ id: '', name: '', email: '' });
 };

 const handleDelete = (id) => {
  setDeleteRecordId(id);
  setShowModal(true);
 };

 const confirmDelete = async () => {
  try {
   const response = await fetch(`http://localhost:81/TNP/dataTable.php?id=${deleteRecordId}`, {
    method: 'DELETE',
   });
   if (response.ok) {
    fetchData();
    setShowModal(false);
   } else {
    console.error('Error deleting record:', response.status);
   }
  } catch (error) {
   console.error('Error deleting record:', error);
  }
  setShowModal(false)
 };

 const closeModal = () => {
  setShowModal(false);
 }

 const columns = [
  {
   name: 'Name',
   selector: (row) => row.name,
   sortable: true,
  },
  {
   name: 'Email',
   selector: (row) => row.email,
   sortable: true,
  },
  {
   name: 'Actions',
   cell: (row) => (
    <div className='actions'>
     <button className="edit-button" onClick={() => handleEdit(row)}>Edit</button>
     <button className='delete-button' onClick={() => handleDelete(row.id)}>Delete</button>
    </div>
   ),
   ignoreRowClick: true,
   allowOverflow: true,
   button: true,
  },
 ];
 const customStyles = {
  headCells: {
   style: {
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    borderColor: '#ccc',
   },
  },
  cells: {
   style: {
    fontSize: '14px',
    borderColor: '#ccc',
   },
  },
  pagination: {
   style: {
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
   },
   pageButtonsStyle: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    color: '#555',
   },
  },
 };
 return (
  <div className="container">
   <h1>Data Table</h1>
   {isEditing ? (
    <div className="edit-form">
     <h2>Edit Record</h2>
     <div className="form-group">
      <label>Name:</label>
      <input
       type="text"
       placeholder="Name"
       value={formData.name}
       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
     </div>
     <div className="form-group">
      <label>Email:</label>
      <input
       type="text"
       placeholder="Email"
       value={formData.email}
       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
     </div>

     <div className='form-buttons'>
      <button className='update-button' onClick={handleUpdate}>Update</button>
      <button className='cancel-button' onClick={handleCancel}>Cancel</button>
     </div>
    </div>
   ) : (
    <div className="create-form">
     <h2>Create New Record</h2>
     <input
      type="text"
      placeholder="Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
     />
     <input
      type="text"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
     />
     <button onClick={handleCreate}>Create</button>
    </div>
   )}
   <DataTable
    title=""
    columns={columns}
    data={data}
    striped={true}
    pagination
    paginationPerPage={10}
    paginationRowsPerPageOptions={[10, 20, 30]}
    customStyles={customStyles}
   />
   {showModal && (
    <div className="modal">
     <div className="modal-content">
      {deleteRecordId && (
       <>
        <h3>Confirmation</h3>
        <p>Are you sure you want to delete this record?</p>
        <div className="modal-buttons">
         <button className="confirm-button" onClick={confirmDelete}>Confirm</button>
         <button className="cancel-button" onClick={closeModal}>Cancel</button>
        </div>
       </>
      )}
      {!deleteRecordId && (
       <>
        <h3>Record Updated</h3>
        <p>The record has been updated successfully.</p>
        <button onClick={closeModal}>Close</button>
       </>
      )}
     </div>
    </div>
   )}
  </div>
 );
};

export default CRUDExample;
