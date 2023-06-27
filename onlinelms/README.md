This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Project Udemy Clone
Technology Set:
Technology set we will be using for project Udemy:
Typescript
Nextjs v13.4
Tailwindcss
Shadcn-ui
Jwt for AUTHENTICATION
Sanity CMS
Vercel/Postgres DATABASE
Drizzle ORM
Figma File:
Figma file reference: https://www.figma.com/file/v5c4KdFLGOww4cxUBw2gZz/Udemy-clone?type=design&node-id=0%3A1&mode=design&t=5je0kyLvNiKDL9AV-1
Credits: Designed by Fahad Ghouri

ER Diagram:
ER diagram reference is drawn in DRAW.IO: https://drive.google.com/file/d/1dM78S7sbYK-sGFnhLL26h_m2nvZRb9Kq/view?usp=sharing	

The flow of application:
At the start, there will be a home page where some vital detail about the courses and course provider will be provided further you can have a look at the design.
Then there will be a courses page where the courses will be shown.
Then the user will choose a course and its introductory video will be shown.
Then if the user wants to access the entire course he/she has to signup and he will be able to view the full course. (For now, according to Sir Zia’s instructions no payment method will be implemented that will be in the customization part.)
Now the user has full access to the course but the full course will not be unlocked the application will monitor watch time if the user will watch up to 75% of the video then the next video will be unlocked and so on.
At last, when he will watch all the videos of the specific course he will get a certificate.


