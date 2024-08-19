import { getCourses, getUserProgress } from '@/db/queries';
import { List } from '@/app/(main)/courses/list';

const CoursesPage = async () => {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  const [courses, userProgress] = await Promise.all([coursesData, userProgressData]);

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className=" mt-3.5 text-2xl font-bold text-neutral-300">
        Language Courses for English Speakers
      </h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
