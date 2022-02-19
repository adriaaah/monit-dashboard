# Monit Dashboard

## Description

Python web application to get a dashboard of a bunch of [Monit] servers at a
glance.

## Screenshots

- Main view when every Monit server hasn't found alerts:
![dashboard](screenshots/dashboard.png)

- One Monit agent is reporting an error on a server:
![dashboard-error](screenshots/dashboard-error.png)

- Expand the server with issues with errors on top:
![error-list](screenshots/error-list.png)

## How does it work?

Every 300 seconds (hardcoded) the application ask for the data served by the
Monit built-in web server in a XML report from each configured server. Then,
thanks to the built-in web server, it is displayed in a single HTML page.

## Installation on…

### …Debian GNU/Linux

#### Web.py framework

- `apt install python-webpy`

#### Python libraries

- `apt install python-xmltodict python-requests`

### …CentOS

#### Python PIP

- `yum install epel-release`
- `yum install python-pip`

#### Web.py framework

- `pip install web.py`

#### Python libaries

- `yum install python-requests python-xmltodict python-simplejson`
- `pip install xlsxwriter`

## Requisites

- Config file `conf/servers.json` prior run. You might find a sample file at
`conf/servers.json.example`.
- Please see [Config](#config) section for further details.

## Run it with Docker

1. Build the image once: `docker build -t monit-dashboard .`
2. Spin up a container: `docker run -v $(pwd)/conf:/app/conf -p 8080:8080 monit-dashboard`
3. Point your browser to <http://localhost:8080>

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
- [Enhanced features][enhanced] by [Saravanan Palanisamy][saravanan]

# License

[AGPL][license]

[accordion]: http://www.w3schools.com/howto/howto_js_accordion.asp
[enhanced]: https://github.com/adriaaah/monit-dashboard/commits?author=saravanan30erd
[icons]: https://commons.wikimedia.org/wiki/User:House
[idea]: https://imil.net/blog/2016/03/16/Fetch-monit-status-in-JSON/
[license]: LICENSE
[lpthw]: https://learnpythonthehardway.org/book/ex50.html
[monit]: https://mmonit.com/monit/
[port]: https://stackoverflow.com/questions/14444913/web-py-specify-address-and-port
[saravanan]: https://github.com/saravanan30erd
[template-example]: https://stackoverflow.com/questions/28508869/using-web-py-to-dynamically-output-values-from-process-initiated-by-form-submiss
[webpy]: http://webpy.org/
[webpy-tutorial]: http://webpy.org/tutorial3.en
