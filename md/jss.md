# Writing Styles with JavaScript

This is a partial guide to writing styles as JavaScript objects.

## Contents
- Styles are objects
- Property names are camelCase
- Property values are the same as regular CSS
- Pixels are the default
- Properties with multiple values must be strings


- Styles with & without the theme object
- Using the theme object
- Breakpoints
- Dynamic styles

## Styles are objects
```js
const styles = {
  wrapper = {
    color: 'green',
  },
  label: {
    color: 'red',
  }
}
```

## Property names are camelCase
Property names are the same spelling as the regular CSS property names. However the hyphen is removed and the first letter after the hyphen is capatilied.

```js
const styles = {
  body = {
    color: 'green',
    textAlign: 'center',
  },
  label: {
    color: 'red',
    borderBottom: '1px solid black',
  }
}
```

## Property values are the same as regular CSS
```js
const styles = {
  wrapper: {
    borderBottom: 'solid 0.5px gray',
    color: '#f64060',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '50%',
  },
}
```

## Pixels are the default
For properties that take a number of pixels you can use a number or a string. Most people are using a number

```js
const styles = {
  body: {
    fontSize: '16px',
  },
  label: {
    fontSize: 12,
  },
}
```

## Properties with multiple values must be strings

```js
const styles = {
  wrapper: {
    padding: '20px 0 20px 0'
  },
}
```