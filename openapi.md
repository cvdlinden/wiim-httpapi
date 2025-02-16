<!-- Generator: Widdershins v4.0.1 -->

<h1 id="linkplay-wiim-http-api">Linkplay/WiiM HTTP API v1.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

HTTP API for Linkplay/WiiM devices. This API is based on the HTTP API for WiiM PRODUCTS Version 1.2, with additions from others.

You can send 'HTTPS: Get' requests to the device, most of the responses are a simple 'OK' or in the JSON format.

The request format is 'https://x.x.x.x/httpapi.asp?command=********'

- Where x.x.x.x is the IP address of your WiiM device (In the descriptions, we assume the IP of the device is 10.10.10.254)
- ******* is the actual command.

Commands can contain both integers and strings, denoted as '%d' for integers and '%s' for strings, respectively.

This Swagger doc uses a reverse proxy to access the device. See the description for the actual command.

Note that Linkplay is a provider of the hardware and software for these devices. WiiM is a brand that uses Linkplay hardware and software.
However other brands may also use Linkplay hardware and software, so this API may or may not work with other brands as well, such as Arylic.

If a command doesn't work with your device, it may be that the command is not supported by the device or that the device is not a WiiM device. The command may also be specific to a certain version of the firmware. 

If you have a different brand, you may want to check the documentation for that brand. You'll find commands here that are deprecated: these are commands that are no longer supported by the device or may be brand specific. You can still use them, but they may not work as expected.

Base URLs:

* <a href="http://localhost:3000/proxy">http://localhost:3000/proxy</a>

<h1 id="linkplay-wiim-http-api-generic">Generic</h1>

Generic command for testing

## genericCommand

<a id="opIdgenericCommand"></a>

`GET /{command}`

*Generic command*

Generic command to the device. All calls will follow the format /httpapi.asp?command={command}.

The actual command is passed as a path parameter. With this, you can test out any command that is not explicitly defined in this API.

The response could be a simple 'OK' or an object with data. The actual response will depend on the command sent. If you get an 'unknown command' response, the command is not supported by the device.

Examples:
-  'getStatusEx' will do an /httpapi.asp?command=getStatusEx
-  'setPlayerCmd:pause' will do an /httpapi.asp?command=setPlayerCmd:pause
-  'setPlayerCmd:resume' will do an /httpapi.asp?command=setPlayerCmd:resume

<h3 id="genericcommand-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|command|path|string|true|The actual command to send to the device. Note that the command is case-sensitive.|

> Example responses

> Successful response

```
"OK"
```

```
{"foo":"bar"}
```

```
"unknown command"
```

<h3 id="genericcommand-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-device-information">Device information</h1>

Get the device information

## getStatusEx

<a id="opIdgetStatusEx"></a>

`GET /getStatusEx`

*Get device information*

Makes a call to https://10.10.10.254/httpapi.asp?command=getStatusEx

Retrieves detailed informations about a connected device.

The documented output may or may not be complete or differ from what the
device actually reports.

> Example responses

> 200 Response

```
{"language":"en_us","ssid":"WiiM-1234","hideSSID":"0","SSIDStrategy":"2","branch":"A31_stable_4.6","firmware":"Linkplay.5.0.704664","build":"release","project":"WiiM_Mini","priv_prj":"WiiM_Mini","project_build_name":"WiiM_Mini","Release":"20250101","FW_Release_version":"","PCB_version":"5","cast_enable":1,"cast_usage_report":1,"group":"0","master_uuid":"A7A50887ACBC9B36","slave_mask":"0","wmrm_version":"4.3","wmrm_sub_ver":"1","expired":"0","internet":"1","uuid":"FF31F09E1A5020113B0A3918","MAC":"08:E9:F6:8F:8F:A2","STA_MAC":"00:00:00:00:00:00","BT_MAC":"08:E9:F6:8F:8F:A3","AP_MAC":"0A:E9:F6:8F:8F:A2","ETH_MAC":"08:E9:F6:8F:8F:A9","InitialConfiguration":"1","temperature_power_control":"1000","temperature_cpu":"32","temperature_tmp102":"-998","CountryCode":"US","CountryRegion":"1","date":"2025:01:01","time":"00:00:00","tz":"0.0000","dst_enable":"1","netstat":"1","essid":"","apcli0":"0.0.0.0","eth0":"192.168.167.73","eth2":"192.168.167.74","eth_dhcp":"1","eth_static_ip":"192.168.167.74","eth_static_mask":"255.255.255.0","eth_static_gateway":"192.168.167.1","eth_static_dns1":"194.168.4.100","eth_static_dns2":"194.168.8.100","hardware":"AmlogicA113","VersionUpdate":"0","NewVer":"0","mcu_ver":"0","mcu_ver_new":"0","hdmi_ver":"41","hdmi_ver_new":"","update_check_count":"32","BleRemote_update_checked_counter":"0","ra0":"10.10.10.254","temp_uuid":"FF31F09E1A5020113B0A3918","cap1":"0x40000400","capability":"0x20084808","languages":"0x11ec","prompt_status":"1","iot_ver":"1.0.0","alexa_ver":"20180604","alexa_beta_enable":"0","alexa_force_beta_cfg":"0","dsp_ver":"","dsp_ver_new":"","ModuleColorNumber":"3","ModuleColorString":"","uboot_verinfo":"231211.095208","streams_all":"0x7bff7ffe","streams":"0x7b9831fe","region":"unknown","volume_control":"0","external":"0x0","preset_key":"12","spotify_active":"0","plm_support":"0x6","mqtt_support":"1","lbc_support":"0","WifiChannel":"11","RSSI":"0","BSSID":"","wlanSnr":"0","wlanNoise":"0","wlanFreq":"0","wlanDataRate":"0","battery":"0","battery_percent":"0","securemode":"1","auth":"WPA2PSK","encry":"AES","ota_interface_ver":"2.0","ota_api_ver":"3.0","upnp_version":"1005","upnp_uuid":"uuid:FF31F09E-1A50-2011-3B0A-3918FF31F09E","uart_pass_port":"8899","communication_port":"8819","web_firmware_update_hide":"0","ignore_talkstart":"0","silence_ota_flag":"0","silenceOTATime":"","ignore_silenceOTATime":"1","new_tunein_preset_and_alarm":"1","iheartradio_new":"1","new_iheart_podcast":"1","tidal_version":"2.0","service_version":"1.0","EQ_support":"Eq4p_ver_2.0","EQVersion":"4.3","HiFiSRC_version":"1.1","audio_channel_config":"1","app_timezone_id":"America/New_York","avs_timezone_id":"America/New_York","tz_info_ver":"1.0","max_volume":"100","power_mode":"-1","security":"https/2.0","security_version":"3.0","security_capabilities":{"ver":"1.0","aes_ver":"1.0"},"public_https_version":"1.0","BleRemoteControl":"1","BleRemoteConnected":"0","BleRemoteException":"0","udisk":"0","umount":"0","autoSenseVersion":"1.0","set_play_mode_enable":"0","set_play_mode_gain":"0","audioOutputModeVer":"1.0","privacy_mode":"0","DeviceName":"WiiM Mini-8FA2","GroupName":"WiiM Mini-8FA2"}
```

<h3 id="getstatusex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[DeviceStatus](#schemadevicestatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-track-metadata">Track Metadata</h1>

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
  "subtitle": "",
  "artist": "Owen Riegling",
  "albumArtURI ": "https://m.media-amazon.com/images/I/51iU0odzJwL.jpg",
  "sampleRate ": "44100",
  "bitDepth": "16",
  "bitRate": "63",
  "trackId": "s6707",
 }
}

> Example responses

> 200 Response

```
{"metaData":{"album":"Country Heat","title":"Old Dirt Roads","subtitle":"","artist":"Owen Riegling","albumArtURI":"https://m.media-amazon.com/images/I/51iU0odzJwL.jpg","sampleRate":"44100","bitDepth":"16","bitRate":"63","trackId":"s6707"}}
```

<h3 id="getmetainfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[TrackMetadata](#schematrackmetadata)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-playback-control">Playback control</h1>

Get and set playback controls

## getPlayerStatus

<a id="opIdgetPlayerStatus"></a>

`GET /getPlayerStatus`

*Get the playback status*

