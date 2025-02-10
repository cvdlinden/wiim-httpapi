<!-- Generator: Widdershins v4.0.1 -->

<h1 id="linkplay-wiim-arylic-http-api">Linkplay/WiiM/Arylic HTTP API v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

HTTP API for Linkplay/WiiM devices.

You can send 'HTTPs Get' request to the device, most of the response is in the JSON format.

Request format is https://x.x.x.x/httpapi.asp?command=********
x.x.x.x is the IP address of the device (Below, we assume the IP of the device is 10.10.10.254) ******* is the actual command.

Commands can contain both integers and strings, denoted as '%d' for integers and '%s' for strings, respectively.

This Swagger doc uses a reverse proxy to access the device. See the description for the actual command.

Base URLs:

* <a href="http://localhost:3000/proxy">http://localhost:3000/proxy</a>

<h1 id="linkplay-wiim-arylic-http-api-device-information">Device information</h1>

Get the device information

## getStatusEx

<a id="opIdgetStatusEx"></a>

`GET /getStatusEx`

*Get device information*

Makes a call to https://10.10.10.254/httpapi.asp?command=getStatusEx

> Example responses

> 200 Response

```
{"language":"string","ssid":"string","...":"string"}
```

<h3 id="getstatusex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getstatusex-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» language|string|false|none|none|
|» ssid|string|false|none|Name of the device|
|» ...|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-network">Network</h1>

Get the network status

## wlanGetConnectState

<a id="opIdwlanGetConnectState"></a>

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

<h3 id="wlangetconnectstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-playback-control">Playback control</h1>

Get and set playback controls

## getPlayerStatus

<a id="opIdgetPlayerStatus"></a>

`GET /getPlayerStatus`

*Get the playback status*

Makes a call to https://10.10.10.254/httpapi.asp?command=getPlayerStatus

> Example responses

> 200 Response

```
{"status":"PLAYING","...":"string"}
```

<h3 id="getplayerstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getplayerstatus-responseschema">Response Schema</h3>

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

## setPlayerCmdHexPlaylistUrl

<a id="opIdsetPlayerCmdHexPlaylistUrl"></a>

`GET /setPlayerCmd:hex_playlist:url:{index}`

http://10.10.10.254/httpapi.asp?command=setPlayerCmd:hex_playlist:url:<index>
Play the URl (URI is the m3u or ASX playlist link, index is the start index), here, url should be
hexed (please refer to 1.3)

<h3 id="setplayercmdhexplaylisturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|

<h3 id="setplayercmdhexplaylisturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPause

<a id="opIdsetPlayerCmdPause"></a>

`GET /setPlayerCmd:pause`

*Pause*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:pause

<h3 id="setplayercmdpause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdResume

<a id="opIdsetPlayerCmdResume"></a>

`GET /setPlayerCmd:resume`

*Resume*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:resume

<h3 id="setplayercmdresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdOnePause

<a id="opIdsetPlayerCmdOnePause"></a>

`GET /setPlayerCmd:onepause`

*Toggle pause/play*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:onepause
If the state is paused, resume it; otherwise, pause it.

<h3 id="setplayercmdonepause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPrev

<a id="opIdsetPlayerCmdPrev"></a>

`GET /setPlayerCmd:prev`

*Previous*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:prev

<h3 id="setplayercmdprev-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdNext

<a id="opIdsetPlayerCmdNext"></a>

`GET /setPlayerCmd:next`

*Next*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:next

<h3 id="setplayercmdnext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdSeekPosition

<a id="opIdsetPlayerCmdSeekPosition"></a>

`GET /setPlayerCmd:seek:position`

*Seek*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:seek:position
Position is from 0 to duration in second.

<h3 id="setplayercmdseekposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdStop

<a id="opIdsetPlayerCmdStop"></a>

`GET /setPlayerCmd:stop`

*Stop*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:stop

<h3 id="setplayercmdstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdVol

<a id="opIdsetPlayerCmdVol"></a>

`GET /setPlayerCmd:vol:{value}`

*Set volume*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:vol:value
Value can be 0 to 100.

<h3 id="setplayercmdvol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|integer|true|Value can be 0 to 100.|

<h3 id="setplayercmdvol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdMute

<a id="opIdsetPlayerCmdMute"></a>

`GET /setPlayerCmd:mute:{n}`

*Mute*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:mute:n
Mute: n=1
Unmute: n=0
The slave mute state will be set at the same time when it's in group play.

<h3 id="setplayercmdmute-parameters">Parameters</h3>

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

<h3 id="setplayercmdmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdLoopmode

