<script lang="ts">
      import * as Accordion from "$lib/components/ui/accordion";

      let faqs = [
            {
                  question: `"Is there a free trial?"`,
                  answer: "We believe in the value our product provides hence we simply refuse to provide a free trial.",
            },
            {
                  question: `"Can I cancel my subscription at any time?"`,
                  answer: "You can always cancel your subscription at any time with zero road-blocks. Just go to your settings > Billing > Cancel Subscription",
            },
            {
                  question: `"Will I be kicked out of the discord server if I cancel?"`,
                  answer: "Yes! The server is meant to be for communication between us and you although it also serves as a community between other builders too!",
            },
            {
                  question: `"If I use my own database, will you have access to my data?"`,
                  answer: "We simply provide you with the template and visual parts. We have no way of reaching your products data.",
            },
      ];
</script>

<section class="w-full h-[50vh]">
      <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
            </h2>
            <div class="max-w-3xl mx-auto">
                  <Accordion.Root type="single" class="space-y-4">
                        {#each faqs as faq, index}
                              <Accordion.Item
                                    value={`item-${index}`}
                                    class="bg-gray-800 rounded-lg overflow-hidden"
                              >
                                    <Accordion.Trigger
                                          class="w-full p-4 text-left font-semibold hover:bg-gray-700 transition-colors"
                                    >
                                          {faq.question}
                                    </Accordion.Trigger>
                                    <Accordion.Content class="bg-gray-800">
                                          <p class="text-gray-300 p-4">
                                                {faq.answer}
                                          </p>
                                    </Accordion.Content>
                              </Accordion.Item>
                        {/each}
                  </Accordion.Root>
            </div>
      </div>
</section>
