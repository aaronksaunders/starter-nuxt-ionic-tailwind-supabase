<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Index Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonButton router-link="/about">About Page</IonButton>
      <div>
        <button class="bg-green-500 py-2 px-4 rounded-md" @click="doUserLogout">
          LOGOUT USER
        </button>
      </div>
      <div>
        {{ data?.user?.email }}
      </div>
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">
definePageMeta({
  alias: ["/index", "/"],
  middleware:['auth']
});
const router = useRouter();


const { auth } = useSupabaseAuthClient();
const {data, error } = await auth.getUser();
if ( error ) alert("Error " + error.message);


const doUserLogout = () => {
  auth.signOut();
  router.replace('/login');
};
</script>
