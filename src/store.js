export const initialStore= []

export default function storeReducer(store, action = {}) {
  const { type, payload } = action;
  switch(type){

    case 'LOAD_CONTACTS':
      return payload;

    case 'ADD_CONTACT':
      return [...store, payload];

    case 'DELETE_CONTACT':
      return store.filter(contact => contact.id !== payload);

    case 'UPDATE_CONTACT':
      return store.map(contact => contact.id === payload.id ? payload : contact);

    default:
      return store;
  }    
}
