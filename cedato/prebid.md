## Prebid

Latest bundle:
prebid3.15.0

### Patches 
Patched to allow vastXML to pass video validation

### Build
```sh
npm run bundle:cedato
npm run bundle:zippor
```

* Node 12 is not compatible with one of the dependecies of prebid.js. Use node v10 to ```npm i```.


### Enabled modules
+ Consent Management - GDPR
+ Consent Management - US Privacy
+ Supply Chain Object
+ removed __ User ID: ID5 ID __
+ removed __ User ID: PubCommon ID __
+ removed __ User ID: Unified ID __


### Enabled Adapters
See corresponding ```modules.json```
