'use client';
import React, { useState } from 'react';
import { GRIDS } from './constants';

export default function Home() {
  const [currentGrid, setCurrentGrid] = useState(GRIDS[0]);

  // Render the current grid statically without transitions
  const Grid = currentGrid.Component;

  return <Grid setCurrentGrid={setCurrentGrid} />;
}
