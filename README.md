# Winston's Winter Wonderland

An immersive interactive holiday experience featuring Harry Winston jewelry brand, providing users with an enchanting winter wonderland journey.

## 🌐 Demo

**[🚀 Live Demo](https://creativetravelist.github.io/holiday-2024/)**

## 🌟 Features

- **Interactive Map Journey**: SVG animated paths with clickable exploration points
- **Three-Step Quest System**: Progressive challenges with jewelry collection rewards
- **Exclusive Wallpaper Downloads**: Personalized holiday wallpapers as quest rewards
- **Personalized Holiday Cards**: Create and share custom greeting cards with digital signatures
- **Immersive Audio Experience**: Background music system with user controls
- **Responsive Design**: Optimized for mobile devices with maximum 400px width constraint

## 🚀 Tech Stack

### Frontend Framework & Libraries

- **React 18.2.0**: Modern user interface framework
- **Material-UI 5.8.6**: Google Material Design system
- **React Router 6.3.0**: Single-page application routing management
- **Swiper 11.1.14**: Touch slider component for smooth carousel experience

### Core Functionality Libraries

- **html2canvas 1.4.1**: Convert web elements to images for download functionality
- **@emotion/react & @emotion/styled**: CSS-in-JS styling solution
- **dayjs 1.11.5**: Lightweight date manipulation library
- **notistack 2.0.5**: Elegant notification system

### Integration Services

- **react-ga4 2.1.0**: Google Analytics 4 tracking
- **@line/liff 2.21.2**: LINE Front-end Framework for social sharing

### Development Tools

- **ESLint & Prettier**: Code quality control and formatting
- **Husky 8.0.3**: Git hooks for code quality enforcement
- **Sass 1.53.0**: CSS preprocessor for advanced styling

## 📱 Application Flow

1. **Opening Page** (`/`) - Welcome page with animated introduction and game rules
2. **Interactive Map** (`/map`) - Main exploration interface with three quest points
3. **Step 1 Wallpaper** (`/step1-wallpaper`) - First quest reward and wallpaper download
4. **Step 2 Wallpaper** (`/step2-wallpaper`) - Second quest completion and wallpaper
5. **Signing Page** (`/signing`) - Personalized card creation with three sub-flows:
   - Choose card template
   - Digital signature input
   - Final card preview and sharing

## 🛠️ Development Commands

### Install Dependencies

```bash
yarn install
```

### Local Development

```bash
yarn start
```

Development server will start at `http://localhost:3000`

### Build Project

```bash
# Development build
yarn build:dev

# Production build
yarn build:prod

# Standard build
yarn build
```

### Code Linting and Formatting

```bash
# Bundle analysis
yarn analyze

# Package build for deployment
yarn zip

# Deploy to GitHub Pages
yarn deploy
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Tools/             # Music control and utility components
│   ├── IconButtons/       # Interactive button components
│   ├── Loadable.js        # Lazy loading wrapper
│   └── Logo.js            # Brand logo component
├── pages/             # Page components
│   ├── OpeningPage/       # Welcome and rules page
│   ├── Map/              # Main interactive map
│   │   └── components/    # Map-specific modals (Step1, Step2, Step3, Envelope)
│   ├── Step1Wallpaper/   # First quest wallpaper page
│   ├── Step2Wallpaper/   # Second quest wallpaper page
│   └── SigningPage/      # Card creation and signing
│       ├── components/    # Card components and swiper
│       └── utils/         # LINE LIFF sharing utilities
├── customComponents/   # Custom reusable components
│   ├── CustomImage.js     # Enhanced image component
│   └── CustomModal.js     # Reusable modal component
├── configs/           # Configuration files
│   ├── constant.js        # Image URLs and constants
│   ├── holiday.js         # Holiday-specific configurations
│   ├── envConfig.js       # Environment configurations
│   └── toolbarConfig.js   # Toolbar configurations
├── hooks/             # Custom React Hooks
├── layouts/           # Layout components
├── providers/         # Context Providers (Loading, Menu)
├── routes/            # Route configuration
├── themes/            # Theme and styling utilities
└── utils/             # Utility functions
```

## 🎨 Design System

### Animation System

- **sparkleAnimation**: Enchanting sparkle effects for interactive elements
- **hintAnimation**: Subtle hint animations for user guidance
- **draw**: SVG path drawing animations for route reveals
- **showfromLeft/Bottom**: Directional reveal animations

### Responsive Design

- **Mobile-First Approach**: Optimized primarily for mobile experience
- **Device Support**: iPhone, Android across various screen sizes
- **Constrained Layout**: Maximum 400px width for optimal experience
- **Touch-Friendly**: Large interactive areas and gesture support

## 📊 Performance Optimization

- **Code Splitting**: Using React.lazy for route-level code splitting
- **Image Optimization**: CDN image loading with strategic preloading
- **Bundle Analysis**: Built-in source-map-explorer analysis tool
- **Memory Management**: Efficient cleanup of timers and event listeners

## 💡 Development Highlights

1. **Immersive User Experience**: Carefully crafted journey with audio-visual elements
2. **Brand Integration**: Seamless integration of Harry Winston brand elements
3. **Performance Monitoring**: Google Analytics 4 integration for user behavior analysis
4. **Social Sharing**: LINE LIFF integration for easy social media sharing
5. **Accessibility Considerations**: Keyboard navigation and screen reader support

## 📱 Technical Features

- **PWA Ready**: Progressive Web App capabilities with manifest configuration
- **Touch Optimized**: Enhanced touch interactions for mobile devices
- **Audio Management**: Sophisticated background music control system
- **Canvas Rendering**: HTML5 Canvas for dynamic image generation and downloads
- **State Management**: Context-based state management for complex user flows

---

**Note**: This project showcases advanced React development practices, immersive user experience design, and brand storytelling through interactive web technology.
