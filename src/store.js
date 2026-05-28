export const initialStore = {
  contacts: []
}

export default function storeReducer(store, action = {}) {
  const { type, payload } = action;
  switch(type){

    case 'LOAD_CONTACTS':
      return { 
        ...store, 
        contacts: payload };

    case 'ADD_CONTACT':
      return { 
        ...store, 
        contacts: [...store.contacts, payload] };

    case 'DELETE_CONTACT':
      return { 
        ...store, 
        contacts: store.contacts.filter(contact => contact.id !== payload) };

    case 'UPDATE_CONTACT':
      return { 
        ...store, 
        contacts: store.contacts.map(contact => contact.id === payload.id ? payload : contact) };

    default:
      return store;
  }    
}
