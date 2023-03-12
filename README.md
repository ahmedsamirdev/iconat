# Iconat

This package is a collection of high-quality icons for React applications. The library provides a wide variety of icons in different categories, including weather, e-commerce, education, user interface, and more.

![header](https://i.ibb.co/VH5C7FY/header.png)

### Installation

```bash
yarn add iconat
```

or

```bash
npm install iconat
```



### Usage

```bash
import React from 'react'
import Iconat from 'iconat'

const App = () => {
  return (
    <Iconat
      size={22}
      color={'red'}
      icon={'heart'}
    />
  )
}

export default App
```



## Props

`color` : string | icon color.

`icon` : string | icon name.

`size` : number | icon size, default is 24.

`style` : object | custom styles property.



## License

MIT © [ahmedsamir](https://github.com/ahmedsamirdev)