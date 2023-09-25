# keep-track-of-your-task
You are tasked with building a system to keep track of your tasks. You will need to write CRUD APIs for managing tasks and API to get the metrics for your tasks. You should use Node.js for the backend, any SQL database for managing database interactions. API to create a task. API to update a task API to get all tasks, make API paginated.

## To Setup and Run the server

1. Navigatee to the root folder of the project `keep-track-of-your-task`
2. execute ```npm install```
3. create database with command ```CREATE DATABASE keep_task_track;```
4. Now to create all the tables and test data execute queries from the file `keep_task_track.sql`.
5. to start the server execute ```npm start```
6. These messagse should pop up in terminal 
```Server has started and listening at http://localhost:2400
Executing (default): SELECT 1+1 AS result
Database connection successfull```

To check if server is up and running your can hit this API /health

```
curl --location --request GET 'http://localhost:2400/health'
```

Here I'm sharing the CURL of required API's:

1. API to create a task.
```
curl --location --request POST 'http://localhost:2400/task/add-task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"learn somthing new",
    "description":"learn atleadt one new thing",
    "status":1
}'
```

2. API to update a task
```
curl --location --request PUT 'http://localhost:2400/task/update-task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "task_id":2,
    "status":2
}'
```

3. API to get all tasks, make API paginated.
```
curl --location --request GET 'http://localhost:2400/task/get-task?page_size=3&page_no=1'
```

4. API to get task metrics like counts tasks on basis of status and timeline
```
curl --location --request GET 'http://localhost:2400/task/get-task-metrics?start_date=2023-07&end_date=2023-10'
```

