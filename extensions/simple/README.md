# simple

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install SimpleComponent using `npm`;

```sh
$ [npm install | yarn add] simple
```

## Basic Use

Configure and load SimpleComponent in the application constructor
as shown below.

```ts
import {SimpleComponent, SimpleComponentOptions, DEFAULT_SIMPLE_OPTIONS} from 'simple';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: SimpleComponentOptions = DEFAULT_SIMPLE_OPTIONS;
    this.configure(SimpleComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(SimpleComponent);
    // ...
  }
  // ...
}
```
