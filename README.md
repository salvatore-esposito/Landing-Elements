# Js Sarter kit 

This is a starter kit for your js project.

#### Use

Download the repository and run: 
```sh
docker-compose up --build -d
```
After run the command, you can reach the container at: 192.28.1.1:3000

Please note that if the port is alredy in use, you can have a different port: use docker inspect or docker port to be sure.

#### Compiled assets and node_modules

Please note that the kit compiles assets and install node_modules in the image when it's built, so you can't see them in your local environment. The only file used as volume hosted are the directory src and the webpack.mix.js.

#### User

The user by default is salvio, if you wish to change the username you can modify it in .docker-env and rebuild the image.

### Other

Note that by a bug in laravel mix I hade to fix a second slash in js output asset in webpack.mix.js

```sh
mix.override(config => {
  config.entry = Object.keys(config.entry).reduce((acc, key) => {
    acc[key.replace(/^\//, "")] = config.entry[key];
    return acc;
  }, {});
});
```
If you have some issume you can delete this block.
