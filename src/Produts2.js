import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { list, reset } from './actions/list';
//  import { success } from './actions';

class ProductsList2 extends Component {
  componentDidMount() {
    // this.props.list();
  }


  render() {
      console.log(this.props.items)
    return <div>
      <h1>List</h1>

      {/* {this.props.loading && <div className="alert alert-info">Loading...</div>}
      {this.props.deletedItem && <div className="alert alert-success">{this.props.deletedItem['@id']} deleted.</div>}
      {this.props.error && <div className="alert alert-danger">{this.props.error}</div>} */}

      <div className="table-responsive">
          <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Username 2</th>
              <th>First Name 2</th>
              <th>Last Name 2</th>
            </tr>
          </thead>
          <tbody>
          {this.props.items && this.props.items.map(item =>
            <tr>
              <td>{item.username}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.list.items.data,
    // error: state.foo.list.error,
    // loading: state.foo.list.loading,
    // deletedItem: state.foo.del.deleted,
  };
};



export default connect(mapStateToProps)(ProductsList2);