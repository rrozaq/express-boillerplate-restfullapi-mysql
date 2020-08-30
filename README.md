# Express Boillerplate RestfullApi With Mysql

## Core Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Express** - [http://expressjs.com/](http://expressjs.com/)
- **Mysql** - [https://www.mysql.com//](https://www.mysql.com//)
- **nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
<!--
- **dotenv** - [https://www.npmjs.com/package/dotenv/](https://www.npmjs.com/package/dotenv/)
- **nodemon** - [https://www.npmjs.com/package/nodemon/](https://www.npmjs.com/package/nodemon/)
- **bodyparser** - [https://www.npmjs.com/package/body-parser/](https://www.npmjs.com/package/body-parser/)
- **mysql** - [https://www.npmjs.com/package/mysql/](https://www.npmjs.com/package/mysql/)
-->

## feature

1. crud example
1. error handling
1. custom message api response
1. [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

## How To run

#### copy environment variable

```sh
cp .env.sample .env
```

#### run manualy

```sh
# install package
npm install

#  running app
npm run start
```

#### fill in the copied environment earlier

```sh
APP_PORT=3000
TZ=Asia/Jakarta

#Database config
DB_HOST=host #server host database
DB_DATABASE=database name #db name
DB_USERNAME=database username #username
DB_PASSWORD=database password #password
```

## Code Style Guides
* Guideline:
  * Use camelCase for variable name, naming function, load module or other functions
  * Use UpperCase for Constant Variable
  * Use PascalCase for class name, models, controller, route, load module model
  * Use snake_case for file name as variable
  * Function name use Verb
  * Variable name use Noun
