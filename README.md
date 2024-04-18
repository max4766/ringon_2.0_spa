# Information

This is a demo project for developing a SPA web application.
Named Ring-On 2.0 for now for its layout is mostly effected by an actual Ring-On 2.0 web project.
This project uses `Vuetify` for UI, `Vue-router` for routing, and `vuex` for state management. 

## Important Links related to Vuetify

- 📄 [Docs](https://vuetifyjs.com/)
- 🚨 [Issues](https://issues.vuetifyjs.com/)
- 🏬 [Store](https://store.vuetifyjs.com/)
- 🎮 [Playground](https://play.vuetifyjs.com/)
- 💬 [Discord](https://community.vuetifyjs.com)

## 💡 Usage

Fetch git URL for this project and clone it into your local PC.

```bash
git clone [project's git URL]
```

Then, set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |

After completing the installation, use the following command to initialize the project;

```bash
npm run dev
```

Finally, you will see the view of the project from `localhost:3000`

## Goal for the project

The main goal for this project is to use Vue and compare its feature with React.
vue-router can be compared with React-router,
and vuex with redux.
Furthermore, MUI exists also in Vue as a UI framework called Vuetify.
While React uses JSX grammar, Vue uses vue template, which is why learning Vue seems much easier than learning React.
However, since router and Vuex have a similar feature like React's router and Redux, 
It may require you high level skills if you are in a massive project dealing with route and state managing.

Here, vuetify 3 was used which is why corespondingly vue-router 4 and vuex 4 version was mendatory for compatibility.

If you click each list item in the Menu Drawer, you'll be redirected to each page, which is possible due to Vue-router.

Meanwhile, it seems using Nuxt.js would be much easier to set up the environment for it already has auto routing feature just like Next.js does.

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
