import { html } from 'lit';
import '../src/my-new-card.js';

export default {
  title: 'MyNewCard',
  component: 'my-new-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-new-card
      style="--my-new-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-new-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
