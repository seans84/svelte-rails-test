<script>
  import { onMount } from "svelte"
  import { contactStore, saveContact, deleteContact } from "../contact-store"
  import ContactRow from "./ContactRow.svelte"

  export let contacts

  // Initialize the store from props when the component mounts
  onMount(() => {
    contactStore.set(contacts)
  })
</script>

<!-- Loop over the store instead of the contacts prop -->
{#each $contactStore as contact}
<!-- bind to update the store from the ContactRow -->
  <ContactRow
    bind:contact
    onSave={() => saveContact(contact)}
    onDelete={() => deleteContact(contact)}
  />
{/each}