// parser.js
import { parse } from 'node-html-parser';
import { getJsonData, saveJsonData } from './utils';

const parser = async (options = {}) => {
  const { url, filename = 'parsedData.json', pretty = false } = options;

  const response = await fetch(url);
  const html = await response.text();
  const root = parse(html);

  const data = [];

  root.querySelectorAll('tr').forEach((tr) => {
    const row = {};
    tr.querySelectorAll('td').forEach((td, index) => {
      row[`column${index + 1}`] = td.textContent.trim();
    });
    data.push(row);
  });

  await saveJsonData(data, filename, pretty);
};

export default parser;