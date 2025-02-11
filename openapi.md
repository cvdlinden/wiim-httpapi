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

Retrieves detailed informations about a connected device.
The documented output may or may not be complete or differ from what the device actually reports.

> Example responses

> 200 Response

```
{"language":"string","ssid":"string","hideSSID":"string","SSIDStrategy":"string","branch":"string","firmware":"string","build":"string","project":"string","priv_prj":"string","project_build_name":"string","Release":"string","FW_Release_version":"string","PCB_version":"string","cast_enable":0,"cast_usage_report":0,"group":"string","master_uuid":"string","slave_mask":"string","wmrm_version":"string","wmrm_sub_ver":"string","expired":"string","internet":"string","uuid":"string","MAC":"string","STA_MAC":"string","BT_MAC":"string","AP_MAC":"string","ETH_MAC":"string","InitialConfiguration":"string","temperature_power_control":"string","temperature_cpu":"string","temperature_tmp102":"string","CountryCode":"string","CountryRegion":"string","date":"string","time":"string","tz":"string","dst_enable":"string","netstat":"string","essid":"string","apcli0":"string","eth0":"string","eth2":"string","eth_dhcp":"string","eth_static_ip":"string","eth_static_mask":"string","eth_static_gateway":"string","eth_static_dns1":"string","eth_static_dns2":"string","hardware":"string","VersionUpdate":"string","NewVer":"string","mcu_ver":"string","mcu_ver_new":"string","hdmi_ver":"string","hdmi_ver_new":"string","update_check_count":"string","BleRemote_update_checked_counter":"string","ra0":"string","temp_uuid":"string","cap1":"string","capability":"string","languages":"string","prompt_status":"string","iot_ver":"string","alexa_ver":"string","alexa_beta_enable":"string","alexa_force_beta_cfg":"string","dsp_ver":"string","dsp_ver_new":"string","ModuleColorNumber":"string","ModuleColorString":"string","uboot_verinfo":"string","streams_all":"string","streams":"string","region":"string","volume_control":"string","external":"string","preset_key":"string","spotify_active":"string","plm_support":"string","mqtt_support":"string","lbc_support":"string","WifiChannel":"string","RSSI":"string","BSSID":"string","wlanSnr":"string","wlanNoise":"string","wlanFreq":"string","wlanDataRate":"string","battery":"string","battery_percent":"string","securemode":"string","auth":"string","encry":"string","ota_interface_ver":"string","ota_api_ver":"string","upnp_version":"string","upnp_uuid":"string","uart_pass_port":"string","communication_port":"string","web_firmware_update_hide":"string","ignore_talkstart":"string","silence_ota_flag":"string","silenceOTATime":"string","ignore_silenceOTATime":"string","new_tunein_preset_and_alarm":"string","iheartradio_new":"string","new_iheart_podcast":"string","tidal_version":"string","service_version":"string","EQ_support":"string","EQVersion":"string","HiFiSRC_version":"string","audio_channel_config":"string","app_timezone_id":"string","avs_timezone_id":"string","tz_info_ver":"string","max_volume":"string","power_mode":"string","security":"string","security_version":"string","security_capabilities":{},"public_https_version":"string","BleRemoteControl":"string","BleRemoteConnected":"string","BleRemoteException":"string","udisk":"string","umount":"string","autoSenseVersion":"string","set_play_mode_enable":"string","set_play_mode_gain":"string","audioOutputModeVer":"string","privacy_mode":"string","DeviceName":"string","GroupName":"string"}
```

