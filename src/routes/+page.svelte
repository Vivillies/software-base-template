<script lang="ts">
      import NavBar from "$lib/components/navigation/NavBar.svelte";
      import Hero from "$lib/components/frontpage/Hero.svelte";
      import Features from "$lib/components/frontpage/Features.svelte";
      import HowItWorks from "$lib/components/frontpage/HowItWorks.svelte";
      import WhyChooseUs from "$lib/components/frontpage/WhyChooseUs.svelte";
      import Pricing from "$lib/components/frontpage/Pricing.svelte";
      import Faq from "$lib/components/frontpage/FAQ.svelte"
      import Contact from "$lib/components/frontpage/Contact.svelte";
      import Footer from "$lib/components/frontpage/Footer.svelte";

      import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
</script>

<section class="bg-black bg-opacity-70 grid-bg">
      <NavBar/>
      <ScrollArea class="h-screen w-full">
            <Hero />
            <Features />
            <HowItWorks />
            <WhyChooseUs />
            <Pricing />
            <Faq />
            <Contact />
            <Footer />
      </ScrollArea>
</section>
