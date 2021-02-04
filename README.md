# React Starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also includes [Material-UI](https://material-ui.com/getting-started/installation/) library and [Routing](https://reactrouter.com/web/guides/quick-start) set up for you.

## Available commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Customize metadata

- Change `title` and `description` in the `index.html` file in `public` folder.
- Add your own fonts. In `index.html` file, you can add `<link>` specifying the font name and its weight. This configuration can be downloaded fron [Google Fonts](https://fonts.google.com/).

```html
<link
  href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
  rel="stylesheet"
/>
```

Now, add this font name `Lato` in Typography config `theme` in `utils` folder to reflect the changes in the app.

```jsx
const theme = responsiveFontSizes(
  createMuiTheme({
      fontFamily: [
        'Lato', // <-- Here
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })
);
```
