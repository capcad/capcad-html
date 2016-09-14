import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

const Idea = React.createClass({
	render() {
		return (
      <div className="Idea">
        <h1> {this.props.idea.entry} </h1>
      </div>
		);
	}
});

Idea.propTypes = {
  // name:PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  // TODO: tests this (refer to how to test container compoenents)
  return {
    idea: state.get('ideaList').filter((ideaListItem) => ideaListItem.get('id') === props.params.id).first().toJS()
  }
}

export {Idea};
export const IdeaContainer = connect(mapStateToProps,actionCreators)(Idea);
export default IdeaContainer;
