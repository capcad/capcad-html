import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {AddIdea} from '../components/AddIdea.js';
import {Idea} from '../components/Idea.js';
import {EventListItem} from '../components/EventListItem.js';
import {EventList} from '../components/EventList.js';

storiesOf('Add idea input', module)
.add('with initial value', () => <AddIdea handleSubmit={action('handleSubmit')} initialValue="Initial value" placeHolder="a great idea"/>)
.add('without initial value', () => <AddIdea handleSubmit={action('handleSubmit')} placeHolder="some greate gift idea"/>);

const addIdeaEvent = {
  text: "look ! a great new gift idea",
  by:"me",
  date: new Date('2016-09-13 15:00')
};
storiesOf('Events list item', module)
.add('with locale and now set', () => <EventListItem event={addIdeaEvent} now={new Date('2016-09-14')} locale='fr_FR'/>)
.add('without locale and now set', () => <EventListItem event={addIdeaEvent}/>)
;

const events = [addIdeaEvent,addIdeaEvent];
storiesOf('Events list', module)
.add('with events', () => <EventList
  events={events}
  handleLoadPreviousEvents={action('loadPreviousEvents') }
  handleLoadNextEvents={action('loadNextEvents') }
  />)
.add('without events', () => <EventList events={[]}/>)
.add('without previous events', () => <EventList
  events={[ addIdeaEvent, addIdeaEvent ]}
  handleLoadNextEvents={action('loadNextEvents') }
  />)
;

const idea = {
  entry: "my idea"
}
storiesOf(`Idea`, module)
.add(`success`, () => <Idea idea={idea} loading={false} loadIdea={action('loadIdea')} params={{id:'id'}}/>)
.add(`loading`, () => <Idea idea={idea} loading={true} loadIdea={action('loadIdea')} params={{id:'id'}}/>)
.add(`error`, () => <Idea idea={idea} error="error message" loadIdea={action('loadIdea')} params={{id:'id'}}/>)
;
