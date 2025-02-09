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

`GET /wlanGetConnectState`

*Get the connection status*

Makes a call to https://10.10.10.254/httpapi.asp?command=wlanGetConnectState

Note the return result is not in json.

Return string:
Return string Description
PROCESS In progress
PAIRFAIL Wrong password
FAIL Connect fail
OK connected

> Example responses

> Successful response

```
"PROCESS"
```

```
"PAIRFAIL"
```

```
"FAIL"
```

```
"OK"
```

<h3 id="get__wlangetconnectstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-playback-control">Playback control</h1>

Get and set playback controls

## get__getPlayerStatus

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

## get__setPlayerCmd:hex_playlist:url:{index}

`GET /setPlayerCmd:hex_playlist:url:{index}`

http://10.10.10.254/httpapi.asp?command=setPlayerCmd:hex_playlist:url:<index>
Play the URl (URI is the m3u or ASX playlist link, index is the start index), here, url should be
hexed (please refer to 1.3)

<h3 id="get__setplayercmd:hex_playlist:url:{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|

<h3 id="get__setplayercmd:hex_playlist:url:{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:pause

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

`GET /setPlayerCmd:vol:{value}`

*Set volume*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:vol:value
Value can be 0 to 100.

<h3 id="get__setplayercmd:vol:{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|integer|true|Value can be 0 to 100.|

<h3 id="get__setplayercmd:vol:{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:mute:{n}

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

## get__setPlayerCmd:play:{url}

`GET /setPlayerCmd:play:{url}`

*Play audio URL*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:play:url
Play the URL. URL points to an audio stream address.
Response is always 'OK' now

<h3 id="get__setplayercmd:play:{url}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|path|string|true|URL points to an audio stream address|

<h3 id="get__setplayercmd:play:{url}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:playlist:{url}:{index}

`GET /setPlayerCmd:playlist:{url}:{index}`

*Play audio playlist*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:playlist:url:<index>
Play the playlist with the URL (URL points to the m3u or ASX playlist link, index is the start
index).
Response is always 'OK' now.

<h3 id="get__setplayercmd:playlist:{url}:{index}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|
|url|path|string|true|none|

<h3 id="get__setplayercmd:playlist:{url}:{index}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-eq">EQ</h1>

Get and set equalizer settings

## get__EQOn

`GET /EQOn`

*Turn on the EQ*

https://10.10.10.254/httpapi.asp?command=EQOn

JSON Response:
{"status":"OK"} or {"status":"Failed"}

> Example responses

> 200 Response

```
null
```

<h3 id="get__eqon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="get__eqon-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__EQOff

`GET /EQOff`

*Turn off the EQ setting*

https://10.10.10.254/httpapi.asp?command=EQOff

JSON Response:
{"status":"OK"} or {"status":"Failed"}

> Example responses

> 200 Response

```
null
```

<h3 id="get__eqoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="get__eqoff-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__EQGetStat

`GET /EQGetStat`

*Check if the EQ is ON or OFF*

http://10.10.10.254/httpapi.asp?command=EQGetStat

JSON Response:
{"EQStat":"On"} or {"EQStat":"Off"}

> Example responses

> 222 Response

```
null
```

<h3 id="get__eqgetstat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|222|Unknown|Default response|Inline|

<h3 id="get__eqgetstat-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__EQGetList

`GET /EQGetList`

*Check all the possible EQ settings*

http://10.10.10.254/httpapi.asp?command=EQGetList

Response:
["Flat", "Acoustic", "Bass Booster", "Bass Reducer", "Classical", "Dance", "Deep", "Electronic",
"Hip-Hop", "Jazz", "Latin", "Loudness", "Lounge", "Piano", "Pop", "R&B", "Rock", "Small
Speakers", "Spoken Word", "Treble Booster", "Treble Reducer", "Vocal Booster"]

> Example responses

> 200 Response

```
null
```

<h3 id="get__eqgetlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="get__eqgetlist-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__EQLoad:{name}

`GET /EQLoad:{name}`

*Set the specific EQ with name*

http://10.10.10.254/httpapi.asp?command=EQLoad:xxx

JSON Response:
{"status":"OK"} or {"status":"Failed"}

Note: xxx is the one of the name in the list returned by EQGetList, i.e., EQLoad:Flat

<h3 id="get__eqload:{name}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name in the list returned by EQGetList, i.e., EQLoad:Flat|

#### Enumerated Values

|Parameter|Value|
|---|---|
|name|Flat|
|name|Acoustic|
|name|Bass Booster|
|name|Bass Reducer|
|name|Classical|
|name|Dance|
|name|Deep|
|name|Electronic|
|name|Hip-Hop|
|name|Jazz|
|name|Latin|
|name|Loudness|
|name|Lounge|
|name|Piano|
|name|Pop|
|name|R&B|
|name|Rock|
|name|Small Speakers|
|name|Spoken Word|
|name|Treble Booster|
|name|Treble Reducer|
|name|Vocal Booster|

> Example responses

> 200 Response

```
null
```

<h3 id="get__eqload:{name}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="get__eqload:{name}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-track-metadata">Track Metadata</h1>

Get Current Track Metadata

## get__getMetaInfo

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

