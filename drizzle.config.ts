import { Config } from 'drizzle-kit'

export default {
  schema: "./src/db/schema.ts",
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string,
  },
  out: "./drizzle"
} satisfies Config