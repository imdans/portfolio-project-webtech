import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import { UserContext } from "../../UserContext";
import './blog.css';

export default function Header() {
  const {setUserInfo , userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;


  return (
    <header>
      <nav>
        {username && (
          <>
            <Link to="/blog/create" style={{color: '#fff',
                    fontSize: '20px', 
                    padding: '18px 36px', 
                    borderRadius: '8px',  
                    backgroundColor: '#007bff',
                    border: '2px solid #007bff', 
                    display: 'inline-block',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxSizing: 'border-box',  
                    marginLeft: '0'}}>Create new post</Link>
            <a onClick={logout} style={{color: '#fff',
                    fontSize: '20px', 
                    padding: '18px 36px', 
                    borderRadius: '8px',  
                    backgroundColor: '#007bff',
                    border: '2px solid #007bff', 
                    display: 'inline-block',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxSizing: 'border-box',  
                    marginLeft: '0'}}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/blog/login" style={{textDecoration: 'none',
                    color: '#fff',
                    fontSize: '20px', 
                    fontWeight: 'bold',
                    padding: '18px 36px', 
                    borderRadius: '8px',  
                    backgroundColor: '#007bff',
                    border: '2px solid #007bff', 
                    display: 'inline-block',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxSizing: 'border-box',  
                    marginLeft: '0'
                    }}>Login</Link>
            <Link to="/blog/register" style={{textDecoration: 'none',
                  color: '#fff',
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  padding: '15px 15px', 
                  borderRadius: '8px',  
                  backgroundColor: '#007bff',
                  border: '2px solid #007bff', 
                  display: 'inline-block',
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxSizing: 'border-box',  
                  marginLeft: '0'}}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
