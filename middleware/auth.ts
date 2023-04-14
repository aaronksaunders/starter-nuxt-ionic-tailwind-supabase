export default defineNuxtRouteMiddleware(async () => {
    // const user = useSupabaseUser()
    const {auth} = useSupabaseAuthClient();
    const user = await auth.getUser()
  
    if (!user) {
      return navigateTo('/login')
    }
  })