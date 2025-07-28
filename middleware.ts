import { NextRequest, NextResponse } from 'next/server'

// Карта направлений
const destinations: Record<string, string> = {
  macao: "https://www.trip.com/?Allianceid=6106178&SID=242250513&trip_sub1=&trip_sub3=D4604168",
  hongkong: "https://www.trip.com/?Allianceid=6106178&SID=242250492&trip_sub1=&trip_sub3=D4604182",
  singapore: "https://www.trip.com/?Allianceid=6106178&SID=242250471&trip_sub1=&trip_sub3=D4604224",
  cambodia: "https://www.trip.com/t/cnIMk8NGnQ2",
  taiwan: "https://www.trip.com/?Allianceid=6106178&SID=242250408&trip_sub1=&trip_sub3=D4604210",
  southkorea: "https://www.trip.com/?Allianceid=6106178&SID=242250429&trip_sub1=&trip_sub3=D4604189",
  japan: "https://www.trip.com/?Allianceid=6106178&SID=242250387&trip_sub1=&trip_sub3=D4604217",
  malaysia: "https://www.trip.com/?Allianceid=6106178&SID=242250415&trip_sub1=&trip_sub3=D4604203",
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const path = url.pathname.slice(1).toLowerCase()

  // 1️⃣ Если зашли по адресу страны (например /hongkong)
  if (destinations[path]) {
    // Ставим куку, чтобы при заходе на / сработал редирект
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set(path, '1', {
      path: '/',
      maxAge: 60,
      httpOnly: true,
    })
    return response
  }

  // 2️⃣ Если зашли на /
  if (url.pathname === '/') {
    // Ищем куку
    const foundDestination = Object.keys(destinations).find((key) =>
      request.cookies.get(key)
    )

    if (foundDestination) {
      const redirectUrl = destinations[foundDestination]

      // Готовим редирект на Trip.com
      const response = NextResponse.redirect(redirectUrl)

      // Чистим куки (чтобы не зациклилось)
      Object.keys(destinations).forEach((key) => {
        response.cookies.set(key, '', { path: '/', maxAge: 0 })
      })

      // ❗ ВАЖНО: теперь ставим Referrer-Policy так, чтобы Trip видел твой сайт как источник
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

      return response
    }
  }

  return NextResponse.next()
}

// Middleware срабатывает только для / и всех путей стран
export const config = {
  matcher: [
    '/',
    
    '/macao',
    '/hongkong',
    '/singapore',
    '/cambodia',
    '/taiwan',
    '/southkorea',
    '/japan',
    '/malaysia',
  ],
}
