# Learning React Tao and Steps

## React Tao
Write declarative code instead of imperative code

declarative code focuses on results
imperative code focuses on procedures

## Steps

![figmaDesign](./public/figmaDesign.jpg)

### 1. Break the UI into a component hierarchy
- EventExplorer
    - Header
    - FilterTabs
        - Tab * 5
    - PopularEvents
        - Thumbnails
        - Event
            - Profile
            - Description
            - ImageGallery
            - Footer
                - Followers
                    - Avatar * 5
                - Actions
                    - Action * 4
                    
### 2. Build a static version in React
With JSX and CSS(tailwind)

In this stage, concentrate only on layout

### 3. Find the minimal but complete representation of UI state
### 4. Identify where your state should live
### 5. Add inverse data flow
- User interaction
- Start from the smallest component
- These three steps complement each other
- Declarative bottom up: Go from the bottom level to top level

