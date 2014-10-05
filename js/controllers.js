'use strict';

/* Controllers */

angular.module('raw.controllers', [])

  .controller('RawCtrl', function ($scope, dataService) {

    $scope.metadata_test = {};
    $scope.metadata = {}

    // $scope.updateMetadata = function(metadata) {
    //   $scope.metadata = metadata;
    // };

    $scope.update = function() {
      console.log($scope.metadata);
      $scope.metadata_test = angular.copy($scope.metadata.firstName);
    }

    $scope.download = function() {
      var content = "<meta "
      + "\n"
      + "\t" + '"firstName"=' + '"' + $scope.metadata.firstName + '"' + "\n"
      + "\t" + '"lastName"=' + '"' + $scope.metadata.lastName + '"' + "\n"
      + "\t" + '"title"=' + '"' + $scope.metadata.graphTitle + '"' + "\n"
      + "\t" + '"date"=' + '"' + $scope.metadata.date + '"' + "\n"
      + "\t" + '"location"=' + '"' + $scope.metadata.loc + '"' + "\n"
      + "\t" + '"overview"=' + '"' + $scope.metadata.overview + '"' + "\n"
      + "\t" + '"purpose"=' + '"' + $scope.metadata.purpose + '"' + " "
      + "/>";

      var hiddenElement = document.createElement('a');

      hiddenElement.href = 'data:attachment/html,' + encodeURI(content);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'metadata.html';
      hiddenElement.click();
    }

    $scope.samples = [
      { title : 'Cars (multivariate)', url : 'data/multivariate.csv' },
      { title : 'Movies (dispersions)', url : 'data/dispersions.csv' },
      { title : 'Music (flows)', url : 'data/flows.csv' },
      { title : 'Cocktails (correlations)', url : 'data/correlations.csv' }
    ];

    $scope.$watch('sample', function (sample){
      if (!sample) return;
      dataService.loadSample(sample.url).then(
        function(data){
          $scope.text = data;
        }, 
        function(error){
          $scope.error = error;
        }
      );
    });

    // init
    $scope.raw = raw;
    $scope.data = [];
    $scope.metadata = [];
    $scope.error = false;
    $scope.loading = true;
    $scope.titles = $('#header-fields');
    $scope.metaDataOptions = $('#column-meta-data-options')

    $scope.categories = ['Correlations', 'Distributions', 'Time Series', 'Hierarchies', 'Others'];

    $scope.parse = function(text){

      if ($scope.model) $scope.model.clear();

      $scope.data = [];
      $scope.metadata = [];
      $scope.error = false;
      $scope.$apply();

      try {
        var parser = raw.parser();
        $scope.data = parser(text);
        $scope.metadata = parser.metadata(text);
        $scope.error = false;
      } catch(e){
        $scope.data = [];
        $scope.metadata = [];
        $scope.error = e.name == "ParseError" ? +e.message : false;
      }
      if (!$scope.data.length && $scope.model) $scope.model.clear();
      $scope.loading = false;

      var num_of_items = $scope.metadata.length;
      var text_width = 161;
      var last_width = $scope.titles.width() - text_width * (num_of_items - 1);

      for (var i = 0; i < num_of_items; i++) {
        if ((num_of_items - i) == 1) {
          $scope.titles.append("<input type='text' ng-model='column" + i + "' id='header-" + i + "' style='width:" + last_width + "px;border:1px solid #ccc;margin-bottom:5px;' placeholder='Column label'>");
          $scope.metaDataOptions.append("<div style='display:inline-block;width:" + last_width + "px;'><select style='width:100%;'><option>Independent</option><option>Dependent</option></select>\
            <select style='width:100%;'><option value='' disabled selected>Select your option</option><option>Continuous</option><option>Categorical</option></select><div>");
        } else {
          $scope.titles.append("<input type='text' ng-model='column" + i + "' id='header-" + i + "' style='width:" + text_width + "px;border:1px solid #ccc;margin-bottom:5px;' placeholder='Column label'>");
          $scope.metaDataOptions.append("<div style='display:inline-block;width:" + text_width + "px;'><select style='width:100%;'><option>Independent</option><option>Dependent</option></select>\
            <select style='width:100%;'><option value='' disabled selected>Select your option</option><option>Continuous</option><option>Categorical</option></select><div>");
        }
        angular.element('#triggertable').trigger('click');
      }
    }

  $scope.clickOnUpload = function () {
  $timeout(function() {
    angular.element('#myselector').trigger('click');
  }, 100);
};

    $scope.delayParse = dataService.debounce($scope.parse, 500, false);

    $scope.$watch("text", function (text){
      $scope.loading = true;
      $scope.delayParse(text);
    });

    $scope.charts = raw.charts.values().sort(function (a,b){ return a.title() < b.title() ? -1 : a.title() > b.title() ? 1 : 0; });
    $scope.chart = $scope.charts[0];
    $scope.model = $scope.chart ? $scope.chart.model() : null;

    $scope.$watch('error', function (error){
      if (!$('.CodeMirror')[0]) return;
      var cm = $('.CodeMirror')[0].CodeMirror;
      if (!error) {
        cm.removeLineClass($scope.lastError,'wrap','line-error');
        return;
      }
      cm.addLineClass(error, 'wrap', 'line-error');
      cm.scrollIntoView(error);
      $scope.lastError = error;

    })

    $('body').mousedown(function (e,ui){
      if ($(e.target).hasClass("dimension-info-toggle")) return;
      $('.dimensions-wrapper').each(function (e){
        angular.element(this).scope().open = false;
        angular.element(this).scope().$apply();
      })
    })

    $scope.codeMirrorOptions = {
      lineNumbers : true,
      lineWrapping : true,
      placeholder : 'Paste your text or drop a file here '
    }

    $scope.selectChart = function(chart){
      if (chart == $scope.chart) return;
      $scope.model.clear();
      $scope.chart = chart;
      $scope.model = $scope.chart.model();
    }

    function refreshScroll(){
      $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
      });
    }

    $(window).scroll(function(){

      // check for mobile
      if ($(window).width() < 760 || $('#mapping').height() < 300) return;

      var scrollTop = $(window).scrollTop() + 0,
          mappingTop = $('#mapping').offset().top + 10,
          mappingHeight = $('#mapping').height(),
          isBetween = scrollTop > mappingTop + 50 && scrollTop <= mappingTop + mappingHeight - $(".sticky").height() - 20,
          isOver = scrollTop > mappingTop + mappingHeight - $(".sticky").height() - 20,
          mappingWidth = mappingWidth ? mappingWidth : $('.col-lg-9').width();
     
      if (mappingHeight-$('.dimensions-list').height() > 90) return;
      //console.log(mappingHeight-$('.dimensions-list').height())
      if (isBetween) {
        $(".sticky")
          .css("position","fixed")
          .css("width", mappingWidth+"px")
          .css("top","20px")
      } 

     if(isOver) {
        $(".sticky")
          .css("position","fixed")
          .css("width", mappingWidth+"px")
          .css("top", (mappingHeight - $(".sticky").height() + 0 - scrollTop+mappingTop) + "px");
          return;
      }

      if (isBetween) return;

      $(".sticky")
        .css("position","relative")
        .css("top","")
        .css("width", "");

    })

    $(document).ready(refreshScroll);


  })