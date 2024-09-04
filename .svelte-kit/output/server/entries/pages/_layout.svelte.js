import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<nav class="flex gap-4 p-4"><a href="/" class="gradient text-2xl font-semibold" data-svelte-h="svelte-slvn6m">Malosi</a> <a href="/" class="text-2xl" data-svelte-h="svelte-1mwd5c1">About</a> <div class="ml-auto">${data.session ? `<button class="size-12 rounded-full bg-primary"></button> ${``}` : `<button data-svelte-h="svelte-vdunxk">Sign In</button>`}</div></nav> <main class="mx-auto my-8 w-4/5">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
