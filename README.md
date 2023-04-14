# Nuxt 3 Ionic Tailwind Supabase Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

- Nuxt Ionic Module - https://ionic.nuxtjs.org/
- Nuxt Supabase Module - https://supabase.nuxtjs.org/
- Nuxt Tailwind Module - https://tailwindcss.nuxtjs.org/
- Nuxt Supabase Module - https://supabase.nuxtjs.org/
  - Auth Issue: https://github.com/nuxt-modules/supabase/issues/144
- Ionic VS Code Extension - https://ionicframework.com/docs/intro/vscode-extension


changes `package.json`  for using ionic extension and build apps for mobile devices
```
  "scripts": {
    "dev": "nuxi dev",
    "build": "nuxi generate",
    "ionic:build": "npm run build",
    "ionic:serve": "npm run dev"
  },
```

changes `nuxt.config.ts` for using ionic extension and build apps for mobile devices, you must set `ssr:false`
```
export default defineNuxtConfig({
  modules: ["@nuxtjs/ionic", "@nuxtjs/supabase", "@nuxtjs/tailwind"],
  ssr: false, 
  supabase: {},
  ionic: {
    integrations: { },
    css: {
      utilities: true,
    },
  },
});
```

changes `capacitor.config.ts`  for using ionic extension and build apps for mobile devices, you must set webDir to `dist`
```
import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nuxt-ionic-playground',
  webDir: 'dist',
  bundledWebRuntime: false,
}

export default config
```
