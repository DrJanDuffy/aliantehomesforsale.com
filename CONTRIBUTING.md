# 🤝 Contributing to Aliante Homes For Sale

Thank you for your interest in contributing to our project! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)
- [Support](#support)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be respectful** and inclusive
- **Be collaborative** and open to feedback
- **Be professional** in all interactions
- **Be constructive** in criticism and suggestions

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **GitHub account** - [Sign up here](https://github.com/)

### Fork and Clone

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/aliantehomesforsale.com.git
   cd aliantehomesforsale.com
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/DrJanDuffy/aliantehomesforsale.com.git
   ```

## 🛠️ Development Setup

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Verify setup
npm run type-check
npm run lint
npm run build
```

### Development Server

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 📝 Contributing Guidelines

### Issue Reporting

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use clear titles** that describe the problem
3. **Provide detailed descriptions** with steps to reproduce
4. **Include environment information** (OS, Node.js version, etc.)
5. **Add screenshots** for UI-related issues

### Issue Templates

We provide issue templates for:
- 🐛 **Bug Report** - Report a bug
- 💡 **Feature Request** - Suggest a new feature
- 📚 **Documentation** - Improve documentation
- 🔧 **Enhancement** - Suggest improvements

### Feature Requests

When suggesting features:
- **Explain the problem** you're trying to solve
- **Describe the solution** you'd like to see
- **Consider alternatives** you've explored
- **Show mockups** if applicable

## 🎯 Code Standards

### TypeScript

- **Strict mode** is enabled - no `any` types
- **Proper typing** for all functions and variables
- **Interface definitions** for complex objects
- **Generic types** where appropriate

### React/Next.js

- **Functional components** with hooks
- **TypeScript interfaces** for props
- **Proper error boundaries** and loading states
- **Accessibility** considerations (ARIA labels, semantic HTML)

### Styling

- **Tailwind CSS** for utility-first styling
- **CSS modules** for component-specific styles
- **Responsive design** principles
- **Dark mode** support where applicable

### Code Quality

- **Biome** for linting and formatting
- **Conventional commits** for commit messages
- **Clean, readable code** with proper comments
- **DRY principle** - Don't Repeat Yourself

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test files
npm test -- --testPathPattern=ComponentName
```

### Writing Tests

- **Test coverage** should be >80%
- **Unit tests** for utility functions
- **Component tests** for React components
- **Integration tests** for API routes
- **E2E tests** for critical user flows

### Test Structure

```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interactions', () => {
    // Test implementation
  });

  it('should handle errors gracefully', () => {
    // Test implementation
  });
});
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass** locally
4. **Update CHANGELOG.md** with your changes
5. **Squash commits** into logical units

### PR Guidelines

- **Clear title** describing the change
- **Detailed description** of what and why
- **Link related issues** using keywords
- **Add screenshots** for UI changes
- **Request reviews** from maintainers

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] CHANGELOG updated
```

## 🚀 Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR** - Breaking changes
- **MINOR** - New features, backward compatible
- **PATCH** - Bug fixes, backward compatible

### Release Steps

1. **Create release branch** from main
2. **Update version** in package.json
3. **Update CHANGELOG.md** with changes
4. **Create pull request** for review
5. **Merge and tag** the release
6. **Deploy** to production

### Automated Releases

Our CI/CD pipeline automatically:
- **Builds** the application
- **Runs tests** and quality checks
- **Deploys** to Vercel
- **Creates GitHub releases**

## 📚 Documentation

### Code Documentation

- **JSDoc comments** for functions and classes
- **README updates** for new features
- **API documentation** for endpoints
- **Component examples** in Storybook

### Contributing to Docs

- **Clear, concise** writing
- **Code examples** where helpful
- **Screenshots** for complex features
- **Regular updates** as features evolve

## 🔧 Development Tools

### Recommended Extensions

- **VS Code** with TypeScript support
- **ESLint/Prettier** for code formatting
- **GitLens** for Git integration
- **Thunder Client** for API testing

### Debugging

- **Next.js DevTools** for debugging
- **React DevTools** for component inspection
- **Browser DevTools** for frontend debugging
- **Console logging** for development

## 🆘 Support

### Getting Help

- **GitHub Issues** for bug reports
- **GitHub Discussions** for questions
- **Discord/Slack** for real-time chat
- **Email** for private matters

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GitHub Guides](https://guides.github.com/)

## 🙏 Recognition

### Contributors

All contributors are recognized in:
- **README.md** contributors section
- **GitHub contributors** page
- **Release notes** and changelog
- **Project documentation**

### Contribution Levels

- **Bronze** - 1-5 contributions
- **Silver** - 6-15 contributions  
- **Gold** - 16+ contributions
- **Platinum** - Major feature contributions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Aliante Homes For Sale! 🏠**

*Together we're building the future of real estate technology*
