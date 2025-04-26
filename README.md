# Iconat
[![npm version](https://img.shields.io/npm/v/iconat)](https://www.npmjs.com/package/iconat)
[![minzip size](https://img.shields.io/bundlephobia/minzip/iconat)](https://www.npmjs.com/package/iconat)
[![dependencies](https://img.shields.io/librariesio/dependents/npm/iconat)](https://www.npmjs.com/package/iconat)
[![node version](https://img.shields.io/node/v/iconat)](https://www.npmjs.com/package/iconat)

This package is a collection of high-quality icons for React applications. The library provides a wide variety of icons in different categories, including weather, communication, development, editors, files, finance & e-commerce, images, layout, maps & travel, media & devices, security, education, user interface, and more. 

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
import Iconat from 'iconat'

const App = () => {
  return (
    <Iconat
      size={22}
      color={'red'}
      icon={'stopwatch'}
    />
  )
}

export default App
```

## Documentation
[Icons search](https://iconat.vercel.app/icons)

## Props

`color` : string | icon color.

`icon` : string | icon name.

`size` : number | icon size, default is 24.

`style` : object | custom styles property.



## License

MIT © [ahmedsamir](https://github.com/ahmedsamirdev)
