
# read-csv-sync

Module to read .csv files synchronously

  

### Install

```console
$ npm install read-csv-sync
```

  

### Basic Usage

Reading a file called example.csv

  

```js
const {readCSVSync} = require("read-csv-sync")

console.log(readCSVSync("./example.csv"))
```

  

You can assign the result into a variable, like this:

  

```js
const {readCSVSync} = require("read-csv-sync")


const data = readCSVSync("./example.csv");
  

console.log(data)
```

  

### Optional parameters

You can pass optional parameters on function call, those are "separator" (default = ',') and "encoding" (default = 'utf-8').

  

Syntax:

```js
readCSVSync(path, separator, encoding)
```
