<script lang="ts">
	import '../app.css';
      import { ModeWatcher } from "mode-watcher";
      import { Toaster } from "$lib/components/ui/sonner";

	let { children } = $props();
</script>

<Toaster />
<ModeWatcher defaultMode="dark"/>
<div class="dark">
      {@render children()}
</div>