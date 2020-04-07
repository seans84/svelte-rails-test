<script>
  import { contactCountStore } from "../contact-store"

  export let count = null

  // Reactive declaration that calculates the count from the props or the store
  $: contactCount = count === null ? $contactCountStore : count
</script>

<span class="badge badge-pill badge-info">Total: {contactCount}</span>