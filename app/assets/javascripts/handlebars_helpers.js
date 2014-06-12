Handlebars.registerHelper('link', function(text, url) {
  var newText = Handlebars.Utils.escapeExpression(text),
      newUrl  = Handlebars.Utils.escapeExpression(url),
      result = '<a href="' + newUrl + '">' + newText + '</a>';

  return new Handlebars.SafeString(result);
});
