
# GPX Greece Website

This is the official website for GPX Greece, the Greek distributor of GPX motorcycles, built with Nuxt.js (Vue 2). The site presents the GPX motorcycle lineup, company information, dealer locator, and contact details for KSR Hellas.

## Features

- **Homepage**: Brand introduction, hero section, and highlights of GPX motorcycles.
- **About**: Company history, milestones, and a video introduction.
- **Bikes**: Explore the GPX motorcycle models available in Greece, with color options and details.
- **Dealers**: Interactive map and filters to find authorized GPX dealers by region.
- **Contact**: Contact form and company details for inquiries.
- **Privacy**: Privacy policy in compliance with GDPR.

## Tech Stack

- [Nuxt.js 2](https://nuxtjs.org/) (Vue 2, SSR/Static)
- [Storyblok](https://www.storyblok.com/) (headless CMS integration)
- [Leaflet.js](https://leafletjs.com/) (interactive maps)
- [GSAP](https://greensock.com/gsap/) (animations)
- [Axios](https://axios-http.com/)

## Build Setup

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


## Project Structure

- `assets/` — Images, CSS, and static assets
- `components/` — Vue components (navigation, header, footer, etc.)
- `layouts/` — Application layouts
- `pages/` — Main site pages (about, contact, bikes, dealers, etc.)
- `static/` — Static files (robots.txt, JS, etc.)
- `store/` — Vuex store (optional)

## Environment Variables

Storyblok API keys are managed via environment variables. See `nuxt.config.js` for details.

## Contact

**KSR HELLAS**  
Λεωφ. Αθηνών 218, Χαϊδάρι 124 61, Ελλάδα  
Τηλ: +30 210 5322105  
Email: info@ksr-hellas.gr  
Website: [https://ksr-hellas.gr](https://ksr-hellas.gr)

## License

This project is proprietary and maintained by KSR Hellas. All rights reserved.

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
