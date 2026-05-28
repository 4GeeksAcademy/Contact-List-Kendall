
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"


const StoreContext = createContext()
const ApiUrl = "https://playground.4geeks.com/contact/"


export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, { contacts: [] })

    useEffect(() => {
        const fetchData = async () => {
            const urlGet = ApiUrl + "agendas/kendallsh/contacts"
            const urlPost = ApiUrl + "agendas/kendallsh"
            try {

                let response = await fetch(urlGet)

                if (response.status === 404) {
                    console.log("ℹ️ Agenda no encontrada en el servidor. Iniciando auto-creación...")

                    const contactResponse = await fetch(urlPost, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" }
                    })

                    if (!contactResponse.ok) throw new Error("No se pudo crear el usuario");

                    response = await fetch(urlGet);
                }
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

                const data = await response.json()
                dispatch({ type: 'LOAD_CONTACTS', payload: data.contacts || [] });
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
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

            const data = await response.json()
            dispatch({ type: 'ADD_CONTACT', payload: data })
        } catch (error) {
            console.error('Error adding contacts:', error);
        }
    }

    const deleteContact = async (id) => {
        const url = ApiUrl + "agendas/kendallsh/contacts/" + id
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            })
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

            dispatch({ type: 'DELETE_CONTACT', payload: id })
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    }

    const updateContact = async (id, contactUpdate) => {
        const url = ApiUrl + "agendas/kendallsh/contacts/" + id
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactUpdate)
            })
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

            const data = await response.json()
            dispatch({ type: 'UPDATE_CONTACT', payload: data })
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    }


    return <StoreContext.Provider value={{ store, addContact, deleteContact, updateContact }}>
        {children}
    </StoreContext.Provider>
}


export default function useGlobalReducer() {
    const { store, addContact, deleteContact, updateContact } = useContext(StoreContext)
    return { store, addContact, deleteContact, updateContact };
}