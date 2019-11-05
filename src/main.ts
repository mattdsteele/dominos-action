import * as core from '@actions/core';
import { GitHub, context } from '@actions/github';

const getInputs = () => {
  const address = core.getInput('address', { required: true });

  const orderType = core.getInput('order-type') || 'Delivery';
  const email = core.getInput('email', { required: true });
  const phone = core.getInput('phone', { required: true });
  const firstName = core.getInput('first-name', { required: true });
  const lastName = core.getInput('last-name', { required: true });
  const cardNumber = core.getInput('card-number', { required: true });
  const expiration = core.getInput('expiration', { required: true });
  const securityCode = core.getInput('security-code', { required: true });
  const cardPostalCode = core.getInput('card-postal-code', { required: true });
  return {
    address,
    orderType,
    email,
    phone,
    firstName,
    lastName,
    cardNumber,
    expiration,
    securityCode,
    cardPostalCode
  };
};
async function run() {
  try {
    const token = core.getInput('github-token', { required: true });
    const inputs = getInputs();
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
