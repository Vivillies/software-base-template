<script lang="ts">
      import AppSidebar from "$lib/components/navigation/dashboard/app-sidebar.svelte";
      import * as Sidebar from "$lib/components/ui/sidebar";
      import * as Breadcrumb from "$lib/components/ui/breadcrumb";
      import { Separator } from "$lib/components/ui/separator";
      import Onboarding from "$lib/components/onboarding/Onboarding.svelte";

      import { page } from "$app/stores";

      function capitalizeWord(input: string): string {
            return input.charAt(0).toUpperCase + input.slice(1);
      }

      let { children } = $props();
</script>

<Sidebar.Provider>
      <AppSidebar />
      <div class="w-full flex flex-col">
            <header class="flex h-16 shrink-0 items-center gap-2">
                  <div class="w-full flex items-center gap-2 px-4">
                        <Sidebar.Trigger class="-ml-1" />
                        <Separator orientation="vertical" class="mr-2 h-4" />
                        <Breadcrumb.Root
                              class="w-full bg-zinc-950 rounded-xl px-4 py-2"
                        >
                              <Breadcrumb.List>
                                    <Breadcrumb.Item class="">
                                          <Breadcrumb.Link href="/dashboard"
                                                >Dashboard</Breadcrumb.Link
                                          >
                                          <Separator
                                                orientation="vertical"
                                                class="mr-2 h-4"
                                          />
                                    </Breadcrumb.Item>

                                    {@const pathParts = $page.url.pathname
                                          .replace("/dashboard", "")
                                          .split("/")
                                          .filter((part) => part !== "")}

                                    {#each pathParts.slice(0, -1) as path, index}
                                          <Breadcrumb.Item>
                                                <Breadcrumb.Link
                                                      href={`/dashboard/${pathParts.slice(0, index + 1).join("/")}`}
                                                >
                                                      {path}
                                                </Breadcrumb.Link>
                                          </Breadcrumb.Item>
                                          <Breadcrumb.Separator
                                                class="hidden md:block"
                                          />
                                    {/each}

                                    {#if pathParts.length > 0}
                                          <Breadcrumb.Item>
                                                <Breadcrumb.Page>
                                                      {pathParts[
                                                            pathParts.length - 1
                                                      ]}
                                                </Breadcrumb.Page>
                                          </Breadcrumb.Item>
                                    {/if}
                              </Breadcrumb.List>
                        </Breadcrumb.Root>
                  </div>
            </header>
            <div class="w-full h-full flex dark overflow-y-auto">
                  {@render children?.()}
            </div>
      </div>
      <!-- <Onboarding /> -->
</Sidebar.Provider>
