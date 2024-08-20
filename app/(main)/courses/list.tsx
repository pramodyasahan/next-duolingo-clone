'use client';

import { courses, userProgress } from '@/db/schema';
import { Card } from '@/app/(main)/courses/card';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { upsertUserProgress } from '@/actions/user-progress';

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push(`/learn`);
    }

    startTransition(() => {
      upsertUserProgress(id).then((r) => {
        return new Error('Not Found');
      });
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6 pt-8 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          active={course.id === activeCourseId}
          disable={false}
        />
      ))}
    </div>
  );
};
