import * as core from '@actions/core';
import { GitHub, context } from '@actions/github';

async function run() {
  try {
    const token = core.getInput('github-token', { required: true });
    const github = new GitHub(token);
    const issue = await github.issues.create({
      title: '🍕 time',
      body: `# Time to put some content in here.`,
      ...context.repo
    });
    console.log(issue.status);
    console.log(issue.data.id);
    console.log(JSON.stringify(issue.data));

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
