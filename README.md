# Getting Started with TypeORM

### Why Typeorm over Sequelize

Largely the reasoning is because of Typescript support on Typeorm is cleaner. It also has both ActiveRecord and DataMapper style of arranging entities, which makes it comfortable for people coming from rails.
Also support for migration and seeding tools is pretty good. And for really complex queries you can use  the query builder to clean up your queries.

### installation
You can follow the instructions listed in [the typeorm README](https://raw.githubusercontent.com/typeorm/typeorm/master/README.md)

> Please note that you should select `pg` as your db driver to install via NPM

> If you want to use typeorm in your CLI (as opposed to using the script inside node_modules) you can run `npm install typeorm -g` to have it installed to your shell

### Setting up

Start by initializing typeorm in the current project folder

```
typeorm init --database postgres
```

### Key Files to note
Upon initialization, several files will be created.

```
src
|
|--- entity
|--- migration

```

##### Entity Folder
This folder stores all your models

##### Migration Folder 
This folder contains all files related to migrating to the database