<a id="opIdsetPlayerCmdLoopmode"></a>

`GET /setPlayerCmd:loopmode:{n}`

*Loop mode set*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:loopmode:n

n = 
0 - Sequence, no loop
1 - Single loop
2 - Shuffle loop
-1 - Sequence loop

<h3 id="setplayercmdloopmode-parameters">Parameters</h3>

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

<h3 id="setplayercmdloopmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPlayUrl

<a id="opIdsetPlayerCmdPlayUrl"></a>

`GET /setPlayerCmd:play:{url}`

*Play audio URL*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:play:url
Play the URL. URL points to an audio stream address.
Response is always 'OK' now

<h3 id="setplayercmdplayurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|path|string|true|URL points to an audio stream address|

<h3 id="setplayercmdplayurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPlaylistUrl

<a id="opIdsetPlayerCmdPlaylistUrl"></a>

`GET /setPlayerCmd:playlist:{url}:{index}`

*Play audio playlist*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:playlist:url:<index>
Play the playlist with the URL (URL points to the m3u or ASX playlist link, index is the start
index).
Response is always 'OK' now.

<h3 id="setplayercmdplaylisturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|
|url|path|string|true|none|

<h3 id="setplayercmdplaylisturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-eq">EQ</h1>

Get and set equalizer settings

## setEQOn

<a id="opIdsetEQOn"></a>

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

<h3 id="seteqon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="seteqon-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## setEQOff

<a id="opIdsetEQOff"></a>

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

<h3 id="seteqoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="seteqoff-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getEQStat

<a id="opIdgetEQStat"></a>

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

<h3 id="geteqstat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|222|Unknown|Default response|Inline|

<h3 id="geteqstat-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getEQList

<a id="opIdgetEQList"></a>

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

<h3 id="geteqlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="geteqlist-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## loadEQByName

<a id="opIdloadEQByName"></a>

`GET /EQLoad:{name}`

*Set the specific EQ with name*

http://10.10.10.254/httpapi.asp?command=EQLoad:xxx

JSON Response:
{"status":"OK"} or {"status":"Failed"}

Note: xxx is the one of the name in the list returned by EQGetList, i.e., EQLoad:Flat

<h3 id="loadeqbyname-parameters">Parameters</h3>

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

<h3 id="loadeqbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="loadeqbyname-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-device-control">Device control</h1>

Control the device

## rebootDevice

<a id="opIdrebootDevice"></a>

`GET /reboot`

*Reboot*

http://10.10.10.254/httpapi.asp?command=reboot

JSON Response:
{"status":"OK"}

> Example responses

> Default response

```
{"status":"OK"}
```

<h3 id="rebootdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="rebootdevice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## setShutdownTimer

<a id="opIdsetShutdownTimer"></a>

`GET /setShutdown:{sec}`

*Shutdown*

http://10.10.10.254/httpapi.asp?command=setShutdown:sec

Shutdown device in sec

sec:
0: shutdown immediately
-1: cancel the previous shutdown timer

JSON Response:
{"status":"OK"} or {"status":"Failed"}

<h3 id="setshutdowntimer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sec|path|string|true|Shutdown device in sec|

#### Detailed descriptions

**sec**: Shutdown device in sec

0: shutdown immediately
-1: cancel the previous shutdown timer

> Example responses

> Default response

```
{"status":"OK"}
```

```
{"status":"Failed"}
```

<h3 id="setshutdowntimer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="setshutdowntimer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getShutdownTimer

<a id="opIdgetShutdownTimer"></a>

`GET /getShutdown`

*Get the shutdown timer*

http://10.10.10.254/httpapi.asp?command=getShutdown

Return the seconds

> Example responses

> Default response

```
0
```

<h3 id="getshutdowntimer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|integer|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-alarm-clock">Alarm clock</h1>

Get and set alarm clock

## setTimeSync

<a id="opIdsetTimeSync"></a>

`GET /timeSync:{YYYYMMDDHHMMSS}`

*Get network time*

If the device has no internet access, you need to sync its time with:

http://10.10.10.254/httpapi.asp?command=timeSync:YYYYMMDDHHMMSS

YYYY is year（such as 2015)，MM is month (01~12)，DD is day (01~31)，HH is hour (00~23)，
MM is minute (00~59)，SS is second (00~59)

In UTC

<h3 id="settimesync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAlarmClock

<a id="opIdsetAlarmClock"></a>

`GET /setAlarmClock:{n}:{trig}:{op}:{time}[:{day}][:{url}]`

*Set Alarm*

http://10.10.10.254/httpapi.asp?command=setAlarmClock:n:trig:op:time[:day][:url]

