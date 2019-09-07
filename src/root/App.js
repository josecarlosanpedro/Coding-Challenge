import React, { useEffect, useState } from "react";
import Layout from "../components/MainLayout";
import Routes from "../routes";
import '../css/index.scss'


const App = () => {

  const [login, setLogin] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    setLogin(isLoggedIn)
  }, []);

  return (
    <div>
      <Layout>
        <Routes isLoggedIn={login} />
      </Layout>
    </div>
  );
}


export default App;