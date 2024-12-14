<script lang="ts">
      import Button from "$lib/components/ui/button/button.svelte";
      import { cn } from "$lib/utils";
      import { authClient } from "$lib/auth/client-auth";
      import axios from "axios";

      let { 
            children, 
            class: className = "",
            priceId = null
      } = $props()
      const session = authClient.useSession();

      async function generateCheckoutSession(){
            if (priceId === null){
                  return;
            }
            await axios.get("/api/stripe/create-checkout", {params: {
                  priceId: priceId,
                  customerId: $session.data?.user.customerId
            }})
            .then(res => {
                  const checkout = res.data.checkout;
                  window.location.href = checkout.url
            })
      }
</script>

<Button class={cn("w-full", className)} variant="default" disabled={priceId === null} onclick={generateCheckoutSession}>
      {@render children?.()}
</Button>