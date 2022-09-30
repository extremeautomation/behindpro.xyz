---
category: HTTP Tools
title: Wget
description: GNU Wget is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.
keywords: wget, proxy
date: 2022-01-01
---

## Configuration

GNU Wget is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.

There are several ways to route Wget traffic through a proxy.

If you need only single time solution then the easiest way is to pass environment variable in the command line executing Wget:

```bash
https_proxy=username:password@proxy_host:proxy_port wget -qO - https://behindpro.xyz/testfile | figlet
```

Remember to change environment variable from `https_proxy` to `http_proxy` if you are downloading file over HTTP protocol:

```bash
http_proxy=username:password@proxy_host:proxy_port wget -qO - http://behindpro.xyz/testfile | figlet
```

But if you are using Wget through proxy on the ongoing basis it is more convenient to add some lines to Wget configuration file located at `/etc/wgetrc` (or `~/.wgetrc`):

```ini
use_proxy=on
http_proxy=proxy_host:proxy_port
https_proxy=proxy_host:proxy_port
```
