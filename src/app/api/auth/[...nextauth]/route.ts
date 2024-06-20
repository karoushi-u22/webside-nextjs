import SteamProvider from 'next-auth-steam'
import NextAuth from 'next-auth/next'

import type { NextRequest } from 'next/server'

const realm = process.env.HOST ?? 'http://localhost:3000';

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } }
) {
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: `${realm}/api/auth/callback`
      })
    ]
  })
}
export {
  handler as GET,
  handler as POST
}
