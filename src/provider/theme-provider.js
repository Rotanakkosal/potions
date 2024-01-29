"use client"

import React from 'react';
const NextThemesProvider = require('next-themes').ThemeProvider;

const ThemeProvider = ({ children, ...props }) => {
  return React.createElement(NextThemesProvider, props, children);
};

export default ThemeProvider

