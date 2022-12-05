```sql
CREATE TABLE plan (
  "id" int primary key,
  "details" varchar,
  "user" varchar
);

CREATE TABLE interest (
  "id" int primary key,
  "planId" int,
  "user" varchar,

  FOREIGN KEY (id) REFERENCES plan (id)
);
```
