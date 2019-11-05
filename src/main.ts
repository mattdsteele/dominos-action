import * as core from '@actions/core';
import { GitHub, context } from '@actions/github';
import * as pizza from './pizzapi';

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
    const active = core.getInput('active', { required: true }) === 'true';
    const github = new GitHub(token);
    const order = pizza.standardOrder(
      inputs.address,
      inputs.email,
      inputs.phone,
      inputs.firstName,
      inputs.lastName
    );
    const validated = await pizza.validate(order);
    console.log('Validated');
    console.log(JSON.stringify(validated));
    const priced = await pizza.price(order);
    console.log('Priced');
    console.log(JSON.stringify(priced));
    const placed = await pizza.place(
      order,
      inputs.cardNumber,
      inputs.expiration,
      inputs.securityCode,
      inputs.cardPostalCode,
      active
    );
    console.log('Placed!', active);
    console.log(JSON.stringify(placed));
    const issue = await github.issues.create({
      title: '🍕 time',
      body: `# Time to put some content in here. Am I active? ${active}`,
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
