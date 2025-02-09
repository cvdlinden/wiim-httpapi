# wiim-httpapi

Exploring the HTTP API (/httpapi.asp) for WiiM products.

Status: Work in progress...

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
4. Edit ```config.yaml``` in your favorite text editor and replace the ip-address with the address of your WiiM device
5. Run ```node .\index.js```
6. You will find the interactive documentation at <http://localhost:3000/>

Requirements:

* [Git](https://git-scm.com/): in order to clone this repo. Although you can just download the ZIP file as well.
* [Nodejs](https://nodejs.org/): in order to run this documentation.

## Linkplay/WiiM/Arylic HTTP API sources

In no particular order:

* <https://www.wiimhome.com/pdf/HTTP%20API%20for%20WiiM%20Products.pdf>
* <https://github.com/DanBrezeanu/wiim-extended-http-api>
* <https://github.com/n4archive/LinkPlayAPI/blob/master/api.md>
* <https://developer.arylic.com/httpapi/#http-api>
* <https://forum.arylic.com/t/api-files-for-developers/1379>

<https://forum.wiimhome.com/threads/api-for-wiim-amp.3306/>

## OpenAPI/Swagger sources

Swagger Editor:

* <https://editor-next.swagger.io/>

Import json > Edit > Generate server > nodejs-server

OpenAPI GUI (editor):

* <https://github.com/Mermade/openapi-gui>
* <https://mermade.github.io/openapi-gui/>

## "I've found another command that isn't in the list!"

Please be patient this is still a work in progress. But test it yourself first of all!  
Add it to your copy of linkplay.yaml and try it out.

Then make a PR or create an Issue. Tell us what the command does AND where you found it.  
I don't want to sacrifice my own device or anyone elses. ;)

## Adding changes to the YAML doc

Best to use nodemon, with a watch on the yaml changes. If you change the documentation you will only need to refresh the browser, instead of restarting node again.

```shell
nodemon -e yaml
```

Note: You'll find an openapi.json file as well in this source. It isn't used and only here for reference.

## OpenAPI.yaml to Markdown

Use ```npm run openapi2md``` to create an Markdown version of the YAML file. Then see openapi.md

Uses Widdershins:

* <https://github.com/Mermade/widdershins>
* <https://techdocs.studio/blog/openapi-to-markdown>
