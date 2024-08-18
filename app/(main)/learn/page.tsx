import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import { Header } from '@/app/(main)/learn/header';
import { UserProgress } from '@/components/user-progress';

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] bg-[#142023] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'German', imageSrc: '/ge.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="German" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
