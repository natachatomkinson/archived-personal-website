---
layout: post
title: Basic Unix on Mac OS
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

BASIC COMMANDS
                                  
{% highlight bash linenos %}

pwd - Print Working Directory
man - Manual
less - Long Text File
grep - pattern filename
cp - copy
mv - move
top - Running Applications and Processes
ls -l - List files and directories
open - open file or program with default application

{% endhighlight %}


Exception in order of arguments

{% highlight bash %}

sort -o 'sortedfilename' -n 'sortmefilename'

{% endhighlight %}

Paste escaped text by using ^ + meta + V
What does meta + shift + v do?

---

Applescript:
osascript -e | somecommand

Applications/Utilities/Script Editor

investigate

---

SHORTCUTS

CTRL + U = Wholeline delete
CTRL + S / CTRL + Q = pause/resume printing of a program executing

---

LOGIN SHELL
chsh

---

ALIASING

ls=/bin/ls -af
rm= rm - i
mv = mv -i
cp = cp -i

-i interactive adds prompt when deleting / overwriting

{% highlight bash linenos %}
$ alias -' get all aliases
{% endhighlight %}

---

LIST INFORMATION

{% highlight bash linenos %}
$ ls
{% endhighlight %}

-C sorted down
-x sorted across
-F (appends '/' to directories)
-d shows info about a directory and not its contents
-l more info
-a list all files (including hidden files)
-R recursive

---

PERMISSIONS

d             | rwx                             | r - x | ---
directory | Read Write eXecute  | read nowrite execute | nothing allowed
owner's permissions    group permissions     | other users

-
plain file  | ...

---

CHANGING

{% highlight bash linenos %}
$ chmod
{% endhighlight %}

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

{% highlight bash linenos %}
$ chgrp
{% endhighlight %}

ie change group

{% highlight bash linenos %}
$ chown
{% endhighlight %}

ie change owner
only available for sudo
{% highlight bash linenos %}
$ sudo chown 'owner' 'targetowned'
{% endhighlight %}

FIND

{% highlight bash linenos %}
$ sudo find | -name 'stufftolookfor' -print
{% endhighlight %}

sudo to avoid read permission issues

---

DISPLAY

{% highlight bash linenos %}
$ cat
{% endhighlight %}

ie concatenate
streams content of a file till its end
hard to tell when a file begins and ends
-n = numbers lines
-v = makes all characters printable (not necessarily readable)

{% highlight bash linenos %}
$ less
{% endhighlight %}

shows content of file screen by screen

{% highlight bash linenos %}
$ less *something.txt
{% endhighlight %}

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

{% highlight bash linenos %}

$ mv *.{jpg|JPG} 'targetdir'

{% endhighlight %}

move in bulk with extension

---

SIZING

du 'directoryname'
-s = summarize
ie 
{% highlight bash linenos %}
$ du -s *.[^.]
{% endhighlight %}

separate totals for directories and files ignoring current and parent directories
-r = recursive
-h = human readable (in kilobytes, megabytes and gigabytes rather than just in the default kilobytes)

{% highlight bash linenos %}
$ du -s /Library/* | sort -n
$ du -s /Library/* | sort -rn | head
{% endhighlight %}

Will list separate 10 biggest files/directories inside Library (sort by numeric values recursively)

DISK FREE SPACE
{% highlight bash linenos %}
$ df
{% endhighlight %}

-h human readable - precise
-H more human readable -slighly less precise

---

NB

A directory is just another kind of file

INODES
Block of data chained together

=' You can have available space on your disk but if you have a great number of files and run out of inodes this will be unusable
