import 'dotenv/config';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from '@/db/schema';

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding database');
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'German',
        imageSrc: '/ge.svg',
      },
      {
        id: 2,
        title: 'Spanish',
        imageSrc: '/es.svg',
      },
      {
        id: 3,
        title: 'Italian',
        imageSrc: '/it.svg',
      },
      {
        id: 4,
        title: 'Japanese',
        imageSrc: '/jp.svg',
      },
      {
        id: 5,
        title: 'French',
        imageSrc: '/fr.svg',
      },
      {
        id: 6,
        title: 'Croatian',
        imageSrc: '/hr.svg',
      },
    ]);

    console.log('Seeding finished');
  } catch (err) {
    console.error(err);
    throw new Error('Failed to connect to the database');
  }
};

main();
