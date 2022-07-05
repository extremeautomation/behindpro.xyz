---
category: Programming Languages
title: Java Configuration Tool
description: Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client–server web applications, with a reported 9 million developers.
keywords: Windows, Linux, MacOS
date: 2022-05-21
---

# CONFIGURATION

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum habitasse ullamcorper pulvinar nam aenean sed elit morbi nunc. Sit at mauris eget nisl nibh. Vitae sapien sit dictum at turpis laoreet. Lobortis sagittis a laoreet quam.

```
import (
"io/ioutil"
"log"
"net/http"
"net/url"
)
```

Dolor sit amet, consectetur adipiscing elit. Facilisis cursus nibh neque tincidunt a arcu morbi. Hendrerit leo ullamcorper dui interdum ornare lectus. Nulla placerat facilisis vel nisl in tortor. Vel turpis nulla donec augue risus turpis turpis.

# EXAMPLE 1

Consectetur adipiscing elit. In ultricies molestie.

```
func main() {

//creating the proxyURL
proxyStr := "http://localhost:7000"
proxyURL, err := url.Parse(proxyStr)
if err != nil {
log.Println(err)
}

//creating the URL to be loaded through the proxy
urlStr := "http://httpbin.org/get"
url, err := url.Parse(urlStr)
if err != nil {
log.Println(err)
}
```

Eu viverra dolor eget cursus tortor. Id eros fermentum, amet eros, quisque. Ut vitae mauris proin blandit viverra.

# EXAMPLE 2

Blandit cursus ornare cursus mauris ipsum malesuada consectetur est. Tincidunt nulla nunc tellus ultricies pharetra turpis pellentesque pellentesque leo. Amet tellus tincidunt purus malesuada volutpat, pretium. Eget urna lacinia donec porttitor fermentum sed volutpat. Tellus nullam neque, amet ultrices. Enim sagittis libero eu nisi. Duis justo lectus maecenas ornare risus sit sem. Mi sagittis amet sollicitudin sed amet.

```
//adding the proxy settings to the Transport object
transport := &http.Transport{
Proxy: http.ProxyURL(proxyURL),
}

//adding the Transport object to the http Client
client := &http.Client{
Transport: transport,
}

//generating the HTTP GET request
request, err := http.NewRequest("GET", url.String(), nil)
if err != nil {
log.Println(err)
}

//calling the URL
response, err := client.Do(request)
if err != nil {
log.Println(err)
}
```

Auctor molestie fermentum, non eu posuere. Mauris in non a egestas. Scelerisque amet, nibh morbi felis, netus. Ultrices netus donec non eget egestas diam fermentum, risus, sem. Tincidunt nulla habitant egestas suspendisse odio sed. Libero, risus, sagittis eget suspendisse egestas dignissim. Sed arcu arcu tincidunt elementum pretium senectus erat. Vitae praesent quis hendrerit viverra turpis amet, faucibus eget. Tortor et sit vulputate diam.
