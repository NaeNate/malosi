import { redirect } from "@sveltejs/kit"
import { format } from "date-fns"
import { prisma } from "../../lib/prisma"

export const actions = {
  default: async ({ request }) => {
    const { userId, servings, calorie, protein, name } = Object.fromEntries(
      await request.formData(),
    )

    const date = format(new Date(), "yyyy-MM-dd")

    const day = await prisma.day.upsert({
      where: { date_userId: { date, userId } },
      create: { userId, date },
      update: {},
    })

    const food = await prisma.food.create({
      data: {
        name,
        servings: +servings,
        calorie: +calorie,
        protein: +protein,
        dayId: day.id,
      },
    })

    redirect(303, "/")
  },
}
