import os

def replace_string_in_file(file_path, target_string, replacement_string):
    # Read in the file
    with open(file_path, 'r', encoding='utf-8') as file:
        filedata = file.read()

    # Replace the target string with the replacement string
    new_data = filedata.replace(target_string, replacement_string)

    # Write the file out again
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_data)

def main(directory, target_string, replacement_string):
    # Walk through the directory structure
    for dirpath, dirnames, filenames in os.walk(directory):
        for filename in filenames:
            if filename.endswith('.html'):  # Check for .html files
                # Construct the path to the file
                file_path = os.path.join(dirpath, filename)

                # Replace the string in the file
                replace_string_in_file(file_path, target_string, replacement_string)

                print(f"Processed {file_path}")

if __name__ == "__main__":
    # Set the directory you want to start from
    root_directory = './'  # Replace with your specific directory path
    old_url = '//v4-upload.goalsites.com/155/image_1528539161_weixin.png'
    new_url = 'media/weixin.png'

    main(root_directory, old_url, new_url)
