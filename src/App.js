import './App.css';
import './components/greetings.css';
import Header from './components/Header';
import Greeting from './components/greeting.jsx';
import DataTable from './components/skillsSection.jsx';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [userInformation, setUserInformation] = useState(() => {
    // get the stored data from localStorage or use set values
    const storedData = localStorage.getItem('userInformation');
    return storedData ? JSON.parse(storedData) : {
      'Name': null,
      'E-mail': null,
      'Qualification': null,
      'D.O.B.': null,
      'Ph.No.': null
    };
  });

  useEffect(() => {
    // Store the current state in localStorage whenever it changes
    localStorage.setItem('userInformation', JSON.stringify(userInformation));
  }, [userInformation]);

  const setValues = (propName, propValue) => {
    if (propValue !== "") {
      setUserInformation(prevInfo => ({
        ...prevInfo,
        [propName]: propValue
      }));
    }
  };

  const onClick = () => {
    setUserInformation({
      'Name': null,
      'E-mail': null,
      'Qualification': null,
      'D.O.B.': null,
      'Ph.No.': null
    })
  };

  const Notify=()=>toast.warn('Are you sure?')
  const sucessToast=()=>toast.success('Profile updated sucessfully')
  return (
    <>
      <Header />
      <Greeting onClick={onClick} userInformation={userInformation} Title='Delete' Update='Update' sucessToast={sucessToast} setValues={setValues} Notify={Notify}/>
      <ToastContainer/>
      <DataTable />
    </>
  );
}

export default App;
