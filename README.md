# Todo List Application

## Project Overview

This is a simple full-stack Todo List web application built as part of a Junior Full Stack Developer task. The application allows users to add, view, and delete tasks. Additional features include task priority and a dark/light theme toggle for better user experience.


## Features

### Frontend
- Built with **React**.
- Form to add new tasks with title and priority.
- Display a list of tasks with options to mark as completed or delete.
- Dark and light mode toggle for UI theme.
- Edit existing tasks functionality.

### Backend
- RESTful API built with **Node.js** and **Express**.
- Endpoints:
  - `GET /tasks` - Retrieve all tasks.
  - `POST /tasks` - Add a new task.
  - `PUT /tasks/:id` - Update a task (title, priority, completed).
  - `DELETE /tasks/:id` - Delete a task by ID.


## Technical Requirements
- Use of **Git** for version control with meaningful commits.
- Basic tests implemented for both frontend and backend.
- Clean and well-organized code.
- Clear and simple implementation.


## Installation & Running the App

### Backend (server)
```bash
cd server
npm install
npm start
