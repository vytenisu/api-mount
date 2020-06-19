# api-mount

_by Vytenis Urbonavičius_

_api-mount_ provides a straightforward way for connecting _Node.js_ based server with either browser or _Node.js_ client.

Once setup, it makes it feel as if client is calling server-side API methods directly. HTTP requests are abstracted away.

## Both Client and Server

_api-mount_ has separate entry points for _Node.js_ and browser environments. This prevents such situations as when _Node.js_ logic ends up in the bundle meant for browser.

If, for some reason, you would want to explicitly install server-only or client-only package without the other part - you can do so. _api-mount_ is actually fused out of 2 smaller packages which can be used independently:

- [api-mount-server](http://npmjs.com/package/api-mount-server) - allows exposing API using _api-mount_ protocol. Package contains detailed [README](http://npmjs.com/package/api-mount-server) about how APIs can be defined, exposed, how server can be configured, how protocol looks like, etc.
- [api-mount-client](http://npmjs.com/package/api-mount-client) - allows mounting API which was previously exposed by [api-mount-server](http://npmjs.com/package/api-mount-server). Package contains detailed [README](http://npmjs.com/package/api-mount-client) about how APIs can be consumed.

Using above packages directly have little benefit apart from saving few kilobytes of disk space on a development machine - build size should not be impacted.

## Installation

```
npm install --save api-mount
```

## Usage Example

If you are not yet an experienced JS/TS developer, you might find "Try it out" section of [api-mount-client](http://npmjs.com/package/api-mount-client) documentation useful.

_api-mount_ when used in _Node.js_ environment contains exact methods of both [api-mount-server](http://npmjs.com/package/api-mount-server) and [api-mount-client](http://npmjs.com/package/api-mount-client). Please see detailed documentation by clicking on these package names.

Below code serves only as an example:

```typescript
import {apiMountFactory, mountApi} from 'api-mount'

const serverApi = {
  test: () => 'hello',
}

// Serving API on localhost:3000
const ApiMount = apiMountFactory()
ApiMount.exposeApi(serverApi)

// Mounting API which has just been served above
const clientApi = mountApi({baseUrl: 'http://localhost:3000'})
await clientApi.test() // 'hello'
```

Notice that in the above example _apiMountFactory_ comes from [api-mount-server](http://npmjs.com/package/api-mount-server) while _mountApi_ comes from [api-mount-client](http://npmjs.com/package/api-mount-client).
