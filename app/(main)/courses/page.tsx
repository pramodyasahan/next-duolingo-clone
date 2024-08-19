import { getCourses } from '@/db/queries';

const CoursesPage = async () => {
  const data = await getCourses();

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className=" mt-3.5 text-2xl font-bold text-neutral-300">
        Language Courses for English Speakers
      </h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default CoursesPage;
