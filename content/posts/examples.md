---
title: "Examples"
date: 2017-12-18T23:21:28-06:00
draft: true
---

[OSCP]({{< relref "oscp.md" >}})

{{< highlight ruby>}}
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
{{< /highlight >}}

{{< highlight html >}}
<section id="main">
  <div>
    <h1 id="title">{{ .Title }}</h1>
    {{ range .Data.Pages }}
      {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}


Open Source
:   List open source contributions here, perhaps placing emphasis on
    the project names, for example the **Linux Kernel**, where you
    implemented multithreading over a long weekend, or **node.js**
    (with [link](http://nodejs.org)) which was actually totally
    your idea...