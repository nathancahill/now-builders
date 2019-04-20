const yodasay = require('yodasay').say;
const cowsay = require('cowsay').say;

// test that process.env is not replaced by webpack
process.env.NODE_ENV = 'development';

module.exports = (req, resp) => {
  resp.end(
    `${yodasay({ text: 'yoda:RANDOMNESS_PLACEHOLDER' })}${cowsay({
      text: 'cow:RANDOMNESS_PLACEHOLDER',
    })}`,
  );
};
