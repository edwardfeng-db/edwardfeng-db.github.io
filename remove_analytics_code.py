import os

def remove_analytics_code(file_path, code_snippet):
    # Read in the file
    with open(file_path, 'r', encoding='utf-8') as file:
        filedata = file.read()

    # Check if the code snippet is in the file
    if code_snippet in filedata:
        # Replace the target code snippet with an empty string
        new_data = filedata.replace(code_snippet, '')

        # Write the file out again
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_data)

        print(f"Removed analytics code from {file_path}")
    else:
        print(f"No analytics code found in {file_path}")

def main(directory, code_snippet):
    # Walk through the directory structure
    for dirpath, dirnames, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith('.html'):  # Check for .html files
                # Construct the path to the file
                file_path = os.path.join(dirpath, filename)

                # Remove the analytics code in the file
                remove_analytics_code(file_path, code_snippet)

if __name__ == "__main__":
    # Set the directory you want to start from
    root_directory = './'  # Replace with your specific directory path

    # Analytics code snippet to be removed
    analytics_code = """<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-112495587-35'></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-112495587-35');
    </script>"""

    main(root_directory, analytics_code)
