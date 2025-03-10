/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {ReactNode} from 'react';

interface DiagramGroupProps {
  children: ReactNode;
}

export function DiagramGroup({children}: DiagramGroupProps) {
  return (
    <div className="flex flex-col sm:flex-row px-6 py-2 sm:p-0 sm:space-y-0 justify-center items-start">
      {children}
    </div>
  );
}

export default DiagramGroup;
