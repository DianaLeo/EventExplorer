import { useEffect, useState } from "react";
import Header from "./Header";
import FilterTabs from "./FilterTabs";
import PopularEvents from "./PopularEvents";
import TopRatedEvents from "./TopRatedEvents";
import NewEvents from "./NewEvents";
import FollowedEvents from "./FollowedEvents";
import { getQuery, setQuery } from "../../utils/getSetUrlQuery";

export const TAB = {
  POPULAR: "Popular",
  TOP_RATED: "Top Rated",
  NEW: "New",
  FOLLOWED: "Followed",
};

const EventExplorer = () => {
  const [tab, setTab] = useState(getQuery().tab);

  useEffect(() => {
    setQuery(tab);
  }, [tab]);

  return (
    <div className="px-[40px] py-[100px] space-y-[100px]">
      <Header />
      <FilterTabs tab={tab} onTabChange={setTab} />
      {
        {
          [TAB.POPULAR]: <PopularEvents />,
          [TAB.TOP_RATED]: <TopRatedEvents />,
          [TAB.NEW]: <NewEvents />,
          [TAB.FOLLOWED]: <FollowedEvents />,
        }[tab]
      }
    </div>
  );
};

export default EventExplorer;
