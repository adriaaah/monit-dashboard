FROM dockette/debian:stretch-slim

WORKDIR /app

COPY . .

RUN <<EOF
apt-get update
apt-get install -y python python2.7-minimal python-webpy python-xmltodict python-requests python-xlsxwriter
EOF

CMD ["./bin/monit-dashboard.py"]

