<script lang="ts">
      import { enhance } from "$app/forms";
</script>

<section
      class="bg-gradient-to-b from-transparent via-black to-black text-white py-20 flex justify-center items-center"
>
      <div
            class="flex flex-col justify-center items-center w-full md:flex-row gap-12"
      >
            <div class="md:w-1/2">
                  <h3 class="text-2xl font-semibold mb-6">
                        Still got questions? Contact us by using the bellow
                        form!
                  </h3>
                  <form
                        on:submit|preventDefault
                        action="?/contact"
                        class="space-y-4"
                  >
                        <div>
                              <label for="email" class="block mb-2 font-medium">
                                    Email *
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    required
                                    class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white"
                              />
                        </div>
                        <div>
                              <label
                                    for="message"
                                    class="block mb-2 font-medium"
                              >
                                    Message
                              </label>
                              <textarea
                                    id="message"
                                    required
                                    rows="4"
                                    class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white"
                              ></textarea>
                        </div>
                        <button
                              type="submit"
                              class="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                        >
                              Send Message
                        </button>
                  </form>
            </div>
      </div>
</section>
