<script lang="ts">
      import NavItems from "./nav-items.svelte";
      import NavCategorized from "./nav-categorized.svelte";
	import NavSecondary from "$lib/components/navigation/dashboard/nav-secondary.svelte";
	import NavUser from "$lib/components/navigation/dashboard/nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

      import { Send, LifeBuoy, Blocks, Map, Brackets, BookTemplate, HandCoins, SquareDashed, LetterText, Footprints } from "lucide-svelte";

	const data = {
		projects: [
			{ name: "Dashboard",    url: "/dashboard",     icon: Blocks       },
                  { name: "Template",     url: "/template",      icon: BookTemplate },
		],
            categorized: [
                  { title: "Components (soon)", items: [
                        { title: "Navigation",  url: "", icon: Map,           disabled: true },
                        { title: "Price Cards", url: "", icon: HandCoins,     disabled: true },
                        { title: "Carts",       url: "", icon: SquareDashed,  disabled: true },
                        { title: "Forms",       url: "", icon: LetterText,    disabled: true },
                        { title: "Footers",     url: "", icon: Footprints,    disabled: true },
                  ] }
            ],
            navItems: [
			{ title: "Support",     url: "#", icon: LifeBuoy      },
			{ title: "Feedback",    url: "#", icon: Send          },
		],
	};

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps} class="bg-zinc-950">
	<Sidebar.Header class="bg-zinc-950">
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<div {...props}>
							<div class="bg-sidebar-primary text-sidebar-primary-foreground bg-orange-700 flex aspect-square size-8 items-center justify-center rounded-lg">
								<!-- <CalendarClock class="size-5" /> -->
                                                <Brackets />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-semibold">SaaS-Base</span>
								<span class="truncate text-xs">Software Solution</span>
							</div>
						</div>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content class="bg-zinc-950">
		<NavItems items={data.projects} />
            <NavCategorized items={data.categorized} />
		<NavSecondary items={data.navItems} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer class="bg-zinc-950">
		<NavUser />
	</Sidebar.Footer>
</Sidebar.Root>
