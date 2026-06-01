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
This not an actual endpoint, but a means to test for commands not explicitly defined in the HTTP API.

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

The documented output may or may not be complete or differ from what the device actually reports.

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

## getDebugInfo

<a id="opIdgetDebugInfo"></a>

`GET /getDebugInfo`

*Get device debug information*

Makes a call to https://10.10.10.254/httpapi.asp?command=getDebugInfo

Retrieves debug information about a connected device.

The documented output may or may not be complete or differ from what the device actually reports.

> Example responses

> 200 Response

```
{"system_ready":"1","slave_status":"0","slave_playing":"0","slave_num":"0","slave_latency":"0","slave_default_latency":"0","connecting_type":"0","play_mode":"31","plm_notify_flag":"0","play_status":"0","bt_play_status":"1","spotify_play_status":"1","capture_play_status":"2","time_sync_ready":"1","asr_ongoing":"0","asr_ready":"1","asr_region":"en_us","asr_language":"en_us","asr_pause_request":"0","alexa_response_status":"0","pause_flag_for_alexa":"0","priv_languages":"4588","retail_mode":"0","ezlink_active":"0","device_status":"0","a01controller_crash":"0","asr_tts_crash":"0","mcu_crash":"0","process_deadlock":"0","power_ticks":"119159062","gapless":"0","imuzop_pid":"1","slave":"0","upnp_action_total0":"57","upnp_action_remain0":"0","upnp_action_lost0":"0","upnp_action_total1":"58","upnp_action_remain1":"0","upnp_action_lost1":"0","upnp_action_total2":"58","upnp_action_remain2":"0","upnp_action_lost2":"0","upnp_action_total3":"57","upnp_action_remain3":"0","upnp_action_lost3":"0","wifi_abort_date":"","smplay_skip_silence":"0"}
```

<h3 id="getdebuginfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[DeviceDebugInfo](#schemadevicedebuginfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-track-metadata">Track metadata</h1>

Get Current Track metadata

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

<h1 id="linkplay-wiim-http-api-multiroom">Multiroom</h1>

Get and set multirroom settings

## multiroomGetSlaveList

<a id="opIdmultiroomGetSlaveList"></a>

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

<h3 id="multiroomgetslavelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveKickout

<a id="opIdmultiroomSlaveKickout"></a>

`GET /multiroom:SlaveKickout:{ip}`

*Removing a LinkPlay from the multi-room*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveKickout:ip

Allows to remove from the multiroom mode a device Based on its IP address.

<h3 id="multiroomslavekickout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to be removed from multi-room mode.|

<h3 id="multiroomslavekickout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveMask

<a id="opIdmultiroomSlaveMask"></a>

`GET /multiroom:SlaveMask:{ip}`

*Hide the IP address of a LinkPlay*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveMask:ip

Allows to integrate a multi-room mode a device Based on its IP address. It is thus rendered invisible from the IP network.

<h3 id="multiroomslavemask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to be hidden from the IP network in multi-room mode.|

<h3 id="multiroomslavemask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveUnMask

<a id="opIdmultiroomSlaveUnMask"></a>

`GET /multiroom:SlaveUnMask:{ip}`

*Releasing a Multi-Room Mode*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveUnMask:ip

Allows to release from the multi-room mode based on its IP address. It is thus visible on the IP network.

<h3 id="multiroomslaveunmask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to be released from multi-room mode.|

<h3 id="multiroomslaveunmask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveVolume

<a id="opIdmultiroomSlaveVolume"></a>

`GET /multiroom:SlaveVolume:{ip}:{volume}`

*Individual volume adjustment*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveVolume:ip:volume

Allows you to adjust the individual volume of the each of the devicees via the IP address of the device and the definition of a value going from from 1 to 100. Note: these settings will be lost when deactivating multi-room mode (kickout)

<h3 id="multiroomslavevolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to adjust the volume for in multi-room mode.|
|volume|path|integer|true|The volume level to set for the specified LinkPlay device, ranging from 1 to 100.|

<h3 id="multiroomslavevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdSlaveVolume

<a id="opIdsetPlayerCmdSlaveVolume"></a>

`GET /setPlayerCmd:slave_vol:{volume}`

*General Volume Adjustment*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_vol:volume

Adjusts the overal volume of the multi-room with the definition of a value ranging from 1 to 100. Note: thesis settings will be lost When disabling multi-room mode

<h3 id="setplayercmdslavevolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volume|path|integer|true|The overall volume level to set for multi-room mode, ranging from 1 to 100.|

<h3 id="setplayercmdslavevolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveMute

<a id="opIdmultiroomSlaveMute"></a>

`GET /multiroom:SlaveMute:{ip}:{mute}`

*Individual muting*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveMute:ip:mute

Enables the Mute on each device via the IP address of the device and by enabling (1) and disabling (0)

<h3 id="multiroomslavemute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to adjust the mute status for in multi-room mode.|
|mute|path|integer|true|Mute status to set for the specified LinkPlay device, where 1 enables mute and 0 disables mute.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mute|0|
|mute|1|

<h3 id="multiroomslavemute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdSlaveMute

<a id="opIdsetPlayerCmdSlaveMute"></a>

`GET /setPlayerCmd:slave_mute:mute`

*General activation Mute*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_mute:mute

Enables the Mute on all devices

<h3 id="setplayercmdslavemute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdSlaveUnmute

<a id="opIdsetPlayerCmdSlaveUnmute"></a>

`GET /setPlayerCmd:slave_mute:unmute`

*General Mute Disabling*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_mute:unmute

To disable the mute mode overall the

<h3 id="setplayercmdslaveunmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveChannel

<a id="opIdmultiroomSlaveChannel"></a>

`GET /multiroom:SlaveChannel:{ip}:{channel}`

*Individual management of the audio signal Right / left*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveChannel:ip:channel

Enables the Mute on Each of the devices via the IP address of the device and by this parameter to signal right only Channe0 = left and only 1 = Channel signal

<h3 id="multiroomslavechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to adjust the audio channel for in multi-room mode.|
|channel|path|integer|true|Audio channel to set for the specified LinkPlay device, where 0 signals right only and 1 signals left only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|0|
|channel|1|

<h3 id="multiroomslavechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayerCmdSlaveChannel

<a id="opIdsetPlayerCmdSlaveChannel"></a>

`GET /setPlayerCmd:{slave_channel}:{channel}`

*Overal management of the audio signal Right / left*

Example: http://10.10.10.254/httpapi.asp?command=setPlayerCmd:slave_channel:channel

Enables the Mute on Each of devices via the IP address of the device and by this parameter to signal right only Channel= 0 and left signal only 1 = Channel

<h3 id="setplayercmdslavechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slave_channel|path|string|true|IP address of the device|
|channel|path|integer|true|Audio channel to set for all devices in multi-room mode, where 0 signals right only and 1 signals left only.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|0|
|channel|1|

<h3 id="setplayercmdslavechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveSetDeviceName

<a id="opIdmultiroomSlaveSetDeviceName"></a>

`GET /multiroom:SlaveSetDeviceName:{ip}:{s}`

*Individual definition of the device Name*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveSetDeviceName:%ip:%s

Individual settings of the name of the square in mode UPnP / Airplay

<h3 id="multiroomslavesetdevicename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to set the device name for in multi-room mode.|
|s|path|string|true|The device name to set for the specified LinkPlay device in multi-room mode.|

<h3 id="multiroomslavesetdevicename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomUngroup

<a id="opIdmultiroomUngroup"></a>

`GET /multiroom:Ungroup`

*Disabling Multi-Room*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:Ungroup

Disables the multi-room mode

<h3 id="multiroomungroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomConfigGetRealtimeCacheLimit

<a id="opIdmultiroomConfigGetRealtimeCacheLimit"></a>

`GET /multiroom:ConfigGet:realtime_cache_limit`

*Get the real-time cache limit*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:ConfigGet:realtime_cache_limit

Get the real-time cache limit in multi-room mode. The value is in seconds.

<h3 id="multiroomconfiggetrealtimecachelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomConfigSetRealtimeCacheLimit

<a id="opIdmultiroomConfigSetRealtimeCacheLimit"></a>

`GET /multiroom:ConfigSet:realtime_cache_limit:{value}`

*Set the real-time cache limit*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:ConfigSet:realtime_cache_limit:%d

Set the real-time cache limit in multi-room mode. The value is in seconds.

<h3 id="multiroomconfigsetrealtimecachelimit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|integer|true|The real-time cache limit to set for multi-room mode, in seconds.|

<h3 id="multiroomconfigsetrealtimecachelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveStartWPS

<a id="opIdmultiroomSlaveStartWPS"></a>

`GET /multiroom:SlaveStartWPS:{ip}`

*Start WPS on a LinkPlay device*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:SlaveStartWPS:%s

Start WPS on a LinkPlay device based on its IP address. This can be used to connect the device to a new Wi-Fi network.

<h3 id="multiroomslavestartwps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the LinkPlay device to start WPS on.|

<h3 id="multiroomslavestartwps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomGetNameGroupList

<a id="opIdmultiroomGetNameGroupList"></a>

`GET /multiroom:getnamegrouplist`

*Get the list of group names in multi-room mode*

Example: http://10.10.10.254/httpapi.asp?command=multiroom:getnamegrouplist

Get the list of group names in multi-room mode. The output is a JSON array of strings, where each string is a group name.

Response example:
{ "grouplist": [ ], "current_group_id": "" }

> Example responses

> 200 Response

```
{"grouplist":["Group 1","Group 2"],"current_group_id":"Group 1"}
```

<h3 id="multiroomgetnamegrouplist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="multiroomgetnamegrouplist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» grouplist|array|false|none|List of group names in multi-room mode|
|» current_group_id|string|false|none|The ID of the currently selected group|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomLeaveGroup

<a id="opIdmultiroomLeaveGroup"></a>

`GET /multiroom:LeaveGroup`

*Leaving the multi-room mode*

...

<h3 id="multiroomleavegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomJoinGroup

<a id="opIdmultiroomJoinGroup"></a>

`GET /multiroom:JoinGroup:IP={IP}:uuid={uuid}`

*Joining a multi-room group*

...

<h3 id="multiroomjoingroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IP|path|string|true|The IP address of the multi-room group to join.|
|uuid|path|string|true|The UUID of the multi-room group to join.|

<h3 id="multiroomjoingroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSlaveDeviceName

<a id="opIdmultiroomSlaveDeviceName"></a>

`GET /multiroom:SlaveDeviceName:{ip}:{str}`

*Multi-room get slave device name*

...

<h3 id="multiroomslavedevicename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|The IP address of the slave device|
|str|path|string|true|Unknown|

<h3 id="multiroomslavedevicename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSubwooferForget

<a id="opIdmultiroomSubwooferForget"></a>

`GET /multiroom:subwooferForget:%7B%22uuid%22:%22{uuid}%22%7D`

*Multi-room subwoofer forget*

...

<h3 id="multiroomsubwooferforget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|Unknown|

<h3 id="multiroomsubwooferforget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSubwooferGetPairInfo

<a id="opIdmultiroomSubwooferGetPairInfo"></a>

`GET /multiroom:subwooferGetPairInfo`

*Multi-room subwoofer get pair info*

...

<h3 id="multiroomsubwoofergetpairinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomConfigGetLeadtime

<a id="opIdmultiroomConfigGetLeadtime"></a>

`GET /multiroom:ConfigGet:leadtime`

*Multi-room get lead time*

...

<h3 id="multiroomconfiggetleadtime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomSubwooferPair

