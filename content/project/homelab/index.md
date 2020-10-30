---
title: Home Lab
summary: With two physical servers and other networking and storage devices, my home lab serves to be the centerpoint of home security, internet management, media consumption, and many other utilities.
tags:
- software
- hardware
date: "2018-12-05T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: 

image:
  caption: 
  focal_point: Smart
---

## Hardware

#### Network Hardware
- Firewall/Router [MikroTik Cloud Core Router CCR1009-7G-1C-1S+]
- 24 Port Managed Switch [Ubiquiti UniFi Switch US-24-250W]
- 8 Port PoE Managed Switch [Ubiquiti UniFi Switch US-8] 
- 2 x PoE Access Points [Ubiquiti UniFi AP UAP-AC-PRO-US]
- 2 x 5 Port Switch [Netgear GS105NA]
- Physical NAS [Synology DS713+] {8 Tb, BTRFS, RAID-0}
- TV Tuner [HDHomeRun Prime]

#### Server Hardware: Bare metal Hypervisors running VMWare ESXi
{{< row >}}
{{< column >}}
- Server 1
	- Motherboard: Supermicro X10SRI-F-O
	- CPU: Intel 8 Core Xeon E5-2620 v4 @ 2.40GHz
	- RAM: 32 GB DDR4
	- NIC: Intel Quad Server Adapter I340-T4
		- Two uplink ports aggregated with LACP/802.1AX
	- GPU: EVGA GeForce GTX 1070 Ti FTW2
	- NVMe: 1 TB Samsung 970 EVO Plus
	- SSD: 500 GB Samsung 850 PRO (Cache)
	- HDD:
		- 2 x 5 TB Seagate BarraCuda ST5000DM000
		- 2 x 10 TB Seagate BarraCuda Pro
		- 1 x 10 TB Seagate Exos Enterprise
	- PSU: Corsair 850 Watt 80+ Gold Modular
	- CPU Cooler: Corsair H100i v2 AIO Liquid CPU Cooler
{{< /column >}}
{{< column >}}
- Server 2
	- Motherboard: Supermicro X10SRI-F-O
	- CPU: Intel 8 Core Xeon E5-2630 v3 @ 2.40GHz
	- RAM: 48 GB DDR4
	- NIC: Intel Quad Server Adapter I340-T4
		- Two uplink ports aggregated with LACP/802.1AX
	- GPU: EVGA GeForce GTX 760
	- NVMe: 500 GB Samsung 970 EVO Plus
	- SSD: 250 GB Samsung 860 EVO (Cache)
	- HDD:
		- 2 x 10 TB Seagate Exos Enterprise
		- 1 x 10 TB Seagate BarraCuda Pro
	- PSU: EVGA 80+ White 500W
	- CPU Cooler: Corsair H100i v2 AIO Liquid CPU Cooler
{{< /column >}}
{{< /row >}}

#### Miscellaneous Hardware
- UPS [CyberPower CP1500PFCLCD]


## Software

#### Network Configuration
- VLAN 0: VM communication and UniFi Management Network [10.25.7.0/24]
	- Assigned addresses
- VLAN 10: Home Users WiFi and Wired Devices [10.12.28.0/24]
	- DHCP
- VLAN 20: Guest WiFi [10.8.8.0/24]
 	- Captive portal
	- Firewall-based client isolation
	- DHCP
	- Short leases
	
#### Server Configuration & Docker Applications
{{< row >}}
{{< column >}}
- Server 1
	- Music VM [Alpine Linux]
		- Airsonic
		- Mopidy
		- Snapcast Snapserver
	- Webserver VM [Alpine Linux]
		- NGINX
		- Certbot
		- Fail2ban
	- Network Utilities VM [Alpine Linux]
		- OpenVPN
		- Unifi Controller
		- PiHole
	- Docker VM #2 [Alpine Linux]
		- FreshRSS
		- Syncthing
		- Pyload
		- Jupyter Datascience Notebook
		- Grocy
		- Transmission
		- Portainer
		- Jackett
		- Ubooquity
		- Calibre Web
	- Docker VM #3 [Alpine Linux]
		- Jitsi Stack
		- Nextcloud w/ MariaDB
		- Guacamole w/ MariaDB
	- Surveillance VM [Alpine Linux]
		- Shinobi CCTV
	- Storage VM [FreeNAS]
		- RAID-Z1: 10Tb Drives
		- RAID-Z0 Striped: 5Tb Drives
	- Personal Computer VM [Windows 10 Pro]
{{< /column >}}
{{< column >}}
- Server 2
	- Docker VM #1 [Alpine Linux]
		- Sonarr
		- Radarr
		- Lidarr
		- NZBGet
		- NZBHydra
		- Tautulli
		- PiHole
	- Plex VM [Alpine Linux]
		- Plex
	- Machine Learning VM [Ubuntu Server]
		- *GPU Passthrough*
		- TensorFlow Jupyter Notebook
		- WireGuard [Upcoming]
	- Storage VM [FreeNAS]
		- RAID-Z1: 10Tb Drives
	- Windows Server VM [Windows Server 2016]

&nbsp;

Cron jobs on every VM rsync configurations to the redundant datastore on server 1's storage server every night. Snapshots are made three times a week and replicated on server 2's storage server (also redundant).
{{< /column >}}
{{< /row >}}