<h3 id="getstatusex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getstatusex-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» language|string|false|none|The device language|
|» ssid|string|false|none|Name of the device. Device's own SSID when in WiFi pairing mode or when device's WiFi hotspot is active|
|» hideSSID|string|false|none|When the device is operating as a WiFi hotspot, this flag determines whether its SSID should be hidden or visible 0: ssid is visible 1: ssid is hidden|
|» SSIDStrategy|string|false|none|none|
|» branch|string|false|none|Code branch|
|» firmware|string|false|none|Current firmware version|
|» build|string|false|none|Possible values: release, debug, backup release: this is a release version debug: this is a debug version backup: this is a backup version|
|» project|string|false|none|The project name|
|» priv_prj|string|false|none|Project name which would stand for a specific board|
|» project_build_name|string|false|none|Code identifier for customized release|
|» Release|string|false|none|Firmware build date Format: YYYYMMDD|
|» FW_Release_version|string|false|none|Reserved|
|» PCB_version|string|false|none|PCB version/revision|
|» cast_enable|integer|false|none|Flag for casting feature 0: casting is disabled 1: casting is enabled|
|» cast_usage_report|integer|false|none|Reserved|
|» group|string|false|none|0 means it's a master speaker or standalone,  1 means a slave speaker in group|
|» master_uuid|string|false|none|Exist when working in slave mode, showing the UUID of master device.|
|» slave_mask|string|false|none|Exist when working in slave mode, showing if the device support mask feature. 0 means not supported.|
|» wmrm_version|string|false|none|LinkPlay's MRM SDK version, Multiroom library version, version 4.2 or above won't work with any version below 4.2|
|» wmrm_sub_ver|string|false|none|Multiroom library sub version|
|» expired|string|false|none|Reserved|
|» internet|string|false|none|Current status of internet access: 0: not ready 1: ready|
|» uuid|string|false|none|The unique ID of the device (will remain after device reboot)|
|» MAC|string|false|none|MAC address of the device when working in hotspot mode, will show on APP and also the sticker on module/device.|
|» STA_MAC|string|false|none|MAC address of the device when working in station mode|
|» BT_MAC|string|false|none|The BT MAC address of the device|
|» AP_MAC|string|false|none|The MAC address of the AP that the device is connected to|
|» ETH_MAC|string|false|none|The MAC address of the device when it's connected to ethernet|
|» InitialConfiguration|string|false|none|Flag for initial configuration 0: not configured 1: configured|
|» temperature_power_control|string|false|none|Reserved|
|» temperature_cpu|string|false|none|Reserved|
|» temperature_tmp102|string|false|none|Reserved|
|» CountryCode|string|false|none|The country code|
|» CountryRegion|string|false|none|The country region|
|» date|string|false|none|Current Date|
|» time|string|false|none|Current local time|
|» tz|string|false|none|Timezone offset|
|» dst_enable|string|false|none|Daylight saving time enable|
|» netstat|string|false|none|Current WiFi status: 0: no network 1: connected to the internet 2: connected to the local network|
|» essid|string|false|none|SSID of the WiFi the device is connected to in HEX format|
|» apcli0|string|false|none|The IP v4 address of the device over WiFi|
|» eth0|string|false|none|Device's IP address when it's connected to ethernet|
|» eth2|string|false|none|Device's IP address when it's connected to ethernet|
|» eth_dhcp|string|false|none|Flag for DHCP or Static IP Address 0: Static IP 1: IP Address provided by LAN/WLAN DHCP Server|
|» eth_static_ip|string|false|none|Device's Static IP address (If eth_dhcp=0)|
|» eth_static_mask|string|false|none|Device's Network Mask (If eth_dhcp=0)|
|» eth_static_gateway|string|false|none|Device's IP Gateway (If eth_dhcp=0)|
|» eth_static_dns1|string|false|none|Device's Primary DNS Server (If eth_dhcp=0)|
|» eth_static_dns2|string|false|none|Device's Secondary DNS Server (If eth_dhcp=0)|
|» hardware|string|false|none|Hardware model|
|» VersionUpdate|string|false|none|Flag that determines, if there is a new firmware version available or not. 0: no new firmware 1: new firmware available|
|» NewVer|string|false|none|If there is a new firmware available (in case of VersionUpdate is set to 1), this is the new version number|
|» mcu_ver|string|false|none|Version of MCU on base board|
|» mcu_ver_new|string|false|none|New version of MCU on base board, indicates if there is a newer version of MCU available 0 - No new version others - New version|
|» hdmi_ver|string|false|none|HDMI version|
|» hdmi_ver_new|string|false|none|New HDMI version|
|» update_check_count|string|false|none|none|
|» BleRemote_update_checked_counter|string|false|none|none|
|» ra0|string|false|none|WiFi AP IP address, normally it is 10.10.10.254|
|» temp_uuid|string|false|none|Temporary UUID (will change after device reboot)|
|» cap1|string|false|none|Bit mask for the module feature, used internally|
|» capability|string|false|none|Bit mask for the module feature, used internally|
|» languages|string|false|none|Supported languages, bit mask|
|» prompt_status|string|false|none|Indicates if the prompting voice would be played or not, you can set with command PromptEnable and PromptDisable. 0 - No prompting voice 1 - Have prompting voice|
|» iot_ver|string|false|none|IOT library version, not used|
|» alexa_ver|string|false|none|none|
|» alexa_beta_enable|string|false|none|none|
|» alexa_force_beta_cfg|string|false|none|none|
|» dsp_ver|string|false|none|Version for voice processing, not used|
|» dsp_ver_new|string|false|none|New version for voice processing, not used|
|» ModuleColorNumber|string|false|none|Reserved|
|» ModuleColorString|string|false|none|Reserved|
|» uboot_verinfo|string|false|none|Uboot version|
|» streams_all|string|false|none|Reserved|
|» streams|string|false|none|This is a bit mask: 0: If Airplay is enabled 1: If DLNA is enabled 2: Has TTPod support 3: Has TuneIn support 4: Has Pandora support 5: Has DoubanFM support|
|» region|string|false|none|Reserved|
|» volume_control|string|false|none|none|
|» external|string|false|none|Reserved (hex value)|
|» preset_key|string|false|none|Amount of preset keys available|
|» spotify_active|string|false|none|Spotify status 0: Spotify is not playing 1: Spotify is playing|
|» plm_support|string|false|none|This is a bit mask, each bit stands for an external input source: bit1: LineIn (Aux support) bit2: Bluetooth support bit3: USB support bit4: Optical support bit6: Coaxial support bit8: LineIn 2 support bit15: USBDAC support Others are reserved or not used.|
|» mqtt_support|string|false|none|Reserved|
|» lbc_support|string|false|none|Reserved|
|» WifiChannel|string|false|none|The current connected WiFi channel|
|» RSSI|string|false|none|RSSI Level of used WiFi Value ranges from 0 - 100. 100 means best signal strength.|
|» BSSID|string|false|none|The Basic Service Set Identifiers:  In most cases this will be the MAC Address of the Wireless Acces Point Used (e.g. Router)|
|» wlanSnr|string|false|none|Signal to Noise Ratio of the WiFi connection|
|» wlanNoise|string|false|none|Noise level of the WiFi connection|
|» wlanFreq|string|false|none|none|
|» wlanDataRate|string|false|none|none|
|» battery|string|false|none|Battery status 0: battery is not charging 1: battery is charging|
|» battery_percent|string|false|none|Battery charge level Value ranges from 0 - 100|
|» securemode|string|false|none|Reserved|
|» auth|string|false|none|Type of WiFi Protected Access used (Authentication Key).|
|» encry|string|false|none|Type of encryption used for the WiFi connection.|
|» ota_interface_ver|string|false|none|none|
|» ota_api_ver|string|false|none|none|
|» upnp_version|string|false|none|UPnP Device Architecture Version|
|» upnp_uuid|string|false|none|UPnP UUID|
|» uart_pass_port|string|false|none|Port used for TCP/IP Communcations/Socket Connections|
|» communication_port|string|false|none|TCP port for internal messages|
|» web_firmware_update_hide|string|false|none|none|
|» ignore_talkstart|string|false|none|none|
|» silence_ota_flag|string|false|none|none|
|» silenceOTATime|string|false|none|none|
|» ignore_silenceOTATime|string|false|none|none|
|» new_tunein_preset_and_alarm|string|false|none|none|
|» iheartradio_new|string|false|none|none|
|» new_iheart_podcast|string|false|none|none|
|» tidal_version|string|false|none|TIDAL API version|
|» service_version|string|false|none|none|
|» EQ_support|string|false|none|none|
|» EQVersion|string|false|none|none|
|» HiFiSRC_version|string|false|none|none|
|» audio_channel_config|string|false|none|none|
|» app_timezone_id|string|false|none|Timezone ID|
|» avs_timezone_id|string|false|none|Timezone ID for Alexa|
|» tz_info_ver|string|false|none|none|
|» max_volume|string|false|none|Maximum volume level (normally 100)|
|» power_mode|string|false|none|none|
|» security|string|false|none|HTTPS API version|
|» security_version|string|false|none|HTTPS API security version|
|» security_capabilities|object|false|none|HTTPS API security capabilities|
|» public_https_version|string|false|none|HTTPS API public version|
|» BleRemoteControl|string|false|none|none|
|» BleRemoteConnected|string|false|none|none|
|» BleRemoteException|string|false|none|none|
|» udisk|string|false|none|USB disk status 0: no USB disk 1: USB disk is connected|
|» umount|string|false|none|Reserved|
|» autoSenseVersion|string|false|none|none|
|» set_play_mode_enable|string|false|none|none|
|» set_play_mode_gain|string|false|none|none|
|» audioOutputModeVer|string|false|none|none|
|» privacy_mode|string|false|none|none|
|» DeviceName|string|false|none|The device UPnP and Airplay friendly name|
|» GroupName|string|false|none|The group name of the device that it belongs to|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="linkplay-wiim-arylic-http-api-network">Network</h1>

