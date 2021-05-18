import './App.css';
import Modal from './components/Modal.js';
import Table from './components/Table.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [targetedUser, setTargetedUser] = useState({})

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo')
    .then(res => res.json())
    .then(data => setUserData(data.results))
    .catch(err => console.log(err))
  }, [])

  const getTargetUser = (user) => {
    setTargetedUser(user)
  }

  return (
    <div>
      <Table userData={userData} getUser={getTargetUser} setIsModalVisible={setIsModalVisible}></Table>
      <Modal user={targetedUser} show={isModalVisible} onClose={() => setIsModalVisible(false)}>
      </Modal>
    </div>
  );
}

export default App;
