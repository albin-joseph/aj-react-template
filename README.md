# React + TypeScript + Vite + Tailwind + ReduxToolkit

This template provides a minimal setup to get React working in Vite with HMR and ESLint rules. You can use this project as a quick-start setup with the following configurations:

- **React**  
- **TypeScript**  
- **Vite + SWC**  
- **Tailwind CSS**  
- **Redux**  
- **Axios**  
- **Module creation script**  


### How to start

- **Clone the project**
 
    ```git clone https://github.com/albin-joseph/aj-react-template.git <project_name>```

    Replace **<project_name>** with the desired name for your project.

- **Remove existing git history**

  If you want to use the template as a fresh project, remove the existing .git history:

  ```cd <project_name>``` 

  ```rm -rf .git```

- **Reinitialize Git**

  Reinitialize Git for your new project:

  ```git init```

  ```git add .```

  ```git commit -m "Initialize project from template"```

- **Install Dependencies**

  install the required packages using npm or yarn:

  ```npm install```

  or

  ```yarn install```

- **Update Project-Specific Details**
  - Open ```package.json``` and update the following fields:
    - "name": Set a unique name for your project.
    - "version": Update the version if needed.
    - "description", "author", etc.
  - Check for any template-specific configuration or placeholders.

- **Set Up Environment Variables**

  If the template includes an ```.env.example``` file, create a ```.env``` file:

  ```cp .env.example .env```

  Update the .env file with project-specific values.

- **Start the Development Server**

  ```npm run dev```

- **Push to Your Own Git Repository**

  If you want to host the project in your own repository:

  - Create a new repository on GitHub, GitLab, or any other Git hosting service.
  - Add it as a remote

  ```git remote add origin <your-repository-url>```

  ```git branch -M main```

  ```git push -u origin main```

- **Customize the Template**

  Start modifying the template code to suit your project needs.

### How to Create a New Module

- **`<module-name>.page`**: Handles state management, lifecycle methods, and API calls.  
- **`<module-name>.view`**: Base visual/presentation view; includes subcomponents based on the UI design.  
- **`<module-name>Slice`**: Redux implementation.  
- **`<module-name>.service`**: Module-specific API implementations.  
- **`<module-name>.utils`**: Contains utility methods.  
- **`components` folder**: Stores all module-related subcomponents.  

### Automated Module Creation
To create a new module, run:  
```npm run create-module <module-name>```  

**Example:**  
For the `Home` module:  
```npm run create-module Home```

**Note:**  
- Based on your Node.js and npm version mismatch, there is a chance of conflicts occurring. Please address such conflicts carefully.  
- You can add additional configurations as needed for your project.  