Get the network status

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
{"type":"string","ch":"string","mode":"string","loop":"string","eq":"string","vendor":"string","status":"PLAYING","curpos":"string","offset_pts":"string","totlen":"string","Title":"string","Artist":"string","Album":"string","alarmflag":"string","plicount":"string","plicurr":"string","vol":"string","mute":"string"}
```

<h3 id="getplayerstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|Inline|

<h3 id="getplayerstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» type|string|false|none|0: Main or standalone device 1: Device is a Multiroom Guest|
|» ch|string|false|none|Active channel(s) 0: Stereo 1: Left 2: Right|
|» mode|string|false|none|0: None 1: AirPlay or AirPlay 2 2: DLNA streaming 10: Playing network content, e.g. vTuner, Home Media Share, Amazon Music, Deezer, etc 11: playing UDISK (Local USB disk on device) 16: TF card playlist 20: playback start by HTTPAPI 31: Spotify Connect 32: TIDAL Connect 40: AUX-In/Line-In input mode 41: Bluetooth input mode 42: External storage 43: Optical-In input mode 47: Line-In #2 input mode 50: Mirror 51: USBDAC input mode 60: Voice mail 99: The Device is a Guest in a Multiroom Zone|
|» loop|string|false|none|Is a Combination of SHUFFLE and REPEAT modes 0: SHUFFLE: disabled REPEAT: enabled - loop 1: SHUFFLE: disabled REPEAT: enabled - loop once 2: SHUFFLE: enabled REPEAT: enabled - loop 3: SHUFFLE: enabled REPEAT: disabled 4: SHUFFLE: disabled REPEAT: disabled 5: SHUFFLE: enabled REPEAT: enabled - loop once|
|» eq|string|false|none|The preset number of the Equalizer|
|» vendor|string|false|none|Name of the stream source|
|» status|string|false|none|Playback status stop: no audio selected play: playing audio load/loading: loading/buffering audio pause: audio paused|
|» curpos|string|false|none|Current position, in ms|
|» offset_pts|string|false|none|Offset position, in ms|
|» totlen|string|false|none|Track duration in ms. Zero when playing a live stream.|
|» Title|string|false|none|hexed string of the track title|
|» Artist|string|false|none|hexed string of the artist|
|» Album|string|false|none|hexed string of the album|
|» alarmflag|string|false|none|none|
|» plicount|string|false|none|The total number of tracks in the playlist|
|» plicurr|string|false|none|Current track index|
|» vol|string|false|none|Current volume Value range is from 0 - 100. So can be considered a linear percentage (0% to 100%) of the volume.|
|» mute|string|false|none|Current mute state 0: Not muted 1: Muted|

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

YYYY is year (such as 2015), MM is month (01~12), DD is day (01~31), HH is hour (00~23),
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
3 every week, day should be 2 bytes (00”~“06”), means from Sunday to Saturday.
4 every week, day should be 2 bytes, the bit 0 to bit 6 means the effect, for example,
“7F” means every day in week, “01” means only Sunday
5 every month, day should be 2 bytes (“01”~“31”)

op: the action
0 shell execute
1 playback or ring
2 stop playback
time: should be HHMMSS, in UTC

day:
if trigger is 0 or 2, no need to set.
if trigger is 1, should be YYYYMMDD ( %04d%02d%02d)
if trigger is 3, day should be 2 bytes (“00”~“06”), means from Sunday to Saturday.
if trigger is 4, day should be 2 bytes, the bit 0 to bit 6 means the effect, for example,
“7F” means every day in week, “01” means only Sunday
if trigger is 5, day should be 2 bytes (“01”~“31”)

url: the shell path or playback url, should less than 256 bytes

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
1 once, day should be YYYYMMDD
2 every day
3 every week, day should be 2 bytes (00”~“06”), means from Sunday to Saturday.
4 every week, day should be 2 bytes, the bit 0 to bit 6 means the effect, for example,
“7F” means every day in week, “01” means only Sunday
5 every month, day should be 2 bytes (“01”~“31”)

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

> Example responses

> 200 Response

```
null
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

