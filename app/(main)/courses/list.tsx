'use client';

import { courses } from '@/db/schema';
import { Card } from '@/app/(main)/courses/card';

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: Props) => {
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
