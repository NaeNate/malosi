import { prisma } from "$lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"

declare module "@auth/sveltekit" {
  interface Session {
    user: {
      id: string
      calorie: number
      protein: number
    }
  }
}

export const { handle } = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  pages: { newUser: "/settings" },
  callbacks: {
    session({ session }) {
      return session
    },
  },
})
