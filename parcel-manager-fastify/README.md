# Parcel Manager
Get to know our tech stack with this training exercise.

## ORM: Prisma 2

 1. Setup prisma in project
    `npx prisma init`
	 Add db connection URL to .env file
 2. Load schema from db
    `npx prisma introspect`
 3. Generate Prisma Client from schema
    `npx prisma generate`

```js
import { PrismaClient } from  '@prisma/client';
// ...
const  prisma  =  new  PrismaClient();
```

