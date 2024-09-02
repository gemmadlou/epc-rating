# Energy Performance Certificate Rating Vue Component

A little Vue 3 component library to display the UK EPC Ratings.

[![Test, Build and Publish](https://github.com/gemmadlou/epc-rating/actions/workflows/build.yml/badge.svg)](https://github.com/gemmadlou/epc-rating/actions/workflows/build.yml)

## Install

```bash
npm i epc-rating
```

## Usage

```vue
<script setup lang="ts">
import EPCRating from 'epc-rating';
</script>

<template>
  <EPCRating 
    :current-score="72" 
    :potential-score="85" 
   />
</template>
```

## EPC Ratings

An Energy Performance Certificate (EPC) shows how energy efficient a property is, with ratings from A to G. The UK Government website provides both the current and potential ratings for a property.

You can find the energy rating for a property here: https://www.gov.uk/find-energy-certificate.

![energy-performance-rating](./src/assets/epc-example.png)

## Contributing

This project uses Vite + Vue 3 + TypeScript.

```bash
# Install dependencies
npm install

# Run development
npm run dev

# Run tests
npm test
```


- The project uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

- Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Attributions & Thanks

- This component uses public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). The SVG is sourced from the UK Government website, with minor adjustments for Vue.js. All EPC-related media assets can be found [here](https://assets.publishing.service.gov.uk/media/5a748d20ed915d0e8bf19346/1790388.pdf). EPC rating diagrams can be generated [here](https://find-energy-certificate.service.gov.uk).
- Thanks to [Brian Barrow](https://x.com/the_brianb) for his [guide](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library-update/) on creating a Vue 3 component package.
- Additional thanks to [Matija Novosel](https://www.linkedin.com/in/matijanovosel/) for his [guide](https://www.matijanovosel.com/blog/making-and-publishing-components-with-vue-3-and-vite) on preparing the npm package.
