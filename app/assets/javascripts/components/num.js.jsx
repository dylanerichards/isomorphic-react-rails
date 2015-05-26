var Num = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  handleClick: function() {
    this.setState ({
      value: Math.floor(Math.random() * 100) + 1
    });
  },

  render: function() {
    return (
      <div className="num" onClick={this.handleClick}>
        { this.state.value }
      </div>
    );
  }
});
