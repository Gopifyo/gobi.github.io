# VibeOS Deployment Guide

This portfolio is built with React 19 and Vite. To deploy it to GitHub Pages (`https://gopifyo.github.io/gobi/`), follow these steps:

## 1. Prepare your Local Environment
Ensure you have the latest code in your local folder. **Delete the `node_modules` folder** if it exists before trying to push, or ensure the `.gitignore` file is present.

## 2. Initialize and Push (The "Clean Start" Method)
If you are getting errors, run these commands in order:

```bash
# 1. Start fresh
rm -rf .git
git init

# 2. Add files (Now with .gitignore active)
git add .

# 3. Commit
git commit -m "Launch VibeOS"

# 4. Set branch
git branch -M main

# 5. Link to GitHub (Updated for repo name: gobi)
git remote add origin https://github.com/gopifyo/gobi.git

# 6. Push (Force push to overwrite any old junk on the repo)
git push -u origin main --force
```

## 3. Troubleshooting Common Push Errors

### "Permission Denied (403)"
GitHub no longer accepts your normal password for command line pushes.
- **Solution**: You must use a **Personal Access Token (PAT)**. 
- Go to GitHub Settings > Developer Settings > Personal Access Tokens > Tokens (classic). 
- Generate a token with `repo` permissions. Use this token as your "password" when the terminal asks for it.

### "Repository not found"
- **Solution**: Verify the URL. Run `git remote -v`. If it's wrong, fix it with:
  `git remote set-url origin https://github.com/gopifyo/gobi.git`

### "Remote rejected" or "Large file detected"
- **Solution**: This usually means you tried to push `node_modules`. 
- Ensure the `.gitignore` file is in your folder. 
- Run `git rm -r --cached .` followed by `git add .` to reset the tracking.

## 4. Configure GitHub Pages
1. Go to your repository on GitHub (`gobi`).
2. **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

---
*Created by the Vibe Agent for Gobinath.*