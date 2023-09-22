<script>
  import "../app.postcss";
  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { Icon } from "flowbite-svelte-icons";
</script>

<Navbar let:hidden let:toggle>
  <NavBrand>
    <DarkMode />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3"
    >
      <a href="{base}/">Changelog Generator </a>
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="https://github.com/JensvanZutphen">
      <Icon name="github-solid" />
    </NavLi>
  </NavUl>
</Navbar>
<div class="mt-5 w-4/5 mx-auto">
  <slot />
</div>
