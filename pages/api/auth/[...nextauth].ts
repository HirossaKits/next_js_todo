import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // Providers.Email({
    //   server: process.env.EMAIL_SERVER ?? "",
    //   from: process.env.EMAIL_FROM ?? "",
    // }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
    // Providers.Facebook({
    //   clientId: process.env.FACEBOOK_ID ?? "",
    //   clientSecret: process.env.FACEBOOK_SECRET ?? "",
    // }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_ID ?? "",
    //   clientSecret: process.env.TWITTER_SECRET ?? "",
    // }),
  ],
  callbacks: {
    // サインイン時処理
    async signIn(_user, _account, _profile) {
      console.log("sign in");
      return true;
    },
    // リダイレクト時処理
    async redirect(url, baseUrl) {
      console.log("redirect");
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    // JWT が作成・更新された時の処理
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    //セッションがチェックされた時の処理
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    }
  },
  pages: {
    signIn: '/signin'
  }
});
