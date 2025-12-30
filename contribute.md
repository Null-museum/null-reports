# Contributing to NullMuseum

Thank you for your interest in contributing to NullMuseum! This guide will help you add your NULL error screenshots to our community gallery.

## 📋 Screenshot Guidelines

Before submitting, please ensure your screenshots meet these requirements:

- **Content**: Screenshots showing NULL errors, null pointer exceptions, or NULL-related bugs in programs or systems
- **Formats**: JPG, PNG, or WebP
- **File Size**: Maximum 5MB per screenshot (smaller is better!)
- **Naming**: Use descriptive lowercase names with hyphens (e.g., `chrome-null-error.jpg`, `windows-null-pointer.png`)
- **Quality**: Clear, readable screenshots showing the error
- **Privacy**: Remove any personal or sensitive information before submitting

## 🚀 How to Contribute

### Step 1: Fork the Repository

1. Visit the [null-reports GitHub repository](https://github.com/Null-museum/null-reports)
2. Click the **Fork** button in the top right
3. This creates your own copy of the repository

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/null-reports.git
cd null-reports
```

### Step 3: Add Your Screenshots

1. Place your screenshots in the `public/gallery/` folder
2. Make sure filenames follow the naming guidelines above

```bash
# Example: copy your screenshot to the gallery folder
cp ~/my-null-error.png public/gallery/
```

### Step 4: Commit Your Changes

```bash
git add public/gallery/
git commit -m "Add null error screenshot from [program name]"
git push origin main
```

### Step 5: Create a Pull Request

1. Go to your fork on GitHub
2. Click **Pull Request**
3. Click **New Pull Request**
4. Add a description of your screenshot(s)
5. Submit your PR!

## 📝 Pull Request Template

When creating your PR, please include:

```markdown
## Screenshots Added

- `filename.png`: Brief description of where/when the NULL error occurred

## Checklist

- [ ] Screenshot is under 5MB
- [ ] Filename uses lowercase with hyphens
- [ ] No personal or sensitive information visible
- [ ] Shows a clear NULL error
```

## ⏱️ Review Process

- PRs are typically reviewed within 1-3 days
- We may request changes if screenshots don't meet guidelines
- Once approved, your screenshots will appear in the gallery!

## 🤝 Code of Conduct

- Be respectful and welcoming
- Only submit appropriate content
- Don't spam or abuse the system
- Have fun documenting these curious bugs!

## 💡 Tips

- **Optimize images** before uploading (use tools like TinyPNG)
- **Crop carefully** - focus on the NULL error itself
- **Test locally** by running `npm run dev` after adding screenshots
- **One PR per batch** - you can add multiple screenshots in one PR

## ❓ Need Help?

- Open an issue on GitHub
- Check existing issues for similar questions
- Be patient - we're all volunteers!

Thank you for contributing to NullMuseum! 🐛
