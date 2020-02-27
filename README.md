# class-5-project

## Overal structure

There are two folders: `frontend` and `backend`. Each contain what they are named. 

## Helper scripts / how to work with this

The frontend repo should container working scripts in the `frontend/package.json` file
to lint, test and build the project. 
The backend script should have also several helper functions such as `yarn db` to spin
up a docker container that runs a mongodb on your local machine as well as `yarn dev`
that automatically restarts your server whenever a file changes. 

Of course, both need `yarn install` at the beginning. 

## CICD

CICD is set up with CircleCI which uses docker containers to execute each step. The steps for the frontend are the equivalent of

1. Continuous integration (CI)
 
```
docker run --rm --workdir /app -v (pwd)/frontend:/app --name tmp node yarn install
docker run --rm --workdir /app -v (pwd)/frontend:/app --name tmp node yarn test
docker run --rm --workdir /app -v (pwd)/frontend:/app --name tmp node yarn build
```

What this does is, it executes the three yarn (equivalent to npm) steps in an isolated container environment. What are containers? In short, the future of computing. It's not an overstatement, they are and will be everywhere. Google literally runs *everything* in containers. 

2. Continuous deployment (CD)

I configured the frontend to be deployed to a firebase hosting solution. For this I set up firebase-tools and added a `firebase` script to the `package.json` to avoid global installations. Next I did
`yarn firebase init` and 
`yarn firebase login:ci` to get a token. This token is set in CircleCI as an environment variable (because it's a secret) and then used in the deploy step 

The backend is deployed to [AppEngine](https://cloud.google.com/appengine/docs/standard/nodejs/). For this, the CI needs a `$GCLOUD_SERVICE_KEY` environment variable which contains the secrets needed for the CI system to push and manipulate your backend running in the cloud. See [this tutorial](https://circleci.com/docs/2.0/google-auth/) for how to set that up.

1. [Create an Appengine project](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project)
2. [install the cli](https://cloud.google.com/sdk/docs/) `gcloud`

## Linting

The frontend (and hopefully also soon the backend) should be linted. Use [this article](https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672) for guidance

