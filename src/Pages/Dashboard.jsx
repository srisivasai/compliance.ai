import React from 'react';

import ActivitiesAtAGlance from '@/components/DashboardTiles/ActivitiesAtAGlance';
import TopicUpdates from '@/components/DashboardTiles/TopicUpdates';
import EnforcementsAction from '@/components/DashboardTiles/EnforcementsAction';
import ApproachingDeadlines from '@/components/DashboardTiles/ApproachingDeadlines';
import WhitePapers from '@/components/DashboardTiles/WhitePapers';
import IndustryNews from '@/components/DashboardTiles/IndustryNews';
import CaliforniaConsumerPrivacyAct from '@/components/DashboardTiles/CaliforniaConsumerPrivacyAct';
import Covid19 from '@/components/DashboardTiles/Covid19';
import Regulations from '@/components/DashboardTiles/Regulations';
import RecommendedSearches from '@/components/DashboardTiles/RecommendedSearches';

const gridItems = [
  { span: 2, element: <ActivitiesAtAGlance /> },
  { span: 1, element: <TopicUpdates /> },
  { span: 1, element: <ApproachingDeadlines /> },
  { span: 2, element: <EnforcementsAction /> },
  { span: 1, element: <WhitePapers /> },
  { span: 1, element: <IndustryNews /> },
  { span: 1, element: <CaliforniaConsumerPrivacyAct /> },
  { span: 1, element: <Covid19 /> },
  { span: 1, element: <Regulations /> },
  { span: 1, element: <RecommendedSearches /> },
];

const Dashboard = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-3">
        {gridItems.map((item, index) => (
          <div key={index} className={`col-span-3 md:col-span-${item.span} h-72 bg-background rounded-md overflow-hidden`}>
            {item.element}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;