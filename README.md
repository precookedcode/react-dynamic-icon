
# @precooked/react-dynamic-icon

A React component for rendering dynamic SVG icons with customizable paths and colors. The icon scales based on the provided `size` prop and defaults to a 24x24 size.

## Installation

To install the package, use the following command:

```bash
npm install @precooked/react-dynamic-icon
```

or

```bash
yarn add @precooked/react-dynamic-icon
```

## Usage

```tsx
import React from 'react';
import DynamicIcon from '@precooked/react-dynamic-icon';

const MyIcon = () => {
    const paths = [
        { d: "M10 10 H 90 V 90 H 10 Z", color: "primary" },
        { d: "M50 10 L 90 90 L 10 90 Z", color: "#ff0000" },
    ];

    return <DynamicIcon size={48} paths={paths} />;
};

export default MyIcon;
```

## Props

| Prop   | Type                            | Default | Description                                                                                                                                       |
|--------|---------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `size` | `number`                        | `24`    | The size of the icon (width and height in pixels).                                                                                                |
| `paths` | `Path[]`                        | -       | An array of path objects defining the SVG paths. Each object should contain a `d` attribute for the path's data and an optional `color` attribute. |
| `styles` | `React.CSSProperties`           | -       | Optional styles for the SVG element.                                                                                                              |

### Path Objects

Each path object should include:

- `d` (string): The `d` attribute of the SVG path. Defines the path data.
- `color` (string, optional): The color of the path. If it matches a key in the `colors` utility, the corresponding color will be applied. Otherwise, it will be treated as a valid CSS color.

### Important Note

The SVG icon's `viewBox` is set to `0 0 100 100`, meaning the paths should be designed with a 100x100 proportion for optimal display. Ensure that the paths are scaled accordingly for the best rendering results.

## License

This project is licensed under the MIT License.
