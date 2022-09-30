---
category: HTTP Tools
title: Curl
description: Curl is a tool for transferring data from or to a server.
keywords: Curl, Proxy
date: 2022-01-01
---
# What is Curl

Curl is a tool for transferring data from or to a server. It supports dozens of Internet protocols among them are: HTTP, HTTPS, FTP, FTPS, SFTP, SCP and SMB. Curl has support for HTTP and HTTPS proxies getting HTTP links. But for other protocols usually SOCKS4 or SOCKS5 proxies are used.

# Configuration

The simpliest way to route Curl traffic through proxy is to add command line option `-x` to set up proxy location and protocol, and to add command line option `-U` for proxies that need authorisation in format:

```bash
curl -x "[protocol://]host[:port]" -U "login:password" -s https://behindpro.xyz/testfile | figlet
```

Curl supports protocols: `https://` or `http://` for HTTP resources and `socks4://` or `socks5://` schemes for all type of resources.
