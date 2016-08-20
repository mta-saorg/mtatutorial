var currentExecutor = null;

// Define Lua functions
var Module = {
  print: function(output) {
    if (!currentExecutor) {
      console.log(output);
      return;
    }

    var outputPre = $(currentExecutor).find('pre.output');
    outputPre.html(outputPre.html() + output + '\n');
  }
};


// Add execute buttons (and its actions)
$(document).ready(function() {
  $('.lua').each(function(i, element) {
    // Only add executor functionality if flagged
    if ($(element).html().substr(0, 12) !== '~EXECUTABLE~') {
      return;
    }

    // Remove executable flag
    $(element).html($(element).html().substr(13));
    
    // Add header
    var codeBox = $(element).parent();
    $(codeBox).prepend('<div class="executorHeader"></div>');
    var header = $(codeBox).find('.executorHeader');

    // Store code before it's highlighted
    $(codeBox).find('code').data('code', $(codeBox).find('code').html());

    // Add controls
    $(header).append('<span class="glyphicon glyphicon-play"></span>');

    var runButton = $(header).find('span');

    runButton.click(function() {
      var input = $(codeBox).find('code');
      currentExecutor = codeBox;

      if ($(currentExecutor).children('pre.executorOutput').length == 0) {
        $(currentExecutor).append('<pre class="executorOutput"></pre>');
      }
      var outputPre = $(currentExecutor).find('pre.executorOutput');
      outputPre.html('');

      try {
        console.log(input.data('code'));
        L.execute(input.data('code'));
      }
      catch (e) {
        outputPre.html(e.toString());
      }
    });
  });
});
