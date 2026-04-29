# Resume Builder App

A modern, responsive resume builder application built with React, TypeScript, and Tailwind CSS. Create professional resumes with a live preview feature.

## 🚀 Features

- **User Authentication**: Login and registration pages
- **Live Resume Preview**: See your resume update in real-time as you type
- **Comprehensive Sections**:
  - Personal Information (Name, Email, Phone)
  - Professional Summary
  - Work Experience (Company, Role, Duration, Description)
  - Education (School, Degree, Year)
  - Skills (Add multiple skills with tags)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Development**: ESLint for code quality

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/jyoti323/Resume_builder_app.git
cd resume_builder_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Usage

1. **Register/Login**: Create an account or log in
2. **Build Resume**: Fill in your personal information, summary, experience, education, and skills
3. **Live Preview**: See your resume update instantly on the right side
4. **Save**: Click the save button to store your resume (currently shows a placeholder alert)

## 🎯 Project Structure

```
src/
├── components/
│   ├── navbar.tsx          # Navigation component
│   └── resumeform.tsx      # Resume form component
├── pages/
│   ├── builder.tsx         # Main resume builder page
│   ├── login.tsx           # Login page
│   └── register.tsx        # Registration page
├── assets/                 # Static assets
├── App.tsx                 # Main app component
├── main.tsx                # App entry point
└── index.css               # Global styles with Tailwind
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built by jyoti323

---

*Built with ❤️ using React & TypeScript*
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
