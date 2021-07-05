FROM python:2.7.18-stretch

WORKDIR /app
COPY . .
RUN apt update && apt install -y python-webpy python-xmltodict python-requests python-xlsxwriter
CMD ["./bin/monit-dashboard.py"]
