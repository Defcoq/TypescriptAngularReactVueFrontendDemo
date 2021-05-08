npm install --global create-react-app@4.0.1 //no longueur need for react development install reac globally

npx create-react-app reactapp --template typescript --use-npm

npm install --save-dev json-server@0.16.3
npm install --save-dev npm-run-all@4.1.5

npm install bootstrap@4.6.0

//use redux to manage data or data store
npm install redux@4.0.5
npm install react-redux@7.2.2
npm install --save-dev @types/react-redux

//to suppor http
npm install axios@0.21.1

//to add support for rouing add react routing
npm install react-router-dom@5.2.0
npm install --save-dev @types/react-router-dom

//go to production
npm install --save-dev express@4.17.1
npm install --save-dev connect-history-api-fallback@1.6.0

//build the app
npm run build
node server.js //to run the production nodejs

//run in docker container
docker build . -t reactapp -f  Dockerfile
docker run -p 4002:4002 reactapp


