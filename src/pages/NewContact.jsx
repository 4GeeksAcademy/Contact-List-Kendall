// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";

export const NewContact = () => {
  const navigate = useNavigate();
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, addContact } = useGlobalReducer()
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleSubmit = (evt) => {
    evt.preventDefault()

    addContact(inputValue)

    setInputValue({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

    navigate("/");

  }
  return (
    <div className="container">
      <h1 className="text-center mt-5 fw-bold">Add a new contact</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control border-dark-subtle"
            id="name"
            placeholder="Enter Full Name"
            required
            value={inputValue.name}
            onChange={(evn) => setInputValue({ ...inputValue, name: evn.target.value })}

          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            className="form-control border-dark-subtle"
            id="email"
            placeholder="Enter email"
            required
            value={inputValue.email}
            onChange={(evn) => setInputValue({ ...inputValue, email: evn.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control border-dark-subtle"
            id="phone"
            placeholder="Enter phone number"
            required
            value={inputValue.phone}
            onChange={(evn) => setInputValue({ ...inputValue, phone: evn.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control border-dark-subtle"
            id="address"
            placeholder="Enter address"
            required
            value={inputValue.address}
            onChange={(evn) => setInputValue({ ...inputValue, address: evn.target.value })}
          />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">save</button>
        </div>
      </form>

      <div className="container-fluid">
        <Link to="/">
          <p className="d-inline text-decoration-underline">or get back to contacts</p>
        </Link>
      </div>
    </div>
  );
};
