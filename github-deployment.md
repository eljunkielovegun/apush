# APUSH Study Guide

A comprehensive website for AP US History students, featuring detailed content for all nine historical periods, interactive timelines, and practice quizzes.

## Deployment Instructions for GitHub Pages

Follow these steps to deploy your APUSH Study Guide to GitHub Pages, making it accessible online for free.

### 1. Create a GitHub Account

If you don't already have one, create a free GitHub account at [github.com](https://github.com/).

### 2. Create a New Repository

1. Click on the "+" icon in the top right corner of GitHub and select "New repository"
2. Name your repository (e.g., "apush-study-guide")
3. Make it public
4. Click "Create repository"

### 3. Upload Your Files

There are two main ways to upload your files:

#### Option A: Using the GitHub Website (Easiest)

1. Click on "uploading an existing file" on the repository page
2. Drag and drop all the study guide files or click to select them from your computer
3. Add a commit message like "Initial upload of APUSH study guide"
4. Click "Commit changes"

#### Option B: Using Git (For Advanced Users)

If you're familiar with Git, you can clone the repository and push the files:

```bash
git clone https://github.com/yourusername/apush-study-guide.git
cd apush-study-guide
# Copy all your files to this directory
git add .
git commit -m "Initial upload of APUSH study guide"
git push origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab near the top)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually "main")
5. Select the folder (usually "/ (root)")
6. Click "Save"

### 5. Access Your Website

After enabling GitHub Pages, GitHub will provide you with a URL where your site is published. It typically follows this format:
```
https://yourusername.github.io/apush-study-guide/
```

The site may take a few minutes to become available after you enable GitHub Pages.

## Website Structure

```
apush-study-guide/
├── index.html            # Home page
├── about.html            # About page
├── quiz.html             # Quiz page
├── timelines.html        # Timelines visualization page
├── period1.html          # Period 1 content page
│   ... (other period pages)
├── styles.css            # Main stylesheet
├── script.js             # Main JavaScript file
└── quiz.js               # Quiz functionality
```

## Customization Tips

1. **Add More Periods**: Create additional period pages by copying the structure of period1.html
2. **Expand Quizzes**: Add more questions to the quizData object in quiz.js
3. **Custom Domain**: You can set up a custom domain in GitHub Pages settings if desired
4. **Analytics**: Consider adding Google Analytics to track visitor statistics

## Maintenance

To update your site after making changes:

1. If using the GitHub website: Navigate to the file you want to change, click the pencil icon to edit, make your changes, and commit
2. If using Git: Make changes locally, then commit and push them:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/) for editing this README
- [Basic Git Commands](https://education.github.com/git-cheat-sheet-education.pdf)

## License

This project is created for educational purposes.
