$names = @("file1", "file2", "file3")
$extensions = @(".txt", ".log")

foreach ($name in $names) {
    foreach ($ext in $extensions) {
        New-Item -Path "$name$ext" -ItemType File
    }
}