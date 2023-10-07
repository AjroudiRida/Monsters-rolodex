import { Component } from "react";
import './search-box.styles.css'
class Searchbox extends Component {
  render() {
    return (
      <div className="search-box-container">
        <input
          type="search"
          name="search"
          placeholder= {this.props.placeholder}
          onChange={this.props.onChangeHandler}
          className={`search-box ${this.props.className}`}
        />
      </div>
    );
  }
}

export default Searchbox