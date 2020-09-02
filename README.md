
  

# read-csv-sync

  

Module to read .csv files synchronously

### Index
[Install](#install)
[Basic Usage](#basic-usage)
[Optional parameters](#optional-parameters)
[Examples](#examples)
  
  

### Install

  

```console

$ npm install read-csv-sync

```


### Basic Usage

Reading a file called example.csv

```js

const  {readCSVSync}  =  require("read-csv-sync")

  

console.log(readCSVSync("./example.csv"))

```

You can assign the result into a variable, like this:

```js

const  {readCSVSync}  =  require("read-csv-sync")

  
  

const data =  readCSVSync("./example.csv");

  

console.log(data)

```

### Optional parameters


You can pass optional parameters on function call, those are "separator" (default = ',') and "encoding" (default = 'utf-8').


Syntax:

  

```js

readCSVSync(path, separator, encoding)

```

### Examples

#### Input:

```csv

NAME,LEG_LENGTH,DIET

Hadrosaurus,1.2,herbivore

Struthiomimus,0.92,omnivore

Velociraptor,1.0,carnivore

Triceratops,0.87,herbivore

Euoplocephalus,1.6,herbivore

Stegosaurus,1.40,herbivore

Tyrannosaurus Rex,2.5,carnivore

```

  

#### Output:

```console

[

{ NAME: 'Hadrosaurus', LEG_LENGTH: '1.2', DIET: 'herbivore' },

{ NAME: 'Struthiomimus', LEG_LENGTH: '0.92', DIET: 'omnivore' },

{ NAME: 'Velociraptor', LEG_LENGTH: '1.0', DIET: 'carnivore' },

{ NAME: 'Triceratops', LEG_LENGTH: '0.87', DIET: 'herbivore' },

{ NAME: 'Euoplocephalus', LEG_LENGTH: '1.6', DIET: 'herbivore' },

{ NAME: 'Stegosaurus', LEG_LENGTH: '1.40', DIET: 'herbivore' },

{ NAME: 'Tyrannosaurus Rex', LEG_LENGTH: '2.5', DIET: 'carnivore' }

]

```
