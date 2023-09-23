# Todo.ly - PlaywrightJs + POM

Automation project implementing playwright + POM in [Todo.ly](https://todo.ly).

## Installation

1. Use the node package manager to install

```bash
npm install
```

2. To execute tests using playwright, run:

```bash
npx playwright test
```
and

```bash
npx playwright show-report
```

after the test execution

3. To install cucumber, run:

```bash
npm i @cucumber/cucumber
```

## Test execution

Playwright tests can be found at:
```bash
tests/
```

### Config.js file
It is important to mention that a **config** file has been added so the variables for testing can be changed there:

```bash
Utility/config.js
```

### Tests information
The resulting report of all executions will show a video about each one. However, the explanation about each test execution is given below.

1. **login.spec** expects to be provided with valid credentials (username, password) so it will check if it logged in succesfully.
2. **logout.spec** is signing in with valid credentials, but after checking that the user successfully logged in, it will log out and check if it is in the home page.
3. **create-task.spec** signs in and clicks on the Inbox tab. After it creates a new Todo so it will expect the new task to be correctly created.
4. **update-task-name.spec**, after logging in and clicking on Inbox tab, it will create a new Todk and then it will change the name of that task by accessing to it's options menu.
5. **delete-task.spec** will create a Todo and then it will delete it by accessing to it's options menu.
6. **signup.spec** is expecting an unregistered email to access. In this case, test mails were taken from [TEMPMAIL](https://temp-mail.org/es/) and added to **config.js** file.

## Cucumber

At this time, Cucumber features were created and can be seen at:

```bash
features/
```
