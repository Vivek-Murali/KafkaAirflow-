const camel = input => input.replace(/[-_][a-z\u00E0-\u00F6\u00F8-\u00FE]/g, match => match.slice(1).toUpperCase());

export { camel };
