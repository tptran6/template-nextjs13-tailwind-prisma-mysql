This repos serves as a boilerplate starting point for a NextJS 13 app with tailwindcss, and prisma (connecting to a mysql db).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

##### Steps after cloning this repo:
These steps assume you already have a running mysql db. Reference https://www.prisma.io/docs/getting-started/quickstart for your own needs.

1. Install dependencies 
    * `npm i`
1. Creates the .env and prisma/schema.prisma files using 
    * `npx prisma init --datasource-provider mysql` 
1. Update the `DATABASE_UR` connection string in the `.env` file to point to your mysql instance
1. Populate the `schema.prisma` file with the models(tables) from your mysql db.
    * `npx prisma db pull` 
1. Update @prisma/client with Schema details from previous command.
   * `npx primsa generate`

_note: Everytime you make a schema change to your db, you need to rerun the `npx prisma db pull` and `npx prisma generate` commands_

##### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
