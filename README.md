# Processed
## How can we make data visualizations for scientists better?
* scientists struggle w/data management & designing visualizations
* clearer, more consistent figures in science articles
* maintaining good datasets for easy reuse
* adding context and metadata to autogenerate data reports

## Design
* combine input that encourages best practices for data management as well as better outputs than MS Excel default options
* preserve data and metadata info when generating images

## Tools used
* d3.js, Raw, KnitR

## Steps
1. Easy upload *.csv file
2. Automatic parsing
3. Prompt for names of variables as well as types
  * continuous or categorical
  * independent or dependent
  * unit of measurement
4. Add additional dataset information (author, date, etc)
5. Select type of graph: line, bar, scatter
6. Drag variables to x, y, or color
7. Output to image file and/or print report


##Usage
The easiest way to use RAW is by accessing the most updated version on the **[official app page](http://app.raw.densitydesign.org)**. However, RAW can also run locally on your machine: see the installation instructions below to know how.

##Installation
If you want to run your instance of RAW locally on your machine, be sure you have the following requirements installed.

###Requirements

- [git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
- [Bower](http://bower.io/#installing-bower)

###Instructions

Clone RAW from the command line:

``` sh
$ git clone https://github.com/angelagu/processed
```

browse to PROCESSED root folder:

``` sh
$ cd processed
```

install client-side dependencies:

``` sh
$ bower install
```
  
You can now run PROCESSED from your local web server. For example, you can run Python's built-in server:

``` sh
$ python -m SimpleHTTPServer 4000
```

or for Python 3+

``` sh
$ python -m http.server 4000
```

Once this is running, go to [http://localhost:4000/](http://localhost:4000/).

Troubles with the installation? Maybe a look at the [issues](https://github.com/densitydesign/raw/issues) page can solve your problem, otherwise join the [Google group](https://groups.google.com/forum/#!forum/densitydesign-raw).


## RAW DOCUMENTATION

##Documentation and Support

Documentation and FAQs about how to use RAW can be found on the [wiki](https://github.com/densitydesign/raw/wiki/).

##Charts

Information about the available charts can be found [here](https://github.com/densitydesign/raw/wiki/Available-Charts). Adding new charts is very easy in RAW, see how [here](https://github.com/densitydesign/raw/wiki/Adding-New-Charts)!

If you have any suggestion or request about new layouts to include, please let us know! If you have already created new charts and you would like to see them included into Raw, please send us a [pull request](https://github.com/densitydesign/raw/pulls).

##Libraries

**RAW** has been developed using a lot of cool stuff found out there:

[angular.js](https://github.com/angular/angular.js)  
[angular-bootstrap-colorpicker](https://github.com/buberdds/angular-bootstrap-colorpicker)  
[angular-ui](https://github.com/angular-ui)  
[bootstrap](https://github.com/twbs/bootstrap)  
[bootstrap-colorpicker](http://www.eyecon.ro/bootstrap-colorpicker/)  
[Bower](https://github.com/bower/bower)  
[canvas-toBlob.js](https://github.com/eligrey/canvas-toBlob.js)  
[CodeMirror](https://github.com/marijnh/codemirror)  
[d3.js](https://github.com/mbostock/d3)  
[FileSaver.js](https://github.com/eligrey/FileSaver.js)  
[jQuery](https://github.com/jquery/jquery)  
[jQuery UI Touch Punch](https://github.com/furf/jquery-ui-touch-punch/)  
[ZeroClipboard](https://github.com/zeroclipboard/zeroclipboard)

##Roadmap

- ~~Refactoring using [reusable charts](http://bost.ocks.org/mike/chart/) as layouts~~
- ~~Introducing continuous color scales (for numeric values)~~
- ~~Mobile support~~
- Improving documentation and API Reference
- Creating and exporting legends
- PDF export

##Team and Contacts

**RAW** has been developed and maintained at DensityDesign Research Lab by:
 
Giorgio Caviglia <giorgio.caviglia@gmail.com>  
Michele Mauri <michele.mauri@polimi.it>  
Giorgio Uboldi <giorgio.uboldi@polimi.it>  
Matteo Azzi <matteo.azzi@polimi.it>  

If you want to know more about RAW, how it works and future developments, please visit the [official website](http://raw.densitydesign.org). For any specific request or comment we suggest you to use Github or the [Google group](https://groups.google.com/forum/#!forum/densitydesign-raw). If none of these worked for you, you can write us at <raw@densitydesign.org>.

##Contributing

Want to contribute to RAW's development? You are more than welcome! Start by forking the repository (the "Fork" button at the top-right corner of this page) and follow the instructions above to clone it and install dependencies. Then you can use Github's issues and pull requests to discuss and share your work.


##License

RAW is provided under the [LGPL (Lesser General Public License)](https://github.com/densitydesign/raw/blob/master/COPYING.LESSER) v.3:

  Copyright (c), 2013-2014 DensityDesign Lab, Giorgio Caviglia, Michele Mauri,
  Giorgio Uboldi, Matteo Azzi
  
  <info@densitydesign.org>  
  <giorgio.caviglia@gmail.com>  
  <michele.mauri@polimi.it>  
  <giorgio.uboldi@polimi.it>  
  <matteo.azzi@polimi.it>  
   
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
   
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU Lesser General Public License for more details.
   
  You should have received a copy of the GNU Lesser General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
