---
layout: post
title: Basic Unix on MacOS
date: 2017-07-09
type: post
published: true
status: publish
categories:
- reading-notes
tags:
- education
- bash
meta:
    _edit_last: '1'
    author:
    email: natseg@gmail.com
    display_name: natseg
---

Here is a summary of my notes of the book 'Learning Unix for OS X' by Dave Taylor.

A directory is just another kind of file

BASIC COMMANDS

{% highlight bash linenos %}
$ ps -asx (to list all programs and processes for all users)
$ ps -ax | grep <program>
$ cp <search1> <search2> ~ (copy)
$ ls -a (list all)
$ <command> -options <filename(s)>s
$ pwd - Print Working Directory
$ man - Manual
$ less - Long Text File
$ grep - pattern filename
$ cp - copy
$ mv - move
$ top - Running Applications and Processes
$ ls -l - List files and directories
$ open - open file or program with default application
{% endhighlight %}

Exception in order of arguments

` sort -o 'sortedfilename' -n 'sortmefilename'`

Paste escaped text by using ctrl + meta + V (only in Terminal)

---

SHORTCUTS

CTRL + U = Wholeline delete
CTRL + S / CTRL + Q = pause/resume printing of a program executing

---

ALIASING

ls=/bin/ls -af
rm= rm - i
mv= mv -i
cp= cp -i

-i interactive adds prompt when deleting / overwriting

`$ alias -' get all aliases`

---

LIST INFORMATION

`$ ls`

-C sorted down
-x sorted across
-F (appends '/' to directories)
-d shows info about a directory and not its contents
-l more info
-a list all files (including hidden files)
-R recursive

---

PERMISSIONS

{% highlight bash %}
d             | rwx                             | r - x | ---
{% endhighlight %}

directory | Read Write eXecute  | read nowrite execute | nothing allowed
owner's permissions    group permissions     | other users

-
plain file  | ...

---

CHANGING

`$ chmod`

ie change mode

o = others
g = group
u = current user
a = all others

{% highlight bash linenos %}

$ chmod au -w removes write permission for all others and current user
$ chmod au +w adds write permission for all others and current user
$ chmod ug=rw * removes write permission for user and group for all files and directories in current directory (not recursive) - check this one
$ chmod go= removes all permissions for group and others
{% endhighlight %}

`$ chgrp`

ie change group

`$ chown`

ie change owner
only available for sudo
`$ sudo chown 'owner' 'targetowned'`

FIND

`$ sudo find | -name 'stufftolookfor' -print`

sudo to avoid read permission issues

---

DISPLAY

`$ cat`

ie concatenate
streams content of a file till its end
hard to tell when a file begins and ends
-n = numbers lines
-v = makes all characters printable (not necessarily readable)

`$ less`

shows content of file screen by screen

`$ less *something.txt`

displays content of all files matching *something.txt BUT alphabetized (not necessarily in the order you'd wish)
-M shows percentage for file position + filename
-I case insensitive
typing q = quits less view

less is identical to more program (less offers more options)
LESS="M"; export LESS

Without the dash to show percentage and filename by default
/'wordtosearch' = skips to next occurence of wordtosearch
? 'wordtosearch' = skips to previous occurrence of wordtosearch

---

MOVE

`$ mv *.{jpg|JPG} 'targetdir'`
move in bulk with extension

---

SIZING

`$ du 'directoryname'`
-s = summarize
ie
`$ du -s *.[^.]`

separate totals for directories and files ignoring current and parent directories
-r = recursive
-h = human readable (in kilobytes, megabytes and gigabytes rather than just in the default kilobytes)

{% highlight bash linenos %}
$ du -s /Library/* | sort -n
$ du -s /Library/* | sort -rn | head
{% endhighlight %}

Will list separate 10 biggest files/directories inside Library (sort by numeric values recursively)

DISK FREE SPACE
`$ df`

-h human readable - precise
-H more human readable -slighly less precise

---

INODES
Block of data chained together

=' You can have available space on your disk but if you have a great number of files and run out of inodes this will be unusable

---
Applescript:
osascript -e | somecommand

Applications/Utilities/Script Editor

---

LOGIN SHELL
chsh

---

VI(M)

---

Mac to Unix

`$ m2u maxfile unixfile`

Unix to Mac

`$u2m unixfile macfile`

for fixing returns

---

