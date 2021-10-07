
## CWG Generic Dashboard

> Pre-configured and Ready to use Generic Dashboard App. Almost everything needed is already configured. 

### Folder Structure
```
- src/
  - main/
  - modules/
  - library/
  - resources/
```

---

**Main Folder** : This folder is for main configurations such as Redux Create Store, Axios Instance and Routes

```
- src/main/
  - axios/
    - index.js
  - routes
    - index.js
    - PrivateRoute.js
  - store/
    - index.js
    - mainReducer.ts
```

---

**Modules Folder** : This folder is for Modules/Features of our app.
```
- src/modules/
  - Dashboard/
    - index.jsx
    - dashboardStyles.scss
    - dashboardActions.js
    - dashboardConstants.js
    - dashboardReducer.js
    - frames/
      - HeaderFrame/
        - index.jsx
        - headerFrameStyles.scss
      - CoolFrame/
        - inex.jsx
        - coolFrameStyles.scss
```

---

**Library Folder** : This folder will keep all our helpers and common files which will be shared across the application.

```
- src/library/
  - common
    - components
      - Header
        - index.jsx
        - styles.scss
      - Dropdown
        - index.jsx
        - styles.scss
    - actions
      - AuthActions.js
    - constants
      - StoreConstant.js
      - ImagesConstants.js
      - URLConstants.js
    - reducers
      - AuthReducer.js
  - utilities
    - Validators.js
    - Storage.js


---

**Resources Folder** : This folder will be used to keep all our static resources such as `images`, `styles (mixins, variable etc)`, `seeds`, `fonts` etc.
```
- src/resources/
  - images/
    - logo.svg
  - styles/
    - variables.scss
    - mixins.scss
  - fonts/
    - Roboto.ttf
 
```

---