<h1 id="linkplay-wiim-arylic-http-api-source-input-switch">Source Input Switch</h1>

Switch between inputs

## setPlayerCmdSwitchMode

<a id="opIdsetPlayerCmdSwitchMode"></a>

`GET /setPlayerCmd:switchmode:{mode}`

*Switch the source input*

http://10.10.10.254/httpapi.asp?command=setPlayerCmd:switchmode:%s

the mode can be the text as below:
line-in (it refers to aux-in too)
bluetooth
optical
udisk
wifi

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

<h1 id="linkplay-wiim-arylic-http-api-presets">Presets</h1>

Manage presets

The WiiM Home App allows users to configure 12 presets for quick access to preferred radio
stations, playlists, mixes, albums, or artists. Each preset is accessible through its assigned
number.

## getMCUKeyShortClick

<a id="opIdgetMCUKeyShortClick"></a>

`GET /MCUKeyShortClick:{n}`

*Play preset with preset number*

http://10.10.10.254/httpapi.asp?command=MCUKeyShortClick:%d

%d: Range is from 1 to 12

<h3 id="getmcukeyshortclick-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|n|path|string|true|Preset number|

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

<h3 id="getmcukeyshortclick-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

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
"preset_list": [{
"number": 1,
"name": "BBC Radio Norfolk",
"url": "http:\/\/as-hls-wwlive.akamaized.net\/pool_904\/live\/ww\/bbc_radio_norfolk\/bbc_radio_norfolk.isml\/bbc_ra
dio_norfolk-audio%3d96000.norewind.m3u8",
"source": "Linkplay Radio",
"picurl": "http:\/\/cdnprofiles.tunein.com\/s6852\/images\/logoq.jpg?t=638353933090000000"
}, {
"number": 6,
"name": "Radio Paradise",
"url": "http:\/\/stream.radioparadise.com\/flacm",
"source": "RadioParadise",
"picurl": "https:\/\/cdnprofiles.tunein.com\/s13606\/images\/logod.png?t=637541039930000000"
}, {
"number": 8,
"name": "1. Country Heat",
"url": "unknow",
"source": "Prime",
"picurl": "https:\/\/m.media-amazon.com\/images\/I\/51uR6AJUAQL.jpg"
}]
}

Description
Field type Description
name string Playlist name
Version 1.2
Field type Description
number int Preset index (Start from 1)
picurl string Cover picture url
preset_list json array Preset list information
preset_num int Total number of presets
source string Music source
url string Play url

<h3 id="getpresetinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Default response|None|

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

