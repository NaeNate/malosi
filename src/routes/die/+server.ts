import { json } from "@sveltejs/kit"
import { prisma } from "../../lib/prisma.js"

export const POST = async ({ request }) => {
  const { id } = await request.json()
  await prisma.food.delete({ where: { id } })

  return json({}, { status: 200 })
}
