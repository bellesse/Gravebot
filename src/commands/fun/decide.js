import { choices } from '../../data';
import T from '../../translate';


function decide(client, e, suffix) {
  function multipleDecide(options) {
    const selected = options[Math.floor(Math.random() * options.length)];
    if (!selected) return multipleDecide(options);
    return selected;
  }

  const split = suffix.split(' or ');
  const rand = Math.floor(Math.random() * choices.length);
  if (split.length > 1) {
    e.message.channel.sendMessage(`${choices[rand]} **${multipleDecide(split)}**`);
  } else {
    e.message.channel.sendMessage(T('decide_usage', e.message.author.lang));
  }
}

export default {
  choice: decide,
  choose: decide,
  decide
};

export const help = {
  decide: {
    parameters: ['something', 'or', 'something']
  }
};
