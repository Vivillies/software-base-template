<script lang="ts">
      import * as Card from "$lib/components/ui/card"
      import { Button } from "$lib/components/ui/button";
      import ProviderLogin from "$lib/components/auth/ProviderLogin.svelte";
      import { CircleUserRound, Home } from "lucide-svelte";
      import { Separator } from "$lib/components/ui/separator";
</script>


<div class="w-full max-lg:flex max-lg:h-screen justify-center items-center  lg:grid lg:grid-cols-2 bg-black bg-opacity-70 grid-bg">
      
      <div class="w-full h-screen max-lg:hidden">
            <img
                  src="https://images.unsplash.com/photo-1663517768994-a65e6ab3a40a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="placeholder"
                  class="h-full w-full object-cover"
            />
      </div>

      <div class="h-full flex items-center justify-center shadow-2xl shadow-gray-900">
            <Card.Root class="mx-auto max-w-sm ">
                  <Card.Header>
                        <Card.Title class="flex flex-col justify-center items-center text-2xl">
                              <CircleUserRound class="w-[70px] h-[70px]"/>
                              <h1>
                                    Login Or Register
                              </h1>
                        </Card.Title>
                        <Card.Description class="text-center">
                              Doesn't matter if you have an account or not, just select one of the bellow options!
                        </Card.Description>
                  </Card.Header>
                  <Card.Content class="w-full">
                        <ProviderLogin provider="google"/>

                        <Separator />
                  </Card.Content>


                  <Card.Footer>
                        <Button variant="secondary" class="w-full" href="/">
                              <Home />
                              Back to Homepage
                        </Button>
                  </Card.Footer>
            </Card.Root>
      </div>
</div>
