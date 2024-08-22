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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: 'Unit 1',
        description: 'Learn the basics of German',
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: 'Nouns',
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: 'SELECT',
        order: 1,
        question: 'Which one of these is the "Father"',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: '/man.svg',
        correct: true,
        text: 'Vater',
        audioSrc: '/ge_man.mp3',
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: '/woman.svg',
        correct: false,
        text: 'Mutter',
        audioSrc: '/ge_woman.mp3',
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: '/brother.svg',
        correct: false,
        text: 'Bruder',
        audioSrc: '/ge_brother.mp3',
      },
    ]);

    console.log('Seeding finished');
  } catch (err) {
    console.error(err);
    throw new Error('Failed to connect to the database');
  }
};

main();
