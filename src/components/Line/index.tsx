/* 3rd party imports */
import React, { FunctionComponent } from 'react';

interface Props {
	height?: number;
	color?: string;
}

const Line: FunctionComponent<Props> = ({ height = 1, color = '#777' }) => (
	<div style={{ height: height + 'px', backgroundColor: color }}/>
)

export default Line;