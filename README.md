# RIPE Registry API Javascript

The RIPE Registry Javascript client.

## Initialization

```javascript
import { API as RipeRegistryAPI } from "ripe-registry-api";

const api = new RipeRegistryAPI();
```

The initialization can be done by providing an `options` object such as:

```javascript
{
    baseUrl: "https://ripe-registry.platforme.com/api/v1",
    token: "sd1029bfwef9adas+0feqefi"
}
```

## License

 RIPE Registry API Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).

## Build Automation

[![Build Status](https://travis-ci.com/ripe-tech/ripe-registry-api-js.svg?branch=master)](https://travis-ci.com/ripe-tech/ripe-registry-api-js)
[![Build Status GitHub](https://github.com/ripe-tech/ripe-registry-api-js/workflows/Main%20Workflow/badge.svg)](https://github.com/ripe-tech/ripe-registry-api-js/actions)
[![npm Status](https://img.shields.io/npm/v/ripe-registry-api.svg)](https://www.npmjs.com/package/ripe-registry-api)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://www.apache.org/licenses/)
