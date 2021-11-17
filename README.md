# sph-assessment

## React + Redux + Ant Design + React Router DOM + TypeScript And Express JS + XmlJs 

![N|Solid](https://github.com/sen2ran/sph-assessment/blob/main/Screenshot.gif?raw=true)

### Tech

#### Fronend

- [react](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [redux](https://redux.js.org/) - A Predictable State Container for JS Apps.
- [antdesign](https://ant.design/) - A design system for enterprise-level products for react.
- [typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start/) - React Router is a lightweight, fully-featured routing library for the React JavaScript library

#### Backend

- [expressJs](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [express-async-errors](https://www.npmjs.com/package/express-async-errors/) - This library is about what happens when you hit an error.
- [xml-js](https://www.npmjs.com/package/xml-js/) - Convert XML text to Javascript object / JSON text

### Installation

Requires [Node.js](https://nodejs.org/) to run.
Install the dependencies and devDependencies and start the server.

#### Backend

Please update HOST_ADDRESS, USER, PASSWORD in ``` .env```

Most of the codes are assumed and done. Sometimes need to change the object mapping format or subpath URL.

```sh
$ sph-assessment\backend\utils\genarateObjUtils.js
$ generateDetailObj()
$ generateSearchObj()
```

```sh
$ sph-assessment\backend\controller
$ const SEARCH_SUBPATH = "/webservice/open-search/solar/{query}/content-search-description.xml"
$ const DETAIL_SUBPATH = "/webservice/solar/content/{id}"
```

these are function and variables need to update if moapping were wrong

```sh
$ cd backend
$ npm install
$ npm run start
```

#### Fronend

```sh
$ cd frontend
$ npm install
$ npm run start
```