angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Organizer</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    A place tp keep track of important links. (Google provided by default.)\n" +
    "  </p>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"form-group\">	\n" +
    "	<label for=\"search-box\">Search:</label>\n" +
    "	<input id='search-box' type=\"text\" data-ng-model=\"filterText\" class=\"form-control\" placeholder=\"Search\">\n" +
    "</div>\n" +
    "\n" +
    "<ul class=\"list-group\">\n" +
    "  <li class=\"list-group-item entry-list-item\" data-ng-repeat=\"entry in entries | filter:filterText | orderBy:'entryLabel'\">  	\n" +
    "  		{{entry.entryLabel}} \n" +
    "  		<a class='list-edit' href=\"\" data-ng-click=\"editEntry(entry.entryId)\">Edit </a>\n" +
    "  		<a class='list-delete'href=\"\" data-ng-click=\"removeEntry(entry.entryId)\">Delete </a>\n" +
    "  </li>\n" +
    " \n" +
    "</ul>\n" +
    "\n" +
    "<form>\n" +
    "	<input type=\"hidden\" data-ng-model=\"entry.entryId\" />\n" +
    "	<div class=\"form-group\">\n" +
    "		<label for=\"entry-label\">Entry Label:</label>\n" +
    "   		<input type=\"text\" data-ng-model=\"entry.entryLabel\" class=\"form-control\" id=\"entry-label\" aria-describedby=\"entry-label-help\" placeholder=\"Enter Label (required)\">\n" +
    "    	<small id=\"entry-label-help\" class=\"form-text text-muted\">Something recognizable so you dont see a list of 25 stack overflow urls.</small>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<label for=\"entry-link\">Entry Link:</label>\n" +
    "   		<input type=\"text\" data-ng-model=\"entry.entryLink\" class=\"form-control\" id=\"entry-link\" aria-describedby=\"entry-link-help\" placeholder=\"Enter URL (required)\">\n" +
    "    	<small id=\"entry-link-help\" class=\"form-text text-muted\">The url for the resource.</small>\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<label for=\"entry-keywords\">Entry Keywords</label>\n" +
    "   		<input type=\"text\" data-ng-model=\"entry.entryKeywords\" class=\"form-control\" id=\"entry-keywords\" aria-describedby=\"entry-keywords-help\" placeholder=\"Keywords\">\n" +
    "    	<small id=\"entry-keywords-help\" class=\"form-text text-muted\">Put some keywords in and find it easier when you need it.</small>\n" +
    "	</div>\n" +
    "	\n" +
    "	<button ng-class=\"validateForm() ? ' ' : 'disabled'\" class=\"btn btn-primary \" data-ng-click=\"addEntry()\">Add Entry</button>\n" +
    "	<button class=\"btn btn-danger\" data-ng-click=\"clear()\">Clear</button>\n" +
    "</form>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
