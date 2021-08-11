import os

root = os.getcwd() + '/source'

excludeDir = 'self-management'

def file_name(file_dir):
    output = ''
    for dir in os.listdir(root):
        subDir = root + '/' + dir
        if os.path.isdir(subDir) != True:
            continue
        if excludeDir == dir.strip():
            continue
        output = output + '## ' + dir.strip() + '\r\n'
        for file in os.listdir(subDir):
            if os.path.isdir(subDir + '/' + file) == True:
                for img in os.listdir(subDir + '/' + file):
                    if img.endswith('.png') == True:
                        os.system('pngquant --ext .png --force ' + subDir + '/' + file + '/' + img)

            if file.endswith('.md') != True:
                continue;

            fileName = subDir + '/' + file;
            file_object = open(fileName, 'r')
            lines = file_object.readlines()
            title = lines[1].replace('title: ', '').strip('\r\n')
            file_object.close()
            path = dir + '/' + file
            output = output + f'- [{title}]({path})' + '\r\n'
    with open('source/' + "README.md", "w") as f:
        f.write(output)


file_name(root)
