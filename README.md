# wiim-httpapi

Exploring the HTTP API for WiiM products. Work in progress...

Idea: Use Swagger UI to document the Linkplay HTTP API, that is used by WiiM.
Swagger/OpenAPI has a nice documentation format, with try out functions so you can test to see what the responses are.

Note: The WiiM device has a self-signed certificate, which is blocked by any modern browser. This solution uses a reverse proxy that ignores the certificate.

API Documentation:

* <https://www.wiimhome.com/pdf/HTTP%20API%20for%20WiiM%20Products.pdf>
* <https://github.com/DanBrezeanu/wiim-extended-http-api>
* <https://github.com/n4archive/LinkPlayAPI/blob/master/api.md>

* <https://forum.wiimhome.com/threads/api-for-wiim-amp.3306/>

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
