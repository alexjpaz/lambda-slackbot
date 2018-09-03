# lambda-slackbot [![CircleCI](https://circleci.com/gh/alexjpaz/lambda-slackbot.svg?style=svg)](https://circleci.com/gh/alexjpaz/lambda-slackbot)

> Serverless slackbot

### Invoking

```
curl -X POST https://g4vlcenksd.execute-api.us-east-1.amazonaws.com/prod/{action}
```

#### Hide the pain
```
curl -X POST https://g4vlcenksd.execute-api.us-east-1.amazonaws.com/prod/hide-the-pain
```

### Building

```
cd src
npm install
npm test
```

Or if you have docker:

```
make
```

### Contributing

Travis CI will automatically build and deploy pushes that pass the tests.
https://travis-ci.org/alexjpaz/lambda-slackbot

### Further Reading
https://api.slack.com/outgoing-webhooks
