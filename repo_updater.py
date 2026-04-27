import os
import difflib
import sys

# Configuration
OUTPUT_FILE = "repo_dump.md"
IGNORE_DIRS = {
    "node_modules", ".git", "dist", "build", "coverage", "__pycache__", 
    ".venv", "venv", ".next", ".vercel"
}
IGNORE_FILES = {
    "package-lock.json", "yarn.lock", "repo_dump.md", ".DS_Store", 
    "repo_updater.py", "repo_state.json", "hero.png", "favicon.svg", "vite.svg"
}
EXTENSIONS_TO_INCLUDE = {
    ".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".json", ".md", ".py", ".sh", ".ps1"
}

def get_repo_content():
    lines = []
    lines.append("# Project Repository Dump\n")
    lines.append(f"Generated on: {os.popen('date /t').read().strip()} {os.popen('time /t').read().strip()}\n\n")
    
    # Simple tree structure
    lines.append("## Project Structure\n```text\n")
    for root, dirs, files in os.walk("."):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        level = root.replace(".", "").count(os.sep)
        indent = " " * 4 * level
        lines.append(f"{indent}{os.path.basename(root)}/\n")
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            if f not in IGNORE_FILES and any(f.endswith(ext) for ext in EXTENSIONS_TO_INCLUDE):
                lines.append(f"{sub_indent}{f}\n")
    lines.append("```\n\n")

    # Content of files
    for root, dirs, files in os.walk("."):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        for f in files:
            if f in IGNORE_FILES:
                continue
            if not any(f.endswith(ext) for ext in EXTENSIONS_TO_INCLUDE):
                continue
                
            file_path = os.path.join(root, f)
            rel_path = os.path.relpath(file_path, ".")
            
            lines.append(f"## File: {rel_path}\n")
            
            # Determine language for markdown block
            ext = os.path.splitext(f)[1]
            lang = "text"
            if ext in [".js", ".jsx"]: lang = "javascript"
            elif ext in [".ts", ".tsx"]: lang = "typescript"
            elif ext in [".css"]: lang = "css"
            elif ext in [".html"]: lang = "html"
            elif ext in [".json"]: lang = "json"
            elif ext in [".md"]: lang = "markdown"
            elif ext in [".py"]: lang = "python"
            
            lines.append(f"```{lang}\n")
            try:
                with open(file_path, "r", encoding="utf-8") as file_in:
                    lines.append(file_in.read())
            except Exception as e:
                lines.append(f"Error reading file: {e}\n")
            
            if not lines[-1].endswith("\n"):
                lines.append("\n")
            lines.append("```\n\n")
            
    return "".join(lines)

def main():
    print("Analyzing repository...")
    new_content = get_repo_content()
    
    old_content = ""
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
            old_content = f.read()
    
    if old_content == new_content:
        print("No changes detected. Repository dump is up to date.")
        return

    # Calculate differences
    old_lines = old_content.splitlines(keepends=True)
    new_lines = new_content.splitlines(keepends=True)
    
    diff = list(difflib.ndiff(old_lines, new_lines))
    
    added = len([l for l in diff if l.startswith("+ ")])
    deleted = len([l for l in diff if l.startswith("- ")])
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"Repository dump updated: {OUTPUT_FILE}")
    print(f"Stats: +{added} lines added, -{deleted} lines deleted.")

if __name__ == "__main__":
    main()