Makes a call to https://10.10.10.254/httpapi.asp?command=getPlayerStatus

> Example responses

> 200 Response

```
{"type":"0","ch":"0","mode":"10","loop":"-1","eq":"0","vendor":"vTuner","status":"play","curpos":"63634","offset_pts":"63634","totlen":"0","Title":"4D6F726E696E67204C69676874","Artist":"4F77656E20526965676C696E67","Album":"4D6F726E696E67204C69676874","alarmflag":"0","plicount":"5","plicurr":"2","vol":"25","mute":"0"}
```

<h3 id="getplayerstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[PlayerStatus](#schemaplayerstatus)|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdHexPlaylistUrl

<a id="opIdsetPlayerCmdHexPlaylistUrl"></a>

`GET /setPlayerCmd:hex_playlist:url:{index}`

*Play a specific track from a playlist by URL and index*

http://10.10.10.254/httpapi.asp?command=setPlayerCmd:hex_playlist:url:<index>

Play the URl (URI is the m3u or ASX playlist link, index is the start
index), here, url should be hexed (please refer to 1.3)

<h3 id="setplayercmdhexplaylisturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|

<h3 id="setplayercmdhexplaylisturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPause

<a id="opIdsetPlayerCmdPause"></a>

`GET /setPlayerCmd:pause`

*Pause*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:pause

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdpause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdResume

<a id="opIdsetPlayerCmdResume"></a>

`GET /setPlayerCmd:resume`

*Resume*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:resume

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdOnePause

<a id="opIdsetPlayerCmdOnePause"></a>

`GET /setPlayerCmd:onepause`

*Toggle pause/play*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:onepause

If the state is paused, resume it; otherwise, pause it.

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdonepause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

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

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdplayurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPlaylistUrl

<a id="opIdsetPlayerCmdPlaylistUrl"></a>

`GET /setPlayerCmd:playlist:{url}:{index}`

*Play audio playlist*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:playlist:url:<index>

Play the playlist with the URL (URL points to the m3u or ASX playlist
link, index is the start index).

Response is always 'OK' now.

<h3 id="setplayercmdplaylisturl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|index|path|string|true|none|
|url|path|string|true|none|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdplaylisturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdPrev

<a id="opIdsetPlayerCmdPrev"></a>

`GET /setPlayerCmd:prev`

*Previous*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:prev

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdprev-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdNext

<a id="opIdsetPlayerCmdNext"></a>

`GET /setPlayerCmd:next`

*Next*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:next

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdnext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdSeekPosition

<a id="opIdsetPlayerCmdSeekPosition"></a>

`GET /setPlayerCmd:seek:position`

*Seek*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:seek:position
Position is from 0 to duration in second.

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdseekposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdStop

<a id="opIdsetPlayerCmdStop"></a>

`GET /setPlayerCmd:stop`

*Stop*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:stop

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

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

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdvol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

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

The slave mute state will be set at the same time when it's in group
play.

<h3 id="setplayercmdmute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Mute: n=1|

#### Detailed descriptions

**n**: Mute: n=1
Unmute: n=0

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdLoopmode

<a id="opIdsetPlayerCmdLoopmode"></a>

`GET /setPlayerCmd:loopmode:{n}`

*Loop mode set*

https://10.10.10.254/httpapi.asp?command=setPlayerCmd:loopmode:n

n = 
- -1: ...
- 0: Shuffle disabled, Repeat enabled - loop
- 1: Shuffle disabled, Repeat enabled - loop once
- 2: Shuffle enabled, Repeat enabled - loop
- 3: Shuffle enabled, Repeat disabled
- 4: Shuffle disabled, Repeat disabled
- 5: Shuffle enabled, Repeat enabled - loop once

<h3 id="setplayercmdloopmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|- -1: ...|

#### Detailed descriptions

**n**: - -1: ...
- 0: Shuffle disabled, Repeat enabled - loop
- 1: Shuffle disabled, Repeat enabled - loop once
- 2: Shuffle enabled, Repeat enabled - loop
- 3: Shuffle enabled, Repeat disabled
- 4: Shuffle disabled, Repeat disabled
- 5: Shuffle enabled, Repeat enabled - loop once

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|-1|
|n|0|
|n|1|
|n|2|
|n|3|
|n|4|
|n|5|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setplayercmdloopmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-network">Network</h1>

Get the network status

## getStaticIpInfo

<a id="opIdgetStaticIpInfo"></a>

`GET /getStaticIpInfo`

*Get the static IP information*

Makes a call to https://10.10.10.254/httpapi.asp?command=getStaticIpInfo

If the WiiM device is configured to use DHCP, the above string values will be empty (see the ethernet related keys).

> Example responses

> 200 Response

```
{"wlanStaticIp":"string","wlanGateWay":"string","wlanDnsServer":"string","wlanStaticIpEnable":0,"ethStaticIp":"string","ethGateWay":"string","ethDnsServer":"string","ethStaticIpEnable":0}
```

<h3 id="getstaticipinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[StaticIpInfo](#schemastaticipinfo)|

<aside class="success">
This operation does not require authentication
</aside>

## getStaticIP

<a id="opIdgetStaticIP"></a>

`GET /getStaticIP`

*Query networking status*

Query current networking status

> Example responses

> 200 Response

```
"string"
```

<h3 id="getstaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## wlanGetConnectState

<a id="opIdwlanGetConnectState"></a>

`GET /wlanGetConnectState`

*Get the connection status*

Makes a call to
https://10.10.10.254/httpapi.asp?command=wlanGetConnectState

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

## setWlanStaticIp

<a id="opIdsetWlanStaticIp"></a>

`GET /setWlanStaticIp:{IpAddress}:{GatewayIp}:{DnsServerIp}`

*Set static WLAN network config*

Example: https://10.10.10.254/httpapi.asp?command=setWlanStaticIp:ipAddr=192.168.1.100/24:gateWay=192.168.1.1:dnsServer=8.8.8.8

Keyword args:
- ipAddr: Static IP address to set + netmask
- gateWay: Gateway
- dnsServer: The DNS Server (default: 8.8.8.8)

<h3 id="setwlanstaticip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IpAddress|path|string|true|Static IP address to set + netmask|
|GatewayIp|path|string|true|Gateway IP address|
|DnsServerIp|path|string|true|The DNS Server (default: 8.8.8.8)|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setwlanstaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-equalizer">Equalizer</h1>

Get and set equalizer settings

## setEQOn

<a id="opIdsetEQOn"></a>

`GET /EQOn`

*Turn on the EQ*

https://10.10.10.254/httpapi.asp?command=EQOn

> Example responses

> Default response

```
{"status":"OK"}
```

```
{"status":"Failed"}
```

<h3 id="seteqon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="seteqon-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## setEQOff

<a id="opIdsetEQOff"></a>

`GET /EQOff`

*Turn off the EQ setting*

https://10.10.10.254/httpapi.asp?command=EQOff

> Example responses

> Default response

```
{"status":"OK"}
```

```
{"status":"Failed"}
```

<h3 id="seteqoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="seteqoff-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|none|

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

> 200 Response

```
null
```

<h3 id="geteqstat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

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

