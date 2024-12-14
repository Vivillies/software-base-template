<script lang="ts">
      import PriceCard from "$lib/components/ui/pricing/price-card.svelte";
      import { plan } from "$lib/types/plans";

      let observer: any;
      let planElements: any = [];

      $effect(() => {
            observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    entry.target.classList.add("animate-plan");
                              }
                        });
                  },
                  { threshold: 0.1 },
            );

            planElements.forEach((el: any) => observer.observe(el));

            return () => observer.disconnect();
      });
</script>

<section
      class="bg-gradient-to-b from-transparent via-black to-transparent text-white py-20"
>
      <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
                  One single plan for a fair monthly price
            </h2>

            <div class="w-full flex justify-center items-center">
                  <PriceCard tier={plan} />
            </div>
      </div>
</section>
