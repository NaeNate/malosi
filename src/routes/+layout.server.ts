import { format } from "date-fns"
import { prisma } from "../lib/prisma.js"

export const load = async (event) => {
  const session = await event.locals.auth()

  const day = await prisma.day.findUnique({
    where: {
      date_userId: {
        date: format(new Date(), "yyyy-MM-dd"),
        userId: session.userId,
      },
    },
    include: { foods: true },
  })

  return { session, day }
}
