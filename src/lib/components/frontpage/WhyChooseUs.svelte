<script lang="ts">
      import { FileLock2, ScrollText, Heart, Handshake, CalendarDays } from "lucide-svelte";

      interface Reason {
            icon: any;
            title: string;
            description: string;
      }

      const reasons: Reason[] = [
            {
                  icon: FileLock2,
                  title: "Uncompromising Security",
                  description: "Your data is protected with state-of-the-art encryption and security protocols. We cannot access your projects!",
            },
            {
                  icon: ScrollText,
                  title: "Documented Content",
                  description: "Our well documented infrastructure ensures your work is always swift and efficient.",
            },
            {
                  icon: Heart,
                  title: "User-Centric Approach",
                  description: "We're committed to your success by always listening to suggestions for future software updates and features.",
            },
            {
                  icon: Handshake,
                  title: "Community Members",
                  description: "All of our users are welcome to become part of a private community of builders. Expanding their network ontop of building",
            },
            {
                  icon: CalendarDays,
                  title: "Frequent Updates",
                  description: "Obtain easy to implement components to use in your own products. From Sidebars to Charts and more!",
            },
      ];
</script>

<section class="bg-gradient-to-b from-transparent via-black to-transparent text-white py-20">
      <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto">
                  {#each reasons as reason}
                        <div class="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm bg-white text-black p-6 rounded-lg transition-[.2s] duration-300 shadow-2xl hover:bg-orange-500 hover:text-white hover:shadow-white">
                              <div class="flex justify-center mb-4">
                                    <svelte:component
                                          this={reason.icon}
                                          size={48}
                                    />
                              </div>
                              <h3 class="text-xl font-bold mb-2 text-center">
                                    {reason.title}
                              </h3>
                              <p class="text-center">
                                    {reason.description}
                              </p>
                        </div>
                  {/each}
            </div>
      </div>
</section>