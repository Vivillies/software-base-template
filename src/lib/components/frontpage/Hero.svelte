<script lang="ts">
      import { goto } from "$app/navigation";
      import { Button } from "$lib/components/ui/button";
      import { quintOut } from "svelte/easing";

      import { fly, fade } from "svelte/transition";

      let visible = $state<boolean>(false);

      function animateCharacter(node: Node, {delay = 0, duration = 400}) {
            return {
			delay,
			duration,
			css: (t: any) => {
				const eased = quintOut(t);
				return `
					transform: scale(${1 - eased * 0.5}) translateY(${eased * 20}px);
					opacity: ${1 - eased};
				`;
			}
		};

      }

      $effect(() => {
            visible = true;
      });
</script>

<section
      class="relative min-h-screen flex justify-center items-center space-y-10 overflow-hidden"
>
      <div class="container mx-auto px-4 py-20 relative z-10">
            <div
                  class="flex flex-col space-x-10 lg:flex-row items-center justify-between"
            >
                  <!-- Text content -->
                  <div
                        class="lg:w-1/2 text-white mb-12 lg:mb-0 px-4 md:px-8 lg:px-0"
                  >
                        {#if visible}
                              <h1
                                    in:fly={{ y: 50, duration: 1000 }}
                                    class="text-4xl sm:text-5xl md:text-7xl text-center lg:text-left font-extrabold mb-6 leading-tight"
                              >
                                    Revolutionize Your
                                    <span
                                          class="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500"
                                    >
                                          Workflow
                                    </span>
                              </h1>

                              <p
                                    in:fly={{
                                          y: 50,
                                          duration: 1000,
                                          delay: 300,
                                    }}
                                    class="text-lg sm:text-xl md:text-2xl text-center lg:text-left mb-8 text-gray-300 max-w-3xl mx-auto lg:mx-0"
                              >
                                    Accelerate your web development journey with our meticulously 
                                    crafted SvelteKit 5 solution, featuring an
                                    authentication system and seamlessly integrated  Stripe checkout. 
                                    Leverage our advanced, pre-configured  tech stack with Svelte $runes 
                                    to transform  your digita vision  into a robust web 
                                    application—delivering professional-grade  websites 
                                    with unprecedented efficiency and elegance.
                              </p>

                              <div in:fly={{ y: 50, duration: 1000, delay: 600, }} class="flex justify-center lg:justify-start" >
                                    <Button
                                          class="w-full sm:w-auto px-8 py-3 font=bold bg-white text-gray-900 hover:bg-gray-200 hover:text-black transition-all duration-300 transform"
                                          onclick={() => goto("/auth")}
                                    >
                                          Get Started
                                    </Button>
                              </div>
                        {/if}
                  </div>

                  <!-- 3D-like mockup -->
                  {#if visible}
                        <div
                              in:fade={{ duration: 1000, delay: 300 }}
                              class="lg:w-1/2"
                        >
                              <div class="relative">
                                    <div
                                          class="absolute inset-0 bg-gradient-to-r from-orange-400 to-gray-600 blur-2xl opacity-30"
                                    ></div>
                                    <img
                                          src="https://via.placeholder.com/600x600"
                                          alt="Product mockup"
                                          class="relative rounded-lg shadow-2xl transform transition-transform duration-300 grayscale"
                                    />
                              </div>
                        </div>
                  {/if}
            </div>
      </div>
</section>
