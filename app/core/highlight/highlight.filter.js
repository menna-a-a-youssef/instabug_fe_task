angular.module('core').filter('highlight', function ($sce, $location) {
  return function (text) { // , filterValue) {
    if (text == null) {
      return null;
    }
    let filterValue = $location.search().filter;
    text = text.replace(new RegExp(filterValue, 'i'), highlight);
    return $sce.trustAsHtml(text.replace(/\/@/gi, '/'));
  };
  function highlight(str) {
    return '<span class="f-text">' + str + '</span>';
  }
});
