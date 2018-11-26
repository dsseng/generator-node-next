# Dockerize your app
![Docker logo](https://www.docker.com/sites/default/files/social/docker_twitter_share_new.png)

If you have enabled Docker deployment when creating your project, you will have `Dockerfile` and `.dockerignore` files in the root directory of your project. To build Docker image, install Docker if it is not installed and run `docker build -t name-of-your-image:version .` command.

::: tip
You can customize the build process of your Docker image using `Dockerfile`. You can read more about it [here](https://docs.docker.com/engine/reference/builder/).
:::
::: danger
Do not use your root directory, `/`, as the path for `docker build` as it causes the build to transfer the entire contents of your hard drive to the Docker daemon.
:::
::: tip
Put all files that you don't need in production into `.dockerignore` file. You can read more about it [here](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
:::
