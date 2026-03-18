# Todo Application

## 📋 About the Application

The **Todo Application** is a feature-rich task management tool that helps users organize and prioritize their tasks effectively. The application supports the following functionalities:

- Add and delete tasks.
- Filter tasks based on their completion status (e.g., Completed, Incomplete).
- Sort tasks by time or priority.
- Search for specific tasks using keywords.
- Save tasks persistently using **localStorage**.
- Responsive design for desktop and mobile devices.

---

## 🚀 Setup and Launch Process

Follow the steps below to set up and run the application locally:

### Prerequisites
- **Node.js** and **npm** installed on your system.
- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Brave).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Ranit42179/Todo-Flarelist.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-flarelink
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

For a production build:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your hosting service.

---

## 💡 Assumptions Made During Development

1. **Task Persistence**:
   - Tasks are stored in the browser's `localStorage` to maintain them even after refreshing the page.

2. **Task Prioritization**:
   - Priority levels are predefined (e.g., High, Medium, Low) and can be assigned to tasks during creation.

3. **Filters**:
   - "Completed" and "Incomplete" filters display tasks based on their `completed` status.
  
4. **Default Behavior**:
   - By default, tasks are displayed in the order they were added (chronological).

5. **Error Handling**:
   - Basic input validation ensures tasks cannot be added without a title.

---




