'use client';

import React, { useState } from 'react';

type Props = {}

export function Nav() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  }

  return (
    <nav>
      <button onClick={handleClick}>Click me</button>
      {!!expanded && 'Hello world'}
    </nav>
  )
}