ABT Application

# Setup
```shell script
npm i
cp .env.example .env
npm run start
```

## Endpoints:
Get all records
```shell script
curl -X GET http://localhost:3000/
{data:[{_id, siteId, name, type, value, context, createdAt, updatedAt}]}
```
Add record
```shell script
 curl -i -X POST -H "Content-Type: application/json" -d '{"siteId":"1","name":"Sign up click","type":"Click","value":"Event value","context":"Event context"}' http://localhost:3000/
```