# Interactive Q&A Accordion

A beautiful and responsive Q&A management application built with React, TypeScript, and Tailwind CSS. This application allows users to create, edit, and manage questions and answers in an accordion-style interface.

## Features

- ✨ Create new Q&A pairs
- 📝 Edit existing questions and answers
- 🗑️ Delete Q&A pairs
- 🔍 Expand/collapse answers
- 📱 Fully responsive design (mobile, tablet, and desktop)
- 🎨 Beautiful UI with glassmorphism effects
- 🌙 Dark mode support

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd qa-accordion
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Adding a Q&A

1. Enter your question in the "Enter your question..." input field
2. Enter your answer in the "Enter your answer..." textarea
3. Click "Add Question & Answer" button

### Editing a Q&A

1. Click the edit (pencil) icon next to the question
2. Modify the question and/or answer
3. Click "Save Changes" to update, or "Cancel" to discard changes

### Deleting a Q&A

1. Click the delete (trash) icon next to the question
2. The Q&A pair will be removed immediately

### Viewing Answers

- Click on any question to expand/collapse its answer
- Multiple answers can be viewed simultaneously

## Development

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/         # React components
│   ├── QAAccordion.tsx    # Main accordion component
│   ├── QAForm.tsx         # Form for adding new Q&A
│   └── QAItem.tsx         # Individual Q&A item
├── types/             # TypeScript type definitions
├── lib/              # Utility functions
└── App.tsx           # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.