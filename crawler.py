import os
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup

def save_html_file(content, path):
    with open(path, 'w', encoding='utf-8') as file:
        file.write(content)

def download_html_files(base_url, file_path):
    # Read the content of the local HTML file
    with open(file_path, 'r', encoding='utf-8') as file:
        local_html_content = file.read()

    soup = BeautifulSoup(local_html_content, 'html.parser')

    # Find all links in the file (assuming they're to HTML pages)
    links = soup.find_all('a', href=True)

    for link in links:
        href = link['href']

        # Check if the URL is absolute
        if not href.startswith('http'):
            href = urljoin(base_url, href)

        # only check html files
        if not href.endswith(".html"):
            continue

        # Make the request
        response = requests.get(href)

        # If the response was successful, no exception will be raised
        response.raise_for_status()

        # Check if content is HTML
        if 'text/html' in response.headers['Content-Type']:
            content = response.text

            # Extract the filename from the URL
            filename = href[len(base_url):]

            # Check if the URL ends with a slash, then it is likely an index page
            if href.endswith('/'):
                filename = 'index.html'

            # You may want to create a directory to save the files
            download_dir = 'downloaded_files'
            if not os.path.exists(download_dir):
                os.makedirs(download_dir)

            print(download_dir  + "/" + filename.split('/')[1])

            file_dir = download_dir  + "/" + filename.split('/')[1]

            if not os.path.exists(file_dir):
                os.makedirs(file_dir)

            file_path = os.path.join(download_dir + "/" + filename.split('/')[1], filename.split('/')[-1])


            # Save the content to an HTML file
            save_html_file(content, file_path)
            print(f"Downloaded '{href}' as '{file_path}'")

if __name__ == "__main__":
    # Replace with the base URL of the website you are crawling
    base_url = 'http://www.kingon-led.com'
    # Replace with the path to your local 'index.html' file
    file_path = 'index.html'

    download_html_files(base_url, file_path)
