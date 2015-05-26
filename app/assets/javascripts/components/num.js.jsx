
var Num = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  render: function() {
    return (
      <div className="num" onClick={this.handleClick}>
        { this.state.value }
      </div>
    );
  }
});
