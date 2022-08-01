import React, { useState } from 'react';
import { pageData } from '../../components/Template1/HomeScreen/data';
import Header from '../../components/Template1/HomeScreen/Header';

import ContactButton from '../../components/Template1/HomeScreen/ContactButton';
import MenuManager from '../../components/Template1/HomeScreen/Menu/MenuManager';
import { Bold } from 'react-feather';
import { GoNoNewline } from 'react-icons/go';

// import '../components/ContactUsScreen/style.css';

import '../../config'; // Global Variables
// import '../components/ContactUsScreen/style.css';

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

const ContactUsScreen = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch('http://localhost:5005/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };

  return (
    //   frame
    <MenuManager>
      <Header />
      <div
        style={{ background: '#55ffe5', width: '100% ' }}
        className="homescreen-main-container"
        id="homescreen-main-container"
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            fontFamily: 'Poppins',
            // background: '#55ffe5',
            // fontSize: '14px',
          }}
        >
          {/* text */}
          <div className="main-container">
            <div
              className="container"
              style={{
                width: '80%',
                ...padding(50, 20, 600, 5),
                color: 'black',
              }}
            >
              <h1 style={{ fontWeight: 700 }}>Connect with Us</h1>
              <p style={{ marginBottom: '40px' }}>
                We would love to respond to you concerns and help you succeed,
                so feel free to get in touch with us.
              </p>
              <div
                className=""
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                {/* LEFT */}
                <div
                  className=""
                  style={{
                    flexBasis: '60%',
                    padding: '40px 60px',
                    background: '#fff',
                    fontSize: '12px',
                  }}
                >
                  <h6>Send Your Request</h6>

                  <form onSubmit={handleSubmit}>
                    <div
                      className="input-row"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                        flexBasis: '45%',
                        width: '100%',
                      }}
                    >
                      <div
                        className="input-group"
                        style={{
                          flexBasis: '45%',
                        }}
                      >
                        {/* Name */}
                        <label
                          style={{ color: 'blue' }}
                          className="contactUsLabel" // not working
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          style={{
                            width: '100%',
                            border: 'none',
                            borderBottom: '1px solid black',
                          }}
                          id="name"
                          required
                          type="text"
                          placeholder="John Doe"
                        ></input>
                      </div>
                      <div
                        className="input-group"
                        style={{
                          flexBasis: '45%',
                          border: 'none',
                          borderBottom: '1px solid black',
                        }}
                      >
                        <label style={{ color: 'blue' }} htmlFor="name">
                          Email
                        </label>
                        <input
                          style={{ width: '100%', border: 'none' }}
                          type="email"
                          id="email"
                          required
                          placeholder="Johndoe@gmail.com"
                        ></input>
                      </div>
                    </div>
                    <div
                      className="input-row"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '20px',
                        flexBasis: '45%',
                        width: '100%',
                      }}
                    >
                      <div
                        className="input-group"
                        style={{
                          flexBasis: '45%',
                        }}
                      >
                        <label style={{ color: 'blue' }} htmlFor="name">
                          Phone
                        </label>
                        <input
                          style={{
                            width: '100%',
                            border: 'none',
                            borderBottom: '1px solid black',
                          }}
                          type="text"
                          placeholder="+1 010 011 0101"
                        ></input>
                      </div>
                      <div
                        className="input-group"
                        style={{
                          flexBasis: '45%',
                        }}
                      >
                        <label style={{ color: 'blue' }} htmlFor="name">
                          Subject
                        </label>
                        <input
                          style={{
                            width: '100%',
                            border: 'none',
                            borderBottom: '1px solid black',

                            // display: 'block',
                          }}
                          type="text"
                          placeholder="Product"
                        ></input>
                      </div>
                    </div>
                    <label style={{ color: 'blue' }} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      style={{
                        width: '100%',
                        border: ' solid #ccc',
                        outline: 'none',
                        padding: '10px',
                        boxSizing: 'border-box',
                      }}
                      row="5"
                      placeholder="Your Messsage"
                    ></textarea>
                    {/* <button type="submit"></button> */}
                    <button
                      type="submit"
                      style={{
                        width: '100px',
                        background: '#1c00b5',
                        outline: 'none',
                        color: 'white',
                        height: '35px',
                        borderRadius: '30px',
                        marginTop: '20px',
                        boxShadow: '0px 5px 15px 0px rgba(28,0,181,0.3)',
                      }}
                    >
                      {status}
                    </button>
                  </form>
                </div>

                {/* RIGHT */}
                <div
                  className=""
                  style={{
                    flexBasis: '40%',
                    padding: '40px',
                    background: '#1c00b5',
                    color: '#fff',
                    // fontSize: '12px',
                  }}
                >
                  <h6
                    style={{
                      // color: '#1c00b5',
                      fontWeight: '600',
                      marginBottom: '30px',
                    }}
                  >
                    Reach Us
                  </h6>

                  <table>
                    <tr>
                      <td>Email</td>
                      {/* <td> */}
                      <a
                        style={{ color: 'white' }}
                        href={global.config.i18n.email.link}
                      >
                        {global.config.i18n.email.text}
                      </a>
                      {/* </td> */}
                    </tr>

                    <tr>
                      <td style={{ width: '200px' }}>Phone</td>
                      <a
                        style={{ color: 'white' }}
                        href={global.config.i18n.phoneNumber.link}
                      >
                        {global.config.i18n.phoneNumber.text}
                      </a>
                    </tr>

                    <tr>
                      <td>
                    Address: <br />
                  </td>
                  <td>
                    <br />
                    643 Snediker Avenue , <br />
                    Brooklyn New York , <br />
                    11207 <br />
                  </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuManager>
  );
};
export default ContactUsScreen;