<a id="opIdmultiroomSubwooferPair"></a>

`GET /multiroom:subwooferPair:{str}`

*Multi-room subwoofer pair*

...

<h3 id="multiroomsubwooferpair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="multiroomsubwooferpair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## multiroomConfigSetLeadtime

<a id="opIdmultiroomConfigSetLeadtime"></a>

`GET /multiroom:ConfigSet:leadtime:{str}`

*Multi-room set lead time*

...

<h3 id="multiroomconfigsetleadtime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="multiroomconfigsetleadtime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setMRMSubLPF

<a id="opIdsetMRMSubLPF"></a>

`GET /setMRMSubLPF:{str}`

*Set multiroom subwoofer LPF*

...

<h3 id="setmrmsublpf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setmrmsublpf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSubLPF

<a id="opIdgetSubLPF"></a>

`GET /getSubLPF`

*Get subwoofer LPF*

...

<h3 id="getsublpf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSubLPF

<a id="opIdsetSubLPF"></a>

`GET /setSubLPF:{str}`

*Set subwoofer LPF*

...

<h3 id="setsublpf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setsublpf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMRMSubLPF

<a id="opIdgetMRMSubLPF"></a>

`GET /getMRMSubLPF:{str}`

*Get multi-room sub LPF*

...

<h3 id="getmrmsublpf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="getmrmsublpf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

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

## setEthStaticIp

<a id="opIdsetEthStaticIp"></a>

`GET /setEthStaticIp:{IpAddress}:{GatewayIp}:{DnsServerIp}`

*Set static Ethernet network config*

Example: https://10.10.10.254/httpapi.asp?command=setEthStaticIp:ipAddr=192.168.1.100/24:gateWay=192.168.1.1:dnsServer=8.8.8.8

Keyword args:
- ipAddr: Static IP address to set + netmask
- gateWay: Gateway
- dnsServer: The DNS Server (default: 8.8.8.8)

<h3 id="setethstaticip-parameters">Parameters</h3>

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

<h3 id="setethstaticip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## setSSID

<a id="opIdsetSSID"></a>

`GET /setSSID:{value}`

*Change the SSID name of the device*

Example: http://10.10.10.254/httpapi.asp?command=setSSID:value

Sets a new network name (SSID) of the device in hexadecimal format

<h3 id="setssid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|path|string|true|The new SSID name to set for the device, in hexadecimal format.|

<h3 id="setssid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setNetwork

<a id="opIdsetNetwork"></a>

`GET /setNetwork:{n}:{password}`

*Setting the password WIFI*

Example: http://10.10.10.254/httpapi.asp?command=setNetwork:1:password

