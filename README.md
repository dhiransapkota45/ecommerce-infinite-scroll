
# Ecommerce 

This project implements infinite scroll feature with Nextjs using server side rendering and shows product details using slug


## Installation

To run this project, run the following commands

```bash
  git clone https://github.com/dhiransapkota45/ecommerce-infinite-scroll.git

  cd ecommerce-infinite-scroll

  yarn install
```

After installation, create a ```.env``` file and put backend url as mentioned in ```.env.example```

Then run the the command ```yarn run dev```

## Features
- __Server-Side Rendering:__ Utilizes server-side rendering to fetch product details, enhancing performance and SEO.
- __Infinite Scrolling:__ Implements infinite scrolling using the Intersection Observer API for a smooth browsing experience.
- __HTML Sanitization:__ Ensures security by sanitizing the backend's HTML-encoded responses in product descriptions.
- __Image Magnification:__ Provides a user-friendly image magnification feature for a detailed view of the product photos.
- __Optimized Images:__ Utilizes Next.js Image component to optimize images and improve overall application performance.

### Preview:
Preview available [here](https://ecommerce-infinite-scroll.vercel.app/)
