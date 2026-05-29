import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const Contact = () => {
    const { store, deleteContact } = useGlobalReducer();

    return <div className="container">
        <ul className="list-unstyled">
            {store.contacts.map((contact) => (
                <li key={contact.id}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="text-center col-md-3 p-4">
                                <img src={`https://i.pravatar.cc/200?img=${contact.id}`} className="img-fluid rounded-circle" alt="avatar" />
                            </div>
                            <div className="col-md-6 p-2">
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text text-muted">{contact.email}</p>
                                    <p className="card-text text-muted">{contact.phone}</p>
                                    <p className="card-text text-muted">{contact.address}</p>
                                </div>
                            </div>
                            <div className="d-inline-flex align-self-start text-center col-md-3 p-4 gap-2">
                                <Link to={"/editContact/" + contact.id} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>

}

export default Contact;