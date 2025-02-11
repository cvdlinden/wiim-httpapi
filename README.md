# wiim-httpapi

Exploring the HTTP API for WiiM products.  
The HTTP API can be found on your WiiM device like so: https://{ip-address}/httpapi.asp?command={command}

Status: Work in progress!  
First I'll gather all endpoints, then test and elaborate the documentation.

Idea: Use [Swagger UI](https://swagger.io/tools/swagger-ui/) to document the Linkplay HTTP API, that is used by WiiM.
Swagger/OpenAPI has a nice documentation format, with a 'try it out' option so you can test to see what the responses are.

![Swagger UI](./assets/Screenshot%202025-02-08%20030405.jpg)

Note: The WiiM device has a self-signed certificate, which is deemed unsafe by any modern browser. Therefore this solution uses a reverse proxy that ignores the certificate.

## How to use

1. Clone this repo

   ```shell
   git clone https://github.com/cvdlinden/wiim-httpapi.git
   ```  

   or download the ZIP file and unpack to a folder
2. Do an ```npm install``` to install the required packages
3. Copy the ```config-sample.yaml``` file to ```config.yaml```
4. Edit ```config.yaml``` in your favorite text editor and replace the IP-address with the address of your WiiM device.  
   > You can find your IP-address in the WiiM Home app > Devices > Settings > Network Status
5. Run ```node .\index.js```
6. You will find the interactive documentation at <http://localhost:3000/>

Requirements:

* [Git](https://git-scm.com/): in order to clone this repo. Although you can just download the ZIP file as well.
* [Nodejs](https://nodejs.org/): in order to run this documentation.

## "I don't want to install anything!"

Sure, please see [openapi.md](openapi.md) for a static version of the current API documentation.

Note that you won't have the interactive part to see what the response of your WiiM device actually is.

## "I found another command that isn't in the list!"

Great!  
Linkplay/WiiM haven't documented all commands. And with each new product new commands seem to pop up.  
*Please be patient, this is still a work in progress. Feel free to test it out yourself first of all.*

Add the command you've found to your copy of openapi.yaml, restart node.js and test it out.  
If you need help on how to change the openapi.yaml file please see: [What Is OpenAPI?](https://swagger.io/docs/specification/v3_0/about/)

If you want to share your new discovery and add to this documentation **and** are not afraid to flex some programming skills, you can:

* Fork this repo: [Create a new fork](https://github.com/cvdlinden/wiim-httpapi/fork)
* Make the desired changes to your repo
* If you're happy with the results create a [Pull request](https://github.com/cvdlinden/wiim-httpapi/pulls)
* Please state in the PR what the command does AND where you found it
* I will then evaluate, in my own time, and add the changes to the main repo if they make sense

Having none of that? You can also create an new [Issue](https://github.com/cvdlinden/wiim-httpapi/issues).  
Please tell us what the command does AND where you found it.  

## Development (sources)

### Linkplay/WiiM/Arylic HTTP API sources

In no particular order:

* [x] <https://www.wiimhome.com/pdf/HTTP%20API%20for%20WiiM%20Products.pdf>
* [ ] <https://github.com/DanBrezeanu/wiim-extended-http-api>
* [ ] <https://github.com/n4archive/LinkPlayAPI/blob/master/api.md>
* [ ] <https://developer.arylic.com/httpapi/#http-api>
* [ ] <https://forum.arylic.com/t/api-files-for-developers/1379>

<https://forum.wiimhome.com/threads/api-for-wiim-amp.3306/>

### OpenAPI/Swagger sources

[What Is OpenAPI?](https://swagger.io/docs/specification/v3_0/about/)

Swagger Editor, an online editor for OpenAPI:

* <https://editor-next.swagger.io/>

File > Import File > edit to your liking  
Then Save as YAML and JSON  
Or Generate Server/Client (if you want to use the API in your own project)

OpenAPI GUI, an online editor for OpenAPI:

* <https://github.com/Mermade/openapi-gui>
* <https://mermade.github.io/openapi-gui/>

### Reviewing changes to the YAML doc

If you're actively changing the openapi.yaml file locally it is best to use ```nodemon```. If you've changed the documentation you will only need to refresh the browser, instead of restarting nodejs again. Run:

```shell
nodemon
```

Note: You'll find an openapi.json file as well in this source. It isn't used and only here for reference purposes.

### OpenAPI.yaml to OpenAPI.json

Use ```npm run openapi2json``` to create the JSON version of the OpenAPI documentation. It will create/overwrite the [openapi.json](openapi.json) file!

Uses a global [yamljs](https://www.npmjs.com/package/yamljs) install:

```shell
npm install -g yamljs
```

### OpenAPI.yaml to OpenAPI.md (Markdown)

Use ```npm run openapi2md``` to create an Markdown version of the YAML file. Then see [openapi.md](openapi.md).

Uses a global [Widdershins](https://www.npmjs.com/package/widdershins) install:

```shell
npm install -g widdershins
```

* <https://github.com/Mermade/widdershins>
* <https://techdocs.studio/blog/openapi-to-markdown>

### Reverse proxy

This solution contains a reverse proxy in order to circumvent the self-signed certificate the WiiM device uses.  
The proxy can be found at <http://localhost:3000/proxy/{command}>.  
For the internals, see the index.js file.  
The reverse proxy will translate the command requested to the proper url that the WiiM device understands and return any output it receives.
