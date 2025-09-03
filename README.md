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
**1. Login to Docker Hub**
docker login  

**2. Pull the image**
docker pull <your-dockerhub-username>/todolist:latest  

**3. Run the container**
docker run -p 3000:3000 <your-dockerhub-username>/todolist:latest  

**4. Check running containers**
docker ps  

**5. View logs (optional)**
docker logs -f todolist-container

# **Jenkins + GKE Deployment Workflow**

We automated the deployment of the To-Do List Application using Jenkins CI/CD integrated with Google Kubernetes Engine (GKE).

⚙ Jenkins Pipeline (Batch Script for Windows Node)
REM ====== Configuration ======
set REPO_URL=https://github.com/Siddartha-balla/todolist_devops.git
set BUILD_NUMBER=%BUILD_NUMBER%
set DOCKER_USER=preetham1703
set DOCKER_PASS=S@i170305
set IMAGE_NAME=todolist
set GCP_PROJECT=cbd-a-6719
set CLUSTER_NAME=cluster-1
set CLUSTER_REGION=asia-southeast1
set SERVICE_ACCOUNT_KEY=C:\Users\Preet\Downloads\cbd-a-6719-2ca17da47a1b.json

REM ====== Step 1: Clone latest code ======
cd C:\
if exist todolist rmdir /s /q todolist
git clone %REPO_URL% todolist
cd todolist

REM ====== Step 2: Build Docker image ======
docker build -t %DOCKER_USER%/%IMAGE_NAME%:%BUILD_NUMBER% .

REM ====== Step 3: Push to Docker Hub ======
echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
docker push %DOCKER_USER%/%IMAGE_NAME%:%BUILD_NUMBER%

REM ====== Step 4: Setup GCP & GKE credentials ======
set PATH=C:\Users\Preet\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;%PATH%
set USE_GKE_GCLOUD_AUTH_PLUGIN=True
call gcloud auth activate-service-account --key-file="%SERVICE_ACCOUNT_KEY%"
call gcloud container clusters get-credentials %CLUSTER_NAME% --region %CLUSTER_REGION% --project %GCP_PROJECT%

REM ====== Step 5: Update Kubernetes Deployment ======
echo "Tag to be used: %DOCKER_USER%/%IMAGE_NAME%:%BUILD_NUMBER%"
call kubectl set image deployment/deployment-1 %IMAGE_NAME%-1=docker.io/%DOCKER_USER%/%IMAGE_NAME%:%BUILD_NUMBER%

# 📌 Steps Explained

Clone Latest Code

Pulls the most recent commit from GitHub repository.

Ensures Jenkins always builds from the latest source.

Build Docker Image

Builds a new Docker image with a unique Jenkins build tag (%BUILD_NUMBER%).

Push to Docker Hub

Authenticates with Docker Hub using Jenkins credentials.

Pushes the image to Docker Hub for external availability.

Authenticate with GCP & GKE

Uses a service account JSON key for secure authentication.

Fetches credentials for the GKE cluster (cluster-1 in asia-southeast1).

Update Kubernetes Deployment

Updates the container image in the Kubernetes deployment.

Ensures the GKE pods are refreshed with the latest build.

# ✅ Advantages of this Setup

Fully automated CI/CD pipeline from GitHub → Jenkins → Docker Hub → GKE.

Each Jenkins build creates a unique versioned image (todolist:<build_number>).

Eliminates manual deployment errors.

Provides scalability & reliability using Kubernetes.

docker hub link 

https://hub.docker.com/repository/docker/preetham1703/todolist/tags

Deployment using GKE

link-http://34.143.239.201/


