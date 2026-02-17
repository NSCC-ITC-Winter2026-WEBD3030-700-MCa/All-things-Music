# Contributing to All-Things-Music

Welcome! We're excited that you want to contribute to All-Things-Music. Whether you're fixing a bug, adding new content, improving documentation, or suggesting features, your help is greatly appreciated.

This guide will help you get started and ensure a smooth contribution process for everyone involved.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
- [Local Development Setup](#local-development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

## Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

## How to Contribute

### Reporting Bugs

Before submitting a bug report:

1. **Search existing issues** to check if the bug has already been reported.
2. **Update to the latest version** to see if the issue has been fixed.
3. **Gather information** about the bug (steps to reproduce, expected vs actual behavior).

When filing a bug report, please include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Your environment (OS, Node.js version, browser if applicable)
- Screenshots or error logs, if relevant

### Suggesting Features

We welcome feature suggestions! Before submitting:

1. **Check existing issues** to see if the feature has already been requested.
2. **Consider the scope** — does this feature align with the project's goals?

When suggesting a feature:

- Use a clear, descriptive title
- Explain the problem the feature would solve
- Describe the proposed solution
- Include any alternatives you've considered

## Local Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm or yarn

### Installation

1. **Fork the repository** on GitHub.

2. **Clone your fork:**

   ```bash
   git clone https://github.com/<your-username>/All-things-Music.git
   cd All-things-Music
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Preview the build:**

   ```bash
   npm run build
   npm run preview
   ```

## Pull Request Process

### Branch Naming

Use descriptive branch names following this convention:

- `feature/<short-description>` — for new features
- `fix/<short-description>` — for bug fixes
- `docs/<short-description>` — for documentation changes
- `refactor/<short-description>` — for code refactoring

### Creating a Pull Request

1. **Create a new branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit with clear, descriptive messages:

   ```bash
   git commit -m "Add: brief description of the change"
   ```

3. **Push to your fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** against the `main` branch.

### PR Description Guidelines

Your PR description should include:

- **Summary:** What does this PR do?
- **Related Issue:** Link to any related issue (e.g., `Closes #123`)
- **Changes Made:** List the key changes
- **Testing:** How did you test these changes?
- **Screenshots:** If applicable, include before/after screenshots

### Review Process

- All PRs require at least one approval before merging.
- Address any feedback or requested changes promptly.
- Keep PRs focused — prefer smaller, targeted changes over large, sweeping updates.

## Style Guide

### General Guidelines

- Write clear, concise code and documentation.
- Use meaningful variable and function names.
- Keep files organized and follow the existing project structure.

### Markdown

- Use proper heading hierarchy (`#`, `##`, `###`).
- Add blank lines before and after code blocks.
- Use fenced code blocks with language identifiers.

### Commit Messages

Follow this format for commit messages:

```
<type>: <short description>

[optional body with more details]
```

Types:
- `Add` — new feature or content
- `Fix` — bug fix
- `Update` — changes to existing functionality
- `Remove` — removing code or content
- `Docs` — documentation only changes
- `Refactor` — code changes that don't add features or fix bugs

---

Thank you for contributing to All-Things-Music! Your efforts help make this project better for everyone.
