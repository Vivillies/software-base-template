<script lang="ts">
      import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
      import * as Sheet from "$lib/components/ui/sheet";
      import { Button } from "$lib/components/ui/button";
      import { Menu, Brackets } from "lucide-svelte";
      import { cn } from "$lib/utils";
      import { goto } from "$app/navigation";
      import type { ComponentType } from "svelte";

      interface NavItem {
            title: string;
            subLinks: Array<{
                  icon: ComponentType;
                  name: string;
                  href: string;
            }>;
      }

      const navItems: NavItem[] = [
      ];

      let isOpen = $state<boolean>(false);
      let scrollY: number;
      let innerWidth: number;
      let isLoading = $state<boolean>(true);

      function toggleMenu(): void {
            isOpen = !isOpen;
      }

      let navbar: HTMLElement;

      $effect(() => {
            isLoading = false;
            if (innerWidth >= 768) {
                  isOpen = false;
            }
      });
</script>


<nav
      bind:this={navbar}
      class={cn("py-2 px-4 fixed w-full transition-all duration-300 z-50 ")}
      class:shadow-lg={scrollY > 0}
>
      <div class="mx-auto w-full bg-zinc-900 shadow-2xl shadow-zinc-800 border-2 rounded-2xl px-12">
            <div class="w-full flex justify-around h-16">
                  <div
                        class="flex-shrink-0 flex justify-center items-center space-x-2"
                  >
                        <Brackets />
                        <h1 class="brand-font">SaaS-Base</h1>
                  </div>
                  <div class="flex text-white">
                        <div class="hidden md:ml-6 md:flex md:space-x-8">
                              {#each navItems as item}
                                    <DropdownMenu.Root>
                                          <DropdownMenu.Trigger>
                                                <Button class="font-bold h-[30px]">
                                                      {item.title}
                                                </Button>
                                          </DropdownMenu.Trigger>
                                          <DropdownMenu.Content>
                                                <DropdownMenu.Group>
                                                      {#each item.subLinks as subLink}
                                                            <a
                                                                  href={subLink.href}
                                                            >
                                                                  <DropdownMenu.Item
                                                                  >
                                                                        <!-- svelte-ignore svelte_component_deprecated -->
                                                                        <subLink.icon
                                                                        />
                                                                        {subLink.name}
                                                                  </DropdownMenu.Item>
                                                            </a>
                                                      {/each}
                                                </DropdownMenu.Group>
                                          </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                              {/each}
                        </div>
                  </div>

                  <div class="flex items-center space-x-2">
                        <div class="flex-shrink-0">
                              {#if !isLoading}
                                    <Button
                                          variant="default"
                                          class="w-[150px] font-bold "
                                          onclick={() => goto("/dashboard")}
                                    >
                                          Login
                                    </Button>
                              {/if}
                        </div>

                        <!-- Mobile View Navbar -->
                        <div class="md:hidden">
                              <Sheet.Root open={isOpen}>
                                    <Sheet.Trigger class="w-full h-full">
                                          <Button
                                                variant="ghost"
                                                size="icon"
                                                onclick={toggleMenu}
                                                class="bg-black border-2 border-white"
                                          >
                                                <Menu class="scale-[200%]"/>
                                          </Button>
                                    </Sheet.Trigger>
                                    <Sheet.Content
                                          side="right"
                                          class="w-[300px] sm:w-[400px]"
                                    >
                                          <Sheet.Header>
                                                <Sheet.Title>Menu</Sheet.Title>
                                          </Sheet.Header>
                                          <div class="py-4 flex flex-col space-y-2">
                                                {#each navItems as item, index}
                                                      <h1 class="text-2xl text-white w-full flex justify-center items-center border-b-2 border-white">
                                                            {item.title}
                                                      </h1>
                                                      {#each item.subLinks as subLink}
                                                            <Sheet.Close>
                                                                  <Button class="w-full flex justify-start items-center space-x-2">
                                                                        <subLink.icon />
                                                                        <h1>
                                                                              {subLink.name}
                                                                        </h1>
                                                                  </Button>
                                                            </Sheet.Close>
                                                      {/each}
                                                {/each}
                                          </div>
                                    </Sheet.Content>
                              </Sheet.Root>
                        </div>
                  </div>
            </div>
      </div>
</nav>