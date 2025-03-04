# UC Riverside Cybersecurity Website

This website is created to serve as a central hub consisting of UCR's cybersecurity resources, ranging from professors and classes to publications and resources that are not often talked about; this is a hub meant to inform the public about the different resources and research that have come out of UCR.

If you find that it is out-of-date, create a pull-request, file an issue, or email the current maintainer (derpymissile or xinan1441 on Discord)

# This website uses the: nextjs-mdx-blog-theme

- **Framework**: [Next.js](https://nextjs.org/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Running Locally

```bash
$ git clone https://github.com/DerpyMissile/ucr-cyber-hub-mockup.git
$ cd ucr-cyber-hub-mockup
$ npm install
$ npm run dev
```

## Styling

To organize Tailwind CSS light and dark styles on elements, we make use of `cx` utility as an array. The first string contains the base styles, the second string is for light mode styles, and lastly the third string is for dark mode styling.

```jsx
import { cx } from '@/lib/utils'

<div
  className={cx(
    'p-4', // base styles
    'text-gray-900', // light mode styles
    'dark:text-gray-50'. // dark mode styles
  )}
/>
```
