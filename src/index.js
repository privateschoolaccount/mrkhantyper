import { define, html } from 'hybrids';

// Enable HMR only in development mode
if (import.meta.hot) import.meta.hot.accept();

function increaseCount(host) {
  host.count += 1;
}

define({
  tag: 'simple-counter',
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
});
