# Dashboard Project

This project is a dashboard application built with React. It includes various components and icons to provide a comprehensive user interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Icons](#icons)
- [Styling](#styling)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/BhautikVekariya21/dash.git
    ```
2. Navigate to the project directory:
    ```sh
    cd dashboard
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Features

- Responsive design
- Sidebar navigation
- Dynamic content area
- Customizable themes
- SVG icons

## Components

- **App**: The main component that includes the sidebar and content components.
- **Sidebar**: The sidebar component that provides navigation links.
- **Content**: The main content area of the dashboard.

## Icons

The project includes various SVG icons located in the `src/assets/icons` directory:
- `empty_check.svg`
- `check.svg`
- `card.svg`
- `budget.svg`
- `bills.svg`
- `bell.svg`
- `alert.svg`

## Styling

The project uses a CSS file (`src/App.css`) for styling. It includes custom properties (CSS variables) for colors, fonts, and other design elements.

```css
/* ...existing code... */
```

## Context

The project uses a context provider (`SidebarProvider`) to manage the state of the sidebar.

```jsx
// ...existing code...
import { SidebarProvider } from './context/sidebarContext.jsx';
// ...existing code...
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Acknowledgments

- [React](https://reactjs.org/)
- [Google Fonts](https://fonts.google.com/)
- [SVG Icons](https://www.svgrepo.com/)

## License

This project is licensed under the MIT License.
