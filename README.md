# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# **TO DO LIST**

Managing daily tasks can often feel overwhelming, and using paper notes or messy apps makes it harder to stay productive.

The To-Do List Application solves this problem by providing a clean, simple, and professional way to organize tasks with due dates, deadlines, and progress tracking.
Instead of remembering tasks in your head, you can add them with deadlines

# 🚀 Features

Add, and delete tasks easily

Assign date & time to tasks

Prevents adding past dates/times with validation

Tracks missed tasks automatically

Visual progress bar for completed tasks

Modern, animated UI with gradient background

The To-Do List Application is a simple yet powerful productivity tool that makes daily planning more effective, professional, and user-friendly.

It is especially useful for:

Students managing study schedules

Professionals tracking project deadlines

Individuals building productivity habits

# Running with Docker

This project includes a Dockerfile for containerized deployment.

🔹 For Other Developers (Pull & Run Image)
# 1. Login to Docker Hub
docker login  

# 2. Pull the image
docker pull <your-dockerhub-username>/todolist:latest  

# 3. Run the container
docker run -p 3000:3000 <your-dockerhub-username>/todolist:latest  

# 4. Check running containers
docker ps  

# 5. View logs (optional)
docker logs -f todolist-container
