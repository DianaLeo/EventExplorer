# Learning React Tao and Steps

## React Tao

Write declarative code instead of imperative code

declarative code focuses on results
imperative code focuses on procedures

Use componentization instead of javascript array.map

## Steps

![figmaDesign](./public/figmaDesign.jpg)

### 1. Break the UI into a component hierarchy

- EventExplorer
  - Header
  - FilterTabs
    - Tab \* 5
  - PopularEvents
    - Thumbnails
    - Event
      - Profile
      - Description
      - ImageGallery
      - Footer
        - Followers
          - Avatar \* 5
        - Actions
          - Action \* 4

### 2. Build a static version in React

With JSX and CSS(tailwind)

In this stage, concentrate only on layout

### 3. Find the minimal but complete representation of UI state

### 4. Identify where your state should live

### 5. Add inverse data flow

- Step 3,4,5 These three steps complement each other
- User interaction
- Start from the smallest component
- Declarative bottom up: Go from the bottom level to top level

Tab switching:

```javascript
const TAB = {
  POPULAR: "Popular",
  TOP_RATED: "Top Rated",
  NEW: "New",
  FOLLOWED: "Followed",
};

const EventExplorer = () => {
  const [tab, setTab] = useState(TAB.POPULAR);

  return (
    <>
      <FilterTabs tab={tab} onTabChange={setTab} />
      {
        {
          [TAB.POPULAR]: <PopularEvents />,
          [TAB.TOP_RATED]: <TopRatedEvents />,
          [TAB.NEW]: <NewEvents />,
          [TAB.FOLLOWED]: <FollowedEvents />,
        }[tab]
      }
    </>
  );
};
```

If using typescript:

```typescript
enum TAB {
  POPULAR = "Popular",
  TOP_RATED = "Top Rated",
  NEW = "New",
  FOLLOWED = "Followed",
}
```

This is inverse data flow:

from

```javascript
<Tab tab={tab} setTab={setTab} />
```

to

```javascript
<Tab tab={tab} onTabChange={setTab} />
```

Because in `<Tab>` component, it doesn't concern setting tab state, the only thing it concerns is handle clicking.
Name changing is for maintainability.

## React Frontend Persistency

### How to persist the tab state btw page refreshes?

- Url(path, query): related to rendering pages
- SessionStorage: related to rendering contents
- LocalStorage: related to rendering contents, and cross browser
- Cookie: is a part of HTTP protocol, can communicate btw server and frontend, related to rendering contents, and cross browser.

It is a pyramid structure.
If a state can be stored in **Url**, don't put it in **SessionStorage**
If a state can be stored in **SessionStorage**, don't put it in **LocalStorage**
If a state can be stored in **LocalStorage**, don't put it in **Cookie**

So, to persist the tab state, use url

### How to read & write url?

#### read the url

`window.location` returns http://localhost:3000
`window.location.search` returns 'key1=value1&key2=value2' of http://localhost:3000?key1=value1&key2=value2
Use package `query-string` to parse search string to object

#### modify the url without reloading the page?

I want to add `tab=Popular` to url.search
Use `window.history.pushState()`
Use package `query-string` to stringify object to search string 

### read&write

```javascript
const newUrl = new URL(window.location);

const query = queryString.parse(newUrl.search); // ?foo=bar -> { foo: 'bar' }
query.tab = "Debug"; // { foo: 'bar', tab: 'Debug' }
newUrl.search = queryString.stringify(query) // { foo: 'bar', tab: 'Debug' } -> ?foo=bar&tab=Debug

window.history.pushState(undefined, undefined, newUrl); 
```

#### initialization:
-> get tab state from window.location.search
  -> if window.location.search.tab is undefined (first time), set it to 'Popular'
  
#### click tab:
-> set tab state
  -> tab state changed
    -> render content
    -> push tab to location(url) in useEffect
