---
title: Linkplay/WiiM HTTP API v1.2.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers:
  - <a href="https://github.com/cvdlinden/wiim-httpapi">External
    documentation</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="linkplay-wiim-http-api">Linkplay/WiiM HTTP API v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

HTTP API for Linkplay/WiiM devices.

You can send 'HTTPs Get' request to the device, most of the response is in the JSON format.

Request format is https://x.x.x.x/httpapi.asp?command=********
x.x.x.x is the IP address of the device (Below, we assume the IP of the device is 10.10.10.254) ******* is the actual command.

Commands can contain both integers and strings, denoted as '%d' for integers and '%s' for strings, respectively.

This Swagger doc uses a reverse proxy to access the device. See the description for the actual command.

Base URLs:

* <a href="http://localhost:3000/proxy">http://localhost:3000/proxy</a>

<h1 id="linkplay-wiim-http-api-device-information">Device information</h1>

Get the device information

## get__getStatusEx

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/getStatusEx \
  -H 'Accept: text/html'

```

```http
GET http://localhost:3000/proxy/getStatusEx HTTP/1.1
Host: localhost:3000
Accept: text/html

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('http://localhost:3000/proxy/getStatusEx',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/html'
}

result = RestClient.get 'http://localhost:3000/proxy/getStatusEx',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.get('http://localhost:3000/proxy/getStatusEx', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/html',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/getStatusEx', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/getStatusEx");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/html"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/getStatusEx", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /getStatusEx`

*Get device information*

Makes a call to https://10.10.10.254/httpapi.asp?command=getStatusEx

> Example responses

> 200 Response

```
{"language":"string","ssid":"string","...":"string"}
```

<h3 id="get__getstatusex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get__getstatusex-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» language|string|false|none|none|
|» ssid|string|false|none|Name of the device|
|» ...|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-network">Network</h1>

Get the network status

## get__wlanGetConnectState

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/wlanGetConnectState \
  -H 'Accept: text/html'

```

```http
GET http://localhost:3000/proxy/wlanGetConnectState HTTP/1.1
Host: localhost:3000
Accept: text/html

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('http://localhost:3000/proxy/wlanGetConnectState',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/html'
}

result = RestClient.get 'http://localhost:3000/proxy/wlanGetConnectState',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.get('http://localhost:3000/proxy/wlanGetConnectState', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/html',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/wlanGetConnectState', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/wlanGetConnectState");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/html"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/wlanGetConnectState", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /wlanGetConnectState`

*Get the connection status*

Makes a call to https://10.10.10.254/httpapi.asp?command=wlanGetConnectState Note the return result is not in json.

> Example responses

> 200 Response

```
"PROCESS"
```

<h3 id="get__wlangetconnectstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get__wlangetconnectstate-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-playback-control">Playback control</h1>

Get and set playback controls

## get__getPlayerStatus

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/getPlayerStatus \
  -H 'Accept: text/html'

```

```http
GET http://localhost:3000/proxy/getPlayerStatus HTTP/1.1
Host: localhost:3000
Accept: text/html

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('http://localhost:3000/proxy/getPlayerStatus',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/html'
}

result = RestClient.get 'http://localhost:3000/proxy/getPlayerStatus',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.get('http://localhost:3000/proxy/getPlayerStatus', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/html',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/getPlayerStatus', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/getPlayerStatus");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/html"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/getPlayerStatus", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /getPlayerStatus`

*Get the playback status*

Makes a call to https://10.10.10.254/httpapi.asp?command=getPlayerStatus

> Example responses

> 200 Response

```
{"status":"PLAYING","...":"string"}
```

<h3 id="get__getplayerstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="get__getplayerstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|Playback status|
|» ...|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PLAYING|
|status|PAUSE|
|status|STOP|
|status|BUFFERING|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:play:url

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:play:url

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:play:url HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:play:url',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:play:url',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:play:url')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:play:url', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:play:url");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:play:url", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:play:url`

*Play audio URL*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:play:url
Play the URL. URL points to an audio stream address.
Response is always 'OK' now

<h3 id="get__setplayercmd:play:url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:playlist:url:{index}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index} HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:playlist:url:{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:playlist:url:{index}`

*Play audio playlist*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:playlist:url:<index>
Play the playlist with the URL (URL points to the m3u or ASX playlist link, index is the start
index).
Response is always 'OK' now.

<h3 id="get__setplayercmd:playlist:url:{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:hex_playlist:url:{index}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index} HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:hex_playlist:url:{index}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:hex_playlist:url:{index}`

http://10.10.10.254/httpapi.asp?command=setPlayerCmd:hex_playlist:url:<index>
Play the URl (URI is the m3u or ASX playlist link, index is the start index), here, url should be
hexed (please refer to 1.3)

<h3 id="get__setplayercmd:hex_playlist:url:{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:pause

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:pause

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:pause HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:pause',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:pause',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:pause')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:pause', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:pause");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:pause", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:pause`

*Pause*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:pause

<h3 id="get__setplayercmd:pause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:resume

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:resume

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:resume HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:resume',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:resume',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:resume')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:resume', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:resume");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:resume", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:resume`

*Resume*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:resume

<h3 id="get__setplayercmd:resume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:onepause

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:onepause

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:onepause HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:onepause',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:onepause',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:onepause')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:onepause', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:onepause");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:onepause", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:onepause`

*Toggle pause/play*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:onepause
If the state is paused, resume it; otherwise, pause it.

<h3 id="get__setplayercmd:onepause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:prev

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:prev

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:prev HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:prev',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:prev',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:prev')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:prev', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:prev");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:prev", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:prev`

*Previous*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:prev

<h3 id="get__setplayercmd:prev-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:next

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:next

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:next HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:next',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:next',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:next')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:next', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:next");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:next", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:next`

*Next*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:next

<h3 id="get__setplayercmd:next-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:seek:position

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:seek:position

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:seek:position HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:seek:position',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:seek:position',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:seek:position')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:seek:position', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:seek:position");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:seek:position", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:seek:position`

*Seek*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:seek:position
Position is from 0 to duration in second.

<h3 id="get__setplayercmd:seek:position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:stop

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:stop

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:stop HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:stop',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:stop',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:stop')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:stop', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:stop");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:stop", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:stop`

*Stop*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:stop

<h3 id="get__setplayercmd:stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:vol:{value}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:vol:{value}

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:vol:{value} HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:vol:{value}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:vol:{value}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:vol:{value}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:vol:{value}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:vol:{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:vol:{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:vol:{value}`

*Set volume*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:vol:value
Value can be 0 to 100.

<h3 id="get__setplayercmd:vol:{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|string|true|Value can be 0 to 100.|

<h3 id="get__setplayercmd:vol:{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:mute:{n}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:mute:{n}

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:mute:{n} HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:mute:{n}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:mute:{n}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:mute:{n}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:mute:{n}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:mute:{n}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:mute:{n}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:mute:{n}`

*Mute*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:mute:n
Mute: n=1
Unmute: n=0
The slave mute state will be set at the same time when it's in group play.

<h3 id="get__setplayercmd:mute:{n}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|string|true|Mute: n=1|

#### Detailed descriptions

**n**: Mute: n=1
Unmute: n=0

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|1|
|n|0|

<h3 id="get__setplayercmd:mute:{n}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:loopmode:{n}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}

```

```http
GET http://localhost:3000/proxy/setPlayerCmd:loopmode:{n} HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setPlayerCmd:loopmode:{n}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setPlayerCmd:loopmode:{n}`

*Loop mode set*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:loopmode:n

n = 
0 - Sequence, no loop
1 - Single loop
2 - Shuffle loop
-1 - Sequence loop

<h3 id="get__setplayercmd:loopmode:{n}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|string|true|0 Sequence, no loop|

#### Detailed descriptions

**n**: 0 Sequence, no loop
1 Single loop
2 Shuffle loop
-1 Sequence loop

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|
|n|2|
|n|-1|

<h3 id="get__setplayercmd:loopmode:{n}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-track-metadata">Track Metadata</h1>

Get Current Track Metadata

## get__getMetaInfo

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/getMetaInfo

```

```http
GET http://localhost:3000/proxy/getMetaInfo HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/getMetaInfo',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/getMetaInfo',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/getMetaInfo')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/getMetaInfo', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/getMetaInfo");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/getMetaInfo", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /getMetaInfo`

*Get Current Track Metadata*

JSON Response
{
 "metaData": {
 "album": "Country Heat",
 "title": "Old Dirt Roads",
 "artist": "Owen Riegling",
 "albumArtURI ": "https://m.media-amazon.com/images/I/51iU0odzJwL.jpg",
 "sampleRate ": "44100",
 "bitDepth": "16"
 }
}

<h3 id="get__getmetainfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-audio-output-control">Audio Output Control</h1>

Get and set audio output mode

## get__getNewAudioOutputHardwareMode

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/getNewAudioOutputHardwareMode

```

```http
GET http://localhost:3000/proxy/getNewAudioOutputHardwareMode HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/getNewAudioOutputHardwareMode',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/getNewAudioOutputHardwareMode',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/getNewAudioOutputHardwareMode')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/getNewAudioOutputHardwareMode', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/getNewAudioOutputHardwareMode");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/getNewAudioOutputHardwareMode", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /getNewAudioOutputHardwareMode`

*Get audio output mode*

JSON Response：
{"hardware":"2","source":"0","audiocast":"0"}
Description：
Field Description
hardware Hardware Interface output mode:
1: AUDIO_OUTPUT_SPDIF_MODE
2: AUDIO_OUTPUT_AUX_MODE
3: AUDIO_OUTPUT_COAX_MODE
source BT source output mode:
0: disable
1: active
audiocast Audio cast output mode:
0: disable
1: active

<h3 id="get__getnewaudiooutputhardwaremode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setAudioOutputHardwareMode:{n}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}

```

```http
GET http://localhost:3000/proxy/setAudioOutputHardwareMode:{n} HTTP/1.1
Host: localhost:3000

```

```javascript

fetch('http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/proxy/setAudioOutputHardwareMode:{n}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /setAudioOutputHardwareMode:{n}`

*Set audio output mode*

Field Description
Hardware Interface output mode:
1: AUDIO_OUTPUT_SPDIF_MODE
2: AUDIO_OUTPUT_AUX_MODE
3: AUDIO_OUTPUT_COAX_MODE
Response is 'OK'

<h3 id="get__setaudiooutputhardwaremode:{n}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|string|true|Hardware Interface output mode:|

#### Detailed descriptions

**n**: Hardware Interface output mode:
1: AUDIO_OUTPUT_SPDIF_MODE
2: AUDIO_OUTPUT_AUX_MODE
3: AUDIO_OUTPUT_COAX_MODE

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|1|
|n|2|
|n|3|

<h3 id="get__setaudiooutputhardwaremode:{n}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

