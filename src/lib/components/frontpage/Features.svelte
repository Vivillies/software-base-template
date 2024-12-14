<script lang="ts">
      import { ChartAreaIcon, Database, Blocks, UserCircle } from "lucide-svelte";
      import { inview } from "svelte-inview";
      import type { Options } from "svelte-inview";
      import { cn } from "$lib/utils";

      let features = $state([
            {
                  icon: ChartAreaIcon,
                  title: "Boost Productivity",
                  description: "Copy the template, read the documentation and start working on your product within hours",
                  visible: false,
            },
            {
                  icon: Database,
                  title: "Database compatibility",
                  description: "Use your own database provider. From Sql to NoSql almost everything is possible!",
                  visible: false,
            },
            {
                  icon: Blocks,
                  title: "Diverse Components",
                  description: "Get access to different UI components for all kinds of purposes, from Sidebars to Popups",
                  visible: false,
            },
            {
                  icon: UserCircle,
                  title: "Easy to use Authentication",
                  description: "Utilize our production-ready authentication based on an open-source project. Accepting even OAuth prodivers!",
                  visible: false,
            },
      ]);

      const options: Options = {
            threshold: 0.5,
            unobserveOnEnter: true,
      };
</script>

<section class="w-full flex justify-center items-center">
      <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                  Unlock Your Potential
            </h2>
            <div class="grid justify-center items-center gap-8">
                  {#each features as feature, index}
                        <div
                              use:inview={options}
                              oninview_enter={() =>
                                    (features[index].visible = true)}
                              class={cn(
                                    "bg-gray-800 rounded-lg p-6 transform transition-all duration-300  hover:shadow-xl border border-gray-700",
                                    "transition-all duration-700 delay-500 ease-out",
                                    feature.visible
                                          ? "opacity-100 translate-x-0"
                                          : "opacity-0 -translate-x-[100px]",
                              )}
                        >
                              <div class="flex items-center mb-4 space-x-5">
                                    <feature.icon class="w-10 h-10" />
                                    <h3 class="text-2xl font-semibold">
                                          {feature.title}
                                    </h3>
                              </div>
                              <p class="text-gray-300">{feature.description}</p>
                        </div>
                  {/each}
            </div>
      </div>
</section>
