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
