<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
      import { Settings, LogOut, ChevronsUpDown, CreditCard } from "lucide-svelte";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";

      import { authClient } from "$lib/auth/client-auth";
      import { goto } from "$app/navigation";
      

      const session = authClient.useSession()

	const sidebar = useSidebar();
</script>

{#if !$session.isPending && $session}
      <Sidebar.Menu>
            <Sidebar.MenuItem>
                  <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                              {#snippet child({ props })}
                                    <Sidebar.MenuButton
                                          {...props}
                                          size="lg"
                                          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                    >
                                          <Avatar.Root class="h-8 w-8 rounded-lg">
                                                <Avatar.Image src={$session?.data?.user.image} alt={$session?.data?.user.name} />
                                                <Avatar.Fallback class="rounded-lg">??</Avatar.Fallback>
                                          </Avatar.Root>
                                          <div class="grid flex-1 text-left text-sm leading-tight">
                                                <span class="truncate font-semibold">{$session?.data?.user.name}</span>
                                                <span class="truncate text-xs">{$session?.data?.user.email}</span>
                                          </div>
                                          <ChevronsUpDown class="ml-auto size-4" />
                                    </Sidebar.MenuButton>
                              {/snippet}
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content
                              class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
                              side={sidebar.isMobile ? "bottom" : "right"}
                              align="end"
                              sideOffset={4}
                        >
                              <DropdownMenu.Label class="p-0 font-normal">
                                    <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                          <Avatar.Root class="h-8 w-8 rounded-lg">
                                                <Avatar.Image src={$session?.data?.user.image} alt={$session?.data?.user.name} />
                                                <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
                                          </Avatar.Root>
                                          <div class="grid flex-1 text-left text-sm leading-tight">
                                                <span class="truncate font-semibold">{$session?.data?.user.name}</span>
                                                <span class="truncate text-xs">{$session?.data?.user.email}</span>
                                          </div>
                                    </div>
                              </DropdownMenu.Label>

                              <DropdownMenu.Separator />

                              <DropdownMenu.Group>
                                    <DropdownMenu.Item class="cursor-pointer" onclick={() => goto("/dashboard/settings")}>
                                          <Settings />
                                          Settings
                                    </DropdownMenu.Item>
                                    
                                    <DropdownMenu.Item class="cursor-pointer">
                                          <CreditCard />
                                          Billing
                                    </DropdownMenu.Item>
                              </DropdownMenu.Group>

                              <DropdownMenu.Separator />

                              <DropdownMenu.Item
                                    class="text-red-500 cursor-pointer"
                                    onclick={async() => authClient.signOut({ fetchOptions: { onSuccess: () => goto("/") } })}
                              >
                                    <LogOut />
                                    Log out
                              </DropdownMenu.Item>
                        </DropdownMenu.Content>
                  </DropdownMenu.Root>
            </Sidebar.MenuItem>
      </Sidebar.Menu>
{/if}