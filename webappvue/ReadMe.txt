npm install --global @vue/cli@4.5.11 // install globally vuejs cli
vue create vueapp // create vuejs

cd vueapp
npm install --save-dev json-server@0.16.3
npm install --save-dev npm-run-all@4.1.5
npm install axios@0.21.1

//add bootstrap
npm install bootstrap@4.6.0

//add express for deployement
npm install --save-dev express@4.17.1
npm install --save-dev connect-history-api-fallback@1.6.0

// build the app
npm run build
node server.js

//run inside container
docker build . -t vueapp -f  Dockerfile
docker run -p 4003:4003 vueapp