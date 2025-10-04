# Todo List Application

A simple and intuitive application to help you organize your personal and business tasks efficiently. Built with modern web technologies, this app provides a clean interface to manage your daily to-dos.

## Features

- **Add, Edit, and Delete Tasks**: Easily create new tasks, mark them as complete, and remove them when they're no longer needed.
- **Categorize Your Tasks**: Assign tasks to "Business" or "Personal" categories to keep your life organized.
- **Task Filtering**: Filter your task list by category to focus on what matters most at the moment.
- **Progress Tracking**: See a visual overview of your completed tasks within each category.
- **Persistent Storage**: Your tasks are saved in your browser's local storage, so they'll be there when you come back.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast and modern build tool for web development.
- **Zustand**: A small, fast, and scalable state-management solution for React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Lucide React**: A beautiful and consistent icon library.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

- **Adding a task**: Click the floating "+" button at the bottom right of the screen. A modal will appear where you can enter the task name and select a category.
- **Completing a task**: Click the checkbox next to a task to mark it as complete.
- **Deleting a task**: Click the trash can icon on the right side of a task to delete it.
- **Filtering tasks**: Click on the "Business" or "Personal" category cards at the top to view only the tasks in that category. Click the same category again to view all tasks.

## Project Structure

The codebase is organized into the following main directories:

- `src/components`: Contains reusable React components used throughout the application.
- `src/pages`: Contains the main page components of the application.
- `src/store`: Contains the Zustand store for state management.
- `src/types`: Contains TypeScript type definitions.
- `public`: Contains static assets like images and fonts.