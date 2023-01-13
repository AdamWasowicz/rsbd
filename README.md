# What is this project
In short it is system that uses distributed database (PostgreSQL) with logical replication.
### Backend
On backend there is REST Api created in .NET CORE 6 with Entity Framework Core, for documentation please refer to documentation made by Swagger.

### Frontend
On frontend there is web app build with React.js, Axios, Redux and Typescript.

### Database
There are 6 PostgreSQL database servers in this project, 2 for each region. Each region has Write server and Read server, Write server replicates data on Read server.
The goal was to distribute data accross regions and ensure better durability and consistency of data stored.


# How to run it
### Docker
in main directory executte comand
```
docker compose up
```
Then after databases are ready to accept connections go to ```./Scripts``` and execute ```DoFullSetup.sh``` it will do following things:
1. Create Entity Framework Core migrations for database
2. Apply migrations in databases
3. Create subscriptions on databases for logical replication

#### Ports
- App runs on port: ```3000```
- Api runs on port: ```30010```

### Kubernetes
From main directory go to ```./Kubernetes/DeploymentScripts``` and execute ```_doFull.sh``` it will do all deployments for you, 
if you want to remove all deployments then execute ```_deleteFull.sh```
After that go to ```./Kubernetes/SetupScripts``` and execute ```DoFullSetup.sh``` it will do following things:
1. Create Entity Framework Core migrations for database
2. Apply migrations in databases
3. Create subscriptions on databases for logical replication

#### Ports
- App runs on port: ```30011```
- Api runs on port: ```30010```