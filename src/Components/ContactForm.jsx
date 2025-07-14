import React, { useState } from 'react';
import '../style.css'

const ContactForm = () => {

    const [formData, setFormData] = useState({
    phone: '',
    email: '',
    notes: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You could send it to your backend or display a toast
  };

  return (
    <>

    <div className="form container">
      <h3 style={{ fontWeight: '700', fontSize: '30px'}}>Drop a Message</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>

    </>
  )
}

export default ContactForm

