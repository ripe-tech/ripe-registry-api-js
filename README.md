# RIPE Registry API for Javascript

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
