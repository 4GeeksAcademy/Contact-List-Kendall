
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store" 


const StoreContext = createContext()
const ApiUrl = "https://playground.4geeks.com/contact/"


export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore)

    useEffect(() => {
        const fetchData = async () => {
            const url = ApiUrl + "agendas/kendallsh/contacts"
            try {
                const response = await fetch(url)
                const data = await response.json()
                dispatch({ type: 'LOAD_CONTACTS', payload: data });
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        }
        fetchData()
    }, [])

    const addContact = async (contactInfo) => {
        const url = ApiUrl + "agendas/kendallsh/contacts"
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactInfo)
            })
            const data = await response.json()
            dispatch({type: 'ADD_CONTACT', payload: data})
        } catch (error) {
            console.error('Error adding contacts:', error);
        }
    }

    const deleteContact = async (id) => {
        const url = ApiUrl + "agendas/kendallsh/contacts/" + id
        try {
            await fetch(url, {
                method: 'DELETE',
            })
            dispatch({type: 'DELETE_CONTACT', payload: { id }})
        } catch (error) {
            console.error('Error deleting contact:', error);
            }
        }




    
    return <StoreContext.Provider value={{ store, addContact, deleteContact }}>
        {children}
    </StoreContext.Provider>
}


export default function useGlobalReducer() {
    const { store, addContact, deleteContact } = useContext(StoreContext)
    return { store, addContact, deleteContact };
}