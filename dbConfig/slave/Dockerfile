FROM postgres:15

# Configuration
RUN apt-get -y update
RUN apt-get install -y netcat
RUN apt-get install -y sudo
COPY ./setup-slave.sh /docker-entrypoint-initdb.d/setup-slave.sh
RUN chmod 0666 /docker-entrypoint-initdb.d/setup-slave.sh

# Entrypoint
# COPY ./docker-entrypoint.sh /docker-entrypoint.sh
# RUN chmod +x /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]

# Extension
# COPY ./1-onStart.sh /entrypoint-initdb.d/1-onStart.sh
# RUN chmod 0666 /entrypoint-initdb.d/1-onStart.sh