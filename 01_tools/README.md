# Tools

## Git

We will use [Git](https://git-scm.com/) to track changes on your source code. 

### Commit messages

Use the following commit messages to make sure your assignment progress is transparent at any time:

- `task X (started): short description`
  - if you have completed less than 30 percent of this task
- `task X (unstable): short description`
  - if you have completed at least 80 percent of this task
  - also if you find a bug in terms of a task you previously assumed to be "stable"
- `task X (stable): short description`
  - if you have completed 100 percent of this task

**Please note:**

- *X* is the task number you have been working on.

- You can fix the latest commit message with following command:

  ```bash
  git commit --amend -m "your fixed message"
  ```

- In case you have already pushed the commit, you need to execute following command afterwards:

  ```bash
  git push --force origin main
  ```

## GitHub

We will use [GitHub](https://github.com/) for hosting our remote repositories. 

### Connecting Git with GitHub

GitHub supports different modes of authentication:

- Username and password with two-factor authentication
- Personal access token
- [SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) key
