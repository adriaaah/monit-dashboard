# Monit Dashboard

## Description

Python web application to get a dashboard of a bunch of [Monit] servers at a
glance.

## How does it work?

Every 300 seconds (hardcoded) the application ask for the data served by the
Monit built-in web server in a XMl report from each configured server. Then,
thanks to the built-in web server, it is displayed in a single HTML page.

## Pre requisites

### Debian GNU/Linux

#### Web.py framework

- `apt install python-webpy`

#### Python libraries

- `apt install python-xmltodict python-requests`

### CentOS

#### Python PIP

- `yum install epel-release`
- `yum install python-pip`

#### Web.py framework

- `pip install web.py`

#### Python libaries

- `yum install python-requests python-xmltodict python-simplejson`

## Requisites

- Config file `conf/servers.json` prior run. You might find a sample file at
`conf/servers.json.example`.
- Please see [Config](#config) section for further details.

## Run

`./bin/monit-dashboard.py`

By default, it will be reachable at <http://localhost:8080>. You might change
the port by adjusting `app.run(port=8080)` in `bin/monit-dashboard.py` file.

## References

- [web.py 0.3 tutorial][webpy-tutorial]
- [Learn Python the hard way, ex 50][lpthw]
- [A template example][template-example]
- [How to change HTTP server port][port]

## Config

- Placed in `conf/servers.json`
- Sample settings as follows:

  ```
  {
  "My server to monit": {
    "url": "http://example.com:2812",
    "user": "monit",
    "passwd": "*****"
    }
  }
  ```

# Credits

- [Original idea][idea]
- Frontend support: Júlia Vázquez
- [Icons]
- [Accordion menu][accordion]

# License

[AGPL][license]

[accordion]: http://www.w3schools.com/howto/howto_js_accordion.asp
[icons]: https://commons.wikimedia.org/wiki/User:House
[idea]: https://imil.net/blog/2016/03/16/Fetch-monit-status-in-JSON/
[license]: LICENSE
[lpthw]: https://learnpythonthehardway.org/book/ex50.html
[monit]: https://mmonit.com/monit/
[port]: https://stackoverflow.com/questions/14444913/web-py-specify-address-and-port
[template-example]: https://stackoverflow.com/questions/28508869/using-web-py-to-dynamically-output-values-from-process-initiated-by-form-submiss
[webpy]: http://webpy.org/
[webpy-tutorial]: http://webpy.org/tutorial3.en
