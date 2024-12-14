<script lang="ts">
      import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
      import { Button } from "$lib/components/ui/button";
      import { Input } from "$lib/components/ui/input";
      import { Label } from "$lib/components/ui/label";
      import { Separator } from "$lib/components/ui/separator";
      import { Tabs, TabsContent, TabsList, TabsTrigger } from "$lib/components/ui/tabs";
      import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
      import { toast } from "svelte-sonner";
      import { authClient } from "$lib/auth/client-auth";
    import { Badge } from "$lib/components/ui/badge";

      const session = authClient.useSession();

      let name = $session?.data?.user.name;
      let email = $session?.data?.user.email;
      let profileImage = $session?.data?.user.image;

      async function updateProfile() {
            try {
                  // Implement profile update logic here
                  toast.success("Profile updated successfully");
            } catch (error) {
                  toast.error("Failed to update profile");
            }
      }

      function handleImageUpload(event: Event) {
            const input = event.target as HTMLInputElement;
            if (input.files && input.files[0]) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                        profileImage = e.target?.result as string;
                  };
                  reader.readAsDataURL(input.files[0]);
            }
      }
</script>

<div class="container mx-auto p-6 space-y-6">
      <Card>
            <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                        Manage your account preferences and settings
                  </CardDescription>
            </CardHeader>
            <CardContent>
                  <Tabs value="profile">
                        <TabsList class="grid w-full grid-cols-2">
                              <TabsTrigger value="profile">Profile</TabsTrigger>
                              <TabsTrigger value="security">Security</TabsTrigger>
                        </TabsList>

                        <TabsContent value="profile">
                              <div class="space-y-4">
                                    <div class="flex items-center space-x-4">
                                          <Avatar class="h-24 w-24">
                                                <AvatarImage
                                                      src={profileImage}
                                                      alt="Profile Picture"
                                                />
                                                <AvatarFallback>
                                                      {$session?.data?.user.name.charAt(
                                                            0,
                                                      )}
                                                </AvatarFallback>
                                          </Avatar>
                                          <div>
                                                <input
                                                      type="file"
                                                      accept="image/*"
                                                      class="hidden"
                                                      id="imageUpload"
                                                      on:change={handleImageUpload}
                                                />
                                                <Label
                                                      for="imageUpload"
                                                      class="cursor-pointer inline-block bg-primary text-primary-foreground px-4 py-2 rounded"
                                                >
                                                      Change Avatar
                                                </Label>
                                          </div>
                                    </div>

                                    <div
                                          class="grid w-full max-w-sm items-center gap-1.5"
                                    >
                                          <Label for="name">
                                                Name
                                          </Label>
                                          <Input
                                                type="text"
                                                id="name"
                                                placeholder="Your name"
                                                bind:value={name}
                                          />
                                    </div>

                                    <div
                                          class="grid w-full max-w-sm items-center gap-1.5"
                                    >
                                          <Label for="email">Email</Label>
                                          <Input
                                                type="email"
                                                id="email"
                                                placeholder="Your email"
                                                bind:value={email}
                                                disabled
                                          />
                                    </div>

                                    <div>
                                          <Label>Account Created</Label>
                                          <p
                                                class="text-sm text-muted-foreground"
                                          >
                                                {$session?.data?.user.createdAt}
                                          </p>
                                    </div>

                                    <Button onclick={updateProfile}>
                                          Update Profile
                                    </Button>
                              </div>
                        </TabsContent>

                        <TabsContent value="security">
                              <div class="space-y-4">
                                    <div
                                          class="grid w-full max-w-sm items-center gap-1.5"
                                    >
                                          <Label for="current-password"
                                                >Current Password</Label
                                          >
                                          <Input
                                                type="password"
                                                id="current-password"
                                                placeholder="Enter current password"
                                          />
                                    </div>

                                    <div
                                          class="grid w-full max-w-sm items-center gap-1.5"
                                    >
                                          <Label for="new-password"
                                                >New Password</Label
                                          >
                                          <Input
                                                type="password"
                                                id="new-password"
                                                placeholder="Enter new password"
                                          />
                                    </div>

                                    <div
                                          class="grid w-full max-w-sm items-center gap-1.5"
                                    >
                                          <Label for="confirm-password"
                                                >Confirm New Password</Label
                                          >
                                          <Input
                                                type="password"
                                                id="confirm-password"
                                                placeholder="Confirm new password"
                                          />
                                    </div>

                                    <Button variant="destructive"
                                          >Change Password</Button
                                    >
                              </div>
                        </TabsContent>
                  </Tabs>
            </CardContent>
      </Card>
</div>
