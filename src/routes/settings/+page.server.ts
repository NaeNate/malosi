import { prisma } from "$lib/prisma"

export const actions = {
  default: async ({ request }) => {
    const { id, calorie, protein } = Object.fromEntries(
      await request.formData(),
    )

    await prisma.user.update({
      where: { id },
      data: { calorie: +calorie, protein: +protein },
    })
  },
}
