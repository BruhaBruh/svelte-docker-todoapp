<script lang="ts" context="module">
</script>

<script lang="ts">
  import todo from "../stores/todo";

  export let value = "";

  const add = () => {
    if (value.trim() === "") return;
    todo.add(value.trim());
    value = "";
  };
</script>

<article class="w-full flex items-center space-x-2">
  <input
    class="bg-gray-100 rounded-lg px-4 py-2 border border-transparent hover:border-sky-500 outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition ease-in flex-1"
    bind:value
    on:keydown={(e) => {
      if (e.keyCode !== 13) return;
      e.preventDefault();
      add();
    }}
  />
  <button
    class="h-full bg-sky-400 font-medium hover:bg-sky-500 rounded-lg px-4 py-2 transition ease-in"
    on:click={add}>Add</button
  >
</article>
