<template>
    <IonPage>
      <IonContent>
        <div class="min-h-full flex flex-col justify-center sm:px-6 lg:px-8">
          <h2 class="my-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
          <div class="px-6">
            <input
              v-model="credentials.email"
              autocapitalize="none"
              autocomplete="none"
              type="text"
              class="w-full mb-4 text-normal py-2 px-1 border-cyan-700 border-solid border-2 rounded-md"
            />
            <input
              v-model="credentials.password"
              autocapitalize="none"
              autocomplete="none"
              type="password"
              class="w-full mb-4 text-normal py-2 px-1 border-cyan-700 border-solid border-2 rounded-md"
            />
          </div>
          <div class="px-6">
            <button
              @click="doSignIn"
              class="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-4 rounded mt-3 w-full font-bold"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  </template>
  <script lang="ts" setup>
  definePageMeta({
    alias: ["/login"],
  });
  const user = useSupabaseUser();
  const { auth } = useSupabaseAuthClient();
  const router = useRouter();
  const cancelWatch = ref();
  
  onIonViewDidEnter(() => {
    cancelWatch.value = watchEffect(async () => {
      if (user.value) {
        console.log("have user...", user?.value);
        await router.push("/");
      }
    });
  });
  
  onIonViewDidLeave(()=>{
      cancelWatch.value();
  })
  
  const credentials = ref({
    email: "",
    password: "",
  });
  
  /**
   *
   */
  const doSignIn = async () => {
    try {
      const { data, error } = await auth.signInWithPassword({
        ...credentials.value,
      });
      if (error) throw error;
      await router.push("/index");
      return true;
    } catch (error) {
      alert((error as any)?.message);
    }
  };
  </script>
  