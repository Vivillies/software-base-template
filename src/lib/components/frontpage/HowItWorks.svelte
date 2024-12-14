<script lang="ts">
      import { inview, type Options } from "svelte-inview";
      import { cn } from "$lib/utils";

      interface Section {
            title: string;
            description: string;
            scrollTo: string;
            src?: string;
            visible: boolean;
      }

      const options: Options = {
            threshold: 0.5,
      }

      const sections: Section[] = $state([
            {
                  title: "Signing up and Pay",
                  description: "After signing up you will be promoted to subscribe",
                  src: "https://images.unsplash.com/photo-1731331095592-c86db3fa1d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  scrollTo: "signup",
                  visible: false
            },
            {
                  title: "Setting everything up",
                  description: "Navigate your way to 'Template' and extract the code",
                  src: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  scrollTo: "setup",
                  visible: false
            },
            {
                  title: "Community Networking",
                  description: "Join the Discord community!",
                  src: "https://plus.unsplash.com/premium_photo-1732569119565-8fa2fe8faaa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  scrollTo: "createshifts",
                  visible: false
            },
      ]);

</script>

<section class="relative w-full flex pt-[10rem]">
      <div class="sticky top-0 w-1/4 h-screen flex flex-col justify-center py-4 px-10 space-y-4">
            {#each sections as section, index}
                  <div
                        class={cn(
                              "flex space-x-5 p-2 rounded transition-colors text-gray-500",
                              section.visible && "bg-stone-800 text-white"
                        )}
                  >
                        <h1 class={cn(
                              "bg-gray-700 w-[50px] h-[50px] rounded-full flex justify-center items-center",
                              section.visible && "bg-orange-600 "
                        )}>
                              {index + 1}
                        </h1>
                        <h1 class="h-full flex justify-center items-center">
                              {section.title}
                        </h1>
                  </div>
            {/each}
      </div>

      <div class="w-full h-fit flex flex-col justify-center items-center">
                  {#each sections as section, index}
                  
                              <div
                                    use:inview={options}
                                    oninview_enter={() => sections[index].visible = true}
                                    oninview_leave={() => sections[index].visible = false}
                                    class="flex flex-col justify-start space-y-2 h-screen"
                              >
                                    <h1 class="text-5xl font-bold">
                                          {section.title}
                                    </h1>
                                    <h2 class="text-2xl max-w-[1000px] text-gray-400">
                                          {section.description}
                                    </h2>
                                    <img
                                          src={section.src}
                                          alt={section.title}
                                          class="w-full max-w-[1000px] h-[500px] object-cover rounded-lg shadow-lg"
                                    />
                              </div>
                  {/each}
      </div>
</section>
