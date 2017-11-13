import os,sys
import re
import glob

correct_filename_format_re = re.compile('(\d{2})(\d{2})Notes\.md')
comment_line_re = re.compile('^\[.+\]$')

def parse_file(year, filename = sys.argv[1], print_output = True):
    filename_end = filename.split('/')[-1]
    date_match = correct_filename_format_re.match(filename_end)
    if filename == "":
        print("Usage: print_line_list.py <filename/directory_name>")
    elif os.path.isfile(filename) is False:
        print("filename given does not exist.")
    else:
        lines = []
        date = "null" if date_match is None else date_match.group(1) + '-' + date_match.group(2) + '-' + str(year)
        lines += ['"' + date + '": [']
        with open(filename, 'r') as f:
            content_lines = ['\t' + '"' + line.replace('\n', '').replace('"', "'").replace("\\", "\\\\") + '",' for line in f.readlines() if (line.replace('\n', '') != "")] # and comment_line_re.match(line) is None)
            lines += content_lines
        lines += [']']

        if print_output:
            for line in lines:
                print(line)

        return lines

def parse_notes_directory(year, notes_directory = sys.argv[1], print_output = True):
    all_lines = []
    if os.path.isdir(notes_directory):
        for filename in glob.glob(notes_directory + '/*Notes.md'):
            new_lines = parse_file(year, filename=filename, print_output=False)
            new_lines[-1] = new_lines[-1] + ','
            all_lines += new_lines
        all_lines[-1] = all_lines[-1][:-1]

    if print_output:
        for line in all_lines:
            print(line)

    return all_lines


def main():
    year = sys.argv[2]
    try:
        year = int(year)
    except ValueError:
        print("Please enter a valid numerical year.")
    else:
        arg = sys.argv[1]
        if os.path.isfile(arg):
            parse_file(year)
        elif os.path.isdir(arg):
            parse_notes_directory(year)

main()