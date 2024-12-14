<script lang="ts">
      import * as Accordion from "$lib/components/ui/accordion/index.js";
      import * as Card from "$lib/components/ui/card";
      import { Button } from "$lib/components/ui/button";
      import CheckmarkIcon from "lucide-svelte/icons/check";
      import CheckoutButton from "$lib/stripe/CheckoutButton.svelte";
      import { cn } from "$lib/utils";

      import { type PlanStructure } from "$lib/types/plans";
      import { goto } from "$app/navigation";

      let { tier = {} as PlanStructure, class: className = "", complete = true, applyCheckout = false } = $props();
</script>

<Card.Root
      class={cn(
            "w-[350px] flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out bg-zinc-800 shadow-xl",
            className
      )}
>
      {#if tier.recommended}
            <div class="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-xl text-xs font-semibold z-10">
                  Most Popular
            </div>
      {/if}

      <Card.Header class="">
            <Card.Title class="text-2xl font-bold text-foreground">
                  {tier.name} Plan
            </Card.Title>
            <Card.Description class="flex items-baseline space-x-2 pt-2">
                  <span class="text-4xl font-extrabold text-foreground">
                        ${tier.price}
                  </span>
                  <span class="text-muted-foreground">/month</span>
            </Card.Description>
      </Card.Header>

      <Card.Content class=" bg-zinc-900 m-4 rounded-lg">
            {#if !complete}
                  <Accordion.Root type="single" >
                        <Accordion.Item value="item-1" class="border-b-0">
                              <Accordion.Trigger class="">
                                    Features
                              </Accordion.Trigger>
                              
                              <Accordion.Content class="h-[200px] overflow-auto scrollbar">
                                    <ul class="space-y-3 ">
                                          {#each tier.features as feature}
                                                <li class="flex items-center space-x-3">
                                                      <CheckmarkIcon class="w-5 h-5 text-primary flex-shrink-0"/>
                                                      <span class="text-muted-foreground text-sm">
                                                            {feature}
                                                      </span>
                                                </li>
                                          {/each}
                                    </ul>
                              </Accordion.Content>
                        </Accordion.Item>
                  </Accordion.Root>
            {:else}
                  <div class="h-[250px]">
                        <ul class="space-y-3 ">
                              {#each tier.features as feature}
                                    <li class="flex items-center space-x-3">
                                          <CheckmarkIcon class="w-5 h-5 text-primary flex-shrink-0"/>
                                          <span class="text-muted-foreground text-sm">
                                                {feature}
                                          </span>
                                    </li>
                              {/each}
                        </ul>
                  </div>
            {/if}

      </Card.Content>

      <Card.Footer>
            {#if applyCheckout}
                  <CheckoutButton priceId={tier.priceId}>
                        Choose {tier.name} Plan
                  </CheckoutButton>
            {:else}
                  <Button class="w-full font-bold" onclick={() => goto("/auth")}>
                        Choose {tier.name}
                  </Button>
            {/if}
      </Card.Footer>
</Card.Root>