n: 0~2，currently support max 3 alarm

trig: the alarm trigger：
0 cancel the alarm, for example: setAlarmClock:n:0
1 once，day should be YYYYMMDD
2 every day
3 every week，day should be 2 bytes (00”~“06”), means from Sunday to Saturday.
4 every week，day should be 2 bytes, the bit 0 to bit 6 means the effect，for example,
“7F” means every day in week, “01” means only Sunday
5 every month，day should be 2 bytes (“01”~“31”)

op: the action
0 shell execute
1 playback or ring
2 stop playback
time: should be HHMMSS, in UTC

day:
if trigger is 0 or 2, no need to set.
if trigger is 1, should be YYYYMMDD ( %04d%02d%02d)
if trigger is 3, day should be 2 bytes (“00”~“06”), means from Sunday to Saturday.
if trigger is 4, day should be 2 bytes, the bit 0 to bit 6 means the effect，for example,
“7F” means every day in week, “01” means only Sunday
if trigger is 5, day should be 2 bytes (“01”~“31”)

url：the shell path or playback url, should less than 256 bytes

<h3 id="setalarmclock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|string|true|The alarm clock number|
|trig|path|string|true|The alarm trigger|
|op|path|string|true|The action|
|time|path|string|true|should be HHMMSS, in UTC|
|day|path|string|true|if trigger is 0 or 2, no need to set.|
|url|path|string|true|The shell path or playback url, should less than 256 bytes|

#### Detailed descriptions

**n**: The alarm clock number

currently support max 3 alarm

**trig**: The alarm trigger

0 cancel the alarm, for example: setAlarmClock:n:0
1 once，day should be YYYYMMDD
2 every day
3 every week，day should be 2 bytes (00”~“06”), means from Sunday to Saturday.
4 every week，day should be 2 bytes, the bit 0 to bit 6 means the effect，for example,
“7F” means every day in week, “01” means only Sunday
5 every month，day should be 2 bytes (“01”~“31”)

**op**: The action

0 shell execute
1 playback or ring
2 stop playback

**day**: if trigger is 0 or 2, no need to set.

if trigger is 1, should be YYYYMMDD ( %04d%02d%02d)

if trigger is 3, day should be 2 bytes (“00”~“06”), means from Sunday to Saturday.

if trigger is 4, day should be 2 bytes, the bit 0 to bit 6 means the effect, for example,
“7F” means every day in week, “01” means only Sunday

if trigger is 5, day should be 2 bytes (“01”~“31”)

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|
|n|2|
|trig|0|
|trig|1|
|trig|2|
|trig|3|
|trig|4|
|trig|5|
|op|0|
|op|1|
|op|2|

<h3 id="setalarmclock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAlarmClock

<a id="opIdgetAlarmClock"></a>

`GET /getAlarmClock:{n}`

http://10.10.10.254/httpapi.asp?command=getAlarmClock:n

n: 0~2，currently support max 3 alarm
{"enable":"1",
"trigger":"%d",
"operation":"%d",
"date"::"%02d:%02d:%02d", //if not a “every day” alarm, no this
"week_day":"%d", //if not a “every week” alarm, no this
"day":"%02d", //if not a “every month” alarm, no this
"time":"%02d:02d:%02d",
"path":"%s""}

<h3 id="getalarmclock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|string|true|The alarm clock number|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|
|n|2|

<h3 id="getalarmclock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## stopAlarm

<a id="opIdstopAlarm"></a>

`GET /alarmStop`

*Stop the current alarm*

http://10.10.10.254/httpapi.asp?command=alarmStop

<h3 id="stopalarm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-track-metadata">Track Metadata</h1>

Get Current Track Metadata

## getMetaInfo

<a id="opIdgetMetaInfo"></a>

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

<h3 id="getmetainfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-audio-output-control">Audio Output Control</h1>

Get and set audio output mode

## getNewAudioOutputHardwareMode

<a id="opIdgetNewAudioOutputHardwareMode"></a>

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

<h3 id="getnewaudiooutputhardwaremode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAudioOutputHardwareMode

<a id="opIdsetAudioOutputHardwareMode"></a>

`GET /setAudioOutputHardwareMode:{n}`

*Set audio output mode*

Field Description
Hardware Interface output mode:
1: AUDIO_OUTPUT_SPDIF_MODE
2: AUDIO_OUTPUT_AUX_MODE
3: AUDIO_OUTPUT_COAX_MODE
Response is 'OK'

<h3 id="setaudiooutputhardwaremode-parameters">Parameters</h3>

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

<h3 id="setaudiooutputhardwaremode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

