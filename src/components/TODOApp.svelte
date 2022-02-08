<script lang="ts" context="module">
</script>

<script lang="ts">
  import todo from "../stores/todo";
  import TodoHeader from "./TODOHeader.svelte";
  import TodoRow from "./TODORow.svelte";
</script>

<section class="w-full space-y-2">
  <TodoHeader />
  {#each $todo as t (t.id)}
    <TodoRow {...t} />
  {/each}
</section>
