import { getCourses } from '@/db/queries';
import { List } from '@/app/(main)/courses/list';

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className=" mt-3.5 text-2xl font-bold text-neutral-300">
        Language Courses for English Speakers
      </h1>
      <List courses={courses} activeCourseId={4} />
    </div>
  );
};

export default CoursesPage;
