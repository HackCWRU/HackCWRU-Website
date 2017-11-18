
# hackCWRU V Website

We're writing a website, and subsequently, two mobile apps, for the CWRU Annual student-run hackathon,

## Getting Started

First, fork the repository with the github fork button

Then, clone it.
```
git clone git@github.com:YOUR_USERNAME_HERE/HackCWRU-Website.git
```
Then, set the upstream to the main repository with
```
git remote add upstream git@github.com:HackCWRU/HackCWRU-Website.git
```

Then switch to the dev branch locally
```
git checkout dev
```

Then begin working.

To update your fork/local code with everyone else's code, use:
```
git fetch upstream
git merge upstream/dev
```


### Prerequisites

NodeJS

To instal with Linux:

```
sudo apt-get install nodejs npm
```

Webpack & Babel
```
npm install webpack -g
npm install babel-node -g
```


## Installation and Starting the server

```bash
npm install
npm run build
npm run build-win # for windows machines
npm start
```

You should see a successful output, like:
```
node lib/index.js

Listening on port 3000
```

To view, navigate to `localhost:3000`
To see the sponsorship info, view `localhost:3000/sponsorship`

## Built With

* [NodeJS](https://nodejs.org/en/) - Our backend
* [React](https://reactjs.org/) - Our web framework
* [Babel](https://babeljs.io/) - Javascript Transpiler

## Contributing / Merging your changes

To commit your changes, follow the normal git add/commit/push flow on your local machine.

Then, on the primary repositories Pull Request page, submit a new pull request, using the 'pull request across forks' option. Select your fork and submit

Then, ping Jack or Dan to merge the changes.


## Contributers

* **Jack Mousseau** - *Initial work* - [GitHub](https://github.com/jmousseau)
* **Dan Grigsby** - *Initial work* - [GitHub](https://github.com/dbgrigsby)

At the next meeting let's get a list of githubs together so I can add everyone


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/HackCWRU/HackCWRU-Website/blob/master/LICENSE.txt) file for details
