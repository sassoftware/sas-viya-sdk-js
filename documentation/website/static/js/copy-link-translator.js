import { html, render } from 'https://unpkg.com/lit-html@1/lit-html.js';

const objectNamePattern = /(?:\?|&)objectName=([^&\s]+)/;

const patterns = [
  value => {
    const match = value.match(/(https?:\/\/[^/]+).*(?:\?|&)uri=%2Freports%2Freports%2F([^&\s]+)[^/]*/);
    return match && { url: match[1], reportUid: match[2] };
  },
  value => {
    const match = value.match(/(https?:\/\/[^/]+).*(?:\?|&)reportUri=%2Freports%2Freports%2F([^&\s]+)[^/]*/);
    return match && { url: match[1], reportUid: match[2] };
  }
];

export function parseCopyLink(copyLink) {
  let objectName = undefined;
  {
    const matchResult = copyLink.match(objectNamePattern);
    if (matchResult) {
      objectName = matchResult[1];
    }
  }
  for (const pattern of patterns) {
    const matchResult = pattern(copyLink);
    if (matchResult) {
      return { ...matchResult, objectName };
    }
  }
  return null;
}

const AttributeTemplate = ({ name, value }) =>
  html`<span class="hljs-attr">${name}</span>=<span class="hljs-string">"${value}"</span>`;

const CustomElementWrapperTemplate = ({ tagName, attributes }) =>
  html`<span class="hljs-tag">&lt;<span class="hljs-name">${tagName}</span>
${attributes.map((attr) => html`  ${AttributeTemplate(attr)}\n`)}&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">${tagName}</span>&gt;</span>`;

export const CodeContentTemplate = ({
  tagName, /* sas-report or sas-report-object */
  url,
  reportUid,
  objectName = null,
}) => {
  const attributes = [
    { name: 'authenticationType', value: 'guest' },
    { name: 'url', value: url },
    { name: 'reportUri', value: `/reports/reports/${reportUid}` },
  ];
  if (objectName) attributes.push({ name: 'objectName', value: objectName });
  return CustomElementWrapperTemplate({ tagName, attributes })
};

/**
 * $input := an element with an 'input' event (like <textarea> or <input>).
 * $output := an element that displays a `value` property.
 */
export function setup({ $input, $output }) {
  function setOutput(copyLinkMatch) {
    let tagName = null;
    if (copyLinkMatch) {
      tagName = copyLinkMatch.objectName ? 'sas-report-object' : 'sas-report';
    }

    if (tagName === null) {
      $output.setAttribute('data-hide', true);
    } else {
      $output.setAttribute('data-hide', false);
      render(CodeContentTemplate({ ...copyLinkMatch, tagName, }), $output);
    }
  }

  // set initial text on mount
  setOutput(parseCopyLink($input.value));

  function onInput(event) {
    const match = parseCopyLink(event.srcElement.value);
    setOutput(match);
  }

  $input.addEventListener('input', onInput);
  return {
    teardown() {
      $input.removeEventListener('input', onInput);
      $output.setAttribute('data-hide', true);
    }
  };
}

// register on module import if we can find one instance of our widget
{
  const $input = document.querySelector('#vdk-slt-input'),
    $output = document.querySelector('#vdk-slt-output');

  if ($input && $output) {
    setup({ $input, $output });
  }
}