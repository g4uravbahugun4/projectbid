import '@/styles/globals.css'
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { GoogleOAuthProvider } from '@react-oauth/google';
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
export default function MyApp({ Component, pageProps }) {
  return<GoogleOAuthProvider clientId="129940256174-9l7p8a0gue14nm538ksk5ml2mq1ik1jr.apps.googleusercontent.com"> <Component {...pageProps} /></GoogleOAuthProvider>
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};
  const protectedRoutes =
    ctx.pathname === "/" ||
    ctx.pathname === "/add-project" ||
    ctx.pathname === "/login" ||
    ctx.pathname === "/my-profile"||
    ctx.pathname === "/project"||
    ctx.pathname === "/posts/[postId]";
   

    !protectedRoutes && redirectUser(ctx, "/");
 if(token){
    try {
      
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
      
      });

      const { user } = res.data;
      
      pageProps.user = user;
   
    } catch (error) {
      destroyCookie(ctx, "token");
   
    
  }
}

  return { pageProps };
};
