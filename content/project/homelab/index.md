---
title: Home Lab
summary: With two physical servers and other networking and storage devices, my home lab serves to be the centerpoint of home security, internet management, media consumption, and many other utilities.
tags:
- medicine
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
- Physical NAS [Synology DS713+] {8 Tb, BTRFS, RAID0}
- TV Tuner [HDHomeRun Prime]

#### Server Hardware
- {{< details "Server 1 - Bare metal Hypervisor: VMWare ESXi [expand for details]" >}}
- Motherboard: Supermicro X10SRI-F-O
- CPU: Intel 8 Core Xeon E5-2620 v4 @ 2.40GHz
- RAM: 32 GB
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
{{< /details >}}

- {{< details "Server 2 - Bare metal Hypervisor: VMWare ESXi [expand for details]" >}}
- Motherboard: Supermicro X10SRI-F-O
- CPU: Intel 8 Core Xeon E5-2630 v3 @ 2.40GHz
- RAM: 48 GB
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
{{< /details >}}

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
	
#### Server Configuration
- Server 1
	- Music VM [Alpine Linux]
	- Webserver VM [Alpine Linux]
	- Network Utilities VM [Alpine Linux]
	- Docker VM #2 [Alpine Linux]
	- Docker VM #3 [Alpine Linux]
	- Surveillance VM [Alpine Linux]
	- Storage VM [FreeNAS]
	- Personal Computer VM [Windows 10 Pro]

- Server 2
	- Docker VM #1 [Alpine Linux]
	- Plex VM [Alpine Linux]
	- Machine Learning VM [Ubuntu Server]
	- Storage VM [FreeNAS]
	- Windows Server VM [Windows Server 2016]
	- Webserver VM [Alpine Linux]


