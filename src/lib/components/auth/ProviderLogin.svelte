<script lang="ts">
      import { goto } from "$app/navigation";
      import { authClient } from "$lib/auth/client-auth";
      import Button from "../ui/button/button.svelte";

      let { provider }: {provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab"} = $props()

      const session = authClient.useSession()
</script>

{#if $session?.data?.user}
      <Button
            variant="outline"
            class="bg-indigo-600"
            onclick={() => goto("/dashboard")}
      >
            Dashboard
      </Button>
{:else}
      <Button
            variant="outline"
            onclick={async () => await authClient.signIn.social({ provider: provider, callbackURL: "/dashboard" })} 
            class="w-full"
      >
            Use Google
      </Button>
{/if}
