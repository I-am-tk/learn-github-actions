# learn-github-actions

Workflow Automation Service by Github.

Automate all kinds of repository related process.

- Automate code testing, building and deployment.

CI and CD are used in conjuction though.

CI: Continous Integration
- CI is about integrating codechanges into an existing codebase.
  - building, testing and merging

CD: Continous Deleviry/Deployment
- Publishing new version of our APP

## Workflow, Jobs and Steps

### Workflow
Workflows are attached to the repositories

Workflow includes on or more Job. The Job includes one or more steps.

Workflow will be triggered upon Events

## Jobs
  - install the dependencies
  - run automated tests

Jobs are basically runner(Execution Invironment)
  - The machine that will be used for executing these steps.

Jobs may run sequentially or parallel. By default Jobs run in parallel
There are conditional Job.

### Step

Step could be a shell script or an action.

Steps are executed in order and they can be conditional

## Basic Workflow

```yml
name: First Workflow
on: workflow_dispatch

jobs:
  greet:
    - name: "Greet"
      run: |
        echo "Hello"
        echo "World"
    - name: "Bye"
      run: echo "Done -> Bye"
```

Steps run on a server but they don't run inside your repository.

## Questions

[ ] What is the use of github cli?
[x] Where can we find all the workflow triggers?
   - https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
[ ] Where can I find all the runners?
