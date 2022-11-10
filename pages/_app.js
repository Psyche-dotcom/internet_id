import "../styles/globals.css"
import { useRouter } from "next/router"
import { userService } from "../services"
import { useState, useEffect } from "react"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // const [authorized, setAuthorized] = useState(true)

  // useEffect(() => {
  //   // run auth check on initial load
  //   authCheck(router.asPath)

  //   // set authorized to false to hide page content while changing routes
  //   const hideContent = () => setAuthorized(false)
  //   router.events.on("routeChangeStart", hideContent)

  //   // run auth check on route change
  //   router.events.on("routeChangeComplete", authCheck)

  //   // unsubscribe from events in useEffect return function
  //   return () => {
  //     router.events.off("routeChangeStart", hideContent)
  //     router.events.off("routeChangeComplete", authCheck)
  //   }
  // }, [])
  // function authCheck(url) {
  //   // redirect to login page if accessing a private page and not logged in
  //   const publicPaths = ["/login", "/forgot-password", "/change-password"]
  //   const path = url.split("?")[0]
  //   if (!userService.userValue && !publicPaths.includes(path)) {
  //     setAuthorized(false)
  //     router.push({
  //       pathname: "/login",
  //       query: { returnUrl: router.asPath },
  //     })
  //   } else {
  //     setAuthorized(true)
  //   }
  // }
  return  <Component {...pageProps} />
}

export default MyApp
