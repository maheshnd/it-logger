import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../action/logAction';
import PropTypes from 'prop-types';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs'
              onChange={(e) => searchLogs(e.target.value)}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};
export default connect(null, { searchLogs })(SearchBar);