Setting a new password using letters and / or numbers and crossing of setnetwork setting: 1 (Securing WIFI network (WPAPSK) in contrast, setnetwork: 0 (OPEN) makes the network open WIFI.

No response The system restarts after the validation of the new password.

<h3 id="setnetwork-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Network security type, where 1 secures the WIFI network with WPAPSK and 0 makes the network open.|
|password|path|string|true|The new password to set for the WIFI network, using letters and/or numbers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|

<h3 id="setnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNetworkPreferDNS

<a id="opIdgetNetworkPreferDNS"></a>

`GET /getNetworkPreferDNS`

*Get the preferred DNS server*

...

<h3 id="getnetworkpreferdns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWlanBandConfig

<a id="opIdgetWlanBandConfig"></a>

`GET /getWlanBandConfig`

*Get the WLAN band configuration*

...

<h3 id="getwlanbandconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWlanRoamConfig

<a id="opIdgetWlanRoamConfig"></a>

`GET /getWlanRoamConfig`

*Get the WLAN roaming configuration*

...

<h3 id="getwlanroamconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getIPV6Enable

<a id="opIdgetIPV6Enable"></a>

`GET /getIPV6Enable`

*Get IPV6 enable status*

...

<h3 id="getipv6enable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPowerWifiDown

<a id="opIdsetPowerWifiDown"></a>

`GET /setPowerWifiDown`

*Stop WIFI signal*

Example: http://10.10.10.254/httpapi.asp?command=setPowerWifiDown

Turns off the wifi

<h3 id="setpowerwifidown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## wlanConnectHideAp

<a id="opIdwlanConnectHideAp"></a>

`GET /wlanConnectHideAp:{str}`

*WLAN connect to hidden AP*

...

<h3 id="wlanconnecthideap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="wlanconnecthideap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## wlanConnectHideApEx

<a id="opIdwlanConnectHideApEx"></a>

`GET /wlanConnectHideApEx:{str1}:{str2}:{str3}`

*WLAN connect to hidden AP with extra parameters*

...

<h3 id="wlanconnecthideapex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str1|path|string|true|Unknown|
|str2|path|string|true|Unknown|
|str3|path|string|true|Unknown|

<h3 id="wlanconnecthideapex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNetwork

<a id="opIdgetNetwork"></a>

`GET /getNetwork`

*Get the network configuration*

...

<h3 id="getnetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## wlanGetApListEx

<a id="opIdwlanGetApListEx"></a>

`GET /wlanGetApListEx`

*Get WLAN AP list*

...

Returns: {"res":"0"}

> Example responses

> Successful response

```
{"res":"0"}
```

<h3 id="wlangetaplistex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="wlangetaplistex-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» res|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## setHideSSID

<a id="opIdsetHideSSID"></a>

`GET /setHideSSID:{str}`

*Set hide SSID*

...

<h3 id="sethidessid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="sethidessid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setNetworkExAES

<a id="opIdsetNetworkExAES"></a>

`GET /setNetworkExAES:{n}:{password}`

*Set network with AES encryption*

...

<h3 id="setnetworkexaes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|
|password|path|string|true|Unknown|

#### Enumerated Values

|Parameter|Value|
|---|---|
|n|0|
|n|1|

<h3 id="setnetworkexaes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setWlanBandConfig

<a id="opIdsetWlanBandConfig"></a>

`GET /setWlanBandConfig:{str}`

*Set WLAN band configuration*

...

<h3 id="setwlanbandconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setwlanbandconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setWlanConnectDisable

<a id="opIdsetWlanConnectDisable"></a>

`GET /setWlanConnectDisable:{str}`

*Set WLAN connect disable*

...

<h3 id="setwlanconnectdisable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setwlanconnectdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setWlanRoamConfig

<a id="opIdsetWlanRoamConfig"></a>

`GET /setWlanRoamConfig:{str}`

*Set WLAN roam configuration*

...

<h3 id="setwlanroamconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setwlanroamconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setNetworkPreferDNS

<a id="opIdsetNetworkPreferDNS"></a>

`GET /setNetworkPreferDNS:{str}`

*Set network preferred DNS*

...

<h3 id="setnetworkpreferdns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setnetworkpreferdns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## wlanGetApFullList

<a id="opIdwlanGetApFullList"></a>

`GET /wlanGetApFullList`

*Get WLAN AP list*

...

<h3 id="wlangetapfulllist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## wlanSwitchConnectedAp

<a id="opIdwlanSwitchConnectedAp"></a>

`GET /wlanSwitchConnectedAp:ssid={ssid}:bssid={bssid}`

*Wlan switch connected AP*

...

<h3 id="wlanswitchconnectedap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ssid|path|string|true|Unknown|
|bssid|path|string|true|Unknown|

<h3 id="wlanswitchconnectedap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setIPV6Enable

<a id="opIdsetIPV6Enable"></a>

`GET /setIPV6Enable:{str}`

*Set IPv6 enable*

...

<h3 id="setipv6enable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setipv6enable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWlanConnectDisableStatus

<a id="opIdgetWlanConnectDisableStatus"></a>

`GET /getWlanConnectDisableStatus`

*Get WLAN connect disable status*

...

<h3 id="getwlanconnectdisablestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNetworkHealth

<a id="opIdgetNetworkHealth"></a>

`GET /getNetworkHealth`

*Get network health status*

...

Returns: {"wlanDhcpTime":0, "ethDhcpTime":1, "wlanIpChanged":0, "wlanRoamingOn":0, "wlanBand":0, "wlanHistoryNum":0, "disconnectedCount":1, "lastDisconnectedTime":1, "ethDisconnectedCount":0, "lastDisconnectedMsg":"",  "ethNotReady":0, "pingCheckFailedCount":0, "wlanConnectTime":0, "wlanAbnormalRebootTimes":0, "wlanIsStaticIp":0, "ethIsStaticIp":0}

> Example responses

> 200 Response

```
{"wlanDhcpTime":0,"ethDhcpTime":0,"wlanIpChanged":0,"wlanRoamingOn":0,"wlanBand":0,"wlanHistoryNum":0,"disconnectedCount":0,"lastDisconnectedTime":0,"ethDisconnectedCount":0,"lastDisconnectedMsg":"string","ethNotReady":0,"pingCheckFailedCount":0,"wlanConnectTime":0,"wlanAbnormalRebootTimes":0,"wlanIsStaticIp":0,"ethIsStaticIp":0}
```

<h3 id="getnetworkhealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getnetworkhealth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» wlanDhcpTime|integer|false|none|none|
|» ethDhcpTime|integer|false|none|none|
|» wlanIpChanged|integer|false|none|none|
|» wlanRoamingOn|integer|false|none|none|
|» wlanBand|integer|false|none|none|
|» wlanHistoryNum|integer|false|none|none|
|» disconnectedCount|integer|false|none|none|
|» lastDisconnectedTime|integer|false|none|none|
|» ethDisconnectedCount|integer|false|none|none|
|» lastDisconnectedMsg|string|false|none|none|
|» ethNotReady|integer|false|none|none|
|» pingCheckFailedCount|integer|false|none|none|
|» wlanConnectTime|integer|false|none|none|
|» wlanAbnormalRebootTimes|integer|false|none|none|
|» wlanIsStaticIp|integer|false|none|none|
|» ethIsStaticIp|integer|false|none|none|

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

```json
{
  "EQStat": "On"
}
```

<h3 id="geteqstat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="geteqstat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» EQStat|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|EQStat|On|
|EQStat|Off|

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

## getEQBand

<a id="opIdgetEQBand"></a>

`GET /EQGetBand`

*Get the current EQ band*

http://10.10.10.254/httpapi.asp?command=EQGetBand

Response:

{"status":"OK","source_name":"wifi","EQStat":"Off","Name":"Rock","pluginURI":"http://moddevices.com/plugins/caps/Eq10HP","channelMode":"Stereo","EQBand":[{"index":0,"param_name":"band31hz","value":71},{"index":1,"param_name":"band63hz","value":67},{"index":2,"param_name":"band125hz","value":63},{"index":3,"param_name":"band250hz","value":56},{"index":4,"param_name":"band500hz","value":48},{"index":5,"param_name":"band1khz","value":46},{"index":6,"param_name":"band2khz","value":52},{"index":7,"param_name":"band4khz","value":60},{"index":8,"param_name":"band8khz","value":65},{"index":9,"param_name":"band16khz","value":56}]}

> Example responses

> 200 Response

```
null
```

<h3 id="geteqband-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Default response|Inline|

<h3 id="geteqband-responseschema">Response Schema</h3>

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

## eqSetBass

<a id="opIdeqSetBass"></a>

`GET /EQSet:Bass:{n}`

*Set Bass level*

...

<h3 id="eqsetbass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="eqsetbass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSetTreble

<a id="opIdeqSetTreble"></a>

`GET /EQSet:Treble:{n}`

*Set Treble level*

...

<h3 id="eqsettreble-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="eqsettreble-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqEnable

<a id="opIdeqEnable"></a>

`GET /EQEnable`

*Equalizer enable*

...

<h3 id="eqenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqDisable

<a id="opIdeqDisable"></a>

`GET /EQDisable`

*Equalizer disable*

...

<h3 id="eqdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSetBand

<a id="opIdeqSetBand"></a>

`GET /EQSetBand:%7B%22EQBand%22:[%7B%22index%22:{n1},%22param_name%22:{str},%22value%22:{n2}%7D]%7D`

*Set (a specific) band of the 10-band EQ*

https://10.10.10.254/httpapi.asp?command=EQSetBand:{"EQBand":[{"index":0,"param_name":"band31hz","value":10}]}

A way to control the 10-band EQ, including real-time updates from external inputs.

Example 1 - single band change to 10:

https://10.10.10.254/httpapi.asp?command=EQSetBand:{"EQBand":[{"index":0,"param_name":"band31hz","value":10}]}'

Example 2 - sets all bands to 52:

https://10.10.10.254/httpapi.asp?command=EQSetBand:{"EQBand":[{"index":0,"param_name":"band31hz","value":52},{"index":1,"param_name":"band63hz","value":52},{"index":2,"param_name":"band125hz","value":52},{"index":3,"param_name":"band250hz","value":52},{"index":4,"param_name":"band500hz","value":52},{"index":5,"param_name":"band1khz","value":52},{"index":6,"param_name":"band2khz","value":52},{"index":7,"param_name":"band4khz","value":52},{"index":8,"param_name":"band8khz","value":52},{"index":9,"param_name":"band16khz","value":52}]}'

Notes:
- using WiiM Ultra with firmware version 5.2.809757 (beta), build date 20260304
- works instantly on the device
- changes the currently selected source's EQ
- values are 0-99 (50 = flat)
- app UI reflects changes after leaving/re-entering the EQ screen for that source
- driven from a wireless EQ deck that posts physical slider positions to MQTT, which are then read, scaled, and sent on to the WiiM
- with ~0.4s throttle the WiiM keeps up and tracks slider movements well
- EQGetBand tells you info about your current source, including the band values, which is how I worked this out.

<h3 id="eqsetband-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n1|path|integer|true|Index of the EQ band to set, where 0 corresponds to the 31Hz band, 1 to the 62Hz band, and so on up to 9 for the 16kHz band.|
|str|path|string|true|Name of the parameter to set, which should be in the format "band{frequency}hz", where {frequency} is the center frequency of the band (e.g., "band31hz", "band63hz", "band125hz", "band250hz", "band500hz", "band1khz", "band2khz", "band4khz", "band8khz", "band16khz").|
|n2|path|integer|true|Value to set for the specified EQ band, where 0-99 represents the gain level (50 = flat, values above 50 boost the band, and values below 50 cut the band).|

<h3 id="eqsetband-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSetLV2Band

<a id="opIdeqSetLV2Band"></a>

`GET /EQSetLV2Band:{str}`

*Set LV2 band*

...

<h3 id="eqsetlv2band-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqsetlv2band-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSetLV2SourceBand

<a id="opIdeqSetLV2SourceBand"></a>

`GET /EQSetLV2SourceBand:{str}`

*Set LV2 source band*

...

<h3 id="eqsetlv2sourceband-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqsetlv2sourceband-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqv2Delete

<a id="opIdeqv2Delete"></a>

`GET /EQv2Delete:{str}`

*Delete EQ v2 settings*

...

<h3 id="eqv2delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqv2delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqv2Rename

<a id="opIdeqv2Rename"></a>

`GET /EQv2Rename:{str}`

*Rename EQ v2 settings*

...

<h3 id="eqv2rename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqv2rename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqChangeSourceFX

<a id="opIdeqChangeSourceFX"></a>

`GET /EQChangeSourceFX:{str}`

*Change source FX*

...

<h3 id="eqchangesourcefx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqchangesourcefx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqChangeFX

<a id="opIdeqChangeFX"></a>

`GET /EQChangeFX:{str}`

*Change FX*

...

<h3 id="eqchangefx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqchangefx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqGetLV2Band

<a id="opIdeqGetLV2Band"></a>

`GET /EQGetLV2Band:{pluginURI}`

*Get LV2 band*

...

<h3 id="eqgetlv2band-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pluginURI|path|string|true|Unknown|

<h3 id="eqgetlv2band-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqGetLV2SourceBand

<a id="opIdeqGetLV2SourceBand"></a>

`GET /EQGetLV2SourceBand:{str}`

*Get LV2 source band*

...

<h3 id="eqgetlv2sourceband-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqgetlv2sourceband-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqGetLV2SourceBandEx

<a id="opIdeqGetLV2SourceBandEx"></a>

`GET /EQGetLV2SourceBandEx:{str}`

*Get LV2 source band with extra parameters*

...

<h3 id="eqgetlv2sourcebandex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqgetlv2sourcebandex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqv2GetList

<a id="opIdeqv2GetList"></a>

`GET /EQv2GetList:{str}`

*Get EQ v2 list*

...

<h3 id="eqv2getlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqv2getlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqv2GetNewList

<a id="opIdeqv2GetNewList"></a>

`GET /EQv2GetNewList:{str}`

*Get new EQ v2 list*

...

<h3 id="eqv2getnewlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqv2getnewlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqv2Load

<a id="opIdeqv2Load"></a>

`GET /EQv2Load:{str}`

*Load EQ v2 settings*

...

<h3 id="eqv2load-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqv2load-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqv2SourceLoad

<a id="opIdeqv2SourceLoad"></a>

`GET /EQv2SourceLoad:{str}`

*Source load EQ v2 settings*

...

<h3 id="eqv2sourceload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqv2sourceload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSourceOff

<a id="opIdeqSourceOff"></a>

`GET /EQSourceOff:{str}`

*Turn off EQ source*

...

<h3 id="eqsourceoff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqsourceoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSetChannelMode

<a id="opIdeqSetChannelMode"></a>

`GET /EQSetChannelMode:{str}`

*Set channel mode*

...

<h3 id="eqsetchannelmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqsetchannelmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSourceSave

<a id="opIdeqSourceSave"></a>

`GET /EQSourceSave:{str}`

*Save EQ source settings*

...

<h3 id="eqsourcesave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqsourcesave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqSave

<a id="opIdeqSave"></a>

`GET /EQSave:{str}`

*Save EQ settings*

...

<h3 id="eqsave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="eqsave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqGetLV2BandEx

<a id="opIdeqGetLV2BandEx"></a>

`GET /EQGetLV2BandEx:{pluginURI}`

*Get LV2 band with extra parameters*

...

<h3 id="eqgetlv2bandex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pluginURI|path|string|true|Unknown|

<h3 id="eqgetlv2bandex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## eqGetSourceModes

<a id="opIdeqGetSourceModes"></a>

`GET /EQGetSourceModes`

*Get the EQ source modes*

Makes a call to https://10.10.10.254/httpapi.asp?command=EQGetSourceModes

> Example responses

> 200 Response

```json
[
  {
    "source_name": "string",
    "NameLR": "string",
    "EQStat": "string",
    "Name": "string",
    "pluginURI": "string",
    "channelMode": "string"
  }
]
```

<h3 id="eqgetsourcemodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="eqgetsourcemodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» source_name|string|false|none|none|
|» NameLR|string|false|none|none|
|» EQStat|string|false|none|none|
|» Name|string|false|none|none|
|» pluginURI|string|false|none|none|
|» channelMode|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## eqSaveCustom

<a id="opIdeqSaveCustom"></a>

`GET /EQSave:Custom`

*Save the current EQ setting as "Custom"*

Makes a call to https://10.10.10.254/httpapi.asp?command=EQSave:Custom

<h3 id="eqsavecustom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

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

## buttonEnableGet

<a id="opIdbuttonEnableGet"></a>

`GET /Button_Enable_GET`

*Get button enable status*

...

<h3 id="buttonenableget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getFirmwareVersion

<a id="opIdgetFirmwareVersion"></a>

`GET /getFirmwareVersion`

*Get firmware version*

...

<h3 id="getfirmwareversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

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

<h1 id="linkplay-wiim-http-api-source-input-switch">Source input switch</h1>

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
- HDMI

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
|mode|HDMI|

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

## getMCUKeyShortClickTrack

<a id="opIdgetMCUKeyShortClickTrack"></a>

`GET /MCUKeyShortClick:{n}:{t}`

*Play preset with preset number and track number*

http://10.10.10.254/httpapi.asp?command=MCUKeyShortClick:%d:%t

%d: Range is from 1 to 12  
%t: Track number, start from 1, default is 1

<h3 id="getmcukeyshortclicktrack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Preset number|
|t|path|integer|true|Track number, start from 1, default is 1|

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

<h3 id="getmcukeyshortclicktrack-responses">Responses</h3>

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

<h1 id="linkplay-wiim-http-api-audio-output-control">Audio output control</h1>

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

## getFadeFeature

<a id="opIdgetFadeFeature"></a>

`GET /GetFadeFeature`

*Get fade in/out feature status*

Makes a call to https://10.10.10.254/httpapi.asp?command=GetFadeFeature

Returns {"FadeFeature": 1}

> Example responses

> 200 Response

```
{"FadeFeature":1}
```

<h3 id="getfadefeature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getfadefeature-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» FadeFeature|integer|false|none|0 or 1|

<aside class="success">
This operation does not require authentication
</aside>

## setFadeFeature

<a id="opIdsetFadeFeature"></a>

`GET /SetFadeFeature:{n}`

*Set fade in/out feature*

Makes a call to https://10.10.10.254/httpapi.asp?command=SetFadeFeature:0

<h3 id="setfadefeature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Fade feature value (0 or 1)|

<h3 id="setfadefeature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-bluetooth">Bluetooth</h1>

Get and set Bluetooth settings

## startBtDiscovery

<a id="opIdstartBtDiscovery"></a>

`GET /startbtdiscovery:{n}`

*Start Bluetooth device scan*

Args: 3 (Not sure what this argument means, I've only seen the app use the value 3 for it. Works with other integers and successfully starts a BT scan. Maybe a max list size?)

<h3 id="startbtdiscovery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Not sure what this argument means, I've only seen the app use the value 3 for it. Works with other integers and successfully starts a BT scan. Maybe a max list size?|

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

## connectbta2dpsource

<a id="opIdconnectbta2dpsource"></a>

`GET /connectbta2dpsource:{str}`

*Connect to a Bluetooth source device*

...

<h3 id="connectbta2dpsource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="connectbta2dpsource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## delbthistory

<a id="opIddelbthistory"></a>

`GET /delbthistory:{str}`

*Delete Bluetooth history*

...

<h3 id="delbthistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="delbthistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## btdisconnectall

<a id="opIdbtdisconnectall"></a>

`GET /btdisconnectall`

*Disconnect all Bluetooth devices*

...

<h3 id="btdisconnectall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getbtPairDevStat

<a id="opIdgetbtPairDevStat"></a>

`GET /getbtPairDevStat`

*Get Bluetooth pair device status*

...

<h3 id="getbtpairdevstat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getbtstatus

<a id="opIdgetbtstatus"></a>

`GET /getbtstatus`

*Get Bluetooth status*

...

<h3 id="getbtstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## startbtserver

<a id="opIdstartbtserver"></a>

`GET /startbtserver`

*Start Bluetooth server*

...

<h3 id="startbtserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## startgetbtPairDevStat

<a id="opIdstartgetbtPairDevStat"></a>

`GET /startgetbtPairDevStat`

*Start getting Bluetooth pair device status*

...

<h3 id="startgetbtpairdevstat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## stopbtdiscovery

<a id="opIdstopbtdiscovery"></a>

`GET /stopbtdiscovery`

*Stop Bluetooth discovery*

...

<h3 id="stopbtdiscovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## stopbtserver

<a id="opIdstopbtserver"></a>

`GET /stopbtserver:{n}`

*Stop Bluetooth server*

...

<h3 id="stopbtserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="stopbtserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## btavkenterpair

<a id="opIdbtavkenterpair"></a>

`GET /btavkenterpair`

*Enter Bluetooth pairing mode*

...

<h3 id="btavkenterpair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## blehidpair

<a id="opIdblehidpair"></a>

`GET /blehidpair:{str}`

*Pair with a BLE HID device*

...

<h3 id="blehidpair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="blehidpair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## blehidremoveall

<a id="opIdblehidremoveall"></a>

`GET /blehidremoveall`

*Remove all paired BLE HID devices*

...

<h3 id="blehidremoveall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## btrecovery

<a id="opIdbtrecovery"></a>

`GET /btrecovery`

*Recovery Bluetooth*

...

<h3 id="btrecovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBleHidStatus

<a id="opIdgetBleHidStatus"></a>

`GET /getblehidstatus`

*Get BLE HID status*

...

<h3 id="getblehidstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## startBleScan

<a id="opIdstartBleScan"></a>

`GET /startblescan:{n}`

*Start BLE scan*

...

<h3 id="startblescan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="startblescan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBleDiscoveryResult

<a id="opIdgetBleDiscoveryResult"></a>

`GET /getblediscoveryresult`

*Get BLE discovery result*

...

<h3 id="getblediscoveryresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-room-correction">Room correction</h1>

Get and set room correction settings

## roomCorrGet

<a id="opIdroomCorrGet"></a>

`GET /RoomCorrGet`

*Get the current room correction settings*

Makes a call to https://10.10.10.254/httpapi.asp?command=RoomCorrGet

It returns a JSON object with the current room correction settings, including the EQ levels for each band, the source name, and other related information.  
The "EQBand" array contains objects for each EQ band, with parameters such as "mode", "freq", "q", and "gain".  
This information can be used to understand the current room correction configuration and make informed adjustments if needed.

> Example responses

> 200 Response

```json
{
  "status": "string",
  "EQLevel": 0,
  "source_name": "string",
  "EQStat": "string",
  "Name": "string",
  "pluginURI": "string",
  "channelMode": "string",
  "EQBand": [
    {
      "index": 0,
      "param_name": "string",
      "value": 0
    }
  ]
}
```

<h3 id="roomcorrget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="roomcorrget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|Status of the response, typically "OK" if the request was successful.|
|» EQLevel|integer|false|none|The current EQ level setting.|
|» source_name|string|false|none|The name of the current audio source.|
|» EQStat|string|false|none|The status of the EQ, such as "On" or "Off".|
|» Name|string|false|none|The name of the current room correction profile.|
|» pluginURI|string|false|none|The URI of the plugin used for room correction.|
|» channelMode|string|false|none|The channel mode, such as "Stereo".|
|» EQBand|[object]|false|none|none|
|»» index|integer|false|none|The index of the EQ band.|
|»» param_name|string|false|none|The name of the parameter for this band (e.g., "a_mode", "a_freq", "a_q", "a_gain").|
|»» value|number|false|none|The value of the parameter for this band.|

<aside class="success">
This operation does not require authentication
</aside>

## roomCorrGetMode

<a id="opIdroomCorrGetMode"></a>

`GET /RoomCorrGetMode`

*Get the current room correction mode*

Makes a call to https://10.10.10.254/httpapi.asp?command=RoomCorrGetMode

Same as RoomCorrGet?

<h3 id="roomcorrgetmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## roomCorrSet

<a id="opIdroomCorrSet"></a>

`GET /RoomCorrSet:{str}`

*Set the room correction settings*

Makes a call to https://10.10.10.254/httpapi.asp?command=RoomCorrSet:{str}

<h3 id="roomcorrset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="roomcorrset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## roomCorrSetLR

<a id="opIdroomCorrSetLR"></a>

`GET /RoomCorrSetLR:{str}`

*Set the room correction settings for left and right channels*

Makes a call to https://10.10.10.254/httpapi.asp?command=RoomCorrSetLR:{str}

Same as RoomCorrSet?

<h3 id="roomcorrsetlr-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="roomcorrsetlr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## roomCorrSetMode

<a id="opIdroomCorrSetMode"></a>

`GET /RoomCorrSetMode:%7B%22Mode%22:%22{str}%22%7D`

*Set the room correction mode*

...

<h3 id="roomcorrsetmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="roomcorrsetmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setRoomCorrection

<a id="opIdsetRoomCorrection"></a>

`GET /setRoomCorrection:%7B%22RC_Version%22:%22{str}%22,%22Time%22:%22{time}%22%7D`

*Set the room correction settings with version and time parameters*

...

<h3 id="setroomcorrection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|
|time|path|string|true|Format yyyy:MM:dd HH:mm|

<h3 id="setroomcorrection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-alexa">Alexa</h1>

Get and set Alexa settings

## alexaEnableBetaId

<a id="opIdalexaEnableBetaId"></a>

`GET /alexaEnableBetaId:{n}`

*Enable Alexa Beta ID*

Makes a call to https://10.10.10.254/httpapi.asp?command=alexaEnableBetaId:{n}

<h3 id="alexaenablebetaid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|The beta ID to enable|

<h3 id="alexaenablebetaid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAlexaProfile

<a id="opIdgetAlexaProfile"></a>

`GET /getAlexaProfile`

*Get Alexa Profile*

Makes a call to https://10.10.10.254/httpapi.asp?command=getAlexaProfile

<h3 id="getalexaprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## alexaLogOut

<a id="opIdalexaLogOut"></a>

`GET /alexaLogOut`

*Log out of Alexa*

Makes a call to https://10.10.10.254/httpapi.asp?command=alexaLogOut

<h3 id="alexalogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAlexaCountry

<a id="opIdgetAlexaCountry"></a>

`GET /getAlexaCountry`

*Get Alexa Country*

Makes a call to https://10.10.10.254/httpapi.asp?command=getAlexaCountry

<h3 id="getalexacountry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## alexaLanguageListGet

<a id="opIdalexaLanguageListGet"></a>

`GET /alexaLanguageListGet`

*Get Alexa Language List*

Makes a call to https://10.10.10.254/httpapi.asp?command=alexaLanguageListGet

<h3 id="alexalanguagelistget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## alexaGetLanguage

<a id="opIdalexaGetLanguage"></a>

`GET /alexaGetLanguage`

*Get Alexa Language*

Makes a call to https://10.10.10.254/httpapi.asp?command=alexaGetLanguage

<h3 id="alexagetlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAlexaCountry

<a id="opIdsetAlexaCountry"></a>

`GET /setAlexaCountry:{str}`

*Set Alexa Country*

Makes a call to https://10.10.10.254/httpapi.asp?command=setAlexaCountry:{str}

<h3 id="setalexacountry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Country code to set for Alexa|

<h3 id="setalexacountry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## alexaSetLanguage

<a id="opIdalexaSetLanguage"></a>

`GET /alexaSetLanguage:{str}`

*Set Alexa Language*

Makes a call to https://10.10.10.254/httpapi.asp?command=alexaSetLanguage:{str}

<h3 id="alexasetlanguage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Language code to set for Alexa|

<h3 id="alexasetlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-amazon-music">Amazon music</h1>

Get and set Amazon Music settings

## setAmazonAccessToken

<a id="opIdsetAmazonAccessToken"></a>

`GET /setAmazonAccessToken:{str}:{str2}`

*Set Amazon access token*

Makes a call to https://10.10.10.254/httpapi.asp?command=setAmazonAccessToken:{str}:{str2}

<h3 id="setamazonaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|
|str2|path|string|true|Unknown|

<h3 id="setamazonaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableAmazonAtmos

<a id="opIdenableAmazonAtmos"></a>

`GET /EnableAmazonAtmos:{n}`

*Enable Amazon Atmos*

Makes a call to https://10.10.10.254/httpapi.asp?command=EnableAmazonAtmos:%d

<h3 id="enableamazonatmos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|1 to enable, 0 to disable Amazon Atmos|

<h3 id="enableamazonatmos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableAmazonHD

<a id="opIdenableAmazonHD"></a>

`GET /EnableAmazonHD:{n}`

*Enable Amazon HD*

Makes a call to https://10.10.10.254/httpapi.asp?command=EnableAmazonHD:%d

<h3 id="enableamazonhd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|1 to enable, 0 to disable Amazon HD|

<h3 id="enableamazonhd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAmazonHD

<a id="opIdgetAmazonHD"></a>

`GET /GetAmazonHD`

*Get Amazon HD status*

Makes a call to https://10.10.10.254/httpapi.asp?command=GetAmazonHD

<h3 id="getamazonhd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAmazonConfig

<a id="opIdgetAmazonConfig"></a>

`GET /getAmazonConfig`

*Get Amazon Music configuration*

Makes a call to https://10.10.10.254/httpapi.asp?command=getAmazonConfig

<h3 id="getamazonconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAmazonMusicParams

<a id="opIdsetAmazonMusicParams"></a>

`GET /setAmazonMusicParams:code={str1}:redirect_uri={str2}:client_id={str3}:code_verifier={str4}`

*Set Amazon Music parameters*

Makes a call to https://10.10.10.254/httpapi.asp?command=setAmazonMusicParams:code=%@:redirect_uri=%@:client_id=%@:code_verifier=%@
Note: The parameters in the command should be replaced with actual values when making the request.

<h3 id="setamazonmusicparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str1|path|string|true|The code parameter for Amazon Music|
|str2|path|string|true|The redirect URI for Amazon Music|
|str3|path|string|true|The client ID for Amazon Music|
|str4|path|string|true|The code verifier for Amazon Music|

<h3 id="setamazonmusicparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-http-api-other">Other</h1>

Existing commands, purpose unkown. To research further...

## getRemoteVolumeStep

<a id="opIdgetRemoteVolumeStep"></a>

`GET /get_remote_volume_step`

*Get the remote volume step*

Makes a call to https://10.10.10.254/httpapi.asp?command=get_remote_volume_step

Returns: {"status":"OK","remote_volume_step":1}

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "remote_volume_step": 1
}
```

<h3 id="getremotevolumestep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getremotevolumestep-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|The status of the response, typically "OK"|
|» remote_volume_step|integer|false|none|The current remote volume step value|

<aside class="success">
This operation does not require authentication
</aside>

## setRemoteVolumeStep

<a id="opIdsetRemoteVolumeStep"></a>

`GET /set_remote_volume_step:{n}`

*Set the remote volume step*

Makes a call to https://10.10.10.254/httpapi.asp?command=set_remote_volume_step:{n}

<h3 id="setremotevolumestep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|The volume step value|

<h3 id="setremotevolumestep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRemoteSilenceUpdateTime

<a id="opIdgetMvRemoteSilenceUpdateTime"></a>

`GET /getMvRemoteSilenceUpdateTime`

*Get the MV remote silence update time*

...

<h3 id="getmvremotesilenceupdatetime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpdifOutMaxCap

<a id="opIdgetSpdifOutMaxCap"></a>

`GET /getSpdifOutMaxCap`

*Get SPDIF output maximum capabilities*

...

<h3 id="getspdifoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCoaxOutMaxCap

<a id="opIdgetCoaxOutMaxCap"></a>

`GET /getCoaxOutMaxCap`

*Get the maximum capabilities of the coaxial output*

...

<h3 id="getcoaxoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAuxVoltageSupportList

<a id="opIdgetAuxVoltageSupportList"></a>

`GET /getAuxVoltageSupportList`

*Get auxiliary voltage support list*

...

<h3 id="getauxvoltagesupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## audioCastGetSpeakerList

<a id="opIdaudioCastGetSpeakerList"></a>

`GET /audio_cast:get_speaker_list`

*Audio Cast get speaker list*

...

<h3 id="audiocastgetspeakerlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## audioCastScanSpeaker

<a id="opIdaudioCastScanSpeaker"></a>

`GET /audio_cast:scan_speaker`

*Audio Cast scan speaker*

...

<h3 id="audiocastscanspeaker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## audioCastSpeakerGetTranscodeBufferTime

<a id="opIdaudioCastSpeakerGetTranscodeBufferTime"></a>

`GET /audio_cast:speaker_get_transcode_buffer_time`

*Audio Cast get speaker transcode buffer time*

...

<h3 id="audiocastspeakergettranscodebuffertime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## audioCastSpeakerGetTranscodeProfile

<a id="opIdaudioCastSpeakerGetTranscodeProfile"></a>

`GET /audio_cast:speaker_get_transcode_profile`

*Audio Cast get speaker transcode profile*

...

<h3 id="audiocastspeakergettranscodeprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## audioCastSpeakerSetPassword

<a id="opIdaudioCastSpeakerSetPassword"></a>

`GET /audio_cast:speaker_set_password:{str1}:{str2}`

*Audio Cast set speaker password*

...

<h3 id="audiocastspeakersetpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str1|path|string|true|Unknown|
|str2|path|string|true|Unknown|

<h3 id="audiocastspeakersetpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## audioCastSpeakerSetVolume

<a id="opIdaudioCastSpeakerSetVolume"></a>

`GET /audio_cast:speaker_set_volume:{str}:{volume}`

*Audio Cast set speaker volume*

...

<h3 id="audiocastspeakersetvolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|
|volume|path|integer|true|Unknown|

<h3 id="audiocastspeakersetvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSoundCardModeSupportList

<a id="opIdgetSoundCardModeSupportList"></a>

`GET /getSoundCardModeSupportList`

*Get sound card mode support list*

...

<h3 id="getsoundcardmodesupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getActiveSoundCardOutputMode

<a id="opIdgetActiveSoundCardOutputMode"></a>

`GET /getActiveSoundCardOutputMode`

*Get the active sound card output mode*

...

<h3 id="getactivesoundcardoutputmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setLightOperationBrightConfig

<a id="opIdsetLightOperationBrightConfig"></a>

`GET /setLightOperationBrightConfig:%7B%22auto_sense_enable%22:{s},%22default_bright%22:{b},%22disable%22:{d}%7D`

*WiiM Ultra enable/disable LCD*

Example: https://10.10.10.254/httpapi.asp?command=setLightOperationBrightConfig:{%22auto_sense_enable%22:0,%22default_bright%22:1,%22disable%22:1}

Turns the screen of the WiiM Ultra on or off

<h3 id="setlightoperationbrightconfig-parameters">Parameters</h3>

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

<h3 id="setlightoperationbrightconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRemoteUpdateStartCheck

<a id="opIdgetMvRemoteUpdateStartCheck"></a>

`GET /getMvRemoteUpdateStartCheck`

*Update search*

Example: http://10.10.10.254/httpapi.asp?command=getMvRemoteUpdateStartCheck

Search for the firmware updates available

<h3 id="getmvremoteupdatestartcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRemoteUpdateStart

<a id="opIdgetMvRemoteUpdateStart"></a>

`GET /getMvRemoteUpdateStart`

*Notification updates*

Example: http://10.10.10.254/httpapi.asp?command=getMvRemoteUpdateStart

After calling the interface, if a new version is available, the device starts to download updates. At the end of the download, the update process starts.
WARNING: DO NOT POWER OFF DURING THIS PROCESS!!

<h3 id="getmvremoteupdatestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRemoteUpdateStatus

<a id="opIdgetMvRemoteUpdateStatus"></a>

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

<h3 id="getmvremoteupdatestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRomBurnPrecent

<a id="opIdgetMvRomBurnPrecent"></a>

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

<h3 id="getmvromburnprecent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## restoreToDefault

<a id="opIdrestoreToDefault"></a>

`GET /restoreToDefault`

*Restoring the factory setting*

Example: http://10.10.10.254/httpapi.asp?command=restoreToDefault

To restore factory settings, erasing defined configurations. The device restarts.

<h3 id="restoretodefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setDeviceName

<a id="opIdsetDeviceName"></a>

`GET /setDeviceName:{name}`

*Setting the name of device*

Example: http://10.10.10.254/httpapi.asp?command=setDeviceName:%s

Sets the name UPnP, DLNA and Airplay of the device (Hex)

<h3 id="setdevicename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The new device name to set for UPnP, DLNA, and Airplay, in hexadecimal format.|

<h3 id="setdevicename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## easyLinkResponseStop

<a id="opIdeasyLinkResponseStop"></a>

`GET /EasyLinkResponseStop`

*EasyLink response stop*

...

<h3 id="easylinkresponsestop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## notifyUpgradeTypeFirmware

<a id="opIdnotifyUpgradeTypeFirmware"></a>

`GET /NotifyUpgradeType:firmware`

*Notify upgrade type firmware*

...

<h3 id="notifyupgradetypefirmware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLMPFilterCapability

<a id="opIdgetLMPFilterCapability"></a>

`GET /getLMPFilterCapability`

*Get LMP filter capability*

...

<h3 id="getlmpfiltercapability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getStreamServiceConfig

<a id="opIdgetStreamServiceConfig"></a>

`GET /getStreamServiceConfig:{source}`

*Get stream service config for a specific source*

...

<h3 id="getstreamserviceconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|Unknown|

<h3 id="getstreamserviceconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setHandshakeCode

<a id="opIdsetHandshakeCode"></a>

`GET /setHandshakeCode:{str}`

*Set handshake code*

...

<h3 id="sethandshakecode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="sethandshakecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getsyslog

<a id="opIdgetsyslog"></a>

`GET /getsyslog`

*Get system log*

...

<h3 id="getsyslog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getsyslogIp

<a id="opIdgetsyslogIp"></a>

`GET /getsyslog:ip:{str}`

*Get system log for a specific IP address*

...

<h3 id="getsyslogip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="getsyslogip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getStatusIp

<a id="opIdgetStatusIp"></a>

`GET /getStatus:ip:{str}`

*Get the device status*

...

<h3 id="getstatusip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="getstatusip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUpdateServer

<a id="opIdgetUpdateServer"></a>

`GET /GetUpdateServer`

*Get update server*

...

<h3 id="getupdateserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getWeatherInfo

<a id="opIdgetWeatherInfo"></a>

`GET /getWeatherInfo`

*Get weather info*

...

<h3 id="getweatherinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAccessPIN

<a id="opIdsetAccessPIN"></a>

`GET /setAccessPIN:%7B%22PIN%22:%22{str}%22%7D`

*Set access PIN*

...

<h3 id="setaccesspin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setaccesspin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setLanguage

<a id="opIdsetLanguage"></a>

`GET /setLanguage:{str}`

*Set language*

...

<h3 id="setlanguage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setlanguage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## autoPlaySet

<a id="opIdautoPlaySet"></a>

`GET /AutoPlaySet`

*Auto play setting*

...

<h3 id="autoplayset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRomDownloadStatus

<a id="opIdgetMvRomDownloadStatus"></a>

`GET /getMvRomDownloadStatus`

*Get MV ROM download status*

...

<h3 id="getmvromdownloadstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRomDownloadV2Status

<a id="opIdgetMvRomDownloadV2Status"></a>

`GET /getMvRomDownloadV2Status`

*Get MV ROM download status V2*

...

<h3 id="getmvromdownloadv2status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setHexDeviceName

<a id="opIdsetHexDeviceName"></a>

`GET /setHexDeviceName:{str}`

*Set hex device name*

...

<h3 id="sethexdevicename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="sethexdevicename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setMvRemoteSilenceOTATime

<a id="opIdsetMvRemoteSilenceOTATime"></a>

`GET /setMvRemoteSilenceOTATime:{str}`

*Set MV remote silence OTA time*

...

<h3 id="setmvremotesilenceotatime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setmvremotesilenceotatime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setMvRemoteSilenceUpdateTime

<a id="opIdsetMvRemoteSilenceUpdateTime"></a>

`GET /setMvRemoteSilenceUpdateTime:{str}`

*Set MV remote silence update time*

...

<h3 id="setmvremotesilenceupdatetime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setmvremotesilenceupdatetime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setTimezone

<a id="opIdsetTimezone"></a>

`GET /setTimezone:{str}`

*Set timezone*

...

<h3 id="settimezone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="settimezone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## checkAccessPIN

<a id="opIdcheckAccessPIN"></a>

`GET /checkAccessPIN`

*Check access PIN*

...

<h3 id="checkaccesspin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setUpdateServer

<a id="opIdsetUpdateServer"></a>

`GET /SetUpdateServer:{str}`

*Set update server*

...

<h3 id="setupdateserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setupdateserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setWeatherLocation

<a id="opIdsetWeatherLocation"></a>

`GET /setWeatherLocation:{str}`

*Set weather location*

...

<h3 id="setweatherlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setweatherlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## startCheck

<a id="opIdstartCheck"></a>

`GET /StartCheck`

*Start check*

...

<h3 id="startcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getbatteryval

<a id="opIdgetbatteryval"></a>

`GET /getbatteryval`

*Get battery value*

...

<h3 id="getbatteryval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAvsDevInfo

<a id="opIdgetAvsDevInfo"></a>

`GET /getAvsDevInfo`

*Get AVS Device Info*

...

<h3 id="getavsdevinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAsrStatus

<a id="opIdgetAsrStatus"></a>

`GET /getAsrStatus`

*Get ASR Status*

...

<h3 id="getasrstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLPAuthCode

<a id="opIdgetLPAuthCode"></a>

`GET /getLPAuthCode:hostId={str}:clientId={str2}`

*Get LP Auth Code*

...

<h3 id="getlpauthcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|
|str2|path|string|true|Unknown|

<h3 id="getlpauthcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setTokenParams

<a id="opIdsetTokenParams"></a>

`GET /setTokenParams:code={str}:redirect_uri={str2}`

*Set token parameters*

...

<h3 id="settokenparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|
|str2|path|string|true|Unknown|

<h3 id="settokenparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## talksetPrompt

<a id="opIdtalksetPrompt"></a>

`GET /talksetPrompt:{n}`

*Set talk prompt*

...

<h3 id="talksetprompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="talksetprompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## talksetAlarmPreWake

<a id="opIdtalksetAlarmPreWake"></a>

`GET /talksetAlarmPreWake:{str}`

*Set talk alarm pre-wake*

...

<h3 id="talksetalarmprewake-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="talksetalarmprewake-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## talksetAlarmTone

<a id="opIdtalksetAlarmTone"></a>

`GET /talksetAlarmTone:{n}`

*Set talk alarm tone*

...

<h3 id="talksetalarmtone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="talksetalarmtone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## talksetAlarmTonePreview

<a id="opIdtalksetAlarmTonePreview"></a>

`GET /talksetAlarmTonePreview:{n}`

*Set talk alarm tone preview*

...

<h3 id="talksetalarmtonepreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="talksetalarmtonepreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## talksetAlarmVolume

<a id="opIdtalksetAlarmVolume"></a>

`GET /talksetAlarmVolume:{n}`

*Set talk alarm volume*

...

<h3 id="talksetalarmvolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="talksetalarmvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## talksetAlarmcommon

<a id="opIdtalksetAlarmcommon"></a>

`GET /talksetAlarmcommon:prewake:{str}:vol:{n1}:tone:{n2}`

*Set talk alarm common settings*

...

<h3 id="talksetalarmcommon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|
|n1|path|integer|true|Unknown|
|n2|path|integer|true|Unknown|

<h3 id="talksetalarmcommon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSyncPlayExtraDelay

<a id="opIdsetSyncPlayExtraDelay"></a>

`GET /SetSyncPlayExtraDelay:{n}`

*Set sync play extra delay*

...

<h3 id="setsyncplayextradelay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setsyncplayextradelay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setInitialConfiguration

<a id="opIdsetInitialConfiguration"></a>

`GET /setInitialConfiguration:{n}`

*Set initial configuration*

...

<h3 id="setinitialconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setinitialconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUiConfig

<a id="opIdgetUiConfig"></a>

`GET /get_ui_config`

*Get UI config*

...

<h3 id="getuiconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpdifAutoSenseEnable

<a id="opIdgetSpdifAutoSenseEnable"></a>

`GET /getSpdifAutoSenseEnable`

*Get SPDIF auto-sense enable status*

...

<h3 id="getspdifautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpdifInNoiseRemove

<a id="opIdgetSpdifInNoiseRemove"></a>

`GET /getSpdifInNoiseRemove`

*Get SPDIF input noise removal status*

...

<h3 id="getspdifinnoiseremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## phonoModeSwitchSet

<a id="opIdphonoModeSwitchSet"></a>

`GET /PHONO_MODE_SWITCH_SET:{str}`

*Phono mode switch set*

...

<h3 id="phonomodeswitchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="phonomodeswitchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayModeVolumeEnable

<a id="opIdsetPlayModeVolumeEnable"></a>

`GET /setPlayModeVolumeEnable:{str}`

*Set play mode volume enable*

...

<h3 id="setplaymodevolumeenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setplaymodevolumeenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUiWallpaperList

<a id="opIdgetUiWallpaperList"></a>

`GET /get_ui_wallpaper_list`

*Get UI wallpaper list*

...

<h3 id="getuiwallpaperlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPlayModeVolumeValue

<a id="opIdsetPlayModeVolumeValue"></a>

`GET /setPlayModeVolumeValue:{str}`

*Set play mode volume value*

...

<h3 id="setplaymodevolumevalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setplaymodevolumevalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setPowerModeTime

<a id="opIdsetPowerModeTime"></a>

`GET /setPowerModeTime:%7B%22idleInterval%22:%22{str}%22%7D`

*Set power mode time*

...

<h3 id="setpowermodetime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setpowermodetime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getButtonVolumeStep

<a id="opIdgetButtonVolumeStep"></a>

`GET /get_button_volume_step`

*Get the volume step of the buttons*

Makes a call to https://10.10.10.254/httpapi.asp?command=get_button_volume_step

Returns: {"status":"OK","button_volume_step":2}

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "button_volume_step": 2
}
```

<h3 id="getbuttonvolumestep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getbuttonvolumestep-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|none|
|» button_volume_step|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## setButtonVolumeStep

<a id="opIdsetButtonVolumeStep"></a>

`GET /set_button_volume_step:{str}`

*Set the volume step of the buttons*

Makes a call to https://10.10.10.254/httpapi.asp?command=set_button_volume_step:{str}

<h3 id="setbuttonvolumestep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setbuttonvolumestep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAvsMusicHDEnable

<a id="opIdgetAvsMusicHDEnable"></a>

`GET /getAvsMusicHDEnable`

*Get AVS Music HD enable status*

...

<h3 id="getavsmusichdenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAuxAutoSenseEnable

<a id="opIdgetAuxAutoSenseEnable"></a>

`GET /getAuxAutoSenseEnable`

*Get AUX auto-sense enable status*

...

<h3 id="getauxautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setUiConfig

<a id="opIdsetUiConfig"></a>

`GET /set_ui_config:{str}`

*Set UI config*

...

<h3 id="setuiconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setuiconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSpdifAutoSenseEnable

<a id="opIdsetSpdifAutoSenseEnable"></a>

`GET /setSpdifAutoSenseEnable:{n}`

*Set SPDIF auto-sense enable*

...

<h3 id="setspdifautosenseenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setspdifautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSpdifInNoiseRemove

<a id="opIdsetSpdifInNoiseRemove"></a>

`GET /setSpdifInNoiseRemove:{str}`

*Set SPDIF input noise removal*

...

<h3 id="setspdifinnoiseremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setspdifinnoiseremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getChannelMode

<a id="opIdgetChannelMode"></a>

`GET /getChannelMode`

*Get channel mode*

...

<h3 id="getchannelmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getDeviceNameChangeable

<a id="opIdgetDeviceNameChangeable"></a>

`GET /getDeviceNameChangeable`

*Get device name changeable status*

...

<h3 id="getdevicenamechangeable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAutoSenseEnable

<a id="opIdgetAutoSenseEnable"></a>

`GET /getAutoSenseEnable`

*Get auto-sense enable status*

...

<h3 id="getautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## startRebootTime

<a id="opIdstartRebootTime"></a>

`GET /StartRebootTime:1`

*Start reboot time*

...

<h3 id="startreboottime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## ledSwitchGet

<a id="opIdledSwitchGet"></a>

`GET /LED_SWITCH_GET`

*Get LED switch status*

...

<h3 id="ledswitchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMQAReceiverCap

<a id="opIdgetMQAReceiverCap"></a>

`GET /getMQAReceiverCap`

*Get MQA receiver capacity*

...

<h3 id="getmqareceivercap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAvsMusicHDEnable

<a id="opIdsetAvsMusicHDEnable"></a>

`GET /setAvsMusicHDEnable:{str}`

*Set AVS Music HD enable*

...

<h3 id="setavsmusichdenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setavsmusichdenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## reloadButtonGet

<a id="opIdreloadButtonGet"></a>

`GET /Reload_Button_GET`

*Reload button status*

...

<h3 id="reloadbuttonget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAuxAutoSenseEnable

<a id="opIdsetAuxAutoSenseEnable"></a>

`GET /setAuxAutoSenseEnable:{n}`

*Set AUX auto-sense enable*

...

<h3 id="setauxautosenseenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setauxautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLowPriorityPromptDisable

<a id="opIdgetLowPriorityPromptDisable"></a>

`GET /getLowPriorityPromptDisable`

*Get low priority prompt disable status*

...

<h3 id="getlowprioritypromptdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSoftMute

<a id="opIdgetSoftMute"></a>

`GET /getSoftMute`

*Get soft mute status*

...

<h3 id="getsoftmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLineInMaxCap

<a id="opIdgetLineInMaxCap"></a>

`GET /getLineInMaxCap`

*Get LINE IN maximum capacity*

...

<h3 id="getlineinmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAuxInMaxCap

<a id="opIdgetAuxInMaxCap"></a>

`GET /getAuxInMaxCap`

*Get AUX input maximum capacity*

...

<h3 id="getauxinmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUacOutMaxCap

<a id="opIdgetUacOutMaxCap"></a>

`GET /getUacOutMaxCap`

*Get UAC output maximum capacity*

...

<h3 id="getuacoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getHDMIAutoSenseEnable

<a id="opIdgetHDMIAutoSenseEnable"></a>

`GET /getHDMIAutoSenseEnable`

*Get HDMI auto-sense enable*

...

<h3 id="gethdmiautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setChannelMode

<a id="opIdsetChannelMode"></a>

`GET /setChannelMode:{n}`

*Set channel mode*

...

<h3 id="setchannelmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setchannelmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSyncPlayExtraDelay

<a id="opIdgetSyncPlayExtraDelay"></a>

`GET /GetSyncPlayExtraDelay`

*Get sync play extra delay*

...

<h3 id="getsyncplayextradelay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLightOperationBrightConfig

<a id="opIdgetLightOperationBrightConfig"></a>

`GET /getLightOperationBrightConfig`

*Get light operation brightness configuration*

...

<h3 id="getlightoperationbrightconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setUiWallpaperList

<a id="opIdsetUiWallpaperList"></a>

`GET /set_ui_wallpaper_list:{str}`

*Set UI wallpaper list*

...

<h3 id="setuiwallpaperlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setuiwallpaperlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMainSubExtraDelay

<a id="opIdgetMainSubExtraDelay"></a>

`GET /getMainSubExtraDelay`

*Get main/sub extra delay*

...

<h3 id="getmainsubextradelay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## castDisable

<a id="opIdcastDisable"></a>

`GET /Cast:Disable`

*Disable Cast*

...

<h3 id="castdisable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## castDisableUsageReport

<a id="opIdcastDisableUsageReport"></a>

`GET /Cast:DisableUsageReport`

*Disable usage report for Cast*

...

<h3 id="castdisableusagereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAutoSenseEnable

<a id="opIdsetAutoSenseEnable"></a>

`GET /setAutoSenseEnable:{str}`

*Set auto-sense enable*

...

<h3 id="setautosenseenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## phonoModeSwitchGet

<a id="opIdphonoModeSwitchGet"></a>

`GET /PHONO_MODE_SWITCH_GET`

*Get phono mode switch state*

...

<h3 id="phonomodeswitchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPlayModeVolumeEnable

<a id="opIdgetPlayModeVolumeEnable"></a>

`GET /getPlayModeVolumeEnable`

*Get play mode volume enable*

...

<h3 id="getplaymodevolumeenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setVolumeControl

<a id="opIdsetVolumeControl"></a>

`GET /setVolumeControl:{n}`

*Set volume control*

...

<h3 id="setvolumecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setvolumecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPlayModeVolumeValue

<a id="opIdgetPlayModeVolumeValue"></a>

`GET /getPlayModeVolumeValue`

*Get play mode volume value*

...

<h3 id="getplaymodevolumevalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setMQAReceiverCap

<a id="opIdsetMQAReceiverCap"></a>

`GET /setMQAReceiverCap:{str}`

*Set MQA receiver capacity*

...

<h3 id="setmqareceivercap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setmqareceivercap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPowerModeTime

<a id="opIdgetPowerModeTime"></a>

`GET /getPowerModeTime`

*Get power mode time*

...

<h3 id="getpowermodetime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setMaxVolume

<a id="opIdsetMaxVolume"></a>

`GET /setMaxVolume:{n}`

*Set max volume*

...

<h3 id="setmaxvolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="setmaxvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableCast

<a id="opIdenableCast"></a>

`GET /Cast:EnableCast`

*Enable Cast*

...

<h3 id="enablecast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## reloadButtonUpdate

<a id="opIdreloadButtonUpdate"></a>

`GET /Reload_Button_UPDATE:{str}`

*Reload button update*

...

<h3 id="reloadbuttonupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="reloadbuttonupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableCastUsageReport

<a id="opIdenableCastUsageReport"></a>

`GET /Cast:EnableUsageReport`

*Enable usage report for Cast*

...

<h3 id="enablecastusagereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## disableLowPriorityPrompt

<a id="opIddisableLowPriorityPrompt"></a>

`GET /disableLowPriorityPrompt:{str}`

*Disable low priority prompt*

...

<h3 id="disablelowpriorityprompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="disablelowpriorityprompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSoftMute

<a id="opIdsetSoftMute"></a>

`GET /setSoftMute:{str}`

*Set soft mute*

...

<h3 id="setsoftmute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setsoftmute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setHDMIAutoSenseEnable

<a id="opIdsetHDMIAutoSenseEnable"></a>

`GET /setHDMIAutoSenseEnable:{n}`

*Set HDMI auto-sense enable*

...

<h3 id="sethdmiautosenseenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="sethdmiautosenseenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSpdifOutMaxCap

<a id="opIdsetSpdifOutMaxCap"></a>

`GET /setSpdifOutMaxCap:{str}`

*Set SPDIF output max capacity*

...

<h3 id="setspdifoutmaxcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setspdifoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setCoaxOutMaxCap

<a id="opIdsetCoaxOutMaxCap"></a>

`GET /setCoaxOutMaxCap:{str}`

*Set coaxial output max capacity*

...

<h3 id="setcoaxoutmaxcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setcoaxoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setLineInMaxCap

<a id="opIdsetLineInMaxCap"></a>

`GET /setLineInMaxCap:{str}`

*Set line input max capacity*

...

<h3 id="setlineinmaxcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setlineinmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setAuxInMaxCap

<a id="opIdsetAuxInMaxCap"></a>

`GET /setAuxInMaxCap:{str}`

*Set auxiliary input max capacity*

...

<h3 id="setauxinmaxcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setauxinmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setUacOutMaxCap

<a id="opIdsetUacOutMaxCap"></a>

`GET /setUacOutMaxCap:{str}`

*Set UAC out max cap*

...

<h3 id="setuacoutmaxcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setuacoutmaxcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableSysInfo

<a id="opIdenableSysInfo"></a>

`GET /EnableSysInfo:{n}`

*Enable system information output*

...

<h3 id="enablesysinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="enablesysinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAirplayExtraDelay

<a id="opIdgetAirplayExtraDelay"></a>

`GET /GetAirplayExtraDelay`

*Get AirPlay extra delay*

Makes a call to https://10.10.10.254/httpapi?command=GetAirplayExtraDelay

Returns: {"AirplayExtraDelay":-10}

> Example responses

> 200 Response

```json
{
  "AirplayExtraDelay": -10
}
```

<h3 id="getairplayextradelay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getairplayextradelay-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» AirplayExtraDelay|integer|false|none|AirPlay extra delay in milliseconds|

<aside class="success">
This operation does not require authentication
</aside>

## getCurrentWirelessConnect

<a id="opIdgetCurrentWirelessConnect"></a>

`GET /GetCurrentWirelessConnect`

*Get current wireless connection information*

Makes a call to https://10.10.10.254/httpapi?command=GetCurrentWirelessConnect

<h3 id="getcurrentwirelessconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## slaveAlertGet

<a id="opIdslaveAlertGet"></a>

`GET /SlaveIP:{ip}:alertget`

*Slave alert get*

...

<h3 id="slavealertget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|Unknown|

<h3 id="slavealertget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## slaveTalkSetAlarmVolume

<a id="opIdslaveTalkSetAlarmVolume"></a>

`GET /SlaveIP:{ip}:talksetAlarmVolume:{n}`

*Slave set alarm volume*

...

<h3 id="slavetalksetalarmvolume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|Unknown|
|n|path|integer|true|Unknown|

<h3 id="slavetalksetalarmvolume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## squeezeliteAutoConnectEnable

<a id="opIdsqueezeliteAutoConnectEnable"></a>

`GET /Squeezelite:autoConnectEnable:{n}`

*Squeezelite auto connect enable*

...

<h3 id="squeezeliteautoconnectenable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|integer|true|Unknown|

<h3 id="squeezeliteautoconnectenable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## squeezeliteConnectServer

<a id="opIdsqueezeliteConnectServer"></a>

`GET /Squeezelite:connectServer:{ip}`

*Squeezelite connect server*

...

<h3 id="squeezeliteconnectserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|Unknown|

<h3 id="squeezeliteconnectserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## squeezeliteDiscover

<a id="opIdsqueezeliteDiscover"></a>

`GET /Squeezelite:discover`

*Squeezelite discover*

...

<h3 id="squeezelitediscover-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## squeezeliteGetState

<a id="opIdsqueezeliteGetState"></a>

`GET /Squeezelite:getState`

*Squeezelite get state*

...

<h3 id="squeezelitegetstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSetupRouterInfo

<a id="opIdgetSetupRouterInfo"></a>

`GET /getSetupRouterInfo`

*Get setup router information*

...

<h3 id="getsetuprouterinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setSetupRouterInfo

<a id="opIdsetSetupRouterInfo"></a>

`GET /setSetupRouterInfo:{str}`

*Set setup router information*

...

<h3 id="setsetuprouterinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="setsetuprouterinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## alertGet

<a id="opIdalertGet"></a>

`GET /alertget`

*Alert get*

...

<h3 id="alertget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## tvsLogout

<a id="opIdtvsLogout"></a>

`GET /TvsLogout`

*TVS logout*

...

<h3 id="tvslogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTvsState

<a id="opIdgetTvsState"></a>

`GET /TvsState`

*Get TVS state*

...

<h3 id="gettvsstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTvsDevInfo

<a id="opIdgetTvsDevInfo"></a>

`GET /getTvsDevInfo`

*Get TVS device information*

...

<h3 id="gettvsdevinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setTVSAccessToken

<a id="opIdsetTVSAccessToken"></a>

`GET /setTVSAccessToken:{str}`

*Set TVS access token*

...

<h3 id="settvsaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="settvsaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setTVSDebugMode

<a id="opIdsetTVSDebugMode"></a>

`GET /setTVSDebugMode:{str}`

*Set TVS debug mode*

...

<h3 id="settvsdebugmode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="settvsdebugmode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## setTvsClientID

<a id="opIdsetTvsClientID"></a>

`GET /setTvsClientID:{str}`

*Set TVS client ID*

...

<h3 id="settvsclientid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="settvsclientid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRoutine

<a id="opIdcreateRoutine"></a>

`GET /createRoutine:{str}`

*Create routine*

...

<h3 id="createroutine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown|

<h3 id="createroutine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAllRoutines

<a id="opIdgetAllRoutines"></a>

`GET /getAllRoutines`

*Get all routines*

...

Returns: { "routines": [ { "updateDate": "2025-10-12T12:03:48Z", "steps": [ { "type": "subwoofer", "payload": { "subOutput": 0 } }, { "type": "loopMode", "payload": { "mode": 3 } } ], "createDate": "2025-10-12T12:03:48Z", "id": "E59E781B-CE00-4347-9E5B-A82F47C675AC", "name": "Spotify Liked", "index": 1 } ] }

> Example responses

> 200 Response

```json
{
  "routines": [
    {
      "updateDate": "2025-10-12T12:03:48Z",
      "steps": [
        {
          "type": "subwoofer",
          "payload": {}
        }
      ],
      "createDate": "2025-10-12T12:03:48Z",
      "id": "E59E781B-CE00-4347-9E5B-A82F47C675AC",
      "name": "Spotify Liked",
      "index": 1
    }
  ]
}
```

<h3 id="getallroutines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getallroutines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» routines|[object]|false|none|List of routines|
|»» updateDate|string(date-time)|false|none|Last update date of the routine|
|»» steps|[object]|false|none|List of steps in the routine|
|»»» type|string|false|none|Type of the step|
|»»» payload|object|false|none|Payload for the step|
|»» createDate|string(date-time)|false|none|Creation date of the routine|
|»» id|string|false|none|Unique identifier for the routine|
|»» name|string|false|none|Name of the routine|
|»» index|integer|false|none|Index of the routine|

<aside class="success">
This operation does not require authentication
</aside>

## getRoutineCapability

<a id="opIdgetRoutineCapability"></a>

`GET /getRoutineCapability`

*Get routine capability*

...

Returns: { "version": "1.1" }

> Example responses

> 200 Response

```json
{
  "version": "1.1"
}
```

<h3 id="getroutinecapability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getroutinecapability-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» version|string|false|none|Routine capability version|

<aside class="success">
This operation does not require authentication
</aside>

## getAudioInputCapability

<a id="opIdgetAudioInputCapability"></a>

`GET /getAudioInputCapbility`

*Get audio input capability*

...

Returns: { "ver": "1.0", "audioInput": [ { "mode": "wifi" }, { "mode": "line-in" }, { "mode": "bluetooth" }, { "mode": "optical" }, { "mode": "HDMI" } ] }

> Example responses

> 200 Response

```json
{
  "ver": "1.0",
  "audioInput": [
    {
      "mode": "wifi"
    }
  ]
}
```

<h3 id="getaudioinputcapability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getaudioinputcapability-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» ver|string|false|none|Audio input capability version|
|» audioInput|[object]|false|none|List of supported audio input modes|
|»» mode|string|false|none|Audio input mode|

<aside class="success">
This operation does not require authentication
</aside>

## getAudioOutMax32bit

<a id="opIdgetAudioOutMax32bit"></a>

`GET /getAudioOutMax32bit`

*Get audio output maximum 32-bit support*

...

Returns: 0 or 1

> Example responses

> 200 Response

```json
{
  "audioOutMax32bit": 1
}
```

<h3 id="getaudiooutmax32bit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getaudiooutmax32bit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» audioOutMax32bit|integer|false|none|Indicates if 32-bit audio output is supported (0 or 1)|

<aside class="success">
This operation does not require authentication
</aside>

## getAudioOutputVrms

<a id="opIdgetAudioOutputVrms"></a>

`GET /getAudioOutputVrms:{str}`

*Get audio output VRMS for a specific output*

...

<h3 id="getaudiooutputvrms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|str|path|string|true|Unknown (possibly the output type or identifier)|

<h3 id="getaudiooutputvrms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAudioOutputVrmsSupportList

<a id="opIdgetAudioOutputVrmsSupportList"></a>

`GET /getAudioOutputVrmsSupportList`

*Get list of audio outputs that support VRMS*

...

<h3 id="getaudiooutputvrmssupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCBLStatus

<a id="opIdgetCBLStatus"></a>

`GET /getCBLStatus`

*Get CBL status*

...

<h3 id="getcblstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCecPowerCtrl

<a id="opIdgetCecPowerCtrl"></a>

`GET /getCecPowerCtrl`

*Get CEC power control status*

...

Returns: 0 or 1

> Example responses

> 200 Response

```json
{
  "cecPowerCtrl": 1
}
```

<h3 id="getcecpowerctrl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getcecpowerctrl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» cecPowerCtrl|integer|false|none|Indicates if CEC power control is enabled (0 or 1)|

<aside class="success">
This operation does not require authentication
</aside>

## getCxdishPrecent

<a id="opIdgetCxdishPrecent"></a>

`GET /getCxdishPrecent`

*Get CXDISH percentage*

...

Returns: {"status":"0","progress":"0"}

> Example responses

> 200 Response

```json
{
  "status": "0",
  "progress": "0"
}
```

<h3 id="getcxdishprecent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getcxdishprecent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» status|string|false|none|Status of the CXDISH operation|
|» progress|string|false|none|Progress percentage of the CXDISH operation|

<aside class="success">
This operation does not require authentication
</aside>

## getDigitalFilterTypeSupportList

<a id="opIdgetDigitalFilterTypeSupportList"></a>

`GET /getDigitalFilterTypeSupportList`

*Get list of supported digital filter types*

...

Returns: [ { "index": 1, "args": [ "amixer cset name='ES9018 DigiFilt' 0" ], "value": "Fast Roll-Off" }, { "index": 2, "args": [ "amixer cset name='ES9018 DigiFilt' 1" ], "value": "Slow Roll-Off" }, { "index": 3, "args": [ "amixer cset name='ES9018 DigiFilt' 2" ], "value": "Minimum Phase" } ]

> Example responses

> 200 Response

```json
{
  "digitalFilterTypes": [
    {
      "index": 1,
      "args": [
        "amixer cset name='ES9018 DigiFilt' 0"
      ],
      "value": "Fast Roll-Off"
    }
  ]
}
```

<h3 id="getdigitalfiltertypesupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getdigitalfiltertypesupportlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» digitalFilterTypes|[object]|false|none|List of supported digital filter types|
|»» index|integer|false|none|Index of the digital filter type|
|»» args|[string]|false|none|List of arguments to set this filter type|
|»» value|string|false|none|Name of the digital filter type|

<aside class="success">
This operation does not require authentication
</aside>

## getDigitalFilterType

<a id="opIdgetDigitalFilterType"></a>

`GET /getDigitalFilterType`

*Get current digital filter type*

...

Returns: 1, 2, or 3 corresponding to the supported digital filter types

> Example responses

> 200 Response

```json
1
```

<h3 id="getdigitalfiltertype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|integer|

<aside class="success">
This operation does not require authentication
</aside>

## getDigitalInputAudioTypeSupport

<a id="opIdgetDigitalInputAudioTypeSupport"></a>

`GET /getDigitalInputAudioTypeSupport`

*Get supported digital input audio types*

...

Returns: 0x1

> Example responses

> 200 Response

```json
"0x1"
```

<h3 id="getdigitalinputaudiotypesupport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getFeatureCapability

<a id="opIdgetFeatureCapability"></a>

`GET /getFeatureCapbility`

*Get feature capability*

...

<h3 id="getfeaturecapability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getHwErrorInfo

<a id="opIdgetHwErrorInfo"></a>

`GET /getHwErrorInfo`

*Get hardware error information*

...

Returns: { "ethError": 0, "mfiChipError": 0, "flashSpaceError": 0, "badBlockNum": 3, "totalBlockNum": 2000, "hdmiError": 0, "temperatureSensorError": 0, "ledError": 0, "soundCardHwError": { "es9018": 0, "pcm5121": 0 } }

> Example responses

> 200 Response

```json
{
  "ethError": 0,
  "mfiChipError": 0,
  "flashSpaceError": 0,
  "badBlockNum": 3,
  "totalBlockNum": 2000,
  "hdmiError": 0,
  "temperatureSensorError": 0,
  "ledError": 0,
  "soundCardHwError": {
    "es9018": 0,
    "pcm5121": 0
  }
}
```

<h3 id="gethwerrorinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="gethwerrorinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» ethError|integer|false|none|Ethernet error code|
|» mfiChipError|integer|false|none|MFi chip error code|
|» flashSpaceError|integer|false|none|Flash space error code|
|» badBlockNum|integer|false|none|Number of bad blocks in flash memory|
|» totalBlockNum|integer|false|none|Total number of blocks in flash memory|
|» hdmiError|integer|false|none|HDMI error code|
|» temperatureSensorError|integer|false|none|Temperature sensor error code|
|» ledError|integer|false|none|LED error code|
|» soundCardHwError|object|false|none|Sound card hardware error codes for different components|
|»» es9018|integer|false|none|ES9018 DAC error code|
|»» pcm5121|integer|false|none|PCM5121 DAC error code|

<aside class="success">
This operation does not require authentication
</aside>

## getInputModeSupportList

<a id="opIdgetInputModeSupportList"></a>

`GET /getInputModeSupportList`

*Get list of supported input modes*

...

<h3 id="getinputmodesupportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## getModeRename

<a id="opIdgetModeRename"></a>

`GET /getModeRename`

*Get input mode rename information*

...

Returns: {"Line-In" : "", "SPDIF-In" : "PC"}

> Example responses

> 200 Response

```json
{
  "Line-In": "",
  "SPDIF-In": "PC"
}
```

<h3 id="getmoderename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getmoderename-responseschema">Response Schema</h3>

Status Code **200**

*Mapping of input modes to their renamed values*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» **additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getMvRemoteUpdateDeviceOtaInfo

<a id="opIdgetMvRemoteUpdateDeviceOtaInfo"></a>

`GET /getMvRemoteUpdateDeviceOtaInfo`

*Get MV remote update device OTA information*

...

Returns: {"language":"en_us","projectId":"0fb639765679eb9a7cf7d68761e2d71b6a2d62ea47cc049db3c7df61d6816fc9","fwVersion":"Linkplay.5.0.739659","version":"1.0","macAddr":"E8:2D:29:7C:45:40","serialNumber":"","deviceUid":"FA98F353DDFE707499E52529","imgList":[{"imgName":"hdmi","imgVersion":"71"},{"imgName":"moduleMulti","imgVersion":"Linkplay.5.0.739659"},{"imgName":"gc4a_zip","imgVersion":"Linkplay.5.0.739659"}]}

> Example responses

> 200 Response

```json
{
  "language": "en_us",
  "projectId": "0fb639765679eb9a7cf7d68761e2d71b6a2d62ea47cc049db3c7df61d6816fc9",
  "fwVersion": "Linkplay.5.0.739659",
  "version": "1.0",
  "macAddr": "E8:2D:29:7C:45:40",
  "serialNumber": "",
  "deviceUid": "FA98F353DDFE707499E52529",
  "imgList": [
    {
      "imgName": "hdmi",
      "imgVersion": "71"
    }
  ]
}
```

<h3 id="getmvremoteupdatedeviceotainfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getmvremoteupdatedeviceotainfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» language|string|false|none|Device language|
|» projectId|string|false|none|Project identifier|
|» fwVersion|string|false|none|Firmware version|
|» version|string|false|none|Version|
|» macAddr|string|false|none|MAC address|
|» serialNumber|string|false|none|Serial number|
|» deviceUid|string|false|none|Device UID|
|» imgList|[object]|false|none|List of images|
|»» imgName|string|false|none|Image name|
|»» imgVersion|string|false|none|Image version|

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

<h2 id="tocS_DeviceDebugInfo">DeviceDebugInfo</h2>
<!-- backwards compatibility -->
<a id="schemadevicedebuginfo"></a>
<a id="schema_DeviceDebugInfo"></a>
<a id="tocSdevicedebuginfo"></a>
<a id="tocsdevicedebuginfo"></a>

```json
{
  "system_ready": "1",
  "slave_status": "0",
  "slave_playing": "0",
  "slave_num": "0",
  "slave_latency": "0",
  "slave_default_latency": "0",
  "connecting_type": "0",
  "play_mode": "31",
  "plm_notify_flag": "0",
  "play_status": "0",
  "bt_play_status": "1",
  "spotify_play_status": "1",
  "capture_play_status": "2",
  "time_sync_ready": "1",
  "asr_ongoing": "0",
  "asr_ready": "1",
  "asr_region": "en_us",
  "asr_language": "en_us",
  "asr_pause_request": "0",
  "alexa_response_status": "0",
  "pause_flag_for_alexa": "0",
  "priv_languages": "4588",
  "retail_mode": "0",
  "ezlink_active": "0",
  "device_status": "0",
  "a01controller_crash": "0",
  "asr_tts_crash": "0",
  "mcu_crash": "0",
  "process_deadlock": "0",
  "power_ticks": "119159062",
  "gapless": "0",
  "imuzop_pid": "1",
  "slave": "0",
  "upnp_action_total0": "57",
  "upnp_action_remain0": "0",
  "upnp_action_lost0": "0",
  "upnp_action_total1": "58",
  "upnp_action_remain1": "0",
  "upnp_action_lost1": "0",
  "upnp_action_total2": "58",
  "upnp_action_remain2": "0",
  "upnp_action_lost2": "0",
  "upnp_action_total3": "57",
  "upnp_action_remain3": "0",
  "upnp_action_lost3": "0",
  "wifi_abort_date": "",
  "smplay_skip_silence": "0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|system_ready|string|false|none|Indicates if the system is ready|
|slave_status|string|false|none|Indicates if the device is a slave in multiroom mode|
|slave_playing|string|false|none|Indicates if the slave device is currently playing audio in multiroom mode|
|slave_num|string|false|none|Number of slave devices in multiroom mode|
|slave_latency|string|false|none|Latency for slave devices in multiroom mode|
|slave_default_latency|string|false|none|Default latency for slave devices in multiroom mode|
|connecting_type|string|false|none|Indicates the type of connection for the device|
|play_mode|string|false|none|Current play mode of the device|
|plm_notify_flag|string|false|none|Indicates if there is a PLM notification|
|play_status|string|false|none|Current play status of the device|
|bt_play_status|string|false|none|Bluetooth play status|
|spotify_play_status|string|false|none|Spotify play status|
|capture_play_status|string|false|none|Capture play status|
|time_sync_ready|string|false|none|Indicates if time synchronization is ready|
|asr_ongoing|string|false|none|Indicates if ASR is ongoing|
|asr_ready|string|false|none|Indicates if ASR is ready|
|asr_region|string|false|none|ASR region setting|
|asr_language|string|false|none|ASR language setting|
|asr_pause_request|string|false|none|Indicates if there is a request to pause ASR|
|alexa_response_status|string|false|none|Status of the response from Alexa|
|pause_flag_for_alexa|string|false|none|Indicates if there is a pause flag for Alexa|
|priv_languages|string|false|none|Supported languages for private use, bit mask|
|retail_mode|string|false|none|Indicates if the device is in retail mode|
|ezlink_active|string|false|none|Indicates if EZLink is active|
|device_status|string|false|none|Device status|
|a01controller_crash|string|false|none|Indicates if there has been a crash in the A01 controller|
|asr_tts_crash|string|false|none|Indicates if there has been a crash in ASR or TTS|
|mcu_crash|string|false|none|Indicates if there has been a crash in the MCU|
|process_deadlock|string|false|none|Indicates if there has been a deadlock in any process|
|power_ticks|string|false|none|Number of power ticks|
|gapless|string|false|none|Indicates if gapless playback is enabled|
|imuzop_pid|string|false|none|PID for IMUZOP process|
|slave|string|false|none|Indicates if the device is a slave in multiroom mode|
|upnp_action_total0|string|false|none|Total UPnP actions for zone 0|
|upnp_action_remain0|string|false|none|Remaining UPnP actions for zone 0|
|upnp_action_lost0|string|false|none|Lost UPnP actions for zone 0|
|upnp_action_total1|string|false|none|Total UPnP actions for zone 1|
|upnp_action_remain1|string|false|none|Remaining UPnP actions for zone 1|
|upnp_action_lost1|string|false|none|Lost UPnP actions for zone 1|
|upnp_action_total2|string|false|none|Total UPnP actions for zone 2|
|upnp_action_remain2|string|false|none|Remaining UPnP actions for zone 2|
|upnp_action_lost2|string|false|none|Lost UPnP actions for zone 2|
|upnp_action_total3|string|false|none|Total UPnP actions for zone 3|
|upnp_action_remain3|string|false|none|Remaining UPnP actions for zone 3|
|upnp_action_lost3|string|false|none|Lost UPnP actions for zone 3|
|wifi_abort_date|string|false|none|Date of the last WiFi abort|
|smplay_skip_silence|string|false|none|Indicates if skip silence is enabled for SMPlay|

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

