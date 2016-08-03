import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List, Map} from 'immutable';
import {AddIdea} from '../../src/components/AddIdea';
import {expect} from 'chai';
import sinon from 'sinon';

describe('AddIdea', () => {

  it('invokes the callback when submit button is clicked', () => {
    let addIdeaSpy = sinon.spy();
    const component = renderIntoDocument(<AddIdea addIdea={addIdeaSpy}/>);
    Simulate.click(ReactDOM.findDOMNode(component.refs.addIdea));
    expect(addIdeaSpy.called).to.equal(true);
  });

  it("has focus when when props.focus is set");
  it("is cleared when the submit button is clicked");
});