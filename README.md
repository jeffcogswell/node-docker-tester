# node-docker-tester
Basic docker image that just runs a counter in node. For testing purposes. Feel free to fork, use as you want, etc.

( Work in progress - don't use it yet :=D )

I'm not specifying a version of node. Use what you want. If you want a specific version, just tack it on to the end of the FROM line, e.g.

```
FROM node:10
```

Build the image:

```
docker build -t <your-docker-username>/node-docker-tester .
```

Run it detached:

```
docker run -d --name tester1 <your-docker-username>/node-docker-tester
```

To view the output:
```
docker logs -f tester1
```

Go into the container from another console if you want to:
```
docker exec -it tester1 bash
```
Inside you can do things like ```ls```, or whatever...

To stop the container:
```
docker stop tester1
```

To delete the container:
```
docker rm -v tester1
```

