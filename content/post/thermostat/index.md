---
title: 'Fixing a faulty AC unit with Go and a temperature sensor'
subtitle: 'In this project, I use a Pi to poll a temperature sensor near the bed. Home Assistant accesses the data through webhooks and then automatically controls my window AC unit through my universal remote. This optimizes temperature near my bed instead of temperature near the AC unit.'
summary: In this project, I use a Pi to poll a temperature sensor near the bed. Home Assistant accesses the data through webhooks and then automatically controls my window AC unit through my universal remote. This optimizes temperature near my bed instead of temperature near the AC unit.
authors:
tags:
- software
- hardware
categories: []
date: "2020-08-22T00:00:00Z"
lastmod: "2020-08-23T00:00:00Z"
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  caption: ''
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

# Set captions for image gallery.
---

{{< figuresimp src="ac.jpg" alt="AC Unit" position="right" style="float: right;width: 25%;padding: 0px; min-width: 200px; " >}}

I have a Frigidaire FFRE1233Q1 -- a 12,000 BTU window mounted AC unit. It's quite powerful and, as someone who dislikes warm temperatures, is indispensable in the summer months. It cools the room quickly, de-humidifies the air, and has an air filter. It is great but for one quirk. When I bought it many years ago, there were a few overwhelmingly positive comments. After a couple of years, many reviews made it was clear other people were having the same issue.

> The reason I rated this unit three stars is because when we use it on Auto or Eco mode it often comes on for less than a minute before shutting off again. This is while NOT using the remote sensing function. I thought maybe it was due to a thermostat being in the remote but found it does the same thing even with the remote nowhere near the unit.
>
> Confession, we've not actually read through the user manual, lol...
>
> :writing_hand: Amazon Review by MariamG on Aug 27, 2015

However basic, the AC unit is unable to maintain a temperature. 
Per the user manual, whether the AC unit is on Cool or Eco mode, it turns on the compressor until the set temperature is reached and then switches to either fan or off.
Very inconveniently, I would often have to manually control the power of the AC unit -- waking up at night when the temperature was either too hot or cold to toggle power.

{{< figuresimp src="harmonyhub.jpg" alt="Harmony Hub" position="left" style="float: left;width: 25%;padding-right:2%; min-width: 200px; " >}}
IR remotes for the TV, soundbar, AC unit, space heater, and humidifier had long been replaced by a Harmony Hub universal remote.
Combined with the Home Assistant [Harmony Integration](https://www.home-assistant.io/integrations/harmony/), activation of webhooks (deployed by the Home Assistant instance) trigger scripts on the instance.
While doing work, I can use keyboard shortcuts to curl specific webhooks and activate scripts that would power on the AC or turn on the [lights](https://www.home-assistant.io/integrations/tuya/).

Instead of sending remote button presses to the AC unit manually overnight, I wanted Home Assistant to send button presses automatically.
For this to happen, Home Assistant would need temperature information to drive logic that would control when the AC power is toggled.
It also needed information about the state of the AC unit (whether is it on of off).
This state information is already provided to Home Assistant via the Harmony API.

{{< figuresimp src="prototype_b.jpg" alt="Prototype Board" position="right" style="float: right;width: 23%;padding-left:1%; min-width: 200px; " >}}
Since I had a Raspberry Pi handy, I used that as the controller but this circuit could just as easily have been driven by a WiFi-enabled Arduino.
Temperature information is obtained by a [DS18B20](https://www.adafruit.com/product/381) and relayed to the Pi with the 1-Wire protocol.
A simple prototype board adapts the wires of the DS18B20 and also contains a LED and resistor that can be driven by a 3.3V digital signal.
I wrote a Go program (compiled for the Pi) that reads information from the temperature sensor and also drives the LED with the Raspberry Pi's GPIO when the program is active.

A Home Assistant [command line sensor](https://www.home-assistant.io/integrations/sensor.command_line/) remotely executes the Go-based temperature reading program every 20 seconds. 
This was initially done through the Pi's in-built SSH server, but was inconvenient since the SSH server needed to be trusted whenever the Home Assistant Docker Image was updated (which was happening every week in July!).
I then transitioned to the versatile and light-weight [webhook](https://github.com/adnanh/webhook) server to remotely execute the temperature reading program.
The server was daemonized with systemd and configured for use with the temp-reader program.

{{< figuresimptwo  src="off.jpg" src2="on.jpg" style="max-height: 300px ; padding:20px ; width: auto; height: auto;" position="center" caption="The LED activates when the temperature is sensed." captionStyle="text-align: center;" >}}

{{< figuresimp src="dashboard.png" alt="Home Assistant Dashboard" style="float: right;width: 40%;padding-left:2%; min-width: 370px; " >}}
The Pi with the temperature sensor can be placed anywhere to control the temperature in that specific location.
I placed it next to my bed.
The LED used was very bright -- so bright that it would light up a corner of the room at night and make it difficult to fall asleep.
So I modified the temp-reader program to read a binary file in the same directory as the reader program.
If the file has a 1, the LED activates during program operation, and if 0 then it's off.
If more configurable options present themselves, I'll create a more sophisticated configuration file in the future.
I also wrote simple bash scripts to control the value of this file -- scripts that can also be called with webhooks through Home Assistant's [shell commands](https://www.home-assistant.io/integrations/shell_command/).

Put together, the Home Assistant instance reads the temperature every 20 seconds. If the temperature is higher than a threshold, it turns on the AC. When the temperature falls below a threshold, it turns off the AC. When the TV is on, it doesn't control the temperature since the noise of the AC can interfere with sounds from the TV. When day the day starts, Home Assistant writes a "1" to the led-controlling binary file and when night starts, it writes a "0". All these options can be easily controlled from a custom created dashboard in the Home Assistant (on the right).

{{< figuresimp src="schematic.png" alt="Information Flow" style="float: left;width: 48%;padding-right:2%; min-width: 370px; " >}}
Logic on whether to turn on the AC runs every 20 seconds and is evaluated with Home Assistant [templating](https://www.home-assistant.io/docs/configuration/templating/), in turn driven by the [Jinja2](https://palletsprojects.com/p/jinja/) templating engine. Templates are stored in Home Assistant YAML configuration files.
These configuration files along with Go code, bash scripts, webhook configuration, and service files to daemonize the webhook server can be found in the [Github repo](https://github.com/vishhvaan/thermostat) for this project. 

Modifying the Home Assitant [automations](https://www.home-assistant.io/integrations/automation/) to work with the space heater instead of the AC unit is very straight-forward and I will upload these YAMLs to the repo as examples. Here are a few graphs of thermostat functionality:

{{< figure src="home_temp.png" alt="Normal Operation" position="right" width="100%">}}
{{< figure src="activity.png" alt="Normal Operation" position="right" caption="Operation during the day." width="100%">}}
{{< figure src="night_temps.png" alt="Night Operation" position="right" width="100%">}}
{{< figure src="activity2.png" alt="Night Operation" position="right" caption="Night operation transitioning to the day (I manually switched off the AC at 5:50am)." width="100%">}}
{{< figure src="cooking.png" alt="Temps when cooking" position="right" caption="The AC struggles to cool when I'm cooking." width="100%">}}

