example-express-namespace-next-route
====================================

Example of using `next('route')` with [express-namespace](https://github.com/visionmedia/express-namespace). As of version 0.1.1, multiple routes are registered for a path with multiple callbacks. This prevents `next('route')` in express from working properly. This repository uses a fork with a suggested fix.

v0.1.1:

```
$ DEBUG=express:* node index.js
  express:application booting in development mode +0ms
  express:router defined get /me/:id +0ms
  express:router defined get /me/:id +0ms
```

With suggested fix:

```
$ DEBUG=express:* node index.js
  express:application booting in development mode +0ms
  express:router defined get /me/:id +0ms
```
