# Todo list with authentication and authorization using Redux

## Description
TODO list with auth in node.js and React with use Redux.

# User Stories
* Signup: As an anonymous person, I can register on TODO WEBSITE.
* Login: As a user I can login to the website so that I can add and show my TODO list
* Logout: As a user I can logout from the website
* Add task As a user 
* Update task As a user
* Show all task As a user
* Delete my task As a user

## React Router Routes (React App)
| Path               | Component     | Permissions            | Behavior                                                     |
|--------------------|---------------|------------------------|--------------------------------------------------------------|
| `/`                | HomePage      | anon only              | Signup form, navigate to login after signup                  |
| `/Register`        | RegisterPage  | anon only              | Signup form, navigate to login after signup                  |
| `/Login`           | LoginPage     | public                 | Login form, link to signup, navigate to homepage after login |
| `/Tasks`           | TasksPage     | users only             | Tasks                                                        |

## Services
* Auth Service
 auth.login()
 auth.register()
 auth.logOut()

* Task Service
 task.allTasks()
 task.addTask()
 task.deleteTask(id)
 task.updateTask(id)



