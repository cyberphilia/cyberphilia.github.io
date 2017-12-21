---
title: "About"
date: 2017-12-01T21:28:26-06:00
draft: true
slug: "about me"
---

My name is Jacob Henson. I’m a developer, InfoSec, industrial security, and a manger. I work for a Defense Contractor in Huntsville, Alabama.




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

<div style="height:600px"></div>
