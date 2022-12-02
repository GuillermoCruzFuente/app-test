# App

## Dev enviroment

clone repo

```
    git clone https://github.com/GuillermoCruzFuente/app-test.git
```

open folder and install dependencies

```
    cd app-test
    npm install
```

and finally run the dev command

```
    npm run dev
```

also you can use the `dev-host` npm script to host the app in your local network, this way you can test on other devices.

```
    npm run dev-host
```

## How to update production

The [render platform](https://render.com) will handle the build and deploy of production [here](https://birthtracker.onrender.com/), on every push to origin main branch

There are two important branches `main` and `dev`. Ideally, every feature will be coded in `dev` branch to subsequently merge with main and push to origin.

## How to login

credentials represented as a js object, make sure to remove the double quotes (").

```js
{
	username: "Guillermo";
	password: "Factumex";
}
```

![login image](./src/assets/images/login.png)
