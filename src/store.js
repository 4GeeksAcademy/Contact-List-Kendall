export const initialStore= []

export default function storeReducer(store, action = {}) {
  const { type, payload } = action;
  switch(type){

    case 'LOAD_CONTACTS':
      const { contacts } = payload
      return contacts;

    case 'ADD_CONTACT':
      return [...store, payload];

    case 'DELETE_CONTACT':
      const { id } = payload
      return store.filter(contact => contact.id !== id)

    default:
      return store;
  }    
}
