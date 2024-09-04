import { r as redirect } from "../../../chunks/index.js";
import { p as prisma } from "../../../chunks/prisma.js";
const load = async (event) => {
  const session = await event.locals.auth();
  if (!session) redirect(302, "/");
  return { session };
};
const actions = {
  default: async ({ cookies, request }) => {
    const { id, calorie, protein } = Object.fromEntries(
      await request.formData()
    );
    await prisma.user.update({ where: { id }, data: { calorie, protein } });
  }
};
export {
  actions,
  load
};
