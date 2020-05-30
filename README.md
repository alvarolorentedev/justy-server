# justy-server
platform for bidding on jobs server side

#Migrations

for remote migrations of the database run

```sh
DATABASE_URL="$(heroku config:get DATABASE_URL -a justyes)?ssl=true" npm run migrate:remote:up
```