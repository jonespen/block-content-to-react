module.exports = {
  input: [
    {
      _type: 'block',
      _key: 'a',
      markDefs: [],
      style: 'normal',
      children: [{_type: 'span', marks: [], text: 'Span'}]
    },
    {
      _type: 'block',
      _key: 'b',
      markDefs: [],
      level: 1,
      children: [{_type: 'span', marks: [], text: 'Item 1, level 1'}],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'c',
      markDefs: [],
      level: 1,
      children: [{_type: 'span', marks: [], text: 'Item 2, level 1'}],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'd',
      markDefs: [],
      level: 2,
      children: [{_type: 'span', marks: [], text: 'Item 3, level 2'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'e',
      markDefs: [],
      level: 3,
      children: [{_type: 'span', marks: [], text: 'Item 4, level 3'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'f',
      markDefs: [],
      level: 2,
      children: [{_type: 'span', marks: [], text: 'Item 5, level 2'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'g',
      markDefs: [],
      level: 2,
      children: [{_type: 'span', marks: [], text: 'Item 6, level 2'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'h',
      markDefs: [],
      level: 1,
      children: [{_type: 'span', marks: [], text: 'Item 7, level 1'}],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'i',
      markDefs: [],
      level: 1,
      children: [{_type: 'span', marks: [], text: 'Item 8, level 1'}],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'j',
      markDefs: [],
      level: 1,
      children: [{_type: 'span', marks: [], text: 'Item 1 of list 2'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'k',
      markDefs: [],
      level: 1,
      children: [{_type: 'span', marks: [], text: 'Item 2 of list 2'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'l',
      markDefs: [],
      level: 2,
      children: [{_type: 'span', marks: [], text: 'Item 3 of list 2, level 2'}],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'm',
      markDefs: [],
      style: 'normal',
      children: [{_type: 'span', marks: [], text: 'Just a block'}]
    }
  ],
  output: [
    '<div>',
    '<p>Span</p>',
    '<ul>',
    '<li>Item 1, level 1</li>',
    '<li>',
    'Item 2, level 1',
    '<ol>',
    '<li>',
    'Item 3, level 2',
    '<ol>',
    '<li>Item 4, level 3</li>',
    '</ol>',
    '</li>',
    '<li>Item 5, level 2</li>',
    '<li>Item 6, level 2</li>',
    '</ol>',
    '</li>',
    '<li>Item 7, level 1</li>',
    '<li>Item 8, level 1</li>',
    '</ul>',
    '<ol>',
    '<li>Item 1 of list 2</li>',
    '<li>',
    'Item 2 of list 2',
    '<ol>',
    '<li>Item 3 of list 2, level 2</li>',
    '</ol>',
    '</li>',
    '</ol>',
    '<p>Just a block</p>',
    '</div>'
  ].join('')
}
