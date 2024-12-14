<script lang="ts">
    import { Button } from "$lib/components/ui/button";
	import * as Sidebar from "$lib/components/ui/sidebar";
    import { cn } from "$lib/utils";

	let { items }: { items: {
		title: string;
            items: Array<{ title: string; url: string; icon?: any, disabled?: boolean }>;
	}[];
	} = $props();
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
	<Sidebar.Menu>
		{#each items as groupItem (groupItem.title)}
					<Sidebar.MenuItem>
						<Sidebar.GroupLabel class="font-medium">
                                          {groupItem.title}
						</Sidebar.GroupLabel>
						{#if groupItem.items?.length}
							<Sidebar.MenuSub>
								{#each groupItem.items as item (item.title)}
                                                      {#if !item.disabled}
                                                            <Sidebar.MenuSubItem aria-disabled={item.disabled}>
                                                                  <Sidebar.MenuSubButton class={cn(item.disabled && "text-gray-600")}>
                                                                        {#snippet child({ props })}
                                                                        <a class="w-full" href={item.url} {...props} >
                                                                              <item.icon/>
                                                                              {item.title}
                                                                        </a>
                                                                        {/snippet}
                                                                  </Sidebar.MenuSubButton>
                                                            </Sidebar.MenuSubItem>
                                                      {/if}
								{/each}
							</Sidebar.MenuSub>
						{/if}
					</Sidebar.MenuItem>
				{/each}
	</Sidebar.Menu>
</Sidebar.Group>
