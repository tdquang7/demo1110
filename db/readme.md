```Bash
$ docker create --name db1 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=myshop -p 5432:5432 postgres
```

```Bash
$ docker start db1
```