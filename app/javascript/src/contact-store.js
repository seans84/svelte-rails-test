import { writable, derived } from "svelte/store"
import Api from "./api"

// Declare the writable store.
export const contactStore = writable([])

export const contactCountStore = derived(
  contactStore,
  contacts => contacts.length
)

export const saveContact = contact =>
  Api.put(`/contacts/${contact.id}.json`, { contact })

export const deleteContact = contact => {
  // Filter the deleted contact from the store.
  contactStore.update(contacts =>
    contacts.filter(({ id }) => id !== contact.id)
  )
  return Api.delete(`/contacts/${contact.id}.json`)
}

export const createContact = async contact => {
  const { data: createdContact } = await Api.post("/contacts.json", {
    contact
  })

  contactStore.update(contacts => [...contacts, createdContact])
}