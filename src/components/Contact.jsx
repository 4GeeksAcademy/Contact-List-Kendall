import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Link} from "react-router-dom";

const Contact = () => {
    const { store, deleteContact } = useGlobalReducer();

    return <div className="container">
        <ul className="list-unstyled">
            {store.map((contact) => (
                <li key={contact.id}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text">{contact.email}</p>
                                    <p className="card-text">{contact.phone}</p>
                                    <p className="card-text">{contact.address}</p>
                                </div>
                            </div>
                            <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>Delete</button>
                            <Link to={"/editContact/" + contact.id} className="btn btn-primary">Edit</Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>

}

export default Contact;