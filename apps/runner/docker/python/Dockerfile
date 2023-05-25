FROM python:3.12.0a7-alpine3.18

COPY run.sh /var/run/
RUN chmod +x /var/run/run.sh

CMD ["./var/run/ready.sh"]