# DevOps-Learning

## Why DevOps?
* Waterfall Model - Development goes to the next stage once the previous stage is completed. 
* It cannot go back like a waterfall.

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/84c6a06a-6a78-4b40-84f3-47dfc189b6ea)

### Disadvantages of waterfall model
* High risk and uncertainty.
* Not good for complex and object-oriented projects.
* Not suitable for requirement changes.
* No working software is produced until late during the life cycle.
* It is very difficult to go back.


### What is Agile Methodology?
* A practice that promotes continuous iteration of development and testing throughout the SDLF.

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/07040688-8b80-4c79-92ba-e293b41963f2)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/0bc58cf3-bd91-46d7-a854-cf3c7b14ae37)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/076c298f-32a9-45e4-84d8-b7357188308e)


* The main limitation in Agile Methodology even if the development process is agile, still the Deployment process is linear. 


## What is DevOps?

* DevOps is a practice dedicated to the study of building, evolving, and operating rapidly changing systems at scale.
* DevOps is the practice of operation and development engineers participating together in the entire software life cycle.

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/4fd48fc0-4bc4-4633-850e-ac54673fc58d)


## DevOps Stages

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/0e7cb937-cb1e-4638-a5ae-e3618b04080f)


## DevOps Tools

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/87920617-776f-46c4-afe0-cfc7474a829d)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/e75b8ddc-d440-4d93-8f4a-11718294718e)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/f96aaf2d-42c6-4cd3-96ab-d89c4bb34925)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/608ec348-5ab7-4b14-8050-0228017344ae)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/324f92a7-09d6-411d-83de-0b8672dd88b6)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/8617f703-ced5-4f9c-9bcf-b7fa999a58c5)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/f72ee5a7-f912-4961-aec0-90ffb8e877dd)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/87d9abec-728d-4ef6-962b-197e11f240f2)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/42ec0286-d1fb-4284-86a6-1d0e49dbb2a7)

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/e0882885-9e5a-4a8b-a1d5-5988a4030e7c)


## DevOps Use-Case

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/928a05b3-3c95-4cba-9418-3e794003a431)

52:53 Stop


---------------------------

## Jetkins
link - https://www.youtube.com/watch?v=6YZvp2GwT0A

![image](https://github.com/DininduChamikara/DevOps-Learning/assets/73112985/3b6d3f52-31e6-457f-809d-4a56fef701fb)



## Docker Basics
link - https://www.youtube.com/watch?v=slcKUz6CyLg

    * docker build . -> to create a docker image
    * docker build -t docker_demo build . -> to create a docker image with the tag name
    * docker image ls -> to get the list of docker images
    * docker build -t docker_demo:v1 build . -> to create several versions of the same image
    * docker run docker_demo:v1 -> to run the docker image
    * docker run -p 5000:5000 docker_demo:v1 -> to bind the container running port to the local running port

### Upload to a Docker Container Registry (DockerHub)

Go to your docker hub account and create a repository with the name docker_demo

    * docker tag docker_demo:v1 dininduchamikara/docker_demo:v1 -> tag with a name
    * docker push dininduchamikara/docker_demo:v1 -> push the repo
    * docker pull dininduchamikara/docker_demo:v1 -> pull the docker image
    * docker run -p 5000:5000 dininduchamikara/docker_demo:v1 -> to run the docker image

### Simple Dockerfile

```markdown
FROM node:21-alpine as builder

WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4012

CMD ["npm", "start"]
```

### Simple docker-compose.yml

```markdown
version: '3'

services:
  web:
    build: .
    ports:
      - "5000:5000"
```

* docker compose up -d -> to run the docker-compose.yml file.
* docker compose down -> to stop the running services.



