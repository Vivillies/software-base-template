<script lang="ts">
      import PriceCard from "../ui/pricing/price-card.svelte";
      import { slide, fade } from "svelte/transition";
      import { quintOut } from "svelte/easing";

      import { plan } from "$lib/types/plans";
      import { authClient } from "$lib/auth/client-auth";
      import { onMount } from "svelte";

      const session = authClient.useSession();

      let { class: className = "" } = $props();
      let showText = $state(false);
      let showCards = $state(false);

      onMount(() => {
            setTimeout(() => {
                  showText = true;
            }, 300);

            setTimeout(() => {
                  showCards = true;
            }, 1300);
      });
</script>

{#if !$session.data?.user.hasAccess}
      <div
            class="absolute z-[1000] w-full h-full flex flex-col justify-center items-center backdrop-blur space-y-5"
      >
            <div class="w-fit space-y-2">
                  <div
                        transition:slide
                        class="h-fit w-fit flex space-x-10"
                  >
                        {#each [plan] as tier, index}
                              {#if showCards}
                                    <div
                                          in:slide={{
                                                delay: index * 600,
                                                duration: 500,
                                                easing: quintOut,
                                          }}
                                    >
                                          <PriceCard {tier} applyCheckout={true}/>
                                    </div>
                              {/if}
                        {/each}
                  </div>
                  {#if showText}
                        <div
                              transition:fade={{
                                    delay: 100,
                                    duration: 250,
                                    easing: quintOut,
                              }}
                              class="w-full text-center bg-zinc-800 text-2xl p-6 rounded-md transition-[.2s]"
                        >
                              Before you go ahead, you need to select a
                              subscription!
                        </div>
                  {/if}
            </div>
      </div>
{/if}
