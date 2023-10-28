import os
import re
import requests
import glob

def download_file(url):
    local_filename = "media/" + url.split('/')[-1]
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

def find_urls_download_replace(html_content, base_url, html_file_path):
    # Regex pattern to identify the URLs
    url_pattern = r"(?<=['\"\(\s])\/\/v4-upload\.goalsites\.com\/[^\s\"')]+"
    urls = re.findall(url_pattern, html_content)

    # We will replace URLs with local file names in this content string
    new_content = html_content

    for partial_url in urls:
        full_url = f"{base_url}{partial_url}"

        try:
            # Download the file and get the local file name
            filename = download_file(full_url)
            print(f"Downloaded '{filename}' from '{full_url}'")

            if (filename != "index.html"):
                filename = "../" + filename
            # Replace the URL with the local file name in the content
            new_content = new_content.replace(partial_url, filename)

        except Exception as e:
            print(f"An error occurred: {e}")

    # Write the updated content back to the file
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

def main(directory_path):
    # Check all html files in the specified directory and its subdirectories
    html_files_pattern = os.path.join(directory_path, "**", "*.html")  # Recursive pattern

    # Gather html files from directory and subdirectories
    html_files = glob.glob(html_files_pattern, recursive=True)  # Recursive glob search

    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as file:
            content = file.read()
            base_url = "https:"  # Prepended before the relative URLs found by the regex

            # Process the content, download files, and replace URLs
            find_urls_download_replace(content, base_url, html_file)

if __name__ == "__main__":
    # Specify the directory containing your HTML files
    path_to_html_files = "./"  # e.g., "/home/username/your_html_files_directory"
    main(path_to_html_files)
