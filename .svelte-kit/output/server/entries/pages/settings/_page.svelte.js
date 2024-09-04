import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-171lafx">Settings</h1> <form method="POST"><p data-svelte-h="svelte-wt2p66">Calorie Goal</p> <input name="calorie" class="input">  <p data-svelte-h="svelte-fu29m6">Protein Goal</p> <input name="protein" class="input"> <input type="hidden" name="id"${add_attribute("value", data.session.user.id, 0)}> <button data-svelte-h="svelte-gtkoxm">Submit</button></form>`;
});
export {
  Page as default
};
