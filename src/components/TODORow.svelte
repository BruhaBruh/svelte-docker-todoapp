<script lang="ts" context="module">
</script>

<script lang="ts">
  import todo from "../stores/todo";

  export let id: number;
  export let checked = true;
  export let text = "tests";

  const handleClick = () => {
    todo.remove(id);
  };

  $: todo.setChecked(id, checked);
</script>

<div
  class="grid gap-2 max-w-full"
  style="grid-template-columns: max-content 1fr max-content"
>
  <input type="checkbox" bind:checked class="self-center" />
  <p
    class="text-lg truncate whitespace-normal self-center transition ease-in"
    class:text-gray-900={!checked}
    class:text-gray-400={checked}
    class:line-through={checked}
  >
    {text}
  </p>
  <button
    class="h-full bg-red-400 font-medium hover:bg-red-500 rounded-lg px-4 py-2 transition ease-in self-center"
    on:click={handleClick}>Remove</button
  >
</div>
