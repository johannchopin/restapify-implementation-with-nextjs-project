import React from "react";
import MyNavbar from '../components/MyNavbar';
import UserContext from '../lib/userContext';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';
import Cookies from 'js-cookie';

import api from '../axiosStore'


export default function Index() {
  const { user, setUser } = React.useEffect(UserContext)

  const token = Cookies.get('jwt')
  if (token) {
    api.get('/user').then(({ data }) => {
      setUser(data)
    })
  }

  return (
    <>
      <MyNavbar></MyNavbar>

      {user ? <Dashboard /> : <Landing />}
    </>
  );
}