import queryString from "query-string";
import { TAB } from "../components/EventExplorer/EventExplorer";

export const getQuery = () => {
  const search = window.location.search;
  const query = queryString.parse(search);
  if (!query.tab) {
    query.tab = TAB.POPULAR;
  }
  return query;
};

export const setQuery = (tab) => {
  const newUrl = new URL(window.location);
  const query = queryString.parse(newUrl.search);
  query.tab = tab;
  newUrl.search = queryString.stringify(query);
  window.history.pushState(undefined, undefined, newUrl);
};
