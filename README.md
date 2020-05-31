# justy-server
platform for bidding on jobs server side

#Migrations

for remote migrations of the database run

```sh
NODE_TLS_REJECT_UNAUTHORIZED=0 DATABASE_URL="$(heroku config:get DATABASE_URL -a justyes)?ssl=true" npm run migrate:remote:up
```