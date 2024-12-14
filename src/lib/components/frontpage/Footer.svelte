<script lang="ts">
      interface FooterLink {
            title: string;
            items: { name: string; href: string }[];
      }

      interface SocialMedia {
            name: string;
            href: string;
            icon: string;
      }

      const footerLinks: FooterLink[] = [
      ];

      const socialMedia: SocialMedia[] = [
            {
                  name: "Twitter",
                  href: "https://x.com",
                  icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            },
      ];
</script>

<footer class="h-[40vh] bg-black text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div class="border-t border-gray-700 pb-8"></div>

            <div class="flex flex-col justify-center items-center">
                  <p class="text-gray-400 text-base text-center">
                        Making the world a better place through
                        constructing elegant software.
                  </p>
            </div>

            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                  <div
                        class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"
                  >
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                              {#each footerLinks.slice(0, 2) as section}
                                    <div>
                                          <h3
                                                class="text-sm font-semibold text-gray-300 tracking-wider uppercase"
                                          >
                                                {section.title}
                                          </h3>
                                          <ul class="mt-4 space-y-4">
                                                {#each section.items as item}
                                                      <li>
                                                            <a
                                                                  href={item.href}
                                                                  class="text-base text-gray-400 hover:text-gray-300"
                                                            >
                                                                  {item.name}
                                                            </a>
                                                      </li>
                                                {/each}
                                          </ul>
                                    </div>
                              {/each}
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                              {#each footerLinks.slice(2) as section}
                                    <div>
                                          <h3
                                                class="text-sm font-semibold text-gray-300 tracking-wider uppercase"
                                          >
                                                {section.title}
                                          </h3>
                                          <ul class="mt-4 space-y-4">
                                                {#each section.items as item}
                                                      <li>
                                                            <a
                                                                  href={item.href}
                                                                  class="text-base text-gray-400 hover:text-gray-300"
                                                            >
                                                                  {item.name}
                                                            </a>
                                                      </li>
                                                {/each}
                                          </ul>
                                    </div>
                              {/each}
                        </div>
                  </div>
            </div>

            <div class="mt-12 border-t border-gray-700 pt-8">
                  <p class="text-base text-gray-400 xl:text-center">
                        &copy; 2024 <span class="text-gray-200">SaaS-Base</span>. All rights reserved.
                  </p>
            </div>
      </div>
</footer>