["Flat", "Acoustic", "Bass Booster", "Bass Reducer", "Classical",
"Dance", "Deep", "Electronic",

"Hip-Hop", "Jazz", "Latin", "Loudness", "Lounge", "Piano", "Pop", "R&B",
"Rock", "Small

Speakers", "Spoken Word", "Treble Booster", "Treble Reducer", "Vocal
Booster"]

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

Note: xxx is the one of the name in the list returned by EQGetList,
i.e., EQLoad:Flat

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

> Default response

```
{"status":"OK"}
```

```
{"status":"Failed"}
```

<h3 id="loadeqbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="loadeqbyname-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-device-control">Device control</h1>

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

## setLedSwitch

<a id="opIdsetLedSwitch"></a>

`GET /LED_SWITCH_SET:{n}`

*Turn on/off status LED ("Status Light" option from app)*

Example: https://10.10.10.254/httpapi.asp?command=LED_SWITCH_SET:0

Observations:
- Value is either 1 (on) or 0 (off)

<h3 id="setledswitch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|1 (on) or 0 (off)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setledswitch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setTouchControls

<a id="opIdsetTouchControls"></a>

`GET /Button_Enable_SET:{n}`

*Turn on/off touch controls*

Example: https://10.10.10.254/httpapi.asp?command=Button_Enable_SET:0

Observations:
- Value is either 1 (on) or 0 (off)

<h3 id="settouchcontrols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|1 (on) or 0 (off)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="settouchcontrols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-alarm-clock">Alarm clock</h1>

Get and set alarm clock

## setTimeSync

<a id="opIdsetTimeSync"></a>

`GET /timeSync:{YYYYMMDDHHMMSS}`

*Get network time*

If the device has no internet access, you need to sync its time with:

http://10.10.10.254/httpapi.asp?command=timeSync:YYYYMMDDHHMMSS

YYYY is year (such as 2015), MM is month (01~12), DD is day (01~31), HH
is hour (00~23),

MM is minute (00~59), SS is second (00~59)

In UTC

<h3 id="settimesync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|YYYYMMDDHHMMSS|path|string|true|none|

> Example responses

> 200 Response

```
null
```

<h3 id="settimesync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="settimesync-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## setAlarmClock

<a id="opIdsetAlarmClock"></a>

`GET /setAlarmClock:{n}:{trig}:{op}:{time}:{day}:{url}`

*Set Alarm*

http://10.10.10.254/httpapi.asp?command=setAlarmClock:n:trig:op:time[:day][:url]

n: 0~2, currently support max 3 alarm

trig: the alarm trigger:

0 cancel the alarm, for example: setAlarmClock:n:0

1 once, day should be YYYYMMDD

2 every day

3 every week, day should be 2 bytes ("00"~"06"), means from Sunday to
Saturday.

4 every week, day should be 2 bytes, the bit 0 to bit 6 means the
effect, for example,

"7F" means every day in week, "01" means only Sunday

5 every month, day should be 2 bytes ("01"~"31")

op: the action

0 shell execute

1 playback or ring

2 stop playback

time: should be HHMMSS, in UTC

day:

if trigger is 0 or 2, no need to set.

if trigger is 1, should be YYYYMMDD ( %04d%02d%02d)

if trigger is 3, day should be 2 bytes ("00"~"06"), means from Sunday to
Saturday.

if trigger is 4, day should be 2 bytes, the bit 0 to bit 6 means the
effect, for example,

"7F" means every day in week, "01" means only Sunday

if trigger is 5, day should be 2 bytes ("01"~"31")

url: the shell path or playback url, should less than 256 bytes

<h3 id="setalarmclock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|The alarm clock number|
|trig|path|integer|true|The alarm trigger|
|op|path|integer|true|The action|
|time|path|string|true|should be HHMMSS, in UTC|
|day|path|string|true|if trigger is 0 or 2, no need to set.|
|url|path|string|true|The shell path or playback url, should less than 256 bytes|

#### Detailed descriptions

**n**: The alarm clock number

currently support max 3 alarm

**trig**: The alarm trigger

0 cancel the alarm, for example: setAlarmClock:n:0

1 once, day should be YYYYMMDD

2 every day

3 every week, day should be 2 bytes (00"~"06"), means from Sunday to
Saturday.

4 every week, day should be 2 bytes, the bit 0 to bit 6 means the
effect, for example,

"7F" means every day in week, "01" means only Sunday

5 every month, day should be 2 bytes ("01"~"31")

**op**: The action

0 shell execute
1 playback or ring
2 stop playback

**day**: if trigger is 0 or 2, no need to set.

if trigger is 1, should be YYYYMMDD ( %04d%02d%02d)

if trigger is 3, day should be 2 bytes ("00"~"06"), means from
Sunday to Saturday.

if trigger is 4, day should be 2 bytes, the bit 0 to bit 6 means the
effect, for example,

"7F" means every day in week, "01" means only Sunday

if trigger is 5, day should be 2 bytes ("01"~"31")

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

> Example responses

> 200 Response

```
null
```

<h3 id="setalarmclock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="setalarmclock-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getAlarmClock

<a id="opIdgetAlarmClock"></a>

`GET /getAlarmClock:{n}`

http://10.10.10.254/httpapi.asp?command=getAlarmClock:n

n: 0~2, currently support max 3 alarm
{"enable":"1",
"trigger":"%d",
"operation":"%d",
"date"::"%02d:%02d:%02d", //if not a "every day" alarm, no this
"week_day":"%d", //if not a "every week" alarm, no this
"day":"%02d", //if not a "every month" alarm, no this
"time":"%02d:02d:%02d",
"path":"%s""}

<h3 id="getalarmclock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|The alarm clock number|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|
|n|2|

> Example responses

> 200 Response

```
{}
```

<h3 id="getalarmclock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="getalarmclock-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## stopAlarmClock

<a id="opIdstopAlarmClock"></a>

`GET /alarmStop`

*Stop the current alarm*

http://10.10.10.254/httpapi.asp?command=alarmStop

> Example responses

> 200 Response

```
null
```

<h3 id="stopalarmclock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="stopalarmclock-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-source-input-switch">Source Input Switch</h1>

Switch between inputs

## setPlayerCmdSwitchMode

<a id="opIdsetPlayerCmdSwitchMode"></a>

`GET /setPlayerCmd:switchmode:{mode}`

*Switch the source input*

http://10.10.10.254/httpapi.asp?command=setPlayerCmd:switchmode:%s

the mode can be the text as below:
- line-in (it refers to aux-in too)
- bluetooth
- optical
- udisk
- wifi

<h3 id="setplayercmdswitchmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|line-in|
|mode|bluetooth|
|mode|optical|
|mode|udisk|
|mode|wifi|

> Example responses

> 200 Response

```
null
```

<h3 id="setplayercmdswitchmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="setplayercmdswitchmode-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-presets">Presets</h1>

Manage presets

The WiiM Home App allows users to configure 12 presets for quick access to
preferred radio stations, playlists, mixes, albums, or artists. Each preset is accessible through its assigned number.

## getMCUKeyShortClick

<a id="opIdgetMCUKeyShortClick"></a>

`GET /MCUKeyShortClick:{n}`

*Play preset with preset number*

http://10.10.10.254/httpapi.asp?command=MCUKeyShortClick:%d

%d: Range is from 1 to 12

<h3 id="getmcukeyshortclick-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Preset number|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|1|
|n|2|
|n|3|
|n|4|
|n|5|
|n|6|
|n|7|
|n|8|
|n|9|
|n|10|
|n|11|
|n|12|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="getmcukeyshortclick-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getPresetInfo

<a id="opIdgetPresetInfo"></a>

`GET /getPresetInfo`

*Get Preset List*

http://10.10.10.254/httpapi.asp?command=getPresetInfo

JSON Response

{
  "preset_num": 3,
  "preset_list": [
  {
    "number": 1,
    "name": "BBC Radio Norfolk",
    "url": "http:\/\/as-hls-wwlive.akamaized.net\/pool_904\/live\/ww\/bbc_radio_norfolk\/bbc_radio_norfolk.isml\/bbc_radio_norfolk-audio%3d96000.norewind.m3u8",
    "source": "Linkplay Radio",
    "picurl": "http:\/\/cdnprofiles.tunein.com\/s6852\/images\/logoq.jpg?t=638353933090000000"
  }, 
  {
    "number": 6,
    "name": "Radio Paradise",
    "url": "http:\/\/stream.radioparadise.com\/flacm",
    "source": "RadioParadise",
    "picurl": "https:\/\/cdnprofiles.tunein.com\/s13606\/images\/logod.png?t=637541039930000000"
  }, 
  {
    "number": 8,
    "name": "1. Country Heat",
    "url": "unknow",
    "source": "Prime",
    "picurl": "https:\/\/m.media-amazon.com\/images\/I\/51uR6AJUAQL.jpg"
  }
  ]
}

Description

Field type Description

preset_num int Total number of presets

preset_list json array Preset list information

number int Preset index (Start from 1)

name string Playlist name

url string Play url

source string Music source

picurl string Cover picture url

> Example responses

> 200 Response

```
{"preset_num":3,"preset_list":[{"number":1,"name":"BBC Radio Norfolk","url":"http://as-hls-wwlive.akamaized.net/pool_904/live/ww/bbc_radio_norfolk/bbc_radio_norfolk.isml/bbc_radio_norfolk-audio%3d96000.norewind.m3u8","source":"Linkplay Radio","picurl":"http://cdnprofiles.tunein.com/s6852/images/logoq.jpg?t=638353933090000000"}]}
```

<h3 id="getpresetinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[PresetList](#schemapresetlist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-audio-output-control">Audio Output Control</h1>

Get and set audio output mode

## getNewAudioOutputHardwareMode

<a id="opIdgetNewAudioOutputHardwareMode"></a>

`GET /getNewAudioOutputHardwareMode`

*Get audio output mode*

JSON Response:
{"hardware":"2","source":"0","audiocast":"0"}

Description:
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

> Example responses

> 200 Response

```
{"hardware":"2","source":"0","audiocast":"0"}
```

<h3 id="getnewaudiooutputhardwaremode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getnewaudiooutputhardwaremode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» hardware|string|false|none|Hardware Interface output mode:<br>1: AUDIO_OUTPUT_SPDIF_MODE<br>2: AUDIO_OUTPUT_AUX_MODE<br>3: AUDIO_OUTPUT_COAX_MODE|
|» source|string|false|none|BT source output mode:<br>0: disable<br>1: active|
|» audiocast|string|false|none|Audio cast output mode:<br>0: disable<br>1: active|

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
|n|path|integer|true|Hardware Interface output mode:|

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

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setaudiooutputhardwaremode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getSpdifOutSwitchDelayMs

<a id="opIdgetSpdifOutSwitchDelayMs"></a>

`GET /getSpdifOutSwitchDelayMs`

*Get SPDIF sample rate switch latency*

Example: https://10.10.10.254/httpapi.asp?command=getSpdifOutSwitchDelayMs

Observations:
- This value only makes sense if the output interface is SPDIF (optical out).
- Value can be retrieved even if output is not SPDIF

> Example responses

> 200 Response

```
800
```

<h3 id="getspdifoutswitchdelayms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|integer|

<aside class="success">
This operation does not require authentication
</aside>

## setSpdifOutSwitchDelayMs

<a id="opIdsetSpdifOutSwitchDelayMs"></a>

`GET /setSpdifOutSwitchDelayMs:{Delay}`

*Set SPDIF sample rate switch latency*

Example: https://10.10.10.254/httpapi.asp?command=setSpdifOutSwitchDelayMs:800

Observations:
- Delay is in milliseconds
- Value can be set even if output is not SPDIF
- Delay is upper bound to 3000 milliseconds

<h3 id="setspdifoutswitchdelayms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Delay|path|integer|true|The delay in milliseconds|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="setspdifoutswitchdelayms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getChannelBalance

<a id="opIdgetChannelBalance"></a>

`GET /getChannelBalance`

*Get left/right channel balance*

Example: https://10.10.10.254/httpapi.asp?command=getChannelBalance

Observations:
- The value will be a number ranging from -1.0 (fully panned left) to 1.0 (fully panned right).

> Example responses

> 200 Response

```
"0.0"
```

<h3 id="getchannelbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setChannelBalance

<a id="opIdsetChannelBalance"></a>

`GET /setChannelBalance:{n}`

*Set left/right channel balance*

Example: https://10.10.10.254/httpapi.asp?command=setChannelBalance:0

Observations:
- The value must be a number ranging from -1.0 (fully panned left) to 1.0 (fully panned right).

<h3 id="setchannelbalance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|number|true|Balance from -1.0 (left) to 1.0 (right)|

> Example responses

> Successful response

```
"OK"
```

```
"Failed"
```

<h3 id="setchannelbalance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-bluetooth">Bluetooth</h1>

Get and set Bluetooth settings

## startBtDiscovery

<a id="opIdstartBtDiscovery"></a>

`GET /startbtdiscovery:3`

*Start Bluetooth device scan*

Args: 3 (Not sure what this argument means, I've only seen the app use the value 3 for it. Works with other integers and successfully starts a BT scan. Maybe a max list size?)

> Example responses

> 200 Response

```
"OK"
```

<h3 id="startbtdiscovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getBtDiscoveryResult

<a id="opIdgetBtDiscoveryResult"></a>

`GET /getbtdiscoveryresult`

*Get Bluetooth device scan result*

First do a startbtdiscovery:3: to start the scan, then use this to get the result.

Output (JSON):
num: Number of found devices
scan_status: BT scan step
  0: Not started
  1: Initializing
  2: ??? (never seen it)
  3: Scanning
  4: Finished scanning
list: List of found devices

Already paired devices may be listed as well.

> Example responses

> 200 Response

```
{"num":1,"scan_status":4,"list":[{"name":"My Device","ad":"00:11:22:33:44:55","ct":0,"role":"Audio Source"}]}
```

<h3 id="getbtdiscoveryresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[BluetoothDeviceList](#schemabluetoothdevicelist)|

<aside class="success">
This operation does not require authentication
</aside>

## clearBtDiscoveryResult

<a id="opIdclearBtDiscoveryResult"></a>

`GET /clearbtdiscoveryresult`

*Clear Bluetooth device scan result*

Clears the Bluetooth device scan results

> Example responses

> 200 Response

```
"OK"
```

<h3 id="clearbtdiscoveryresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getBtHistory

<a id="opIdgetBtHistory"></a>

`GET /getbthistory`

*Get paired Bluetooth devices*

Output (JSON):

num: Number of found devices
scan_status: BT scan step
1: Initializing
2: ??? (never seen it)
3: Scanning
4: Finished scanning
list: List of found devices

> Example responses

> 200 Response

```
{"num":1,"scan_status":4,"list":[{"name":"My Device","ad":"00:11:22:33:44:55","ct":0,"role":"Audio Source"}]}
```

<h3 id="getbthistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[BluetoothDeviceList](#schemabluetoothdevicelist)|

<aside class="success">
This operation does not require authentication
</aside>

## connectBtA2dpsynk

<a id="opIdconnectBtA2dpsynk"></a>

`GET /connectbta2dpsynk:{BT_MAC_ADDRESS}`

*Connect to a Bluetooth device*

Example: https://192.168.1.100/httpapi.asp?command=connectbta2dpsynk:9c:2a:be:2e:ce:f1

Output:
Success: OK
Error: Failed

Observations: The device should be an Audio Sink (e.g. speaker, A/V reciever). The audio output will be changed to the device.

<h3 id="connectbta2dpsynk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BT_MAC_ADDRESS|path|string|true|The Bluetooth MAC address of the device you want to connect to or disconnect from|

> Example responses

> Successful response

```
"OK"
```

```
"Failed"
```

<h3 id="connectbta2dpsynk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## disconnectBtA2dpsynk

<a id="opIddisconnectBtA2dpsynk"></a>

`GET /disconnectbta2dpsynk:{BT_MAC_ADDRESS}`

*Disconnect from a Bluetooth device*

Example: https://192.168.1.100/httpapi.asp?command=disconnectbta2dpsynk:9c:2a:be:2e:ce:f1

<h3 id="disconnectbta2dpsynk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BT_MAC_ADDRESS|path|string|true|The Bluetooth MAC address of the device you want to connect to or disconnect from|

> Example responses

> 200 Response

```
"OK"
```

<h3 id="disconnectbta2dpsynk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getBtPairStatus

<a id="opIdgetBtPairStatus"></a>

`GET /getbtpairstatus`

*Get Bluetooth pairing status*

Example: https://192.168.1.100/httpapi.asp?command=getbtpairstatus

Output (JSON):
result: Pair status
0: Not paired
1: Disconnected
2: Connecting (assumption, never seen it)
3: Connected

> Example responses

> 200 Response

```
{"result":1}
```

<h3 id="getbtpairstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getbtpairstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» result|integer|false|none|Pair status<br>0: Not paired<br>1: Disconnected<br>2: Connecting<br>3: Connected|

#### Enumerated Values

|Property|Value|
|---|---|
|result|0|
|result|1|
|result|2|
|result|3|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-other">Other</h1>

Existing commands, purpose unkown. To research further...

## get__getMvRemoteSilenceUpdateTime

`GET /getMvRemoteSilenceUpdateTime`

*...*

...

<h3 id="get__getmvremotesilenceupdatetime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getNetworkPreferDNS

`GET /getNetworkPreferDNS`

*...*

...

<h3 id="get__getnetworkpreferdns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getWlanBandConfig

`GET /getWlanBandConfig`

*...*

...

<h3 id="get__getwlanbandconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getWlanRoamConfig

`GET /getWlanRoamConfig`

*...*

...

<h3 id="get__getwlanroamconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getIPV6Enable

`GET /getIPV6Enable`

*...*

...

<h3 id="get__getipv6enable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getSpdifOutMaxCap

`GET /getSpdifOutMaxCap`

*...*

...

<h3 id="get__getspdifoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getCoaxOutMaxCap

`GET /getCoaxOutMaxCap`

*...*

...

<h3 id="get__getcoaxoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__GetFadeFeature

`GET /GetFadeFeature`

*...*

...

<h3 id="get__getfadefeature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getAuxVoltageSupportList

`GET /getAuxVoltageSupportList`

*...*

...

<h3 id="get__getauxvoltagesupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__audio_cast:get_speaker_list

`GET /audio_cast:get_speaker_list`

*...*

...

<h3 id="get__audio_cast:get_speaker_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getSoundCardModeSupportList

`GET /getSoundCardModeSupportList`

*...*

...

<h3 id="get__getsoundcardmodesupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getActiveSoundCardOutputMode

`GET /getActiveSoundCardOutputMode`

*...*

...

<h3 id="get__getactivesoundcardoutputmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setLightOperationBrightConfig:%7B%22auto_sense_enable%22:{s},%22default_bright%22:{b},%22disable%22:{d}%7D

`GET /setLightOperationBrightConfig:%7B%22auto_sense_enable%22:{s},%22default_bright%22:{b},%22disable%22:{d}%7D`

*WiiM Ultra enable/disable LCD*

Example: https://10.10.10.254/httpapi.asp?command=setLightOperationBrightConfig:{%22auto_sense_enable%22:0,%22default_bright%22:1,%22disable%22:1}

Turns the screen of the WiiM Ultra on or off

<h3 id="get__setlightoperationbrightconfig:%7b%22auto_sense_enable%22:{s},%22default_bright%22:{b},%22disable%22:{d}%7d-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|s|path|integer|true|autosense?|
|b|path|integer|true|brightness?|
|d|path|integer|true|disable: 1 (off) or 0 (on)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|d|0|
|d|1|

<h3 id="get__setlightoperationbrightconfig:%7b%22auto_sense_enable%22:{s},%22default_bright%22:{b},%22disable%22:{d}%7d-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:getSlaveList

`GET /multiroom:getSlaveList`

*Get a list of LinkPlay available*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:getSlaveList

Allows to obtain the list of the devices using the same communication protocol.

JSON output:
{
  "Slaves": "1",
  "Slave_list": [
    {
      "Name": "FA5100_a3f4",
      "Mask": "0",
      "Volume": "90",
      "Mute": "0",
      "Channel": "0",
      "Ip": "10.10.10.100",
      "Version": "WIFIAudio.1.2.2321"
    }
  ]
}

Field	Description
Slaves	Number of LinkPlay available
Slave_list	Information about each Sonoé iEast case available
name	Name
mask	Case already in Multi-Room mode, Yes = 1, No = 0
Volume	Volume level
Mute	Enable Mute mode, Yes = 1, Off = 0
Channel	Wifi channel
ip	IP address of the LinkPlay Boot
version	firmware version

<h3 id="get__multiroom:getslavelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveKickout:{ip}

`GET /multiroom:SlaveKickout:{ip}`

*Removing a LinkPlay from the multi-room*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveKickout:ip

Allows to remove from the multiroom mode a device Based on its IP address.

<h3 id="get__multiroom:slavekickout:{ip}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveMask:{ip}

`GET /multiroom:SlaveMask:{ip}`

*Hide the IP address of a LinkPlay*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveMask:ip

Allows to integrate a multi-room mode a device Based on its IP address. It is thus rendered invisible from the IP network.

<h3 id="get__multiroom:slavemask:{ip}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveUnMask:{ip}

`GET /multiroom:SlaveUnMask:{ip}`

*Releasing a Multi-Room Mode*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveUnMask:ip

Allows to release from the multi-room mode based on its IP address. It is thus visible on the IP network.

<h3 id="get__multiroom:slaveunmask:{ip}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveVolume:{ip}:{volume}

`GET /multiroom:SlaveVolume:{ip}:{volume}`

*Individual volume adjustment*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveVolume:ip:volume

Allows you to adjust the individual volume of the each of the devicees via the IP address of the device and the definition of a value going from from 1 to 100. Note: these settings will be lost when deactivating multi-room mode (kickout)

<h3 id="get__multiroom:slavevolume:{ip}:{volume}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:slave_vol:{volume}

`GET /setPlayerCmd:slave_vol:{volume}`

*General Volume Adjustment*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_vol:volume

Adjusts the overal volume of the multi-room with the definition of a value ranging from 1 to 100. Note: thesis settings will be lost When disabling multi-room mode

<h3 id="get__setplayercmd:slave_vol:{volume}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveMute:{ip}:{mute}

`GET /multiroom:SlaveMute:{ip}:{mute}`

*Individual muting*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveMute:ip:mute

Enables the Mute on each device via the IP address of the device and by enabling (1) and disabling (0)

<h3 id="get__multiroom:slavemute:{ip}:{mute}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:slave_mute:mute

`GET /setPlayerCmd:slave_mute:mute`

*General activation Mute*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_mute:mute

Enables the Mute on all devices

<h3 id="get__setplayercmd:slave_mute:mute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:slave_mute:unmute

`GET /setPlayerCmd:slave_mute:unmute`

*General Mute Disabling*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_mute:unmute

To disable the mute mode overall the

<h3 id="get__setplayercmd:slave_mute:unmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveChannel:{ip}:{channel}

`GET /multiroom:SlaveChannel:{ip}:{channel}`

*Individual management of the audio signal Right / left*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveChannel:ip:channel

Enables the Mute on Each of the devices via the IP address of the device and by this parameter to signal right only Channe0 = left and only 1 = Channel signal

<h3 id="get__multiroom:slavechannel:{ip}:{channel}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPlayerCmd:{slave_channel}:{channel}

`GET /setPlayerCmd:{slave_channel}:{channel}`

*Overal management of the audio signal Right / left*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_channel:channel

Enables the Mute on Each of devices via the IP address of the device and by this parameter to signal right only Channel= 0 and left signal only 1 = Channel

<h3 id="get__setplayercmd:{slave_channel}:{channel}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:SlaveSetDeviceName:{ip}:{s}

`GET /multiroom:SlaveSetDeviceName:{ip}:{s}`

*Individual definition of the device Name*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveSetDeviceName:%ip:%s

Individual settings of the name of the square in mode UPnP / Airplay

<h3 id="get__multiroom:slavesetdevicename:{ip}:{s}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__multiroom:Ungroup

`GET /multiroom:Ungroup`

*Disabling Multi-Room*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:Ungroup

Disables the multi-room mode

<h3 id="get__multiroom:ungroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getMvRemoteUpdateStartCheck

`GET /getMvRemoteUpdateStartCheck`

*Update search*

Example: http://10.10.10.254/httpapi.asp?command=getMvRemoteUpdateStartCheck

Search for the firmware updates available

<h3 id="get__getmvremoteupdatestartcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getMvRemoteUpdateStart

`GET /getMvRemoteUpdateStart`

*Notification updates*

Example: http://10.10.10.254/httpapi.asp?command=getMvRemoteUpdateStart

After calling the interface, if a new version is available, the device starts to download updates. At the end of the download, the update process starts.
WARNING: DO NOT POWER OFF DURING THIS PROCESS!!

<h3 id="get__getmvremoteupdatestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getMvRemoteUpdateStatus

`GET /getMvRemoteUpdateStatus`

*Status of the update process*

Example: http://10.10.10.254/httpapi.asp?command=getMvRemoteUpdateStatus

Get the download progress.

Value	Meaning
- 10	Under review
- 20  ...
- 21	The verification of the downloaded update file failed
- 22	Downloading the update file failed
- 23	The verification of the downloaded update file failed
- 25	Start downloading
- 27	Download complete
- 30	Downloading and verification completed

<h3 id="get__getmvremoteupdatestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__getMvRomBurnPrecent

`GET /getMvRomBurnPrecent`

*Status of the update process*

Example: http://10.10.10.254/httpapi.asp?command=getMvRomBurnPrecent

Status of updating

{
  " status ":" 0 "," progress ":" 50 "
}

Fields	Meaning
status	State
progress	Progress between 0 to 100%

<h3 id="get__getmvromburnprecent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setSSID:{value}

`GET /setSSID:{value}`

*Change the SSID name of the device*

Example: http://10.10.10.254/httpapi.asp?command=setSSID:value

Sets a new network name (SSID) of the device in hexadecimal format

<h3 id="get__setssid:{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setNetwork:{n}:{password}

`GET /setNetwork:{n}:{password}`

*Setting the password WIFI*

Example: http://10.10.10.254/httpapi.asp?command=setNetwork:1:password

Setting a new password using letters and / or numbers and crossing of setnetwork setting: 1 (Securing WIFI network (WPAPSK) in contrast, setnetwork: 0 (OPEN) makes the network open WIFI.

No response The system restarts after the validation of the new password.

<h3 id="get__setnetwork:{n}:{password}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__restoreToDefault

`GET /restoreToDefault`

*Restoring the factory setting*

Example: http://10.10.10.254/httpapi.asp?command=restoreToDefault

To restore factory settings, erasing defined configurations. The device restarts.

<h3 id="get__restoretodefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setPowerWifiDown

`GET /setPowerWifiDown`

*Stop WIFI signal*

Example: http://10.10.10.254/httpapi.asp?command=setPowerWifiDown

Turns off the wifi

<h3 id="get__setpowerwifidown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__setDeviceName:{name}

`GET /setDeviceName:{name}`

*Setting the name of device*

Example: http://10.10.10.254/httpapi.asp?command=setDeviceName:%s

Sets the name UPnP, DLNA and Airplay of the device (Hex)

<h3 id="get__setdevicename:{name}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_DeviceStatus">DeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatus"></a>
<a id="schema_DeviceStatus"></a>
<a id="tocSdevicestatus"></a>
<a id="tocsdevicestatus"></a>

```json
{
  "language": "en_us",
  "ssid": "WiiM-1234",
  "hideSSID": "0",
  "SSIDStrategy": "2",
  "branch": "A31_stable_4.6",
  "firmware": "Linkplay.5.0.704664",
  "build": "release",
  "project": "WiiM_Mini",
  "priv_prj": "WiiM_Mini",
  "project_build_name": "WiiM_Mini",
  "Release": "20250101",
  "FW_Release_version": "",
  "PCB_version": "5",
  "cast_enable": 1,
  "cast_usage_report": 1,
  "group": "0",
  "master_uuid": "A7A50887ACBC9B36",
  "slave_mask": "0",
  "wmrm_version": "4.3",
  "wmrm_sub_ver": "1",
  "expired": "0",
  "internet": "1",
  "uuid": "FF31F09E1A5020113B0A3918",
  "MAC": "08:E9:F6:8F:8F:A2",
  "STA_MAC": "00:00:00:00:00:00",
  "BT_MAC": "08:E9:F6:8F:8F:A3",
  "AP_MAC": "0A:E9:F6:8F:8F:A2",
  "ETH_MAC": "08:E9:F6:8F:8F:A9",
  "InitialConfiguration": "1",
  "temperature_power_control": "1000",
  "temperature_cpu": "32",
  "temperature_tmp102": "-998",
  "CountryCode": "US",
  "CountryRegion": "1",
  "date": "2025:01:01",
  "time": "00:00:00",
  "tz": "0.0000",
  "dst_enable": "1",
  "netstat": "1",
  "essid": "",
  "apcli0": "0.0.0.0",
  "eth0": "192.168.167.73",
  "eth2": "192.168.167.74",
  "eth_dhcp": "1",
  "eth_static_ip": "192.168.167.74",
  "eth_static_mask": "255.255.255.0",
  "eth_static_gateway": "192.168.167.1",
  "eth_static_dns1": "194.168.4.100",
  "eth_static_dns2": "194.168.8.100",
  "hardware": "AmlogicA113",
  "VersionUpdate": "0",
  "NewVer": "0",
  "mcu_ver": "0",
  "mcu_ver_new": "0",
  "hdmi_ver": "41",
  "hdmi_ver_new": "",
  "update_check_count": "32",
  "BleRemote_update_checked_counter": "0",
  "ra0": "10.10.10.254",
  "temp_uuid": "FF31F09E1A5020113B0A3918",
  "cap1": "0x40000400",
  "capability": "0x20084808",
  "languages": "0x11ec",
  "prompt_status": "1",
  "iot_ver": "1.0.0",
  "alexa_ver": "20180604",
  "alexa_beta_enable": "0",
  "alexa_force_beta_cfg": "0",
  "dsp_ver": "",
  "dsp_ver_new": "",
  "ModuleColorNumber": "3",
  "ModuleColorString": "",
  "uboot_verinfo": "231211.095208",
  "streams_all": "0x7bff7ffe",
  "streams": "0x7b9831fe",
  "region": "unknown",
  "volume_control": "0",
  "external": "0x0",
  "preset_key": "12",
  "spotify_active": "0",
  "plm_support": "0x6",
  "mqtt_support": "1",
  "lbc_support": "0",
  "WifiChannel": "11",
  "RSSI": "0",
  "BSSID": "",
  "wlanSnr": "0",
  "wlanNoise": "0",
  "wlanFreq": "0",
  "wlanDataRate": "0",
  "battery": "0",
  "battery_percent": "0",
  "securemode": "1",
  "auth": "WPA2PSK",
  "encry": "AES",
  "ota_interface_ver": "2.0",
  "ota_api_ver": "3.0",
  "upnp_version": "1005",
  "upnp_uuid": "uuid:FF31F09E-1A50-2011-3B0A-3918FF31F09E",
  "uart_pass_port": "8899",
  "communication_port": "8819",
  "web_firmware_update_hide": "0",
  "ignore_talkstart": "0",
  "silence_ota_flag": "0",
  "silenceOTATime": "",
  "ignore_silenceOTATime": "1",
  "new_tunein_preset_and_alarm": "1",
  "iheartradio_new": "1",
  "new_iheart_podcast": "1",
  "tidal_version": "2.0",
  "service_version": "1.0",
  "EQ_support": "Eq4p_ver_2.0",
  "EQVersion": "4.3",
  "HiFiSRC_version": "1.1",
  "audio_channel_config": "1",
  "app_timezone_id": "America/New_York",
  "avs_timezone_id": "America/New_York",
  "tz_info_ver": "1.0",
  "max_volume": "100",
  "power_mode": "-1",
  "security": "https/2.0",
  "security_version": "3.0",
  "security_capabilities": {
    "ver": "1.0",
    "aes_ver": "1.0"
  },
  "public_https_version": "1.0",
  "BleRemoteControl": "1",
  "BleRemoteConnected": "0",
  "BleRemoteException": "0",
  "udisk": "0",
  "umount": "0",
  "autoSenseVersion": "1.0",
  "set_play_mode_enable": "0",
  "set_play_mode_gain": "0",
  "audioOutputModeVer": "1.0",
  "privacy_mode": "0",
  "DeviceName": "WiiM Mini-8FA2",
  "GroupName": "WiiM Mini-8FA2"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|The device language|
|ssid|string|false|none|Name of the device. Device's own SSID when in WiFi pairing<br>mode or when device's WiFi hotspot is active|
|hideSSID|string|false|none|When the device is operating as a WiFi hotspot, this flag<br>determines whether its SSID should be hidden or visible 0:<br>ssid is visible 1: ssid is hidden|
|SSIDStrategy|string|false|none|none|
|branch|string|false|none|Code branch|
|firmware|string|false|none|Current firmware version|
|build|string|false|none|Possible values: release, debug, backup release: this is a<br>release version debug: this is a debug version backup:<br>this is a backup version|
|project|string|false|none|The project name|
|priv_prj|string|false|none|Project name which would stand for a specific board|
|project_build_name|string|false|none|Code identifier for customized release|
|Release|string|false|none|Firmware build date Format: YYYYMMDD|
|FW_Release_version|string|false|none|Reserved|
|PCB_version|string|false|none|PCB version/revision|
|cast_enable|integer|false|none|Flag for casting feature 0: casting is disabled 1: casting<br>is enabled|
|cast_usage_report|integer|false|none|Reserved|
|group|string|false|none|0 means it's a master speaker or standalone,  1 means a<br>slave speaker in group|
|master_uuid|string|false|none|Exist when working in slave mode, showing the UUID of<br>master device.|
|slave_mask|string|false|none|Exist when working in slave mode, showing if the device<br>support mask feature. 0 means not supported.|
|wmrm_version|string|false|none|LinkPlay's MRM SDK version, Multiroom library version,<br>version 4.2 or above won't work with any version below 4.2|
|wmrm_sub_ver|string|false|none|Multiroom library sub version|
|expired|string|false|none|Reserved|
|internet|string|false|none|Current status of internet access: 0: not ready 1: ready|
|uuid|string|false|none|The unique ID of the device (will remain after device<br>reboot)|
|MAC|string|false|none|MAC address of the device when working in hotspot mode,<br>will show on APP and also the sticker on module/device.|
|STA_MAC|string|false|none|MAC address of the device when working in station mode|
|BT_MAC|string|false|none|The BT MAC address of the device|
|AP_MAC|string|false|none|The MAC address of the AP that the device is connected to|
|ETH_MAC|string|false|none|The MAC address of the device when it's connected to<br>ethernet|
|InitialConfiguration|string|false|none|Flag for initial configuration 0: not configured 1:<br>configured|
|temperature_power_control|string|false|none|Reserved|
|temperature_cpu|string|false|none|Reserved|
|temperature_tmp102|string|false|none|Reserved|
|CountryCode|string|false|none|The country code|
|CountryRegion|string|false|none|The country region|
|date|string|false|none|Current Date|
|time|string|false|none|Current local time|
|tz|string|false|none|Timezone offset|
|dst_enable|string|false|none|Daylight saving time enable|
|netstat|string|false|none|Current WiFi status: 0: no network 1: connected to the<br>internet 2: connected to the local network|
|essid|string|false|none|SSID of the WiFi the device is connected to in HEX format|
|apcli0|string|false|none|The IP v4 address of the device over WiFi|
|eth0|string|false|none|Device's IP address when it's connected to ethernet|
|eth2|string|false|none|Device's IP address when it's connected to ethernet|
|eth_dhcp|string|false|none|Flag for DHCP or Static IP Address 0: Static IP 1: IP<br>Address provided by LAN/WLAN DHCP Server|
|eth_static_ip|string|false|none|Device's Static IP address (If eth_dhcp=0)|
|eth_static_mask|string|false|none|Device's Network Mask (If eth_dhcp=0)|
|eth_static_gateway|string|false|none|Device's IP Gateway (If eth_dhcp=0)|
|eth_static_dns1|string|false|none|Device's Primary DNS Server (If eth_dhcp=0)|
|eth_static_dns2|string|false|none|Device's Secondary DNS Server (If eth_dhcp=0)|
|hardware|string|false|none|Hardware model|
|VersionUpdate|string|false|none|Flag that determines, if there is a new firmware version<br>available or not. 0: no new firmware 1: new firmware<br>available|
|NewVer|string|false|none|If there is a new firmware available (in case of<br>VersionUpdate is set to 1), this is the new version number|
|mcu_ver|string|false|none|Version of MCU on base board|
|mcu_ver_new|string|false|none|New version of MCU on base board, indicates if there is a<br>newer version of MCU available 0 - No new version others -<br>New version|
|hdmi_ver|string|false|none|HDMI version|
|hdmi_ver_new|string|false|none|New HDMI version|
|update_check_count|string|false|none|none|
|BleRemote_update_checked_counter|string|false|none|none|
|ra0|string|false|none|WiFi AP IP address, normally it is 10.10.10.254|
|temp_uuid|string|false|none|Temporary UUID (will change after device reboot)|
|cap1|string|false|none|Bit mask for the module feature, used internally|
|capability|string|false|none|Bit mask for the module feature, used internally|
|languages|string|false|none|Supported languages, bit mask|
|prompt_status|string|false|none|Indicates if the prompting voice would be played or not,<br>you can set with command PromptEnable and PromptDisable. 0<br>- No prompting voice 1 - Have prompting voice|
|iot_ver|string|false|none|IOT library version, not used|
|alexa_ver|string|false|none|none|
|alexa_beta_enable|string|false|none|none|
|alexa_force_beta_cfg|string|false|none|none|
|dsp_ver|string|false|none|Version for voice processing, not used|
|dsp_ver_new|string|false|none|New version for voice processing, not used|
|ModuleColorNumber|string|false|none|Reserved|
|ModuleColorString|string|false|none|Reserved|
|uboot_verinfo|string|false|none|Uboot version|
|streams_all|string|false|none|Reserved|
|streams|string|false|none|This is a bit mask: 0: If Airplay is enabled 1: If DLNA is<br>enabled 2: Has TTPod support 3: Has TuneIn support 4: Has<br>Pandora support 5: Has DoubanFM support|
|region|string|false|none|Reserved|
|volume_control|string|false|none|none|
|external|string|false|none|Reserved (hex value)|
|preset_key|string|false|none|Amount of preset keys available|
|spotify_active|string|false|none|Spotify status 0: Spotify is not playing 1: Spotify is<br>playing|
|plm_support|string|false|none|This is a bit mask, each bit stands for an external input<br>source: bit1: LineIn (Aux support) bit2: Bluetooth support<br>bit3: USB support bit4: Optical support bit6: Coaxial<br>support bit8: LineIn 2 support bit15: USBDAC support<br>Others are reserved or not used.|
|mqtt_support|string|false|none|Reserved|
|lbc_support|string|false|none|Reserved|
|WifiChannel|string|false|none|The current connected WiFi channel|
|RSSI|string|false|none|RSSI Level of used WiFi Value ranges from 0 - 100. 100<br>means best signal strength.|
|BSSID|string|false|none|The Basic Service Set Identifiers:  In most cases this<br>will be the MAC Address of the Wireless Acces Point Used<br>(e.g. Router)|
|wlanSnr|string|false|none|Signal to Noise Ratio of the WiFi connection|
|wlanNoise|string|false|none|Noise level of the WiFi connection|
|wlanFreq|string|false|none|none|
|wlanDataRate|string|false|none|none|
|battery|string|false|none|Battery status 0: battery is not charging 1: battery is<br>charging|
|battery_percent|string|false|none|Battery charge level Value ranges from 0 - 100|
|securemode|string|false|none|Reserved|
|auth|string|false|none|Type of WiFi Protected Access used (Authentication Key).|
|encry|string|false|none|Type of encryption used for the WiFi connection.|
|ota_interface_ver|string|false|none|none|
|ota_api_ver|string|false|none|none|
|upnp_version|string|false|none|UPnP Device Architecture Version|
|upnp_uuid|string|false|none|UPnP UUID|
|uart_pass_port|string|false|none|Port used for TCP/IP Communcations/Socket Connections|
|communication_port|string|false|none|TCP port for internal messages|
|web_firmware_update_hide|string|false|none|none|
|ignore_talkstart|string|false|none|none|
|silence_ota_flag|string|false|none|none|
|silenceOTATime|string|false|none|none|
|ignore_silenceOTATime|string|false|none|none|
|new_tunein_preset_and_alarm|string|false|none|none|
|iheartradio_new|string|false|none|none|
|new_iheart_podcast|string|false|none|none|
|tidal_version|string|false|none|TIDAL API version|
|service_version|string|false|none|none|
|EQ_support|string|false|none|none|
|EQVersion|string|false|none|none|
|HiFiSRC_version|string|false|none|none|
|audio_channel_config|string|false|none|none|
|app_timezone_id|string|false|none|Timezone ID|
|avs_timezone_id|string|false|none|Timezone ID for Alexa|
|tz_info_ver|string|false|none|none|
|max_volume|string|false|none|Maximum volume level (normally 100)|
|power_mode|string|false|none|none|
|security|string|false|none|HTTPS API version|
|security_version|string|false|none|HTTPS API security version|
|security_capabilities|object|false|none|HTTPS API security capabilities|
|public_https_version|string|false|none|HTTPS API public version|
|BleRemoteControl|string|false|none|none|
|BleRemoteConnected|string|false|none|none|
|BleRemoteException|string|false|none|none|
|udisk|string|false|none|USB disk status 0: no USB disk 1: USB disk is connected|
|umount|string|false|none|Reserved|
|autoSenseVersion|string|false|none|none|
|set_play_mode_enable|string|false|none|none|
|set_play_mode_gain|string|false|none|none|
|audioOutputModeVer|string|false|none|none|
|privacy_mode|string|false|none|none|
|DeviceName|string|false|none|The device UPnP and Airplay friendly name|
|GroupName|string|false|none|The group name of the device that it belongs to|

<h2 id="tocS_PlayerStatus">PlayerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaplayerstatus"></a>
<a id="schema_PlayerStatus"></a>
<a id="tocSplayerstatus"></a>
<a id="tocsplayerstatus"></a>

```json
{
  "type": "0",
  "ch": "0",
  "mode": "10",
  "loop": "-1",
  "eq": "0",
  "vendor": "vTuner",
  "status": "play",
  "curpos": "63634",
  "offset_pts": "63634",
  "totlen": "0",
  "Title": "4D6F726E696E67204C69676874",
  "Artist": "4F77656E20526965676C696E67",
  "Album": "4D6F726E696E67204C69676874",
  "alarmflag": "0",
  "plicount": "5",
  "plicurr": "2",
  "vol": "25",
  "mute": "0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|0: Main or standalone device <br>1: Device is a Multiroom Guest|
|ch|string|false|none|Active channel(s) 0: Stereo 1: Left 2: Right|
|mode|string|false|none|0: None <br>1: AirPlay or AirPlay 2 <br>2: DLNA streaming <br>10: Playing network content, e.g. vTuner, Home Media Share, Amazon Music, Deezer, etc <br>11: playing UDISK (Local USB disk on device) 16: TF card playlist 20: playback start by HTTPAPI <br>31: Spotify Connect <br>32: TIDAL Connect <br>40: AUX-In/Line-In input mode <br>41: Bluetooth input mode <br>42: External storage <br>43: Optical-In input mode <br>47: Line-In #2 input mode <br>50: Mirror <br>51: USBDAC input mode <br>60: Voice mail<br>99: The Device is a Guest in a Multiroom Zone|
|loop|string|false|none|Is a Combination of SHUFFLE and REPEAT modes 0: SHUFFLE:<br>disabled REPEAT: enabled - loop 1: SHUFFLE: disabled<br>REPEAT: enabled - loop once 2: SHUFFLE: enabled REPEAT:<br>enabled - loop 3: SHUFFLE: enabled REPEAT: disabled 4:<br>SHUFFLE: disabled REPEAT: disabled 5: SHUFFLE: enabled<br>REPEAT: enabled - loop once|
|eq|string|false|none|The preset number of the Equalizer|
|vendor|string|false|none|Name of the stream source|
|status|string|false|none|Playback status stop: no audio selected play: playing<br>audio load/loading: loading/buffering audio pause: audio<br>paused|
|curpos|string|false|none|Current position, in ms|
|offset_pts|string|false|none|Offset position, in ms|
|totlen|string|false|none|Track duration in ms. Zero when playing a live stream.|
|Title|string|false|none|hexed string of the track title|
|Artist|string|false|none|hexed string of the artist|
|Album|string|false|none|hexed string of the album|
|alarmflag|string|false|none|none|
|plicount|string|false|none|The total number of tracks in the playlist|
|plicurr|string|false|none|Current track index|
|vol|string|false|none|Current volume Value range is from 0 - 100. So can be<br>considered a linear percentage (0% to 100%) of the volume.|
|mute|string|false|none|Current mute state 0: Not muted 1: Muted|

#### Enumerated Values

|Property|Value|
|---|---|
|status|play|
|status|pause|
|status|stop|
|status|buffering|

<h2 id="tocS_TrackMetadata">TrackMetadata</h2>
<!-- backwards compatibility -->
<a id="schematrackmetadata"></a>
<a id="schema_TrackMetadata"></a>
<a id="tocStrackmetadata"></a>
<a id="tocstrackmetadata"></a>

```json
{
  "metaData": {
    "album": "Country Heat",
    "title": "Old Dirt Roads",
    "subtitle": "",
    "artist": "Owen Riegling",
    "albumArtURI": "https://m.media-amazon.com/images/I/51iU0odzJwL.jpg",
    "sampleRate": "44100",
    "bitDepth": "16",
    "bitRate": "63",
    "trackId": "s6707"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metaData|object|false|none|none|
|» album|string|false|none|Album name|
|» title|string|false|none|Track title|
|» subtitle|string|false|none|Subtitle|
|» artist|string|false|none|Artist name|
|» albumArtURI|string|false|none|URL to the album art|
|» sampleRate|string|false|none|Sample rate in Hz|
|» bitDepth|string|false|none|Bit depth in bits|
|» bitRate|string|false|none|Bit rate in kbps|
|» trackId|string|false|none|Track ID|

<h2 id="tocS_PresetList">PresetList</h2>
<!-- backwards compatibility -->
<a id="schemapresetlist"></a>
<a id="schema_PresetList"></a>
<a id="tocSpresetlist"></a>
<a id="tocspresetlist"></a>

```json
{
  "preset_num": 3,
  "preset_list": [
    {
      "number": 1,
      "name": "BBC Radio Norfolk",
      "url": "http://as-hls-wwlive.akamaized.net/pool_904/live/ww/bbc_radio_norfolk/bbc_radio_norfolk.isml/bbc_radio_norfolk-audio%3d96000.norewind.m3u8",
      "source": "Linkplay Radio",
      "picurl": "http://cdnprofiles.tunein.com/s6852/images/logoq.jpg?t=638353933090000000"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preset_num|integer|false|none|Total number of presets|
|preset_list|[object]|false|none|none|
|» number|integer|false|none|Preset index (Start from 1)|
|» name|string|false|none|Playlist name|
|» url|string|false|none|Play url|
|» source|string|false|none|Music source|
|» picurl|string|false|none|Cover picture url|

<h2 id="tocS_StaticIpInfo">StaticIpInfo</h2>
<!-- backwards compatibility -->
<a id="schemastaticipinfo"></a>
<a id="schema_StaticIpInfo"></a>
<a id="tocSstaticipinfo"></a>
<a id="tocsstaticipinfo"></a>

```json
{
  "wlanStaticIp": "string",
  "wlanGateWay": "string",
  "wlanDnsServer": "string",
  "wlanStaticIpEnable": 0,
  "ethStaticIp": "string",
  "ethGateWay": "string",
  "ethDnsServer": "string",
  "ethStaticIpEnable": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wlanStaticIp|string|false|none|Wifi IP address of the device|
|wlanGateWay|string|false|none|Wifi IP address of the gateway|
|wlanDnsServer|string|false|none|Wifi IP address of the DNS server|
|wlanStaticIpEnable|integer|false|none|Status of the WiFi static IP configuration<br>0: Disabled<br>1: Enabled|
|ethStaticIp|string|false|none|Wired IP address of the device|
|ethGateWay|string|false|none|Wired IP address of the gateway|
|ethDnsServer|string|false|none|Wired IP address of the DNS server|
|ethStaticIpEnable|integer|false|none|Status of the wired static IP configuration<br>0: Disabled<br>1: Enabled|

<h2 id="tocS_BluetoothDeviceList">BluetoothDeviceList</h2>
<!-- backwards compatibility -->
<a id="schemabluetoothdevicelist"></a>
<a id="schema_BluetoothDeviceList"></a>
<a id="tocSbluetoothdevicelist"></a>
<a id="tocsbluetoothdevicelist"></a>

```json
{
  "num": 1,
  "scan_status": 4,
  "list": [
    {
      "name": "My Device",
      "ad": "00:11:22:33:44:55",
      "ct": 0,
      "role": "Audio Source"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num|integer|false|none|Number of devices found|
|scan_status|integer|false|none|BT scan step<br>0: Not started<br>1: Initializing<br>2: ??? (never seen it)<br>3: Scanning<br>4: Finished scanning|
|list|[object]|false|none|List of devices found|
|» name|string|false|none|Device name|
|» ad|string|false|none|MAC address|
|» ct|integer|false|none|Connection type|
|» role|string|false|none|Role|

