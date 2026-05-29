import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const Contact = () => {
    const { store, deleteContact } = useGlobalReducer();

    return <div className="container">
        <ul className="list-unstyled">
            {store.contacts.map((contact) => (
                <li key={contact.id}>
                    <div className="card mb-3 shadow-sm border-0 bg-light">
                        <div className="row g-0 align-items-center">

                            <div className="col-3 col-md-2 text-center p-3">
                                <img
                                    src={`https://i.pravatar.cc/200?img=${contact.id}`}
                                    className="img-fluid rounded-circle border"
                                    alt="avatar"
                                    
                                />
                            </div>

                            <div className="col-6 col-md-8 p-3">
                                <div className="card-body p-0">
                                    <h5 className="card-title fw-bold mb-1 text-dark">{contact.name}</h5>
                                    <p className="card-text text-muted mb-1 small">{contact.email}</p>
                                    <p className="card-text text-muted mb-1 small">{contact.phone}</p>
                                    <p className="card-text text-muted mb-0 small">{contact.address}</p>
                                </div>
                            </div>

                            <div className="col-3 col-md-2 p-3">
                                <div className="d-flex flex-row justify-content-center align-items-center gap-4 fs-4">
                                    <Link
                                        to={"/editContact/" + contact.id}
                                        className="text-primary"
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                    <button
                                        className="text-danger border-0 bg-transparent p-0"
                                        onClick={() => deleteContact(contact.id)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>

}

export default Contact;