---
title: "About"
date: 2017-12-01T21:28:26-06:00
draft: true
slug: "about me"
---

Experienced IT leader with a proven history of delivering solutions and implementing risk management governance and strategies.  I am passionate about solving problems and enabling business needs.   I have years of experience working with multiple compliance standards like NIST SP 800-171, ISO 20,000, CIS Top 20, and NIST Cybersecurity Framework.

![Example image](/img/mal.jpg)


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
