var Search = ({videoSearched}) => {
  let keyStrokeCounter = 0;
  let debounceTimeout = null;

  const onButtonClick = function() {
    const searchTerm = $('.form-control').val();
    searchTerm.length > 0 ? videoSearched($('.form-control').val()) : void 0;
  };

  const onKeyStroke = function(event) {
    if (event.key === 'Enter') {
      onButtonClick();
      keyStrokeCounter = 0;
    }

    if (keyStrokeCounter === 4) {
      onButtonClick();
      keyStrokeCounter = 0;
    }

    keyStrokeCounter += 1;

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(() => {
        onButtonClick();
      }, 1000);
    } else {
      debounceTimeout = setTimeout(() => {
        onButtonClick();
      }, 1000);
    }
  }

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyPress={onKeyStroke.bind(this)}/>
      <button className="btn hidden-sm-down" onClick={onButtonClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default Search;
