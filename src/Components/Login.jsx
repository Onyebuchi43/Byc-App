import React from 'react';
import Nav from './Nav';
import '../style.css'; 
import Footer from './Footer';

const Login = () => {
  return (
    <>
      <Nav />
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.left}>
            <h2>Login</h2>
            <label style={styles.label}>E-mail</label>
            <input type="email" style={styles.input} />

            <label style={styles.label}>Password</label>
            <input type="password" style={styles.input} />

            <div style={styles.checkboxRow}>
              <label style={styles.remember}>
                <input type="checkbox" style={styles.checkbox} />
                Remember me
              </label>
              <a href="#" style={styles.forgot}>forgot your password?</a>
            </div>

            <button style={styles.loginButton}>LOGIN</button>
          </div>

          <div style={styles.right}>
            <h2>Create your an account</h2>
            <p style={{ margin: '10px 0', color: '#444' }}>
              Create your customer account in just a few clicks!<br />
              You can register using your e-mail address
            </p>
            <button style={styles.registerButton}>CREATE AN ACCOUNT VIA E-MAIL</button>
          </div>
        </div>
      </div>

        <Footer /> 
    </>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 'calc(100vh - 80px)', // subtracting Nav height
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  card: {
    display: 'flex',
    width: '100%',
    maxWidth: '1100px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.08)',
    padding: '3rem',
    gap: '2rem',
    border: '1px solid #eee',
  },
  left: {
    flex: 1,
    paddingRight: '2rem',
    borderRight: '1px solid #eee',
  },
  right: {
    flex: 1,
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #c0392b',
    borderRadius: '6px',
    fontSize: '1rem',
    outline: 'none',
  },
  checkboxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
    fontSize: '0.95rem',
  },
  remember: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  forgot: {
    textDecoration: 'none',
    color: '#333',
  },
  loginButton: {
    marginTop: '2rem',
    backgroundColor: '#c0392b',
    color: '#fff',
    border: 'none',
    padding: '0.9rem',
    width: '100%',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  registerButton: {
    marginTop: '2rem',
    backgroundColor: '#c0392b',
    color: '#fff',
    border: 'none',
    padding: '0.9rem',
    width: '100%',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  checkbox: {
    cursor: 'pointer',
  },
};

export default Login;
