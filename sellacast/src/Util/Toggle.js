import React,{Component} from 'react';

class Toggle extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }
  render () {
    return (
      <label className="switch">
        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
        <div className="slider"></div>
      </label>
    );
  }
}  
export default Toggle;