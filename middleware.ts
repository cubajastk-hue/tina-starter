import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Pokud uživatel jde na /admin, nechej ho projít na statický index.html
  if (request.nextUrl.pathname === '/admin') {
    return NextResponse.rewrite(new URL('/admin/index.html', request.url))
  }
}

export const config = {
  matcher: '/admin',
}
